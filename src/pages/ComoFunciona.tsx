
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Shield, TrendingUp, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const ComoFunciona = () => {
  const steps = [
    {
      number: "01",
      title: "Diagnóstico ESG Gratuito",
      description: "Evaluamos tu situación actual ESG en menos de 15 minutos con nuestra IA avanzada",
      features: ["Análisis automático", "Identificación de gaps", "Recomendaciones personalizadas"],
      icon: <Shield className="w-12 h-12" />
    },
    {
      number: "02", 
      title: "Hoja de Ruta Personalizada",
      description: "Creamos tu plan de acción ESG específico basado en tu sector y objetivos",
      features: ["Plan paso a paso", "Cronograma realista", "KPIs específicos"],
      icon: <TrendingUp className="w-12 h-12" />
    },
    {
      number: "03",
      title: "Implementación Guiada",
      description: "Te acompañamos en cada paso con nuestra plataforma intuitiva y soporte experto",
      features: ["Dashboard en tiempo real", "Alertas automáticas", "Soporte 24/7"],
      icon: <Users className="w-12 h-12" />
    },
    {
      number: "04",
      title: "Certificación Oficial",
      description: "Obtienes tu certificado ESG oficial y cumples con normativas europeas",
      features: ["Certificado ESG válido", "Informe CSRD", "Auditoría incluida"],
      icon: <Zap className="w-12 h-12" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cómo Funciona ESGrade® | Proceso Certificación ESG Automática Paso a Paso</title>
        <meta name="description" content="Descubre cómo funciona ESGrade®: 4 pasos simples para obtener tu certificación ESG oficial. Diagnóstico gratuito, hoja de ruta personalizada e implementación guiada." />
        <meta name="keywords" content="como funciona ESGrade, proceso certificación ESG, pasos certificado ESG, diagnóstico ESG gratuito, implementación ESG automática" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Cómo Funciona ESGrade® | Proceso Certificación ESG Automática" />
        <meta property="og:description" content="4 pasos simples para obtener tu certificación ESG oficial con ESGrade®. Diagnóstico gratuito, implementación guiada y certificación automática." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://esgrade.org/como-funciona" />
        
        {/* Twitter */}
        <meta name="twitter:title" content="Cómo Funciona ESGrade® | Proceso Certificación ESG" />
        <meta name="twitter:description" content="4 pasos simples para obtener tu certificación ESG oficial con ESGrade®" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "Cómo obtener certificación ESG con ESGrade",
          "description": "Proceso paso a paso para obtener certificación ESG oficial",
          "step": steps.map((step, index) => ({
            "@type": "HowToStep",
            "position": index + 1,
            "name": step.title,
            "text": step.description
          }))
        })}
        </script>
      </Helmet>

      <div className="min-h-screen pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-esg-primary text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-black mb-6">
              CÓMO <span className="text-esg-gray-dark">FUNCIONA</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
              De 0 a certificación ESG oficial en 4 pasos simples. Sin consultores costosos, sin complicaciones.
            </p>
            <Link 
              to="/contacto" 
              className="inline-block bg-white text-esg-primary font-bold py-4 px-8 rounded-none border-2 border-white transition-all duration-300 hover:bg-esg-primary hover:text-white hover:border-esg-primary text-lg"
            >
              Empezar Ahora
            </Link>
          </div>
        </section>

        {/* Breadcrumbs */}
        <nav className="bg-slate-50 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ol className="flex items-center space-x-2 text-sm text-slate-600">
              <li><Link to="/" className="hover:text-esg-primary">Inicio</Link></li>
              <li className="text-slate-400">/</li>
              <li className="text-slate-800 font-medium">Cómo Funciona</li>
            </ol>
          </div>
        </nav>

        {/* Steps Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-esg-gray-dark mb-6">
                PROCESO <span className="text-esg-primary">REVOLUCIONARIO</span>
              </h2>
              <p className="text-xl text-esg-gray-dark max-w-3xl mx-auto">
                Automatizamos todo el proceso de certificación ESG para que te enfoques en lo importante
              </p>
            </div>

            <div className="space-y-20">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}
                >
                  <div className="flex-1">
                    <div className="flex items-center mb-6">
                      <div className="bg-esg-primary text-white rounded-full w-16 h-16 flex items-center justify-center mr-6">
                        <span className="text-2xl font-black">{step.number}</span>
                      </div>
                      <div className="text-esg-primary">
                        {step.icon}
                      </div>
                    </div>
                    <h3 className="text-3xl font-black text-esg-gray-dark mb-4">
                      {step.title}
                    </h3>
                    <p className="text-xl text-esg-gray-dark mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    <ul className="space-y-3">
                      {step.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="w-6 h-6 text-esg-primary flex-shrink-0" />
                          <span className="text-esg-gray-dark font-semibold">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex-1">
                    <div className="bg-esg-gray-dark text-white p-8 rounded-2xl">
                      <div className="h-64 flex items-center justify-center">
                        <div className="text-6xl opacity-20">{step.icon}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-esg-gray-dark text-white text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              ¿LISTO PARA <span className="text-esg-primary">EMPEZAR</span>?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Únete a más de 500 empresas que ya transformaron su estrategia ESG
            </p>
            <Link 
              to="/contacto" 
              className="inline-block bg-esg-primary text-white font-bold py-4 px-8 rounded-none border-2 border-esg-primary transition-all duration-300 hover:bg-white hover:text-esg-primary hover:border-white text-lg"
            >
              Diagnóstico Gratuito
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default ComoFunciona;
