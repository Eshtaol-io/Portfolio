import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eshtaol Eyuel | Social Science Scholar & Software Developer",
  description:
    "The portfolio of Eshtaol Eyuel — exploring social sciences, public policy, international relations, and software development.",
  keywords: [
    "Eshtaol Eyuel",
    "social science",
    "software developer",
    "public policy",
    "international relations",
    "React Native",
    "Expo",
    "Supabase"
  ],
  authors: [{ name: "Eshtaol Eyuel" }],
  openGraph: {
    title: "Eshtaol Eyuel | Social Science Scholar & Software Developer",
    description:
      "Social sciences, public policy, international relations, and software development.",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Eshtaol Eyuel | Portfolio",
    description:
      "Social Science Scholar & Software Developer"
  },
  robots: {
    index: true,
    follow: true
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b1020"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
