import React, { useEffect, useState } from 'react';
import { ArrowRight, Shield, TrendingUp, FileText, CheckCircle, Play, Zap, BarChart3, Users, Eye, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const stats = [
    { value: 'IA', label: 'Diagnóstico ESG' },
    { value: 'CSRD', label: 'Informes Automáticos' },
    { value: '5x', label: 'Más Rápido' },
  ];

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
  ];

  const testimonials = [
    {
      quote: "ESGrade ha transformado nuestra estrategia ESG. Ahora podemos medir y comunicar nuestro impacto de manera efectiva.",
      author: "Juan Pérez, CEO de EcoTech",
      company: "EcoTech",
      image: "/lovable-uploads/team-01.jpg"
    },
    {
      quote: "La plataforma es intuitiva y fácil de usar. Nos ha ahorrado tiempo y recursos en la elaboración de informes CSRD.",
      author: "María García, Directora de Sostenibilidad",
      company: "Green Solutions",
      image: "/lovable-uploads/team-02.jpg"
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden relative">
      {/* Custom Cursor */}
      <div 
        className="fixed w-6 h-6 bg-esg-primary rounded-full pointer-events-none z-50 transition-transform duration-100 ease-out mix-blend-difference"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `translate(0, 0) scale(1)`,
        }}
      />

      {/* Floating Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-esg-primary rounded-full floating opacity-30" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-esg-lime rounded-full floating opacity-20" style={{animationDelay: '1s'}} />
        <div className="absolute bottom-40 left-20 w-1 h-1 bg-esg-primary rounded-full floating opacity-40" style={{animationDelay: '2s'}} />
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-esg-lime rounded-full floating opacity-25" style={{animationDelay: '3s'}} />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-esg-gray-dark text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-esg-gray-dark via-esg-dark to-esg-gray-dark opacity-90" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-esg-primary/20 border border-esg-primary rounded-none text-esg-lime text-sm font-bold">
                  PLATAFORMA LÍDER ESG
                </div>
                <h1 className="text-5xl md:text-7xl font-black leading-tight">
                  CERTIFICA TU
                  <span className="block text-esg-primary glitch" data-text="SOSTENIBILIDAD">
                    SOSTENIBILIDAD
                  </span>
                  <span className="block text-esg-lime">SIN CONSULTORES</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                  La primera plataforma que guía a las pymes paso a paso para obtener 
                  su <span className="text-esg-primary font-bold">certificado ESG</span> e 
                  <span className="text-esg-lime font-bold"> informe CSRD</span> automáticamente.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contacto" 
                  className="group btn-primary inline-flex items-center space-x-2 pulse-glow"
                >
                  <span>Demo Gratuita</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="group btn-secondary inline-flex items-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>Ver Cómo Funciona</span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-esg-primary/30">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group cursor-pointer">
                    <div className="text-2xl md:text-3xl font-black text-esg-primary group-hover:text-esg-lime transition-colors">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-300 mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right side visual element */}
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-esg-primary to-esg-lime rounded-none transform rotate-3 hover:rotate-6 transition-transform duration-500" />
              <div className="absolute inset-0 w-full h-96 bg-esg-gray-dark border-4 border-esg-primary transform -rotate-3 hover:rotate-0 transition-transform duration-500 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Shield className="w-16 h-16 text-esg-primary mx-auto" />
                  <h3 className="text-2xl font-black text-white">Certificación</h3>
                  <p className="text-esg-lime font-bold">100% Automatizada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-esg-gray-dark mb-6">
              TRANSFORMA TU EMPRESA CON <span className="text-esg-primary">NUESTRAS</span>
            </h2>
            <p className="text-xl text-esg-gray-dark max-w-3xl mx-auto">
              Funcionalidades diseñadas para impulsar tu estrategia ESG
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-white border-4 border-esg-gray-dark p-6 transition-all duration-500 hover:border-esg-primary hover:-translate-y-4 hover:shadow-2xl cursor-pointer"
              >
                <div className="text-esg-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-black text-esg-gray-dark mb-2 group-hover:text-esg-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-esg-gray-dark mb-4 leading-relaxed">
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
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section-padding bg-esg-gray-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              CÓMO <span className="text-esg-primary">FUNCIONA</span>
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              La certificación ESG en 3 pasos simples
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="bg-esg-primary text-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <span className="text-3xl font-black">01</span>
              </div>
              <TrendingUp className="text-esg-primary w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Diagnóstico ESG</h3>
              <p className="text-gray-300">Evaluamos tu situación actual con IA</p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="bg-esg-primary text-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <span className="text-3xl font-black">02</span>
              </div>
              <FileText className="text-esg-primary w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Plan de Acción</h3>
              <p className="text-gray-300">Creamos tu hoja de ruta personalizada</p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="bg-esg-primary text-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <span className="text-3xl font-black">03</span>
              </div>
              <Award className="text-esg-primary w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Certificación</h3>
              <p className="text-gray-300">Obtén tu certificado ESG oficial</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-esg-gray-dark mb-6">
              LO QUE DICEN <span className="text-esg-primary">NUESTROS CLIENTES</span>
            </h2>
            <p className="text-xl text-esg-gray-dark max-w-3xl mx-auto">
              Más de 500 empresas ya confían en ESGrade
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-esg-gray-dark p-8 text-white rounded-none">
                <p className="text-lg italic mb-4">"{testimonial.quote}"</p>
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="w-12 h-12 rounded-full object-cover" 
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.author}</h4>
                    <p className="text-sm text-gray-300">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-esg-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            ¿LISTO PARA EMPEZAR?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Únete a más de 500 empresas que ya transformaron su estrategia ESG
          </p>
          <Link 
            to="/contacto" 
            className="btn-primary inline-block"
          >
            Demo Gratuita
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
