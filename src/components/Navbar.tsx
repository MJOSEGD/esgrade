
import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('ES');

  const menuItems = [
    { name: 'Inicio', href: '/' },
    { name: 'Cómo Funciona', href: '/como-funciona' },
    { name: 'Funcionalidades', href: '/funcionalidades' },
    { name: 'Precios', href: '/precios' },
    { name: 'Recursos', href: '/recursos' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contacto', href: '/contacto' },
  ];

  const toggleLanguage = () => {
    setCurrentLanguage(currentLanguage === 'ES' ? 'EN' : 'ES');
    // TODO: Implement i18n language switching
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b-2 border-esg-primary z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/316b1e17-6481-4142-8cb2-c4f71588dd98.png" 
              alt="ESGrade Logo" 
              className="w-10 h-10 object-contain"
            />
            <span className="font-black text-2xl text-esg-gray-dark">ESGrade®</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-esg-gray-dark font-semibold hover:text-esg-primary transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-esg-primary group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Language Toggle & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-esg-gray-dark font-semibold hover:text-esg-primary transition-colors duration-300"
            >
              <span>{currentLanguage}</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            <Link
              to="/contacto"
              className="bg-esg-primary text-white font-bold py-3 px-6 rounded-none border-2 border-esg-primary transition-all duration-300 hover:bg-esg-primary-dark hover:border-esg-primary-dark text-sm"
            >
              Demo Gratuita
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-esg-gray-dark p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t-2 border-esg-primary">
          <div className="px-4 py-6 space-y-4">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block text-esg-gray-dark font-semibold text-lg hover:text-esg-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-esg-primary space-y-4">
              <button
                onClick={toggleLanguage}
                className="flex items-center space-x-1 text-esg-gray-dark font-semibold"
              >
                <span>{currentLanguage}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <Link
                to="/contacto"
                className="block bg-esg-primary text-white font-bold py-3 px-6 text-center transition-all duration-300 hover:bg-esg-primary-dark"
                onClick={() => setIsMenuOpen(false)}
              >
                Demo Gratuita
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
