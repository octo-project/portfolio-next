"use client";

import { useParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";
import { getProjectBySlug } from "@/data/projects";
import TechnoChip from "@/components/TechnoChip";

type TabType = "about" | "screenshoot" | "performance";

export default function ProjectDetailPage() {
  const params = useParams();
  const t = useTranslations();
  const slug = params.name as string;
  const project = getProjectBySlug(slug);
  const [tab, setTab] = useState<TabType>("about");
  const [modalImage, setModalImage] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const openModal = useCallback((image: string) => {
    setModalImage(image);
    setTimeout(() => modalRef.current?.scrollTo({ top: 0 }), 0);
  }, []);

  const moveImage = useCallback(
    (direction: "left" | "right") => {
      if (!modalImage || !project) return;
      const idx = project.screenShoots.findIndex((s) => s.image === modalImage);
      const max = project.screenShoots.length - 1;
      const next = direction === "right" ? idx + 1 : idx - 1;
      const corrected = next < 0 ? max : next > max ? 0 : next;
      setModalImage(project.screenShoots[corrected].image);
      setTimeout(() => modalRef.current?.scrollTo({ top: 0 }), 0);
    },
    [modalImage, project]
  );

  useEffect(() => {
    if (!modalImage) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setModalImage(null);
      if (e.key === "ArrowLeft") moveImage("left");
      if (e.key === "ArrowRight") moveImage("right");
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [modalImage, moveImage]);

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh] px-6">
        <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-black/5 text-center">
          <h2 className="text-xl font-bold text-text">{t("projectNotFoundTitle")}</h2>
          <p className="mt-2 text-sm text-text-muted max-w-md">{t("projectNotFoundDescription")}</p>
          <Link href="/projects" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary no-underline hover:underline">
            ← {t("projects")}
          </Link>
        </div>
      </div>
    );
  }

  const tabs: { key: TabType; label: string; show: boolean }[] = [
    { key: "about", label: t("about"), show: true },
    { key: "screenshoot", label: t("screenshoot"), show: true },
    { key: "performance", label: t("Performance"), show: !!project.withPerformance },
  ];

  return (
    <div className="px-6 py-8 lg:px-10">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm mb-6 animate-fade-in">
        <Link href="/projects" className="text-text-muted no-underline hover:text-primary transition-colors font-medium">
          {t("projects")}
        </Link>
        <svg className="h-4 w-4 text-text-muted/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>
        <div className="flex items-center gap-2">
          <Image
            src={project.logo}
            alt={project.name}
            width={24}
            height={24}
            className="rounded object-contain"
          />
          <span className="font-semibold text-text">{project.name}</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="inline-flex rounded-xl bg-surface-alt p-1 mb-6 animate-slide-up">
        {tabs.filter((t) => t.show).map((item) => (
          <button
            key={item.key}
            onClick={() => setTab(item.key)}
            className={`rounded-lg px-5 py-2 text-sm font-medium cursor-pointer transition-all duration-200 ${
              tab === item.key
                ? "bg-white text-text shadow-sm"
                : "text-text-muted hover:text-text"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* About tab */}
      {tab === "about" && (
        <div className="space-y-5 animate-fade-in">
          {/* Description */}
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-3">
              {t("whatItDoes")}
            </h3>
            <p className="text-sm leading-relaxed text-text text-justify">
              {t(project.about.description)}
            </p>
            {project.about.demoUrl && (
              <a
                href={project.about.demoUrl}
                {...(project.projectType === "desktop" ? { download: true } : { target: "_blank", rel: "noopener noreferrer" })}
                className="mt-4 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-white no-underline shadow-sm transition-all duration-200 hover:brightness-110 hover:shadow-md"
              >
                {project.projectType === "web" && (
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101M10.172 13.828a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                )}
                {project.projectType === "desktop" && (
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                )}
                {project.projectType === "extension" && (
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                )}
                {project.projectType === "mobile" && (
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                )}
                {t(`cta${project.projectType.charAt(0).toUpperCase() + project.projectType.slice(1)}`)}
                <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>

          {/* Technos */}
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-3">
              {t("tech")}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.about.technos.map((tech) => (
                <TechnoChip key={tech} name={tech} />
              ))}
            </div>
          </div>

          {/* Missions */}
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-3">
              {t("missions")}
            </h3>
            <ul className="space-y-2">
              {project.about.missions.map((mission) => (
                <li key={mission} className="flex items-start gap-2 text-sm text-text leading-relaxed">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {t(mission)}
                </li>
              ))}
            </ul>
          </div>

          {/* Functionalities */}
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-3">
              {t("Functionnality")}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.about.functionnalities.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-accent/10 px-3.5 py-1.5 text-sm font-medium text-accent transition-all duration-200 hover:bg-accent/20"
                >
                  {t(item)}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Screenshot tab */}
      {tab === "screenshoot" && (
        <div className="animate-fade-in">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {project.screenShoots.map((item) => (
              <div
                key={item.label}
                className="group cursor-pointer overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:shadow-md hover:ring-primary/20"
                onClick={() => openModal(item.image)}
              >
                <Image
                  src={item.image}
                  alt={item.label}
                  width={400}
                  height={300}
                  className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="px-3 py-2">
                  <span className="text-xs text-text-muted">{item.label}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Modal */}
          {modalImage && (
            <div
              ref={modalRef}
              className="fixed inset-0 z-[1000] flex items-start justify-center overflow-y-auto bg-black/80 pt-16 pb-8 backdrop-blur-sm"
              onClick={(e) => { if (e.target === e.currentTarget) setModalImage(null); }}
            >
              <div className="relative flex items-center max-w-[90vw]">
                <button
                  onClick={() => moveImage("left")}
                  className="absolute -left-14 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 cursor-pointer border-none text-white backdrop-blur-sm transition-all hover:bg-white/20"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <Image
                  src={modalImage}
                  alt="screenshot"
                  width={900}
                  height={700}
                  className={`rounded-xl ${
                    project.screenShootType === "mobile"
                      ? "max-h-[80vh] w-auto"
                      : "max-h-[80vh] max-w-[80vw]"
                  }`}
                />
                <button
                  onClick={() => moveImage("right")}
                  className="absolute -right-14 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 cursor-pointer border-none text-white backdrop-blur-sm transition-all hover:bg-white/20"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <button
                  onClick={() => setModalImage(null)}
                  className="absolute -top-12 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 cursor-pointer border-none text-white backdrop-blur-sm transition-all hover:bg-white/20"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Performance tab */}
      {tab === "performance" && (
        <div className="animate-fade-in">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
            <h3 className="text-lg font-bold text-text mb-2">Performance</h3>
            <p className="text-sm text-text-muted">
              {t("performanceText")}
              <a
                href="https://pagespeed.web.dev/analysis/https-mathieu-portf-netlify-app/pxzqs6fgbi?form_factor=desktop"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 font-medium text-primary hover:underline"
              >
                {t("performanceLink")}
              </a>
            </p>
            <div className="flex flex-wrap gap-8 mt-8 justify-center">
              <MetricCircle label="Performance" percentage={98} />
              <MetricCircle label="Accessibility" percentage={93} />
              <MetricCircle label="Best Practices" percentage={100} />
              <MetricCircle label="SEO" percentage={100} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function MetricCircle({
  label,
  percentage,
}: {
  label: string;
  percentage: number;
}) {
  const color = percentage >= 90 ? "#00CB63" : percentage >= 50 ? "#FFA500" : "#FF4444";
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative">
        <svg className="w-24 h-24 -rotate-90" viewBox="0 0 36 36">
          <circle
            cx="18"
            cy="18"
            r="15.915"
            stroke="#e5e7eb"
            strokeWidth="2.5"
            fill="none"
          />
          <circle
            cx="18"
            cy="18"
            r="15.915"
            stroke={color}
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={`${percentage}, 100`}
          />
        </svg>
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg font-bold text-text">
          {percentage}
        </span>
      </div>
      <span className="text-xs font-medium text-text-muted">{label}</span>
    </div>
  );
}
