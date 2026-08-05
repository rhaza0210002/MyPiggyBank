"use client";

import React from 'react';
import AsideCards, { Transaction } from '@/components/features/Dashboard/AsideCards';
import styles from '@/components/features/Dashboard/Dashboard.module.css';

export default function DashboardPage() {
  // Données factices inspirées de ta maquette
  const reconcileItems: Transaction[] = [
    {
      id: '1',
      title: 'Supermarché',
      amount: '-25,000 €',
      date: '18 avril',
      type: 'expense',
    },
    {
      id: '2',
      title: 'Abonnement Musique',
      amount: '-9,99 €',
      date: '15 avril',
      type: 'expense',
    },
  ];

  const historyItems: Transaction[] = [
    {
      id: '1',
      title: 'Salaire',
      amount: '+1 500,00 €',
      date: '02 avril',
      type: 'income',
    },
    {
      id: '2',
      title: 'Facture Internet',
      amount: '-40,00 €',
      date: '28 mars',
      type: 'expense',
    },
  ];

  const handleStartReconcile = () => {
    // Action pour lancer le rapprochement
    console.log('Lancement du rapprochement bancaire');
  };

  const handleViewAllHistory = () => {
    // Action pour voir tout l'historique
    console.log("Affichage de l'historique complet");
  };

  return (
    <main className={styles.dashboardPage}>
      <div className={styles.dashboardInner}>
        <AsideCards
          reconcileItems={reconcileItems}
          historyItems={historyItems}
          onStartReconcile={handleStartReconcile}
          onViewAllHistory={handleViewAllHistory}
          balance="1 234,56 €"
          encouragingMessage="Tu tiens la bonne voie !"
        />
      </div>
    </main>
  );
}