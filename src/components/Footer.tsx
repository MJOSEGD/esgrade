
import React from 'react';
import { Leaf, Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Producto',
      links: [
        { name: 'Cómo Funciona', href: '/como-funciona' },
        { name: 'Funcionalidades', href: '/funcionalidades' },
        { name: 'Precios', href: '/precios' },
        { name: 'Demo Gratuita', href: '/contacto' },
      ]
    },
    {
      title: 'Recursos',
      links: [
        { name: 'Blog', href: '/recursos' },
        { name: 'Guías ESG', href: '/recursos' },
        { name: 'CSRD Checklist', href: '/recursos' },
        { name: 'Webinars', href: '/recursos' },
      ]
    },
    {
      title: 'Empresa',
      links: [
        { name: 'Testimonios', href: '/testimonios' },
        { name: 'Casos de Éxito', href: '/testimonios' },
        { name: 'Partners', href: '/contacto' },
        { name: 'Prensa', href: '/recursos' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Política de Privacidad', href: '/legal' },
        { name: 'Términos de Uso', href: '/legal' },
        { name: 'FAQ CSRD', href: '/legal' },
        { name: 'Cookies', href: '/legal' },
      ]
    }
  ];

  return (
    <footer className="bg-esg-dark text-esg-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-esg-lime border-2 border-esg-lime"></div>
              <span className="font-black text-2xl">ESGrade®</span>
            </Link>
            <p className="text-gray-300 mb-6 text-sm leading-relaxed">
              La plataforma inteligente que guía a las pymes paso a paso para obtener 
              su certificado ESG e informe CSRD. Sin consultores, sin complicaciones.
            </p>
            
            {/* Carbon Neutral Badge */}
            <div className="flex items-center space-x-2 mb-6 p-3 bg-green-800/30 border border-esg-lime rounded-none">
              <Leaf className="w-5 h-5 text-esg-lime" />
              <span className="text-sm font-semibold text-esg-lime">
                Empresa Carbon Neutral
              </span>
            </div>

            {/* Contact Info */}
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>hola@esgrade.org</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+34 900 123 456</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Madrid, España</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="font-bold text-esg-lime mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-esg-lime transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-black text-xl text-esg-lime mb-2">
                Mantente al día con ESG
              </h3>
              <p className="text-gray-300 text-sm">
                Recibe las últimas actualizaciones sobre CSRD, tendencias ESG y mejores prácticas.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-4 py-3 bg-transparent border-2 border-gray-600 text-white placeholder-gray-400 focus:border-esg-lime focus:outline-none"
              />
              <button className="btn-primary whitespace-nowrap">
                Suscribirse
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} ESGrade®. Todos los derechos reservados.
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-esg-lime transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-esg-lime transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-esg-lime transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            {/* Language Toggle */}
            <div className="text-sm text-gray-400">
              <button className="hover:text-esg-lime transition-colors duration-300">
                ES
              </button>
              <span className="mx-2">|</span>
              <button className="hover:text-esg-lime transition-colors duration-300">
                EN
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
