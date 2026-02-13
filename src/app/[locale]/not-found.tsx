import { useTranslations } from "next-intl";
import Image from "next/image";

export default function NotFound() {
  const t = useTranslations();

  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="flex flex-col items-center text-center">
        <Image src="/images/404.png" alt="not found" width={300} height={300} />
        <h2 className="text-black mt-4">{t("notFoundTitle")}</h2>
        <p className="text-black max-w-md">{t("notFoundDescription")}</p>
        <a href="/" className="text-blue-600">{t("notFoundBack")}</a>
      </div>
    </div>
  );
}
