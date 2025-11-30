"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Ticket, Play, Smartphone, Wifi } from 'lucide-react';

const Future = () => {
  return (
    <section id="future" className="py-24 px-4 bg-[#080808] relative overflow-hidden">
      
      {/* Fond d'ambiance (Glow effect) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-600 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* En-tête de section */}
        <div className="text-center mb-20">
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="inline-block px-4 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6"
            >
                <span className="text-xs font-bold tracking-widest text-white uppercase">Roadmap 2026</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Le Futur de l'<span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-orange-400">Event</span>.
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                MGROUP ne se contente pas de suivre la tendance. Nous la créons.
                Préparez-vous à deux révolutions majeures.
            </p>
        </div>

        {/* Les 2 Cartes "Projets" */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* CARTE 1 : BILLETTERIE */}
            <motion.div 
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="group relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-gray-900 to-black border border-white/10 overflow-hidden hover:border-purple-500/50 transition-all duration-500"
            >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Ticket size={120} />
                </div>
                
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-full bg-purple-500/20 text-purple-400">
                        <Smartphone size={24} />
                    </div>
                    <span className="text-sm font-mono text-purple-400">COMING SOON</span>
                </div>

                <h3 className="text-3xl font-bold text-white mb-4">M-TICKET</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                    Une billetterie 100% digitale, sécurisée par QR Code dynamique. 
                    Fini le marché noir. Fluidité totale à l'entrée grâce à nos scanneurs ultra-rapides.
                </p>

                <ul className="space-y-3 mb-8 text-sm text-gray-300">
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-purple-500 rounded-full"></span>Paiement Mobile Money (Wave, Orange, MTN)</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-purple-500 rounded-full"></span>Tableau de bord organisateur</li>
                </ul>

                <button className="w-full py-4 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-purple-600 hover:border-purple-600 transition-all">
                    Être notifié du lancement
                </button>
            </motion.div>

            {/* CARTE 2 : STREAMING */}
            <motion.div 
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="group relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-gray-900 to-black border border-white/10 overflow-hidden hover:border-orange-500/50 transition-all duration-500"
            >
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Wifi size={120} />
                </div>

                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 rounded-full bg-orange-500/20 text-orange-400">
                        <Play size={24} />
                    </div>
                    <span className="text-sm font-mono text-orange-400">COMING SOON</span>
                </div>

                <h3 className="text-3xl font-bold text-white mb-4">M-LIVE</h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                    Vivez l'événement comme si vous y étiez. Streaming HD adaptatif, 
                    Multi-caméras et chat interactif pour connecter la diaspora aux événements d'Abidjan.
                </p>

                <ul className="space-y-3 mb-8 text-sm text-gray-300">
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-orange-500 rounded-full"></span>Qualité 4K / HD Adaptative</li>
                    <li className="flex items-center gap-2"><span className="w-1 h-1 bg-orange-500 rounded-full"></span>Mode Replay & VOD</li>
                </ul>

                <button className="w-full py-4 rounded-xl bg-white/5 border border-white/10 text-white font-medium hover:bg-orange-600 hover:border-orange-600 transition-all">
                    Être notifié du lancement
                </button>
            </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Future;