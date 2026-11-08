import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://eshtaolportfolio.vercel.app"),

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
    "Supabase",
  ],
  authors: [{ name: "Eshtaol Eyuel" }],
  openGraph: {
    title: "Eshtaol Eyuel | Social Science Scholar & Software Developer",
    description:
      "Social sciences, public policy, international relations, and software development.",
    url: "https://eshtaolportfolio.vercel.app",
    siteName: "Eshtaol Eyuel Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Eshtaol Eyuel",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eshtaol Eyuel | Portfolio",
    description: "Social Science Scholar & Software Developer",
    images: ["/profile.jpg"],
  },
  verification: {
    google: "mPMS7bbtVMXjQ96jki56Wo87sJtonWIkL7l293O5Crk",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0b1020",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
