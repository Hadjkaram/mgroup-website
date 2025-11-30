"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Speaker, Lightbulb, Monitor, Layers } from 'lucide-react'; // Icônes

const services = [
  {
    title: "Sonorisation",
    desc: "Systèmes Line Array dernière génération pour une acoustique parfaite, du stade au gala.",
    icon: <Speaker size={32} />,
    color: "from-blue-600 to-blue-400",
    image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Lumières & FX",
    desc: "Design lumière immersif, lasers et effets spéciaux pour sublimer chaque instant.",
    icon: <Lightbulb size={32} />,
    color: "from-purple-600 to-pink-500", // Rappel du logo (Magenta)
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Écrans LED",
    desc: "Murs d'images haute résolution et mapping vidéo pour un impact visuel total.",
    icon: <Monitor size={32} />,
    color: "from-orange-500 to-yellow-500", // Rappel du logo (Orange)
    image: "https://images.unsplash.com/photo-1542385317-293e432c6686?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Scènes & Structures",
    desc: "Podiums modulaires et structures certifiées pour des événements en toute sécurité.",
    icon: <Layers size={32} />,
    color: "from-gray-600 to-gray-400",
    image: "https://images.unsplash.com/photo-1470229722913-7c0d2dbbafd3?auto=format&fit=crop&q=80&w=800"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-4 bg-[#050505] relative overflow-hidden">
      
      {/* Titre de section */}
      <div className="max-w-6xl mx-auto mb-16 text-center">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-purple-500 font-bold tracking-widest uppercase text-sm"
        >
          Notre Savoir-Faire
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-white mt-4"
        >
          L'ARSENAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-orange-500">TECHNOLOGIQUE</span>.
        </motion.h2>
      </div>

      {/* Grille Bento */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} // L'animation ne se joue qu'une fois
            transition={{ delay: index * 0.1 }}
            className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer border border-white/10"
          >
            {/* Image de fond */}
            <div className="absolute inset-0">
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Overlay sombre pour lire le texte */}
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-500" />
            </div>

            {/* Contenu */}
            <div className="absolute inset-0 p-8 flex flex-col justify-end items-start">
              {/* Icône avec dégradé */}
              <div className={`mb-4 p-3 rounded-xl bg-gradient-to-br ${service.color} text-white opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500`}>
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-gray-300 text-sm max-w-sm transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                {service.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;