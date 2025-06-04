
import React from 'react';
import { Shield, TrendingUp, FileText, BarChart3, Users, Zap, Eye, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Funcionalidades = () => {
  const features = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Certificación ESG Automatizada",
      description: "Obtén tu certificado ESG oficial siguiendo nuestra metodología probada paso a paso",
      highlights: ["Proceso guiado", "100% digital", "Certificado oficial"]
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Dashboard Inteligente",
      description: "Monitorea todos tus KPIs ESG en tiempo real con análisis predictivo",
      highlights: ["Métricas en vivo", "Análisis predictivo", "Alertas automáticas"]
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: "Informe CSRD Automático",
      description: "Genera tu informe de sostenibilidad conforme a la normativa CSRD europea",
      highlights: ["Cumplimiento CSRD", "Generación automática", "Exportación PDF"]
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Análisis de Riesgos",
      description: "Identifica y gestiona riesgos ESG con nuestro sistema de evaluación avanzado",
      highlights: ["Detección temprana", "Matriz de riesgos", "Plan de mitigación"]
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Gestión de Stakeholders",
      description: "Centraliza la comunicación y reportes para todos tus grupos de interés",
      highlights: ["Portal stakeholders", "Comunicación directa", "Reportes personalizados"]
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Automatización ESG",
      description: "Automatiza la recopilación de datos y generación de reportes ESG",
      highlights: ["Integración APIs", "Datos automáticos", "Reportes programados"]
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-white">
      {/* Hero Section */}
      <section className="bg-esg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            FUNCIONALIDADES<br />
            <span className="text-esg-gray-dark">REVOLUCIONARIAS</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
            Todo lo que necesitas para transformar tu estrategia ESG en una ventaja competitiva
          </p>
          <Link 
            to="/contacto" 
            className="inline-block bg-white text-esg-primary font-bold py-4 px-8 rounded-none border-2 border-white transition-all duration-300 hover:bg-esg-primary hover:text-white hover:border-esg-primary text-lg"
          >
            Prueba Gratis
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-esg-gray-dark mb-6">
              PLATAFORMA <span className="text-esg-primary">TODO-EN-UNO</span>
            </h2>
            <p className="text-xl text-esg-gray-dark max-w-3xl mx-auto">
              Desde la evaluación inicial hasta la certificación, todo integrado en una sola plataforma
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-white border-4 border-esg-gray-dark p-8 transition-all duration-500 hover:border-esg-primary hover:-translate-y-4 hover:shadow-2xl cursor-pointer relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-esg-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="text-esg-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-black text-esg-gray-dark mb-4 group-hover:text-esg-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-esg-gray-dark mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-esg-primary" />
                        <span className="text-sm font-semibold text-esg-gray-dark">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-esg-gray-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              PROCESO <span className="text-esg-primary">SIMPLIFICADO</span>
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              De la evaluación a la certificación en 4 pasos simples
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Diagnóstico", desc: "Evaluamos tu situación ESG actual con IA", icon: <Eye className="w-8 h-8" /> },
              { step: "02", title: "Planificación", desc: "Creamos tu hoja de ruta personalizada", icon: <FileText className="w-8 h-8" /> },
              { step: "03", title: "Implementación", desc: "Te guiamos paso a paso hacia tus objetivos", icon: <Zap className="w-8 h-8" /> },
              { step: "04", title: "Certificación", desc: "Obtienes tu certificado ESG oficial", icon: <Shield className="w-8 h-8" /> }
            ].map((item, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="bg-esg-primary text-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-black">{item.step}</span>
                </div>
                <div className="text-esg-primary mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-esg-primary transition-colors">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 right-0 transform translate-x-1/2">
                    <ArrowRight className="w-6 h-6 text-esg-primary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-esg-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            ¿LISTO PARA EMPEZAR?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Únete a más de 500 empresas que ya transformaron su estrategia ESG
          </p>
          <Link 
            to="/contacto" 
            className="inline-block bg-white text-esg-primary font-bold py-4 px-8 rounded-none border-2 border-white transition-all duration-300 hover:bg-esg-primary hover:text-white hover:border-esg-primary text-lg"
          >
            Demo Gratuita
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Funcionalidades;
