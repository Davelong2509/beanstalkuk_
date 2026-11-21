import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap"
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif",
  display: "swap"
});

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: {
    default: "Beanstalk Day Nursery",
    template: "%s | Beanstalk Day Nursery"
  },
  description:
    "A warm, professional and nurturing day nursery where young children can learn, grow and thrive.",
  applicationName: "Beanstalk Day Nursery",
  icons: {
    icon: "/images/brand/beanstalk_logo.jpg",
    shortcut: "/images/brand/beanstalk_logo.jpg",
    apple: "/images/brand/beanstalk_logo.jpg"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-GB" className={`${dmSans.variable} ${dmSerifDisplay.variable}`}>
      <body>{children}</body>
    </html>
  );
}
