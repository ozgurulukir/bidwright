import type { Metadata } from "next";
import type { ReactNode } from "react";
import { IBM_Plex_Mono, Sora } from "next/font/google";
import { AuthProvider, ImpersonationBanner } from "@/components/auth-provider";
import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages} from 'next-intl/server';
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sans",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Bidwright",
  description: "AI-powered construction estimating platform.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${sora.variable} ${plexMono.variable}`}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <AuthProvider>
            <ImpersonationBanner />
            {children}
          </AuthProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
