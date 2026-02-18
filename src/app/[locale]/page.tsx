"use client";

import { useRef } from "react";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import TechnoChip from "@/components/TechnoChip";

export default function CvPage() {
  const t = useTranslations();
  const locale = useLocale();
  const cvUrl =
    locale === "fr"
      ? "https://drive.google.com/file/d/1XVhbm9T92qH1D3NzC2YqZ_l-74lhXwAD/view?usp=drive_link"
      : "https://drive.google.com/file/d/1n8ylMkNrctG3zb1YZJ-I4DYkCehdx1wO/view?usp=drive_link";
  const parcourRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const qualityRef = useRef<HTMLElement>(null);
  const passionRef = useRef<HTMLElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col">
      {/* Hero Header */}
      <div className="relative bg-gradient-to-br from-slate-50 via-white to-blue-50/40 px-6 pt-8 pb-6 lg:px-10 lg:pt-10 animate-fade-in">
        <div className="flex flex-col md:flex-row items-start gap-6 lg:gap-10">
          <div className="shrink-0 animate-scale-in">
            <div className="overflow-hidden rounded-2xl shadow-lg ring-1 ring-black/5">
              <Image
                src="/images/cv-picture.webp"
                alt="Profile"
                width={260}
                height={260}
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="flex flex-col justify-center gap-4 animate-slide-up delay-100">
            <div>
              <span className="text-sm font-medium uppercase tracking-widest text-primary">{t("me")}</span>
              <h1 className="mt-1 text-3xl font-bold text-text lg:text-4xl">
                TSIALONINA Heriniaina Mathieu
              </h1>
            </div>
            <p className="max-w-lg text-base leading-relaxed text-text-muted">
              {t("cvDescription_1")}
            </p>
            <div className="flex flex-wrap items-center gap-3 animate-slide-up delay-300">
              <div className="flex items-baseline gap-1.5 rounded-full bg-primary/10 px-5 py-2">
                <span className="text-3xl font-bold text-primary">05</span>
                <span className="text-sm font-medium text-primary/80">Ans d&apos;experience</span>
              </div>
              <a
                href={cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-white no-underline shadow-md shadow-primary/20 transition-all duration-200 hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5"
              >
                <svg className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {t("downloadCv")}
              </a>
            </div>
          </div>
        </div>

        {/* Navigation pills */}
        <div className="flex flex-wrap gap-2 mt-8 animate-slide-up delay-300">
          {[
            { label: t("parcour"), ref: parcourRef, icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" },
            { label: t("experience"), ref: experienceRef, icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
            { label: t("quality"), ref: qualityRef, icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
            { label: t("passion"), ref: passionRef, icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
          ].map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.ref)}
              className="flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-medium text-text shadow-sm ring-1 ring-black/5 cursor-pointer transition-all duration-200 hover:shadow-md hover:ring-primary/20 hover:text-primary"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
              </svg>
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col w-full px-6 lg:px-10 py-8 gap-12">
        {/* Parcour académique */}
        <section ref={parcourRef}>
          <SectionTitle>{t("academicCarrer")}</SectionTitle>
          <div className="relative mt-6">
            {/* Timeline line */}
            <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent hidden sm:block" />
            <div className="flex flex-col gap-4 sm:pl-12">
              {[
                { year: "2020 - 2021", degree: "Master en Informatique", school: "\u00e0 L'ISPM", url: "https://ispm-edu.com/index.php" },
                { year: "2017 - 2018", degree: "Licence en Informatique", school: "\u00e0 L'ISPM", url: "https://ispm-edu.com/index.php" },
                { year: "2013 - 2014", degree: "Baccalaur\u00e9at Scientifique", school: "Au Lyc\u00e9e St Michel Itaosy" },
                { year: "2011 - 2012", degree: "CEPE", school: "Au Coll\u00e8ge Sacr\u00e9 coeur Tulear" },
              ].map((item, i) => (
                <div key={item.year} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-12 top-4 hidden sm:flex h-3 w-3 items-center justify-center">
                    <div className="h-3 w-3 rounded-full bg-primary/30 ring-4 ring-white group-hover:bg-primary transition-colors" />
                  </div>
                  <div className={`rounded-xl bg-white p-4 shadow-sm ring-1 ring-black/5 transition-all duration-200 hover:shadow-md hover:ring-primary/10 animate-slide-up`} style={{ animationDelay: `${i * 100}ms` }}>
                    <span className="text-xs font-medium text-primary">{item.year}</span>
                    <h4 className="mt-1 text-base font-semibold text-text">{item.degree}</h4>
                    <p className="mt-0.5 text-sm text-text-muted">
                      {item.url ? (
                        <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors">
                          {item.school}
                        </a>
                      ) : (
                        item.school
                      )}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience */}
        <section ref={experienceRef}>
          <SectionTitle>{t("experienceAndProjects")}</SectionTitle>
          <div className="mt-6 flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-border" />
            <span className="rounded-full bg-text px-4 py-1.5 text-xs font-semibold text-white uppercase tracking-wider">
              {t("professionalProjects")}
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="flex flex-col gap-5">
            <ExperienceCard
              title="Haptic Composer"
              logoSrc="/images/esn/interhaptics.png"
              logoClass="w-10"
              logoUrl="https://www.interhaptics.com/tech/haptic-composer"
              descriptionKey="projectHapticOverview"
              missions={Array.from({ length: 7 }, (_, i) => `projectHapticMission${i + 1}`)}
              extraMissions={["Optimisation des rendu D3"]}
              technos={["React", "Typescript", "AntDesign", "D3", "Electron"]}
            />
            <ExperienceCard
              title="YOOMUM"
              logoSrc="/images/esn/yoomum.png"
              logoClass="w-10 mr-1"
              logoUrl="https://www.yoomum.com/"
              descriptionKey="projectYoomumOverview"
              missions={Array.from({ length: 3 }, (_, i) => `projectYoomumMission${i + 1}`)}
              technos={["Symfony", "ApiPlatforme", "FirebaseAuth", "FirebaseDB", "FirebaseDynamicLinks", "Kotlin"]}
            />
            <ExperienceCard
              title="Markaiter"
              logoSrc="/images/esn/markaiter.png"
              logoClass="w-10 mr-1"
              logoUrl="https://www.markaiter.com/"
              descriptionKey="projectMarketerOverview"
              missions={Array.from({ length: 6 }, (_, i) => `projectMarketerMission${i + 1}`)}
              technos={["Python", "React", "MaterialUi", "GraphQL", "FacebookSDK", "Prisma"]}
            />
            <ExperienceCard
              title="Konsistent"
              logoSrc="/images/esn/konsistent.png"
              logoClass="w-12"
              descriptionKey="projectKonsistentOverview"
              missions={Array.from({ length: 5 }, (_, i) => `projectKonsistentMission${i + 1}`)}
              extraMissions={[
                "supervis\u00e9 la qualit\u00e9 et la coh\u00e9rence du code tout au long du processus de d\u00e9veloppement pour garantir la conformit\u00e9 aux normes de codage, optimiser les performances et assurer une maintenabilit\u00e9 \u00e0 long terme",
              ]}
              technos={["React", "Typescript", "NodeJs", "MaterialUi"]}
            />
            <ExperienceCard
              title="4Mp"
              descriptionKey="project4MpOverview"
              missions={["project4MpSubTitle"]}
              subMissions={["project4MpMission1", "project4MpMission2", "project4MpMission3"]}
              technos={["React", "GraphQL", "ReactNative", "Prisma"]}
            />
            <ExperienceCard
              title="Adom"
              descriptionKey="projectAdomOverview"
              missions={["projectAdmoMission1", "projectAdmoMission2", "projectAdmoMission3"]}
              technos={["Gatsby"]}
            />
            <ExperienceCard
              title="Lappsys"
              logoSrc="/images/esn/neoptim.png"
              logoClass="w-8"
              logoUrl="https://neoptimconsulting.com/"
              descriptionKey="projectLappsysOverview"
              missions={["projectLappsysTitle"]}
              subMissions={Array.from({ length: 7 }, (_, i) => `projectLappsysMission${i + 1}`)}
              technos={["Minio", "React", "GraphQL", "Prisma"]}
            />
            <ExperienceCard
              title="Itts"
              descriptionKey="projectIttsOverview"
              missions={Array.from({ length: 4 }, (_, i) => `projectIttsMission${i + 1}`)}
              technos={["Laravel", "Stripe"]}
            />
            <ExperienceCard
              title="OSAW"
              logoSrc="/images/esn/osaw.png"
              logoClass="w-28"
              descriptionKey="projectOsawOverview"
              missions={Array.from({ length: 7 }, (_, i) => `projectOsawMission${i + 1}`)}
              technos={["React", "Laravel"]}
            />
          </div>

          <div className="mt-8 flex items-center gap-3 mb-6">
            <div className="h-px flex-1 bg-border" />
            <span className="rounded-full bg-accent px-4 py-1.5 text-xs font-semibold text-white uppercase tracking-wider">
              {t("personaProjects")}
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>
          <div className="flex justify-center">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white no-underline shadow-md shadow-accent/20 transition-all duration-200 hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5"
            >
              {t("myAchievements")}
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </section>

        {/* Quality & Weakness */}
        <section ref={qualityRef}>
          <SectionTitle>{t("qualityTitle")}</SectionTitle>
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-6 text-white shadow-lg">
              <div className="flex items-center gap-2 mb-5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/20">
                  <svg className="h-4 w-4 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold">{t("Quality")}</h3>
              </div>
              <ul className="space-y-3">
                {["quality1", "quality2", "quality3", "quality4"].map((key) => (
                  <li key={key} className="flex items-start gap-2 text-sm leading-relaxed text-slate-300">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                    {t(key)}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
              <div className="flex items-center gap-2 mb-5">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/10">
                  <svg className="h-4 w-4 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-text">{t("Weakness")}</h3>
              </div>
              <ul className="space-y-3">
                {["weakness1", "weakness2", "weakness3"].map((key) => (
                  <li key={key} className="flex items-start gap-2 text-sm leading-relaxed text-text-muted">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-400" />
                    {t(key)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Passion */}
        <section ref={passionRef}>
          <SectionTitle>{t("interestAndPassionTitle")}</SectionTitle>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-5">
            <PassionCard
              bgColor="bg-gradient-to-br from-rose-400 to-red-400"
              logoSrc="/images/passion/manette.png"
              label="Gaming"
              items={[
                { img: "/images/passion/dota.png", name: "dota 2", url: "https://www.dota2.com/home" },
                { img: "/images/passion/pubg.png", name: "pubg", url: "https://pubg.com/en/main" },
                { img: "/images/passion/fifa.png", name: "fifa", url: "https://www.ea.com/fr-fr/games/fifa" },
              ]}
            />
            <PassionCard
              bgColor="bg-gradient-to-br from-blue-100 to-indigo-100"
              logoSrc="/images/passion/musique.png"
              label="Musique"
              items={[
                { img: "/images/passion/spotify.png", name: "spotify", url: "https://open.spotify.com/?" },
                { img: "/images/passion/deezer.png", name: "deezer", url: "https://www.deezer.com/" },
              ]}
            />
            <PassionCard
              bgColor="bg-gradient-to-br from-stone-500 to-stone-600"
              logoSrc="/images/passion/tech1.png"
              label="Tech"
              items={[
                { img: "/images/passion/futura.svg", name: "futura", url: "https://www.futura-sciences.com/tech/actualites/" },
                { img: "/images/passion/jdn.jpg", name: "JDN", url: "https://www.journaldunet.com/" },
              ]}
            />
          </div>
        </section>

        {/* Footer */}
        <div className="text-center text-sm text-text-muted pb-4 pt-8 border-t border-border">
          &#169; {new Date().getFullYear()} TSIALONINA Heriniaina Mathieu
        </div>
      </div>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-8 w-1 rounded-full bg-primary" />
      <h2 className="text-xl font-bold tracking-wide text-text uppercase">{children}</h2>
    </div>
  );
}

function ExperienceCard({
  title,
  logoSrc,
  logoClass,
  logoUrl,
  descriptionKey,
  missions,
  subMissions,
  extraMissions,
  technos,
}: {
  title: string;
  logoSrc?: string;
  logoClass?: string;
  logoUrl?: string;
  descriptionKey: string;
  missions: string[];
  subMissions?: string[];
  extraMissions?: string[];
  technos: string[];
}) {
  const t = useTranslations();

  const logo = logoSrc ? (
    <Image src={logoSrc} alt={title} width={50} height={50} className={logoClass} />
  ) : null;

  return (
    <div className="group rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:shadow-md hover:ring-primary/10">
      <div className="flex items-center gap-3 mb-4">
        {logo && (
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-surface-alt ring-1 ring-black/5">
            {logoUrl ? (
              <a href={logoUrl} target="_blank" rel="noopener noreferrer">
                {logo}
              </a>
            ) : (
              logo
            )}
          </div>
        )}
        <h3 className="text-lg font-bold text-text">{title}</h3>
      </div>
      <p className="text-sm leading-relaxed text-text-muted text-justify">{t(descriptionKey)}</p>
      <div className="mt-4">
        <span className="text-xs font-semibold uppercase tracking-wider text-text-muted">Missions</span>
        <ol className="mt-2 space-y-2 text-sm text-text list-decimal list-inside">
          {missions.map((key) => (
            <li key={key} className="leading-relaxed text-justify">{t(key)}</li>
          ))}
          {subMissions && (
            <ul className="ml-4 mt-2 space-y-2 list-disc list-inside">
              {subMissions.map((key) => (
                <li key={key} className="leading-relaxed text-justify">{t(key)}</li>
              ))}
            </ul>
          )}
          {extraMissions?.map((text, i) => (
            <li key={i} className="leading-relaxed text-justify">{text}</li>
          ))}
        </ol>
      </div>
      <div className="mt-4 pt-4 border-t border-border/50">
        <span className="text-xs font-semibold uppercase tracking-wider text-text-muted">Technos</span>
        <div className="flex flex-wrap gap-1.5 mt-2">
          {technos.map((tech) => (
            <TechnoChip key={tech} name={tech} />
          ))}
        </div>
      </div>
    </div>
  );
}

function PassionCard({
  bgColor,
  logoSrc,
  label,
  items,
}: {
  bgColor: string;
  logoSrc: string;
  label: string;
  items: { img: string; name: string; url: string }[];
}) {
  return (
    <div className="group relative flex flex-col items-center">
      <div
        className={`relative z-10 flex h-[160px] w-[200px] items-center justify-center rounded-2xl ${bgColor} shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 max-sm:w-full`}
      >
        <Image
          src={logoSrc}
          alt={label}
          width={80}
          height={80}
          className="w-20 opacity-90 transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <span className="mt-2 text-xs font-medium text-text-muted">{label}</span>
      <div className="mt-2 flex items-center gap-3 opacity-0 transition-all duration-500 group-hover:opacity-100">
        {items.map((item) => (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-black/5 transition-transform hover:scale-110"
          >
            <Image src={item.img} alt={item.name} width={28} height={28} className="w-7 object-contain" />
          </a>
        ))}
      </div>
    </div>
  );
}
