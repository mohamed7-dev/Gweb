import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "@/components/providers";
import { GlobalStoreProvider } from "@/components/providers/global-store-provider";
import { AppShellView } from "@/features/app-shell/components/views/app-shell";
import { getAllWallpapers } from "@/features/settings-app/lib/utils";
import { ACCENT_COLORS } from "@/features/settings-app/lib/data";

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
  const wallpapers = getAllWallpapers();
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers
          themeProvider={{
            attribute: "class",
            defaultTheme: "dark",
            enableSystem: true,
            disableTransitionOnChange: true,
          }}
        >
          <GlobalStoreProvider
            wallpapers={wallpapers}
            accentColors={ACCENT_COLORS}
          >
            <AppShellView>{children}</AppShellView>
          </GlobalStoreProvider>
        </Providers>
      </body>
    </html>
  );
}
