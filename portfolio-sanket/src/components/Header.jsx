import React, { useState } from 'react';
import '../styles/global.css';
import { content } from '../content';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
    { name: 'Resume', href: content.profile.resume, isExternal: true },
  ];

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      backgroundColor: 'rgba(251, 247, 240, 0.9)',
      backdropFilter: 'blur(5px)',
      borderBottom: '1px solid rgba(0,0,0,0.05)',
      zIndex: 1000,
      height: 'var(--header-height)'
    }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
        <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 'bold' }}>
          Sanket Naik <span style={{ color: 'var(--crimson)', fontSize: '0.8em' }}>●</span>
        </div>

        {/* Desktop Nav */}
        <nav className="desktop-nav" style={{ display: 'flex', gap: '2rem' }}>
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              target={link.isExternal ? "_blank" : "_self"}
              rel={link.isExternal ? "noopener noreferrer" : ""}
              style={{ fontSize: '0.95rem', letterSpacing: '0.05em' }}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Style Injection would handle hiding/showing desktop-nav based on media queries */}
        <style>{`
          @media (max-width: 768px) {
            .desktop-nav { display: none !important; }
          }
        `}</style>
      </div>
    </header>
  );
};

export default Header;