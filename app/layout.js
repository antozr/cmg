import Navbar from "./components/Navbar";
import Foot from "./components/footer";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <meta charSet="utf8" />
        <meta name="author" content="antozr" />
        <meta
          name="description"
          content="Vous vous retrouvez dans l'univers de la chatterie du Monde de Gioia, une chatterie qui élève des chats British Shorthair & Longhair."
        />
        <meta name="keywords" content="chatterie, british shorthair, british, chatterie belgique, chatterie british belgique, cmg, chatterie du monde de gioia, chatterie du monde de goia "/>
        <title>CMG : La Chatterie du Monde de Gioia</title>
      </head>
      <body className="body">
        <Navbar />
        {children}
      </body>
      <Foot />
    </html>
  );
}
