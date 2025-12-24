import { useTranslations } from "next-intl";

export default function Logo() {
  const t = useTranslations();
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 shadow-lg shadow-blue-500/25">
          <span className="text-sm font-bold text-white">TV</span>
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900 dark:text-white">{t("common.logo")}</p>
        </div>
      </div>
    </div>
  );
}
