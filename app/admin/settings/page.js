"use client";

import React from 'react';
import { Save, CreditCard, Lock, Users, Bell, Globe } from 'lucide-react';

export default function SettingsPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8 pb-10">
      
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Paramètres Généraux</h1>
          <p className="text-gray-500 text-sm">Configurez votre plateforme MGROUP ERP.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors shadow-lg">
          <Save size={18} />
          <span>Enregistrer les modifications</span>
        </button>
      </div>

      {/* 1. INFO ENTREPRISE */}
      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
        <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
            <div className="p-2 bg-purple-100 text-purple-600 rounded-lg"><Globe size={20}/></div>
            <h2 className="font-bold text-lg text-gray-800">Informations Site & App</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Nom de la Plateforme</label>
                <input type="text" defaultValue="MGROUP Digital" className="w-full p-2 border border-gray-200 rounded-lg" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email de Contact (Support)</label>
                <input type="email" defaultValue="support@mgroup.ci" className="w-full p-2 border border-gray-200 rounded-lg" />
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Numéro Service Client</label>
                <input type="text" defaultValue="+225 07 00 00 00" className="w-full p-2 border border-gray-200 rounded-lg" />
            </div>
             <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Maintenance Mode</label>
                <select className="w-full p-2 border border-gray-200 rounded-lg">
                    <option value="off">Site Actif (En ligne)</option>
                    <option value="on">Site en Maintenance (Hors ligne)</option>
                </select>
            </div>
        </div>
      </div>

      {/* 2. MOYENS DE PAIEMENT */}
      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
        <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
            <div className="p-2 bg-orange-100 text-orange-600 rounded-lg"><CreditCard size={20}/></div>
            <h2 className="font-bold text-lg text-gray-800">Passerelles de Paiement</h2>
        </div>
        <div className="space-y-4">
            <ToggleOption title="Paiement Mobile Money (CinetPay)" desc="Accepter Wave, Orange Money, MTN." active={true} />
            <ToggleOption title="Paiement Carte Bancaire (Visa/Mastercard)" desc="Via Hub2 ou Stripe." active={true} />
            <ToggleOption title="Paiement à la livraison" desc="Permettre aux clients de payer sur place." active={false} />
        </div>
      </div>

      {/* 3. GESTION ÉQUIPE */}
      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
        <div className="flex items-center gap-3 mb-6 border-b border-gray-100 pb-4">
            <div className="p-2 bg-blue-100 text-blue-600 rounded-lg"><Users size={20}/></div>
            <h2 className="font-bold text-lg text-gray-800">Gestion des accès (Admin)</h2>
        </div>
        <div className="space-y-3">
             <UserRow name="Ibrahim K." role="Super Admin" email="ibrahim@dev.ci" />
             <UserRow name="Molare" role="Directeur" email="molare@mgroup.ci" />
             <UserRow name="Responsable Stock" role="Gestionnaire" email="stock@mgroup.ci" />
             <button className="text-sm text-purple-600 font-bold mt-4 hover:underline">+ Ajouter un employé</button>
        </div>
      </div>

    </div>
  );
}

// --- PETITS COMPOSANTS ---

function ToggleOption({ title, desc, active }) {
    return (
        <div className="flex justify-between items-center p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
            <div>
                <h4 className="font-bold text-gray-800">{title}</h4>
                <p className="text-xs text-gray-500">{desc}</p>
            </div>
            <div className={`w-12 h-6 rounded-full p-1 cursor-pointer transition-colors ${active ? 'bg-green-500' : 'bg-gray-300'}`}>
                <div className={`w-4 h-4 bg-white rounded-full shadow-sm transform transition-transform ${active ? 'translate-x-6' : 'translate-x-0'}`}></div>
            </div>
        </div>
    );
}

function UserRow({ name, role, email }) {
    return (
        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center font-bold text-xs text-gray-600">
                    {name.substring(0,2).toUpperCase()}
                </div>
                <div>
                    <p className="text-sm font-bold text-gray-800">{name}</p>
                    <p className="text-xs text-gray-500">{email}</p>
                </div>
            </div>
            <span className="text-xs font-medium bg-white px-2 py-1 rounded border border-gray-200">{role}</span>
        </div>
    )
}