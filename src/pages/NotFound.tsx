
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <Helmet>
        <title>Página No Encontrada - Error 404 | ESGrade®</title>
        <meta name="description" content="La página que buscas no existe. Regresa a ESGrade® para acceder a nuestra plataforma de certificación ESG automática y recursos de sostenibilidad." />
        <meta name="robots" content="noindex, follow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Página No Encontrada - Error 404 | ESGrade®" />
        <meta property="og:description" content="La página que buscas no existe en ESGrade®. Regresa a nuestro sitio principal." />
        <meta property="og:type" content="website" />
        
        {/* Twitter */}
        <meta name="twitter:title" content="Página No Encontrada - ESGrade®" />
        <meta name="twitter:description" content="La página que buscas no existe en ESGrade®" />
      </Helmet>

      <div className="min-h-screen pt-20 bg-white flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* 404 Visual */}
          <div className="mb-8">
            <div className="text-9xl font-black text-esg-primary mb-4">404</div>
            <div className="w-32 h-1 bg-esg-primary mx-auto"></div>
          </div>

          {/* Content */}
          <h1 className="text-4xl md:text-5xl font-black text-esg-gray-dark mb-6">
            PÁGINA NO <span className="text-esg-primary">ENCONTRADA</span>
          </h1>
          
          <p className="text-xl text-esg-gray-dark mb-8 leading-relaxed">
            Lo sentimos, la página que buscas no existe o ha sido movida. 
            Pero no te preocupes, tenemos muchas otras páginas útiles para ti.
          </p>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
            <Link 
              to="/"
              className="group bg-esg-primary text-white p-6 transition-all duration-300 hover:bg-esg-primary-dark hover:-translate-y-2 hover:shadow-xl"
            >
              <Home className="w-8 h-8 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold mb-2">Ir al Inicio</h3>
              <p className="text-sm opacity-90">Regresa a nuestra página principal</p>
            </Link>

            <Link 
              to="/blog"
              className="group bg-white border-2 border-esg-primary text-esg-primary p-6 transition-all duration-300 hover:bg-esg-primary hover:text-white hover:-translate-y-2 hover:shadow-xl"
            >
              <Search className="w-8 h-8 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold mb-2">Explorar Blog</h3>
              <p className="text-sm opacity-90">Descubre recursos ESG</p>
            </Link>

            <Link 
              to="/contacto"
              className="group bg-esg-gray-dark text-white p-6 transition-all duration-300 hover:bg-esg-gray-light hover:-translate-y-2 hover:shadow-xl"
            >
              <ArrowLeft className="w-8 h-8 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-bold mb-2">Contáctanos</h3>
              <p className="text-sm opacity-90">¿Necesitas ayuda?</p>
            </Link>
          </div>

          {/* Popular Pages */}
          <div className="bg-slate-50 p-8 rounded-2xl">
            <h2 className="text-2xl font-black text-esg-gray-dark mb-6">
              Páginas Populares
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link to="/como-funciona" className="text-esg-primary hover:text-esg-primary-dark font-semibold">
                Cómo Funciona
              </Link>
              <Link to="/funcionalidades" className="text-esg-primary hover:text-esg-primary-dark font-semibold">
                Funcionalidades
              </Link>
              <Link to="/precios" className="text-esg-primary hover:text-esg-primary-dark font-semibold">
                Precios
              </Link>
              <Link to="/recursos" className="text-esg-primary hover:text-esg-primary-dark font-semibold">
                Recursos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
