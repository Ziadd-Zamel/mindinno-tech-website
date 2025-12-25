import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

export default function CallInput() {
  const t = useTranslations("common");
  return (
    <div className="flex h-16 w-full items-center justify-between rounded-2xl border border-[#D7DDE2] bg-transparent py-2 ps-4 pe-2 sm:ps-6 dark:border-[#FFFFFF4D]">
      <div className="flex h-full min-w-0 flex-1 items-center gap-2">
        <Mail className="mt-0.5 size-5 flex-shrink-0 text-[#B4BBC3]" />
        <input
          type="text"
          placeholder={t("mail-placeholder")}
          className="h-full w-full min-w-0 border-none bg-transparent text-sm text-[#B4BBC3] placeholder:text-sm placeholder:text-[#B4BBC3] focus:ring-0 focus:outline-0"
        />
      </div>
      <Button className="h-full px-3 text-xs whitespace-nowrap sm:px-4 sm:text-sm">
        {t("call-booking")}
      </Button>
    </div>
  );
}
