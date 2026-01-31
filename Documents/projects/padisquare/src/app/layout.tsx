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
// import ThemeToggle from "@/components/theme-toggle";

// Define metadata for the application, including SEO and Open Graph data
export const metadata: Metadata = {
  metadataBase: new URL("https://padisquare-multivendor-mini-sites-demo.vercel.app"),

  title: {
    default: "Padisquare Multivendor Mini Sites Demo",
    template: "%s | Padisquare Multivendor Mini Sites Demo",
  },
  description: "Demo of Padisquare Multivendor Mini Sites.",
  icons: { icon: "/images/padisquare-logo-without-name.png" },

  openGraph: {
    title: "Padisquare Multivendor Mini Sites Demo",
    description: "Demo of Padisquare Multivendor Mini Sites.",
    url: "https://padisquare-multivendor-mini-sites-demo.vercel.app",
    siteName: "Padisquare Multivendor Mini Sites Demo",
    images: [{ url: "/images/padisquare-logo-without-name.png" }],
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

  const initialTheme = getInitialTheme();
  // const initialThemename = getInitialThemeName();

  return (
    <html
      lang="en"
      className={`theme-initialized ${initialTheme}`}
      data-theme={initialTheme}
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable}  ${bai_jamjuree.variable} ${space_grotesk.variable} antialiased bg-background font-sans flex flex-col justify-between items-center w-full h-screen max-w-360 mx-auto overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
