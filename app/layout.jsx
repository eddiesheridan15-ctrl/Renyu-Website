import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://renyu.co.uk"),
  title: "RENYU, Bring your team together. Leave the planet better.",
  description:
    "A friendly four-week team competition that turns everyday actions into a company donation, committed before the competition begins and directed by the winning team.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/renyu-appicon.png",
  },
  openGraph: {
    title: "RENYU, Bring your team together. Leave the planet better.",
    description:
      "A four-week team competition that turns everyday actions into a company donation, committed up front and directed by the winning team.",
    url: "https://renyu.co.uk",
    siteName: "RENYU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RENYU, Bring your team together. Leave the planet better.",
    description:
      "A four-week team competition that ends with a company donation to conservation.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
