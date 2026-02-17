export type Project = {
  logo: string;
  logoSize: string;
  name: string;
  slug: string;
  withPerformance: boolean;
  screenShootType: "web" | "mobile";
  projectType: "web" | "desktop" | "extension" | "mobile";
  textColor?: string;
  background?: string;
  about: {
    demoUrl?: string;
    gitHubRepository?: string;
    description: string;
    missions: string[];
    functionnalities: string[];
    technos: string[];
  };
  screenShoots: { label: string; image: string }[];
};

export const projects: Project[] = [
  {
    logo: "/images/projects/portfolio/logo.png",
    logoSize: "50px",
    name: "Portfolio",
    slug: "portfolio",
    withPerformance: true,
    screenShootType: "web",
    projectType: "web",
    about: {
      demoUrl: "https://mathieu-portf.netlify.app/",
      description: "projectPortfolioOverview",
      missions: [
        "projectPortfolioMission1",
        "projectPortfolioMission2",
        "projectPortfolioMission3",
        "projectPortfolioMission4",
      ],
      functionnalities: [
        "projectPortfolioFunctionality1",
        "projectPortfolioFunctionality2",
        "projectPortfolioFunctionality3",
      ],
      technos: ["React", "TailwindCss", "Typescript"],
    },
    screenShoots: [
      { label: "Portfolio Home", image: "/images/projects/portfolio/home.png" },
      { label: "Portfolio Vatsy", image: "/images/projects/portfolio/vatsy.png" },
      { label: "Portfolio Projects", image: "/images/projects/portfolio/projects.png" },
      { label: "Portfolio Vatsy Screen", image: "/images/projects/portfolio/vatsy-screen.png" },
      { label: "Portfolio Buyer", image: "/images/projects/portfolio/buyer.png" },
      { label: "Portfolio Buyer Screen", image: "/images/projects/portfolio/buyer-screen.png" },
    ],
  },
  {
    logo: "/images/projects/vatsy/logo.png",
    logoSize: "50px",
    name: "Vatsy",
    slug: "vatsy",
    withPerformance: false,
    screenShootType: "web",
    projectType: "desktop",
    about: {
      demoUrl: "https://github.com/octo-project/portfolio-next/releases/download/V0.1.7/vatsy_0.1.7_x64_en-US.msi",
      gitHubRepository: "https://git-lab.com/hmathieutsialonina/podcast-app",
      description: "projectVatsyOverview",
      missions: [
        "projectVatsyMission1",
        "projectVatsyMission2",
        "projectVatsyMission3",
        "projectVatsyMission4",
        "projectVatsyMission5",
        "projectVatsyMission6",
        "projectVatsyMission7",
        "projectVatsyMission8",
        "projectVatsyMission9",
      ],
      functionnalities: [
        "projectVatsyInvoicePrinting",
        "projectVatsyOrderManagement",
        "projectVatsyTransactionHistory",
        "projectVatsySearchEngine",
      ],
      technos: ["React", "Tailwind", "Rust", "Tauri", "Typescript", "Sqlite"],
    },
    screenShoots: [
      { label: "First page", image: "/images/projects/vatsy/page-1.png" },
      { label: "Addition", image: "/images/projects/vatsy/addition.png" },
      { label: "Bol renverser", image: "/images/projects/vatsy/bol-renverser.png" },
      { label: "Liste soupe", image: "/images/projects/vatsy/liste-soupe.png" },
      { label: "Category de depense", image: "/images/projects/vatsy/category-de-depense.png" },
      { label: "Historique de vente", image: "/images/projects/vatsy/historique-de-vente.png" },
      { label: "Historique de depense", image: "/images/projects/vatsy/historique-de-depense.png" },
      { label: "Ask password", image: "/images/projects/vatsy/ask-password.png" },
      { label: "Selection quantity", image: "/images/projects/vatsy/selection-quantity.png" },
      { label: "Date filter", image: "/images/projects/vatsy/date-filter.png" },
      { label: "Purchase filter", image: "/images/projects/vatsy/purchase-filter.png" },
      { label: "Table filter", image: "/images/projects/vatsy/table-filter.png" },
      { label: "See invoice", image: "/images/projects/vatsy/see-invoice.png" },
    ],
  },
  {
    logo: "/images/projects/gestion-de-fond/logo.jpg",
    logoSize: "70px",
    name: "Gestion-fond",
    slug: "gestion-fond",
    withPerformance: false,
    screenShootType: "web",
    projectType: "web",
    about: {
      demoUrl: "https://youtube/asdas6a5465/podcast-app-web",
      gitHubRepository: "https://git-lab.com/hmathieutsialonina/podcast-app",
      description: "projectGestionFondOverview",
      missions: [
        "projectGestionFondMission1",
        "projectGestionFondMission2",
        "projectGestionFondMission3",
        "projectGestionFondMission4",
        "projectGestionFondMission5",
        "projectGestionFondMission6",
      ],
      functionnalities: ["expenseTracking", "financialStrategy"],
      technos: ["Deno", "Typescript", "React", "Tailwind"],
    },
    screenShoots: [
      { label: "expense home", image: "/images/projects/gestion-de-fond/home.png" },
      { label: "expense tracking", image: "/images/projects/gestion-de-fond/expenses.png" },
      { label: "finance home", image: "/images/projects/gestion-de-fond/finance-home.png" },
      { label: "New buy plan", image: "/images/projects/gestion-de-fond/new-buy-plan.png" },
      { label: "delete expense", image: "/images/projects/gestion-de-fond/delete-expense.png" },
      { label: "select plan detail", image: "/images/projects/gestion-de-fond/plan-detail.png" },
      { label: "select plan type", image: "/images/projects/gestion-de-fond/select-plan-type.png" },
      { label: "new selling goal", image: "/images/projects/gestion-de-fond/new-selling-goal.png" },
      { label: "expense detail 2", image: "/images/projects/gestion-de-fond/expense-details-2.png" },
      { label: "delete goal", image: "/images/projects/gestion-de-fond/delete-finance-goal.png" },
      { label: "finance sold detail", image: "/images/projects/gestion-de-fond/finance-sold-detail.png" },
      { label: "creation new expense", image: "/images/projects/gestion-de-fond/creation-new-expense.png" },
      { label: "expense chart details", image: "/images/projects/gestion-de-fond/expense-chart-details.png" },
      { label: "creation expense", image: "/images/projects/gestion-de-fond/creation-new-expense-amount.png" },
      { label: "expense category filters", image: "/images/projects/gestion-de-fond/expense-category-filters.png" },
    ],
  },
  {
    logo: "/images/projects/buyer-persona/logo.png",
    logoSize: "35px",
    name: "Buyer",
    slug: "buyer",
    withPerformance: false,
    textColor: "white",
    background: "#22222f",
    screenShootType: "mobile",
    projectType: "extension",
    about: {
      demoUrl: "https://youtube/asdas6a5465/podcast-app-web",
      gitHubRepository: "https://git-lab.com/hmathieutsialonina/podcast-app",
      description: "projectBuyerPersonaOverview",
      missions: ["projectBuyerPersonaMission1", "projectBuyerPersonaMission2"],
      functionnalities: [
        "chatgpt",
        "audienceTargeting",
        "personaGenerator",
        "chromeExtension",
      ],
      technos: ["React", "NodeJs", "Express", "Typescript"],
    },
    screenShoots: [
      { label: "Welcome", image: "/images/projects/buyer-persona/welcome.png" },
      { label: "SuccessGenerate", image: "/images/projects/buyer-persona/success-generate.png" },
      { label: "SuccessDownload", image: "/images/projects/buyer-persona/success-download.png" },
      { label: "Setting", image: "/images/projects/buyer-persona/setting.png" },
      { label: "Loading", image: "/images/projects/buyer-persona/loading.png" },
      { label: "Generator", image: "/images/projects/buyer-persona/generator.png" },
      { label: "GeneratedFile", image: "/images/projects/buyer-persona/generated-file.png" },
      { label: "FAQ", image: "/images/projects/buyer-persona/faq.png" },
      { label: "Avis", image: "/images/projects/buyer-persona/avis.png" },
      { label: "About", image: "/images/projects/buyer-persona/about.png" },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug.toLowerCase() === slug.toLowerCase());
}
