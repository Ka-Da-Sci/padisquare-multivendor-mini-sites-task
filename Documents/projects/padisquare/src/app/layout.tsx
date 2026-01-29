import type { Metadata } from "next";
import "../styles/globals.css";
import {
  geistSans,
  geistMono,
  roboto,
  space_grotesk,
  bai_jamjuree,
} from "@/styles/fonts";
import { cookies } from "next/headers";
import ThemeToggle from "@/components/theme-toggle";

// Define metadata for the application, including SEO and Open Graph data
export const metadata: Metadata = {
  metadataBase: new URL("https://krea-ai-website-remake.vercel.app"),

  title: {
    default: "Krea AI Website Remake",
    template: "%s | Krea AI Website Remake",
  },
  description: "Remake of Krea AI website.",
  icons: { icon: "/images/logo-trans.svg" },

  openGraph: {
    title: "Krea AI Website Remake",
    description: "Remake of Krea AI website.",
    url: "https://krea-ai-website-remake.vercel.app",
    siteName: "Krea AI Website Remake",
    images: [{ url: "/images/logo-trans.svg" }],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Read theme from cookie on the server (async)
  const cookieStore = await cookies();
  console.log(cookieStore.get("theme")?.value);
  const themeCookie = cookieStore.get("theme")?.value;
  // const themeName = cookieStore.get("theme-name")?.value;

  // Determine initial theme based on cookie only (server-side)
  const getInitialTheme = () => {
    if (themeCookie === "dark") return "dark";
    if (themeCookie === "light") return "light";
    if (themeCookie === "system") return "system";
    return "system";
  };

  // // Determine initial theme name based on cookie only (server-side)
  // const getInitialThemeName = () => {
  //   if (themeName === "dark") return "dark";
  //   if (themeName === "light") return "light";
  //   if (themeName === "system") return "system";
  //   return "system";
  // };

  const initialTheme = getInitialTheme();
  // const initialThemename = getInitialThemeName();

  return (
    <html
      lang="en"
      className={`theme-initialized ${initialTheme}`}
      data-theme={initialTheme}
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable}  ${bai_jamjuree.variable} ${space_grotesk.variable} antialiased bg-background font-sans flex flex-col justify-between items-center w-full max-w-360 mx-auto overflow-x-hidden`}
      >
        <header>
          <ThemeToggle
            initialTheme={initialTheme}
            // initialThemename={initialThemename}
          />
        </header>
        {children}
      </body>
    </html>
  );
}
