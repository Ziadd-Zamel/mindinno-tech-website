import {
  Locale,
  NextIntlClientProvider,
  useLocale,
  useMessages,
  useNow,
  useTimeZone,
} from "next-intl";
import ReactQueryProvider from "./components/react-query.provider";
import { getFormats } from "@/i18n/request";
import { ThemeProvider } from "next-themes";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Toaster } from "sonner";

type ProvidersProps = {
  children: React.ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  // Translation
  const messages = useMessages();
  const locale = useLocale() as Locale;
  const timezone = useTimeZone();
  const now = useNow();

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      <ReactQueryProvider>
        <NextIntlClientProvider
          messages={messages}
          locale={locale}
          timeZone={timezone}
          now={now}
          formats={getFormats(locale as "en" | "ar")}
        >
          <Toaster />
          <NuqsAdapter>{children}</NuqsAdapter>
        </NextIntlClientProvider>
      </ReactQueryProvider>
    </ThemeProvider>
  );
}
