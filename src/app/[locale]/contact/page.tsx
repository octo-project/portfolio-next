"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function ContactPage() {
  const t = useTranslations();

  return (
    <div className="px-6 py-8 lg:px-10">
      <div className="flex items-center gap-3 mb-8 animate-fade-in">
        <div className="h-8 w-1 rounded-full bg-emerald-500" />
        <h2 className="text-xl font-bold tracking-wide text-text uppercase">
          {t("contact")}
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Contact Info */}
        <div className="space-y-4 animate-slide-up">
          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-5">
              Informations
            </h3>
            <div className="space-y-4">
              <ContactInfoItem
                icon={
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                }
                label="Email"
                value="hmathieutsialonina@gmail.com"
                href="mailto:hmathieutsialonina@gmail.com"
              />
              <ContactInfoItem
                icon={
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                }
                label="Localisation"
                value="Madagascar"
              />
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-5">
              Social
            </h3>
            <div className="grid grid-cols-2 gap-3">
              <SocialLink
                icon="/images/icons/github-mark.svg"
                label="GitHub"
                href="https://github.com/HMathieuTsialonina"
              />
              <SocialLink
                icon="/images/icons/linkedin-icon.svg"
                label="LinkedIn"
                href="https://www.linkedin.com/in/heriniaina-mathieu-tsialonina-79a724209/"
              />
              <SocialLink
                icon="/images/icons/facebook-icon.svg"
                label="Facebook"
                href="https://www.facebook.com/profile.php?id=100008382949411"
              />
              <SocialLink
                icon="/images/icons/gmail-icon.svg"
                label="Gmail"
                href="mailto:hmathieutsialonina@gmail.com"
              />
            </div>
          </div>
        </div>

        {/* Contact Form (visual/static) */}
        <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 animate-slide-up delay-200">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-text-muted mb-5">
            Envoyez-moi un message
          </h3>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-text mb-1.5">Nom</label>
              <input
                type="text"
                placeholder="Votre nom"
                className="w-full rounded-xl border border-border bg-surface-dim px-4 py-3 text-sm text-text outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/10"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text mb-1.5">Email</label>
              <input
                type="email"
                placeholder="votre@email.com"
                className="w-full rounded-xl border border-border bg-surface-dim px-4 py-3 text-sm text-text outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/10"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text mb-1.5">Message</label>
              <textarea
                rows={5}
                placeholder="Votre message..."
                className="w-full resize-none rounded-xl border border-border bg-surface-dim px-4 py-3 text-sm text-text outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/10"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-white shadow-md shadow-primary/20 transition-all duration-200 cursor-pointer hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5"
            >
              Envoyer
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function ContactInfoItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center gap-4 rounded-xl p-3 transition-all duration-200 hover:bg-surface-alt">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
        {icon}
      </div>
      <div>
        <span className="block text-xs text-text-muted">{label}</span>
        <span className="text-sm font-medium text-text">{value}</span>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="no-underline" target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }
  return content;
}

function SocialLink({
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
      className="flex items-center gap-3 rounded-xl p-3 no-underline transition-all duration-200 hover:bg-surface-alt ring-1 ring-black/5"
    >
      <Image src={icon} alt={label} width={20} height={20} className="opacity-70" />
      <span className="text-sm font-medium text-text">{label}</span>
    </a>
  );
}
