import { useTranslations } from "next-intl";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

export const useContactSchema = () => {
  const t = useTranslations("contact.validation");

  return z.object({
    name: z.string().min(1, t("name_required")),
    email: z.string().min(1, t("email_required")).email(t("email_invalid")),
    message: z.string().min(1, t("message_required")),
  });
};

export type ContactFormFields = z.infer<ReturnType<typeof useContactSchema>>;
export type ContactFormType = UseFormReturn<ContactFormFields>;
