"use client";

import React from 'react';
import { TrendingUp, AlertCircle, CheckCircle, Package } from 'lucide-react';

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      
      {/* 1. EN-TÊTE */}
      <div className="flex justify-between items-center">
        <div>
            <h1 className="text-2xl font-bold text-gray-800">Tableau de Bord</h1>
            <p className="text-gray-500 text-sm">Bienvenue, Admin MGROUP. Voici ce qui se passe aujourd'hui.</p>
        </div>
        <div className="flex gap-3">
            <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 text-black">Exporter Rapport</button>
            <button className="px-4 py-2 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800">+ Créer Devis</button>
        </div>
      </div>

      {/* 2. STATISTIQUES CLÉS (KPI) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard title="Chiffre d'Affaires" value="12.5M FCFA" sub="+15% vs mois dernier" icon={<TrendingUp size={24} className="text-green-500" />} />
        <StatCard title="Commandes en cours" value="8" sub="2 à valider" icon={<AlertCircle size={24} className="text-orange-500" />} />
        <StatCard title="Matériel Loué" value="142" sub="Unités sur le terrain" icon={<Package size={24} className="text-blue-500" />} />
        <StatCard title="Taux de Retour" value="98%" sub="Matériel en bon état" icon={<CheckCircle size={24} className="text-purple-500" />} />
      </div>

      {/* 3. SECTION STOCK & COMMANDES RÉCENTES */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* COLONNE GAUCHE : Commandes Récentes */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-800 mb-4">Dernières Demandes de Location</h3>
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-gray-600">
                    <thead className="bg-gray-50 text-xs uppercase font-semibold">
                        <tr>
                            <th className="p-3">Client</th>
                            <th className="p-3">Événement</th>
                            <th className="p-3">Date</th>
                            <th className="p-3">Statut</th>
                            <th className="p-3">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        <OrderRow client="Orange CI" event="Concert Didi B" date="25 Déc" status="Validé" color="green" />
                        <OrderRow client="Mme Koffi" event="Mariage Privé" date="02 Jan" status="En attente" color="orange" />
                        <OrderRow client="Wave" event="Promo Tour" date="14 Jan" status="Brouillon" color="gray" />
                        <OrderRow client="District Woroba" event="Voeux 2026" date="20 Jan" status="En attente" color="orange" />
                    </tbody>
                </table>
            </div>
        </div>

        {/* COLONNE DROITE : Alerte Stock */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-800 mb-4">État du Stock (Critique)</h3>
            <div className="space-y-4">
                <StockItem name="Ecran LED P3" total={50} dispo={5} />
                <StockItem name="Micro Shure SM58" total={20} dispo={2} />
                <StockItem name="Lyre Beam 7R" total={40} dispo={35} />
                <StockItem name="Podium Modulaire" total={100} dispo={80} />
            </div>
            <button className="w-full mt-6 py-2 text-sm text-purple-600 font-medium border border-purple-100 rounded-lg hover:bg-purple-50">
                Voir tout l'inventaire
            </button>
        </div>

      </div>
    </div>
  );
}

// --- PETITS COMPOSANTS POUR RENDRE LE CODE PROPRE ---

function StatCard({ title, value, sub, icon }) {
    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start justify-between">
            <div>
                <p className="text-gray-500 text-xs uppercase font-bold tracking-wider mb-1">{title}</p>
                <h3 className="text-2xl font-bold text-gray-800 mb-1">{value}</h3>
                <p className="text-xs text-green-600 font-medium">{sub}</p>
            </div>
            <div className="p-3 bg-gray-50 rounded-lg">{icon}</div>
        </div>
    );
}

function OrderRow({ client, event, date, status, color }) {
    const statusColors = {
        green: "bg-green-100 text-green-700",
        orange: "bg-orange-100 text-orange-700",
        gray: "bg-gray-100 text-gray-700",
    };

    return (
        <tr className="hover:bg-gray-50 transition-colors">
            <td className="p-3 font-medium text-gray-800">{client}</td>
            <td className="p-3">{event}</td>
            <td className="p-3">{date}</td>
            <td className="p-3">
                <span className={`px-2 py-1 rounded-full text-xs font-bold ${statusColors[color]}`}>
                    {status}
                </span>
            </td>
            <td className="p-3">
                <button className="text-gray-400 hover:text-black">•••</button>
            </td>
        </tr>
    );
}

function StockItem({ name, total, dispo }) {
    const percentage = (dispo / total) * 100;
    const isCritical = percentage < 20;

    return (
        <div>
            <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-gray-700">{name}</span>
                <span className={isCritical ? "text-red-500 font-bold" : "text-gray-500"}>
                    {dispo} / {total} Dispo
                </span>
            </div>
            <div className="w-full bg-gray-100 rounded-full h-2">
                <div 
                    className={`h-2 rounded-full ${isCritical ? 'bg-red-500' : 'bg-green-500'}`} 
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
        </div>
    );
}