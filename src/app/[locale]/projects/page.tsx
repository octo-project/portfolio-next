import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  const t = useTranslations();

  return (
    <div className="px-6 py-8 lg:px-10">
      <div className="flex items-center gap-3 mb-8">
        <div className="h-8 w-1 rounded-full bg-accent" />
        <h2 className="text-xl font-bold tracking-wide text-text uppercase">
          {t("projects")}
        </h2>
        <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-semibold text-accent">
          {projects.length}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {projects.map((project, i) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="group no-underline animate-slide-up"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div
              className="flex flex-col items-center justify-center rounded-2xl p-6 shadow-sm ring-1 ring-black/5 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:ring-accent/20 min-h-[180px]"
              style={
                project.background
                  ? { background: project.background }
                  : { background: "white" }
              }
            >
              <div className="flex h-16 w-16 items-center justify-center">
                <Image
                  src={project.logo}
                  alt={project.name}
                  width={60}
                  height={60}
                  style={{ width: project.logoSize, height: project.logoSize }}
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <span
                className="mt-3 text-base font-semibold"
                style={{ color: project.textColor || "#0f172a" }}
              >
                {project.name}
              </span>
              <span
                className="mt-1 text-xs opacity-60"
                style={{ color: project.textColor || "#64748b" }}
              >
                {project.about.technos.slice(0, 3).join(" / ")}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
