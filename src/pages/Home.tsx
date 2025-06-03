
import React, { useEffect, useState } from 'react';
import { ArrowDown, CheckCircle, TrendingUp, Shield, FileText, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import ESGScoreWidget from '../components/ESGScoreWidget';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const benefits = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Certificación ESG",
      description: "Obtén tu certificado oficial en tiempo récord con nuestra metodología probada"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Dashboard Inteligente",
      description: "Monitorea tus KPIs ESG en tiempo real con análisis predictivo avanzado"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Informe CSRD",
      description: "Genera automáticamente tu informe de sostenibilidad conforme a CSRD"
    }
  ];

  const stats = [
    { number: "500+", label: "Empresas Certificadas" },
    { number: "95%", label: "Tiempo Ahorrado" },
    { number: "€50K", label: "Ahorro Promedio" },
    { number: "24h", label: "Tiempo de Setup" }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg">
        {/* Parallax Background Elements */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <div className="absolute top-20 left-10 w-32 h-32 border-4 border-esg-lime animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-esg-lime opacity-50 rounded-full"></div>
          <div className="absolute bottom-40 left-1/4 w-16 h-16 border-2 border-white rotate-45"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-up">
            <h1 className="brutalist-text text-white mb-8">
              SIN<br />
              <span className="text-esg-lime">CONSULTORES</span><br />
              SIN<br />
              <span className="text-esg-lime">COMPLICACIONES</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
              La única plataforma inteligente que guía a tu pyme paso a paso para obtener 
              <span className="text-esg-lime font-bold"> tu certificado ESG</span> e 
              <span className="text-esg-lime font-bold"> informe CSRD</span> de forma autónoma.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <Link to="/contacto" className="btn-primary text-lg px-12 py-6">
                <span className="flex items-center space-x-2">
                  <Zap className="w-5 h-5" />
                  <span>Empieza Gratis</span>
                </span>
              </Link>
              <Link to="/como-funciona" className="btn-secondary text-lg px-12 py-6">
                Ver Demo en Vivo
              </Link>
            </div>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-black text-esg-lime mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-300 font-semibold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-esg-lime" />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-esg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-esg-black mb-6">
              CERTIFICACIÓN +<br />
              <span className="text-esg-dark">SOLUCIÓN +</span><br />
              <span className="text-esg-lime">INFORME</span>
            </h2>
            <p className="text-xl text-esg-dark max-w-3xl mx-auto">
              Todo lo que necesitas para cumplir con CSRD y destacar como empresa sostenible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-esg-white border-4 border-esg-black p-8 hover-lift group"
              >
                <div className="text-esg-lime mb-6 group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-black text-esg-black mb-4">
                  {benefit.title}
                </h3>
                <p className="text-esg-dark leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with ESG Widget */}
      <section className="section-padding bg-esg-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-esg-black mb-6">
                ¿LISTO PARA<br />
                <span className="text-esg-lime">TRANSFORMAR</span><br />
                TU EMPRESA?
              </h2>
              <p className="text-xl text-esg-dark mb-8 leading-relaxed">
                Únete a más de 500 empresas que ya han revolucionado su estrategia 
                ESG con nuestra plataforma. Empieza hoy mismo, sin riesgo.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-esg-dark font-semibold">Setup en menos de 24 horas</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-esg-dark font-semibold">Sin compromiso de permanencia</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-esg-dark font-semibold">Soporte experto incluido</span>
                </div>
              </div>

              <Link to="/contacto" className="btn-primary text-lg inline-block">
                Empezar Gratis Ahora
              </Link>
            </div>

            <div className="flex justify-center">
              <ESGScoreWidget 
                score={85}
                title="Tu Futuro Score ESG"
                subtitle="Proyección en 90 días"
                animated={true}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Journey Preview */}
      <section className="section-padding bg-esg-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-12">
            TU VIAJE <span className="text-esg-lime">ESG</span> EN 4 PASOS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Diagnóstico", desc: "Evaluamos tu situación actual" },
              { step: "02", title: "Plan", desc: "Creamos tu hoja de ruta personalizada" },
              { step: "03", title: "Implementación", desc: "Te guiamos paso a paso" },
              { step: "04", title: "Certificación", desc: "Obtienes tu certificado oficial" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl font-black text-esg-lime mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link to="/como-funciona" className="btn-secondary text-lg">
              Ver Proceso Completo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
