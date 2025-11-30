"use client";

import { useEffect } from "react";
import Lenis from "lenis";

const SmoothScrolling = () => {
  useEffect(() => {
    // Initialisation de Lenis
    const lenis = new Lenis({
      duration: 1.2, // La vitesse du scroll (plus c'est haut, plus c'est lent/fluide)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // La courbe de fluidité
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false, // On laisse le scroll natif sur mobile (c'est souvent mieux)
      touchMultiplier: 2,
    });

    // La boucle d'animation (obligatoire pour que ça marche)
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Nettoyage quand on quitte la page
    return () => {
      lenis.destroy();
    };
  }, []);

  return null; // Ce composant n'affiche rien visuellement, il agit juste en fond
};

export default SmoothScrolling;