import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://renyu.co.uk"),
  title: "RENYU, Bring your team together. Leave the planet better.",
  description:
    "Team competitions that fund conservation, and a platform in build that gets your company B Corp certified by sharing the work across your whole team.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/renyu-appicon.png",
  },
  openGraph: {
    title: "RENYU, Bring your team together. Leave the planet better.",
    description:
      "Team competitions that fund conservation, and a platform in build that gets your company B Corp certified by sharing the work across your whole team.",
    url: "https://renyu.co.uk",
    siteName: "RENYU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RENYU, Bring your team together. Leave the planet better.",
    description:
      "Team competitions that fund conservation, and a platform in build that gets your company B Corp certified by sharing the work across your whole team.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
