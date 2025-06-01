import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LayoutView } from "@/features/app-shell/components/views/layout-view";
import "./globals.css";
import { Providers } from "@/components/providers";
import { loadAppsConfigFiles, loadDockItems } from "@/features/apps/lib/utils";
import { GlobalStoreProvider } from "@/components/providers/global-store-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gnome Web",
  description: "Gnome Web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const appsConfigs = loadAppsConfigFiles();
  const dockItems = loadDockItems();
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers
          themeProvider={{
            attribute: "class",
            defaultTheme: "system",
            enableSystem: true,
            disableTransitionOnChange: true,
          }}
        >
          <GlobalStoreProvider systemApps={appsConfigs} dockItems={dockItems}>
            <LayoutView>{children}</LayoutView>
          </GlobalStoreProvider>
        </Providers>
      </body>
    </html>
  );
}
