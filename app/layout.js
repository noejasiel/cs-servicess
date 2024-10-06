import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "CS Services",
  description:
    "Somos una consultora especializada en brindar servicios de calidad, con un equipo de profesionales altamente capacitados.",
  image: "/logo.png",
  // url: "https://cs-services.vercel.app",
  type: "website",
  site_name: "CS Services",
  locale: "es_MX",
  // twitter: "@cs_services",
  keywords: ["consultora", "servicios", "calidad", "profesionales", "capacitados"],

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
