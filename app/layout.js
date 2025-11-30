import { Outfit } from "next/font/google"; // <-- Import de la police Google
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";

// Configuration de la police "Outfit"
const outfit = Outfit({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"], // On charge : Léger, Normal, Moyen, Gras
  variable: "--font-outfit",
});

export const metadata = {
  title: "MGROUP - Event Technology",
  description: "Agence événementielle et location de matériel en Côte d'Ivoire",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      {/* On applique la classe de la police ici */}
      <body className={outfit.className}> 
        <SmoothScrolling />
        {children}
      </body>
    </html>
  );
}