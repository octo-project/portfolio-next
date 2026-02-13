"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import Image from "next/image";

export default function Sidebar({ locale }: { locale: string }) {
  const t = useTranslations();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const otherLocale = locale === "fr" ? "en" : "fr";

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <>
      {/* Mobile hamburger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-[600] flex h-10 w-10 cursor-pointer flex-col items-center justify-center rounded-lg bg-white/80 shadow-md backdrop-blur-sm transition-all duration-300 hover:bg-white hover:shadow-lg lg:hidden"
      >
        <span
          className={`block h-0.5 w-5 rounded-full bg-slate-700 transition-all duration-300 ${
            isOpen ? "translate-y-[6px] rotate-45" : ""
          }`}
        />
        <span
          className={`mt-1.5 block h-0.5 w-5 rounded-full bg-slate-700 transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`mt-1.5 block h-0.5 w-5 rounded-full bg-slate-700 transition-all duration-300 ${
            isOpen ? "-translate-y-[10px] -rotate-45" : ""
          }`}
        />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[499] bg-black/30 backdrop-blur-sm lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <nav
        className={`fixed top-0 left-0 z-[500] flex h-full w-72 flex-col border-r border-border bg-white/95 backdrop-blur-md transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Profile section */}
        <div className="flex flex-col items-center border-b border-border px-6 pt-8 pb-6">
          <div className="group relative">
            <div className="relative h-20 w-20 overflow-hidden rounded-full ring-2 ring-primary/20 ring-offset-2 transition-all duration-300 group-hover:ring-primary/50">
              <Image
                src="/images/capture.png"
                alt="Profile"
                width={80}
                height={80}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <h3 className="mt-3 text-sm font-semibold text-text">
            TSIALONINA H. Mathieu
          </h3>
          <span className="mt-0.5 text-xs text-text-muted">
            Dev Full Stack
          </span>
          <div className="mt-3 flex gap-1.5">
            {[
              { src: "/images/logos/react.png", alt: "React" },
              { src: "/images/logos/laravel.png", alt: "Laravel" },
              { src: "/images/logos/python.png", alt: "Python" },
              { src: "/images/logos/nestjs.png", alt: "NestJS" },
            ].map((tech) => (
              <div
                key={tech.alt}
                className="flex h-7 w-7 items-center justify-center rounded-md bg-surface-alt"
              >
                <Image src={tech.src} alt={tech.alt} width={18} height={18} className="object-contain" />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col gap-1.5 px-4 pt-5">
          <Link
            href="/"
            className="no-underline"
            onClick={() => setIsOpen(false)}
          >
            <div
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                isActive("/")
                  ? "bg-primary text-white shadow-md shadow-primary/25"
                  : "text-text-muted hover:bg-surface-alt hover:text-text"
              }`}
            >
              <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              CV
            </div>
          </Link>
          <Link
            href="/projects"
            className="no-underline"
            onClick={() => setIsOpen(false)}
          >
            <div
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                isActive("/projects")
                  ? "bg-accent text-white shadow-md shadow-accent/25"
                  : "text-text-muted hover:bg-surface-alt hover:text-text"
              }`}
            >
              <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              {t("myProjects")}
            </div>
          </Link>
          <Link
            href="/contact"
            className="no-underline"
            onClick={() => setIsOpen(false)}
          >
            <div
              className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                isActive("/contact")
                  ? "bg-emerald-500 text-white shadow-md shadow-emerald-500/25"
                  : "text-text-muted hover:bg-surface-alt hover:text-text"
              }`}
            >
              <svg className="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              {t("contact")}
            </div>
          </Link>
        </div>

        {/* Contact links */}
        <div className="mt-auto border-t border-border px-5 pt-4 pb-4">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-wider text-text-muted">
            {t("contact")}
          </p>
          <div className="flex flex-col gap-0.5">
            <ContactLink
              icon="/images/icons/github-mark.svg"
              label="GitHub"
              href="https://github.com/HMathieuTsialonina"
            />
            <ContactLink
              icon="/images/icons/linkedin-icon.svg"
              label="LinkedIn"
              href="https://www.linkedin.com/in/heriniaina-mathieu-tsialonina-79a724209/"
            />
            <ContactLink
              icon="/images/icons/gmail-icon.svg"
              label="Email"
              href="mailto:hmathieutsialonina@gmail.com"
            />
            <ContactLink
              icon="/images/icons/facebook-icon.svg"
              label="Facebook"
              href="https://www.facebook.com/profile.php?id=100008382949411"
            />
          </div>
        </div>

        {/* Language switcher */}
        <div className="border-t border-border px-5 py-3">
          <div className="flex gap-1 rounded-lg bg-surface-alt p-1">
            <Link
              href={pathname}
              locale="fr"
              className={`flex-1 rounded-md py-1.5 text-center text-xs font-medium no-underline transition-all duration-200 ${
                locale === "fr"
                  ? "bg-white text-text shadow-sm"
                  : "text-text-muted hover:text-text"
              }`}
            >
              FR
            </Link>
            <Link
              href={pathname}
              locale="en"
              className={`flex-1 rounded-md py-1.5 text-center text-xs font-medium no-underline transition-all duration-200 ${
                locale === "en"
                  ? "bg-white text-text shadow-sm"
                  : "text-text-muted hover:text-text"
              }`}
            >
              EN
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

function ContactLink({
  icon,
  label,
  href,
}: {
  icon: string;
  label: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2.5 rounded-lg px-2 py-1.5 text-sm text-text-muted no-underline transition-all duration-200 hover:bg-surface-alt hover:text-text"
    >
      <Image src={icon} alt="" width={16} height={16} className="opacity-70" />
      <span className="text-xs">{label}</span>
    </a>
  );
}
