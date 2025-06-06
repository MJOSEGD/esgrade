
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
    { value: 'IA', label: 'Diagnóstico ESG Automatizado' },
    { value: 'CSRD', label: 'Informes Conformes UE' },
    { value: '90%', label: 'Menos Tiempo vs Consultorías' },
  ];

  const features = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Certificación ESG Oficial Automatizada",
      description: "Obtén tu certificado ESG reconocido internacionalmente siguiendo nuestra metodología validada por auditores ESG certificados",
      highlights: ["Proceso 100% automatizado", "Certificado reconocido internacionalmente", "Metodología validada por auditores"]
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Dashboard ESG Inteligente con IA",
      description: "Monitoriza todos tus KPIs de sostenibilidad en tiempo real con análisis predictivo e indicadores de riesgo automáticos",
      highlights: ["200+ métricas ESG automatizadas", "Análisis predictivo con IA", "Alertas de cumplimiento en tiempo real"]
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: "Informe CSRD Automático Conforme UE",
      description: "Genera automáticamente tu informe de sostenibilidad que cumple al 100% con la Directiva CSRD de la Unión Europea",
      highlights: ["100% conforme CSRD", "Generación automática", "Validación legal incluida"]
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Gestión de Riesgos ESG Avanzada",
      description: "Sistema de evaluación de riesgos ESG que identifica amenazas de sostenibilidad antes de que impacten en tu negocio",
      highlights: ["Detección temprana de riesgos", "Matriz de materialidad automática", "Planes de mitigación personalizados"]
    },
  ];

  const testimonials = [
    {
      quote: "ESGrade redujo nuestro tiempo de certificación ESG de 8 meses a 6 semanas. Ahora tenemos nuestro certificado oficial y cumplimos con CSRD sin contratar consultores externos.",
      author: "Carlos Mendoza, CEO",
      company: "TechSolutions Madrid",
      image: "/lovable-uploads/team-01.jpg"
    },
    {
      quote: "La plataforma nos ahorró más de 50.000€ en consultorías ESG. El dashboard automatizado nos permite monitorizar nuestro impacto ambiental y social en tiempo real.",
      author: "Ana Ruiz, Directora de Sostenibilidad",
      company: "EcoManufacturing",
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
                  CERTIFICACIÓN ESG OFICIAL SIN CONSULTORES
                </div>
                <h1 className="text-5xl md:text-7xl font-black leading-tight">
                  CERTIFICA TU
                  <span className="block text-esg-primary glitch" data-text="ESG Y CSRD">
                    ESG Y CSRD
                  </span>
                  <span className="block text-esg-lime">AUTOMÁTICAMENTE</span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
                  La única plataforma que automatiza completamente tu <span className="text-esg-primary font-bold">certificación ESG oficial</span> e 
                  <span className="text-esg-lime font-bold"> informe CSRD conforme a la UE</span>. Diseñada para pymes que buscan sostenibilidad real sin consultorías costosas.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/contacto" 
                  className="group btn-primary inline-flex items-center space-x-2 pulse-glow"
                >
                  <span>Empezar Certificación Gratis</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="group btn-secondary inline-flex items-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>Ver Demo ESG</span>
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
                  <h3 className="text-2xl font-black text-white">Certificación ESG</h3>
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
              TECNOLOGÍA ESG <span className="text-esg-primary">LÍDER EN AUTOMATIZACIÓN</span>
            </h2>
            <p className="text-xl text-esg-gray-dark max-w-3xl mx-auto">
              Funcionalidades avanzadas que convierten la sostenibilidad en ventaja competitiva
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
              CERTIFICACIÓN ESG EN <span className="text-esg-primary">3 PASOS AUTOMÁTICOS</span>
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              De diagnóstico a certificación oficial ESG en semanas, no meses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="bg-esg-primary text-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <span className="text-3xl font-black">01</span>
              </div>
              <TrendingUp className="text-esg-primary w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Diagnóstico ESG Automatizado</h3>
              <p className="text-gray-300">IA evalúa tu situación actual ESG en 200+ criterios internacionales</p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="bg-esg-primary text-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <span className="text-3xl font-black">02</span>
              </div>
              <FileText className="text-esg-primary w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Plan de Acción ESG Personalizado</h3>
              <p className="text-gray-300">Roadmap específico para tu sector con tareas priorizadas</p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="bg-esg-primary text-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform duration-300">
                <span className="text-3xl font-black">03</span>
              </div>
              <Award className="text-esg-primary w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Certificación ESG Oficial + CSRD</h3>
              <p className="text-gray-300">Certificado reconocido + informe CSRD conforme UE automático</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-esg-gray-dark mb-6">
              CASOS DE ÉXITO <span className="text-esg-primary">CERTIFICACIONES ESG</span>
            </h2>
            <p className="text-xl text-esg-gray-dark max-w-3xl mx-auto">
              Empresas que ya transformaron su sostenibilidad con ESGrade
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
            ¿LISTO PARA TU CERTIFICACIÓN ESG?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Únete a las empresas que ya obtuvieron su certificado ESG oficial sin consultores
          </p>
          <Link 
            to="/contacto" 
            className="btn-primary inline-block"
          >
            Empezar Certificación Gratis
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
