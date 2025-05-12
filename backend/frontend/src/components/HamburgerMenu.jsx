import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mobile-nav">
      <button 
        className="hamburger" 
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Меню"
      >
        <div className={isOpen ? 'line open' : 'line'}></div>
        <div className={isOpen ? 'line open' : 'line'}></div>
        <div className={isOpen ? 'line open' : 'line'}></div>
      </button>
      
      {isOpen && (
        <div className="mobile-menu">
          <nav>
            <a href="/blog" onClick={() => setIsOpen(false)}>Блог</a>
            <a href="/about" onClick={() => setIsOpen(false)}>О нас</a>
            <ThemeToggle />
          </nav>
        </div>
      )}
    </div>
  );
}