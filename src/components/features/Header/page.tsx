
"use client";
import React from 'react';
import Link from 'next/link';

interface HeaderProps {
  userName?: string;
}

export default function Header({ userName = 'Mallaury' }: HeaderProps) {
  const navLinks = [
    {
      name: "Paramètres",
      href: "/settings",
      icon: "⚙️",
      isActive: false,
      ariaLabel: "Accéder aux paramètres du compte et d'accessibilité"
    },
    {
      name: "Notifications",
      href: "/notifications",
      icon: "🔔",
      isActive: false,
      ariaLabel: "Accéder aux notifications"
    },
    {
      name: "Profil",
      href: "/profile",
      icon: "👤",
      isActive: true,
      ariaLabel: "Accéder au profil"
    }
  ];

  return (
    <header className="w-[90%] mx-auto mt-2 p-1.5 rounded-xl bg-[#FFF5EE] border-b border-[#E5C4B4] shadow-xs sticky top-0 z-50">
      <div className="max-w-6xl rounded-xl mx-auto border-[0.12rem] border-[#E5C4B4] border-dashed flex items-center justify-between">

        {/* Logo / Nom de l'app */}
        <Link
          href="/dashboard"
          className="flex items-center gap-3 group focus:outline-hidden focus:ring-2 focus:ring-[#D97757] rounded-xl p-1"
        >
          <span className="text-2xl" role="img" aria-label="Tirelire">
            🐷
          </span>
          <span className="text-xl font-bold text-[#5A4D41] tracking-tight group-hover:text-[#D97757] transition-colors">
            My PiggyBank
          </span>
        </Link>

        {/* Message d'accueil / Navigation rapide */}
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-[#8C7A6B] hidden sm:inline">
            Coucou, <strong className="text-[#5A4D41]">{userName}</strong> ! 👋
          </span>
          <nav aria-label="Navigation secondaire" className="flex items-center gap-2">
            {navLinks
              .filter((item) => item.isActive)
              .map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-label={item.ariaLabel}
                  className="w-10 h-10 rounded-2xl flex items-center justify-center transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#D97757] bg-[#F8D5CB] text-[#C86445] ring-1 ring-[#D97757]"
                >
                  <span aria-hidden="true">{item.icon}</span>
                </Link>
              ))}
          </nav>

        </div>
      </div>
    </header>
  );
}