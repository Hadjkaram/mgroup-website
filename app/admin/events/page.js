"use client";

import React from 'react';
import { Calendar, Play, Pause, Users, Ticket, MoreVertical, Signal } from 'lucide-react';

export default function EventsPage() {
  // Simulation des données connectées à l'App Mobile
  const events = [
    { 
      id: 1, 
      title: "Concert Didi B - Mojaveli", 
      date: "25 Déc 2025", 
      location: "Palais de la Culture",
      ticketsSold: 4520, 
      capacity: 5000, 
      revenue: "45.200.000",
      status: "Live Now", // Cet événement est EN DIRECT
      isStreaming: true 
    },
    { 
      id: 2, 
      title: "Festival des Grillades", 
      date: "30 Déc 2025", 
      location: "Ivoire Golf Club",
      ticketsSold: 1200, 
      capacity: 10000, 
      revenue: "6.000.000",
      status: "À venir",
      isStreaming: false 
    },
    { 
      id: 3, 
      title: "Roseline Layo Live", 
      date: "01 Jan 2026", 
      location: "Sofitel Ivoire",
      ticketsSold: 850, 
      capacity: 1500, 
      revenue: "21.250.000",
      status: "À venir",
      isStreaming: false 
    },
  ];

  return (
    <div className="space-y-6">
      
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Gestion Événements & Live</h1>
          <p className="text-gray-500 text-sm">Pilotez la billetterie et le streaming de l'application mobile.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 shadow-lg shadow-purple-200">
          <Calendar size={18} />
          <span>Créer un Événement</span>
        </button>
      </div>

      {/* LISTE DES ÉVÉNEMENTS */}
      <div className="grid grid-cols-1 gap-6">
        {events.map((event) => (
            <div key={event.id} className={`bg-white rounded-xl border ${event.isStreaming ? 'border-red-200 shadow-red-100 ring-1 ring-red-100' : 'border-gray-100'} p-6 shadow-sm transition-all`}>
                
                {/* En-tête de la carte */}
                <div className="flex justify-between items-start mb-6">
                    <div className="flex gap-4">
                        {/* Date Box */}
                        <div className="flex flex-col items-center justify-center w-16 h-16 bg-gray-50 rounded-lg border border-gray-100 text-center">
                            <span className="text-xs font-bold text-gray-400 uppercase">{event.date.split(' ')[1]}</span>
                            <span className="text-xl font-black text-gray-800">{event.date.split(' ')[0]}</span>
                        </div>
                        
                        <div>
                            <h3 className="text-lg font-bold text-gray-800">{event.title}</h3>
                            <p className="text-gray-500 text-sm flex items-center gap-1">
                                <span className="w-2 h-2 rounded-full bg-gray-300"></span>
                                {event.location}
                            </p>
                        </div>
                    </div>

                    {/* Badge Statut */}
                    {event.isStreaming ? (
                        <span className="flex items-center gap-2 px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full animate-pulse">
                            <Signal size={12} /> EN DIRECT SUR L'APP
                        </span>
                    ) : (
                        <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs font-bold rounded-full">
                            {event.status}
                        </span>
                    )}
                </div>

                {/* Statistiques (Billetterie) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-purple-100 text-purple-600 rounded-lg"><Ticket size={20}/></div>
                        <div>
                            <p className="text-xs text-gray-500 uppercase font-bold">Billets Vendus</p>
                            <p className="font-bold text-gray-800">{event.ticketsSold} <span className="text-gray-400 text-sm">/ {event.capacity}</span></p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-green-100 text-green-600 rounded-lg"><Users size={20}/></div>
                        <div>
                            <p className="text-xs text-gray-500 uppercase font-bold">Revenu Total</p>
                            <p className="font-bold text-gray-800">{event.revenue} FCFA</p>
                        </div>
                    </div>
                    {/* Barre de progression des ventes */}
                    <div className="flex flex-col justify-center">
                        <div className="flex justify-between text-xs mb-1">
                            <span className="font-bold text-gray-500">Remplissage</span>
                            <span className="font-bold text-purple-600">{Math.round((event.ticketsSold / event.capacity) * 100)}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-purple-600 h-2 rounded-full" style={{ width: `${(event.ticketsSold / event.capacity) * 100}%` }}></div>
                        </div>
                    </div>
                </div>

                {/* BARRE DE CONTRÔLE LIVE */}
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <div className="flex gap-2">
                         {/* Simulation de boutons de contrôle */}
                        {event.isStreaming ? (
                            <button className="flex items-center gap-2 px-4 py-2 bg-white border border-red-200 text-red-600 rounded-lg text-sm font-bold hover:bg-red-50">
                                <Pause size={16} fill="currentColor" /> Arrêter le Live
                            </button>
                        ) : (
                            <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg text-sm font-bold hover:bg-gray-800">
                                <Play size={16} /> Lancer le Live
                            </button>
                        )}
                        <button className="px-4 py-2 text-gray-600 text-sm font-medium hover:bg-gray-50 rounded-lg">Modifier Infos</button>
                    </div>
                    
                    <button className="text-gray-400 hover:text-black"><MoreVertical size={20} /></button>
                </div>

            </div>
        ))}
      </div>
    </div>
  );
}