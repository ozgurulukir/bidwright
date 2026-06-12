import { getRequestConfig } from "next-intl/server";
import { cookies } from "next/headers";

export const locales = ["en", "tr"];

export default getRequestConfig(async () => {
  const store = await cookies();
  const locale = store.get("locale")?.value || "en";

  if (!locales.includes(locale))
    return {
      locale: "en" as const,
      messages: (await import(`../messages/en.json`)).default,
    };

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
