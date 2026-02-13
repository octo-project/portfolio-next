import Image from "next/image";

const TECHNO_MAP: Record<string, { label: string; logo: string; url: string }> = {
  React: { label: "React", logo: "/images/logos/react.png", url: "https://fr.react.dev/" },
  Typescript: { label: "Typescript", logo: "/images/logos/ts.png", url: "https://www.typescriptlang.org/" },
  AntDesign: { label: "Ant Design", logo: "/images/logos/ant.png", url: "https://ant.design/" },
  D3: { label: "D3.js", logo: "/images/logos/d3-js.png", url: "https://d3js.org/" },
  Electron: { label: "Electron", logo: "/images/logos/electron.png", url: "https://www.electronjs.org/" },
  NodeJs: { label: "Node.js", logo: "/images/logos/nodejs.svg", url: "https://nodejs.org/" },
  MaterialUi: { label: "Material UI", logo: "/images/logos/mui.png", url: "https://mui.com/" },
  Symfony: { label: "Symfony", logo: "/images/logos/symfony.png", url: "https://symfony.com/" },
  ApiPlatforme: { label: "API Platform", logo: "/images/logos/api-platforme.png", url: "https://api-platform.com/" },
  FirebaseAuth: { label: "Firebase Auth", logo: "/images/logos/firebase-auth.png", url: "https://firebase.google.com/" },
  FirebaseDB: { label: "Firebase DB", logo: "/images/logos/firebase-db.png", url: "https://firebase.google.com/" },
  FirebaseDynamicLinks: { label: "Firebase Links", logo: "/images/logos/firebase-dynamic-links.png", url: "https://firebase.google.com/" },
  Kotlin: { label: "Kotlin", logo: "/images/logos/kotlin.png", url: "https://kotlinlang.org/" },
  Python: { label: "Python", logo: "/images/logos/python.png", url: "https://www.python.org/" },
  GraphQL: { label: "GraphQL", logo: "/images/logos/graphql.png", url: "https://graphql.org/" },
  FacebookSDK: { label: "Facebook SDK", logo: "/images/logos/facebook.png", url: "https://developers.facebook.com/" },
  Prisma: { label: "Prisma", logo: "/images/logos/prisma.png", url: "https://www.prisma.io/" },
  ReactNative: { label: "React Native", logo: "/images/logos/react-native.png", url: "https://reactnative.dev/" },
  Gatsby: { label: "Gatsby", logo: "/images/logos/gatsby.png", url: "https://www.gatsbyjs.com/" },
  Laravel: { label: "Laravel", logo: "/images/logos/laravel.png", url: "https://laravel.com/" },
  Stripe: { label: "Stripe", logo: "/images/logos/stripe.png", url: "https://stripe.com/" },
  Minio: { label: "MinIO", logo: "/images/logos/minio.png", url: "https://min.io/" },
  Deno: { label: "Deno", logo: "/images/logos/deno.png", url: "https://deno.com/" },
  Tauri: { label: "Tauri", logo: "/images/logos/tauri.png", url: "https://tauri.app/" },
  Sqlite: { label: "SQLite", logo: "/images/logos/sqlite.jpeg", url: "https://www.sqlite.org/" },
  Tailwind: { label: "Tailwind", logo: "/images/logos/tailwindcss.png", url: "https://tailwindcss.com/" },
  TailwindCss: { label: "Tailwind", logo: "/images/logos/tailwindcss.png", url: "https://tailwindcss.com/" },
  Express: { label: "Express", logo: "/images/logos/nodejs.svg", url: "https://expressjs.com/" },
  Rust: { label: "Rust", logo: "/images/logos/tauri.png", url: "https://www.rust-lang.org/" },
};

export default function TechnoChip({ name }: { name: string }) {
  const tech = TECHNO_MAP[name];
  if (!tech) {
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-surface-alt px-3 py-1.5 text-xs font-medium text-text-muted ring-1 ring-black/5">
        {name}
      </span>
    );
  }

  return (
    <a
      href={tech.url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-text no-underline ring-1 ring-black/5 transition-all duration-200 hover:ring-primary/20 hover:shadow-sm hover:text-primary"
    >
      <Image src={tech.logo} alt={tech.label} width={16} height={16} className="h-4 w-4 object-contain" />
      <span>{tech.label}</span>
    </a>
  );
}
