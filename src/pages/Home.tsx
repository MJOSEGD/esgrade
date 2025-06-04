
import React, { useEffect, useState } from 'react';
import { ArrowDown, CheckCircle, TrendingUp, Shield, FileText, Zap, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import ESGScoreWidget from '../components/ESGScoreWidget';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const benefits = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Certificación ESG",
      description: "Obtén tu certificado oficial en tiempo récord con nuestra metodología probada",
      color: "hover:bg-esg-primary hover:text-white"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Dashboard Inteligente",
      description: "Monitorea tus KPIs ESG en tiempo real con análisis predictivo avanzado",
      color: "hover:bg-esg-gray-dark hover:text-white"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Informe CSRD",
      description: "Genera automáticamente tu informe de sostenibilidad conforme a CSRD",
      color: "hover:bg-esg-primary hover:text-white"
    }
  ];

  const stats = [
    { number: "500+", label: "Empresas Certificadas", icon: "🏢" },
    { number: "95%", label: "Tiempo Ahorrado", icon: "⚡" },
    { number: "€50K", label: "Ahorro Promedio", icon: "💰" },
    { number: "24h", label: "Tiempo de Setup", icon: "🚀" }
  ];

  return (
    <div className="min-h-screen pt-20 overflow-hidden">
      {/* Dynamic cursor effect */}
      <div 
        className="fixed w-6 h-6 bg-esg-primary rounded-full pointer-events-none z-50 mix-blend-difference transition-all duration-100 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${scrollY > 100 ? 1.5 : 1})`
        }}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-esg-gray-dark text-white">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute top-20 left-10 w-32 h-32 border-4 border-esg-primary animate-pulse opacity-30"
            style={{ transform: `translateY(${scrollY * 0.3}px) rotate(${scrollY * 0.1}deg)` }}
          />
          <div 
            className="absolute top-40 right-20 w-24 h-24 bg-esg-primary opacity-20 rounded-full animate-bounce"
            style={{ transform: `translateY(${scrollY * -0.2}px)` }}
          />
          <div 
            className="absolute bottom-40 left-1/4 w-16 h-16 border-2 border-white rotate-45 animate-spin"
            style={{ animationDuration: '20s', transform: `translateY(${scrollY * 0.4}px)` }}
          />
          <div 
            className="absolute top-1/2 right-1/4 w-20 h-20 bg-esg-primary opacity-10"
            style={{ transform: `translateY(${scrollY * -0.3}px) rotate(${scrollY * -0.1}deg)` }}
          />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-esg-primary rounded-full opacity-30 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-up">
            {/* Glitch effect text */}
            <div className="relative mb-8">
              <h1 className="brutalist-text text-white mb-4 relative">
                SIN<br />
                <span className="text-esg-primary animate-pulse">CONSULTORES</span><br />
                SIN<br />
                <span className="text-esg-primary">COMPLICACIONES</span>
              </h1>
              <div className="absolute inset-0 brutalist-text text-esg-primary opacity-20 animate-ping">
                SIN<br />
                CONSULTORES<br />
                SIN<br />
                COMPLICACIONES
              </div>
            </div>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-up" style={{ animationDelay: '0.2s' }}>
              La única plataforma inteligente que guía a tu pyme paso a paso para obtener 
              <span className="text-esg-primary font-bold animate-pulse"> tu certificado ESG</span> e 
              <span className="text-esg-primary font-bold animate-pulse"> informe CSRD</span> de forma autónoma.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-up" style={{ animationDelay: '0.4s' }}>
              <Link 
                to="/contacto" 
                className="group bg-esg-primary text-white font-bold py-6 px-12 rounded-none border-2 border-esg-primary transition-all duration-300 hover:bg-white hover:text-esg-primary hover:scale-105 hover:shadow-2xl text-lg relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <Zap className="w-5 h-5 group-hover:animate-bounce" />
                  <span>Empieza Gratis</span>
                  <Sparkles className="w-4 h-4 group-hover:animate-spin" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-esg-primary to-esg-primary-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              <Link 
                to="/como-funciona" 
                className="group bg-transparent text-white font-bold py-6 px-12 rounded-none border-2 border-white transition-all duration-300 hover:bg-esg-primary hover:border-esg-primary hover:scale-105 hover:shadow-2xl text-lg"
              >
                <span className="group-hover:animate-pulse">Ver Demo en Vivo</span>
              </Link>
            </div>

            {/* Animated Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center group cursor-pointer transform transition-all duration-300 hover:scale-110"
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  <div className="text-4xl mb-2 group-hover:animate-bounce">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-black text-esg-primary mb-2 group-hover:animate-pulse">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-300 font-semibold group-hover:text-white transition-colors">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center animate-bounce">
            <span className="text-esg-primary text-sm font-bold mb-2 animate-pulse">DESCUBRE MÁS</span>
            <ArrowDown className="w-6 h-6 text-esg-primary animate-pulse" />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white relative overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-8 gap-4 h-full">
            {[...Array(64)].map((_, i) => (
              <div key={i} className="bg-esg-primary h-full animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-esg-gray-dark mb-6 relative">
              <span className="relative">
                CERTIFICACIÓN +<br />
                <span className="text-esg-gray-dark">SOLUCIÓN +</span><br />
                <span className="text-esg-primary animate-pulse">INFORME</span>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-esg-primary rounded-full animate-ping opacity-30" />
              </span>
            </h2>
            <p className="text-xl text-esg-gray-dark max-w-3xl mx-auto animate-fade-up">
              Todo lo que necesitas para cumplir con CSRD y destacar como empresa sostenible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className={`group bg-white border-4 border-esg-gray-dark p-8 transition-all duration-500 hover:border-esg-primary hover:-translate-y-4 hover:shadow-2xl cursor-pointer relative overflow-hidden ${benefit.color}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-esg-primary to-transparent opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="text-esg-primary mb-6 group-hover:scale-125 group-hover:animate-bounce transition-all duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-2xl font-black text-esg-gray-dark group-hover:text-inherit mb-4 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-esg-gray-dark group-hover:text-inherit leading-relaxed transition-colors duration-300">
                    {benefit.description}
                  </p>
                </div>
                <div className="absolute top-4 right-4 w-3 h-3 bg-esg-primary rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with ESG Widget */}
      <section className="section-padding bg-esg-gray-dark text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-40 h-40 border border-esg-primary rounded-full animate-spin opacity-20" style={{ animationDuration: '30s' }} />
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-esg-primary opacity-10 animate-pulse" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black mb-6">
                ¿LISTO PARA<br />
                <span className="text-esg-primary animate-pulse">TRANSFORMAR</span><br />
                TU EMPRESA?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Únete a más de 500 empresas que ya han revolucionado su estrategia 
                ESG con nuestra plataforma. Empieza hoy mismo, sin riesgo.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Setup en menos de 24 horas",
                  "Sin compromiso de permanencia",
                  "Soporte experto incluido"
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <CheckCircle className="w-6 h-6 text-esg-primary group-hover:animate-spin" />
                    <span className="font-semibold group-hover:text-esg-primary transition-colors">{item}</span>
                  </div>
                ))}
              </div>

              <Link 
                to="/contacto" 
                className="inline-block bg-esg-primary text-white font-bold py-4 px-8 rounded-none border-2 border-esg-primary transition-all duration-300 hover:bg-white hover:text-esg-primary hover:scale-105 hover:shadow-2xl text-lg"
              >
                Empezar Gratis Ahora
              </Link>
            </div>

            <div className="flex justify-center">
              <div className="transform hover:scale-105 transition-transform duration-300">
                <ESGScoreWidget 
                  score={85}
                  title="Tu Futuro Score ESG"
                  subtitle="Proyección en 90 días"
                  animated={true}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Journey Preview */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-12 text-esg-gray-dark">
            TU VIAJE <span className="text-esg-primary animate-pulse">ESG</span> EN 4 PASOS
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Diagnóstico", desc: "Evaluamos tu situación actual", color: "bg-esg-primary" },
              { step: "02", title: "Plan", desc: "Creamos tu hoja de ruta personalizada", color: "bg-esg-gray-dark" },
              { step: "03", title: "Implementación", desc: "Te guiamos paso a paso", color: "bg-esg-primary" },
              { step: "04", title: "Certificación", desc: "Obtienes tu certificado oficial", color: "bg-esg-gray-dark" }
            ].map((item, index) => (
              <div 
                key={index} 
                className="group text-center cursor-pointer transform transition-all duration-500 hover:scale-110"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-20 h-20 ${item.color} text-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-bounce`}>
                  <span className="text-2xl font-black">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-esg-gray-dark group-hover:text-esg-primary transition-colors">{item.title}</h3>
                <p className="text-gray-600 text-sm group-hover:text-esg-gray-dark transition-colors">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link 
              to="/como-funciona" 
              className="inline-block bg-transparent text-esg-primary font-bold py-4 px-8 rounded-none border-2 border-esg-primary transition-all duration-300 hover:bg-esg-primary hover:text-white hover:scale-105 hover:shadow-2xl text-lg"
            >
              Ver Proceso Completo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
