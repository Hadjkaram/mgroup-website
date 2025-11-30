import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Future from "@/components/Future"; // Nouveau
import Footer from "@/components/Footer"; // Nouveau

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505]">
      <Navbar />
      <Hero />
      <Services />
      <Future /> {/* La section 2026 */}
      <Footer /> {/* Le pied de page */}
    </main>
  );
}