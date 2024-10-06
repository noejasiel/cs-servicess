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
  title: "Consultoría de Servicios Profesionales | CS Services",
  description:
    "CS Services ofrece consultoría especializada en gestión de proyectos, desarrollo profesional y asesoría empresarial. Nuestro equipo de expertos se enfoca en mejorar el rendimiento y éxito de nuestros clientes.",
  image: "/logo.png",
  url: "https://cs-services.vercel.app",
  type: "website",
  site_name: "Concordia Success Services",
  locale: "es_MX",
  // twitter: "@cs_services",
  keywords: [
    "consultoría empresarial",
    "servicios profesionales",
    "asesoría empresarial",
    "gestión de proyectos",
    "desarrollo profesional",
    "consultoría en México",
    "mejora organizacional"
  ],
  og: {
    title: "Consultoría de Servicios Profesionales | CS Services",
    description:
      "CS Services brinda soluciones personalizadas en gestión de proyectos, desarrollo profesional y asesoría empresarial.",
    image: "/logo.png",
    url: "https://cs-services.vercel.app",
    type: "website",
    locale: "es_MX"
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Consultoría de Servicios Profesionales | CS Services",
  //   description: "Soluciones empresariales para mejorar tu organización.",
  //   image: "/logo.png",
  //   site: "@cs_services",
  //   url: "https://cs-services.vercel.app"
  // },
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
