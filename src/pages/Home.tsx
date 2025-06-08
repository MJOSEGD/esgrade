
import React, { useEffect, useState } from 'react';
import { ArrowRight, Shield, TrendingUp, FileText, CheckCircle, Play, Zap, BarChart3, Users, Eye, Award, Star, Quote } from 'lucide-react';
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
    { value: 'IA', label: 'Diagnóstico ESG Automatizado', icon: <Zap className="w-6 h-6" /> },
    { value: 'CSRD', label: 'Informes Conformes UE', icon: <FileText className="w-6 h-6" /> },
    { value: '90%', label: 'Menos Tiempo vs Consultorías', icon: <TrendingUp className="w-6 h-6" /> },
  ];

  const features = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Certificación ESG Oficial Automatizada",
      description: "Obtén tu certificado ESG reconocido internacionalmente siguiendo nuestra metodología validada por auditores ESG certificados",
      highlights: ["Proceso 100% automatizado", "Certificado reconocido internacionalmente", "Metodología validada por auditores"],
      gradient: "from-esg-primary to-esg-primary-dark"
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Dashboard ESG Inteligente con IA",
      description: "Monitoriza todos tus KPIs de sostenibilidad en tiempo real con análisis predictivo e indicadores de riesgo automáticos",
      highlights: ["200+ métricas ESG automatizadas", "Análisis predictivo con IA", "Alertas de cumplimiento en tiempo real"],
      gradient: "from-esg-teal to-esg-primary"
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: "Informe CSRD Automático Conforme UE",
      description: "Genera automáticamente tu informe de sostenibilidad que cumple al 100% con la Directiva CSRD de la Unión Europea",
      highlights: ["100% conforme CSRD", "Generación automática", "Validación legal incluida"],
      gradient: "from-esg-lime to-esg-primary"
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Mapa de Doble Materialidad",
      description: "Sistema avanzado de evaluación de doble materialidad que identifica impactos y dependencias ESG críticas para tu negocio",
      highlights: ["Análisis de impactos financieros", "Evaluación de materialidad automática", "Mapeo de dependencias ESG"],
      gradient: "from-esg-primary-dark to-esg-teal"
    },
  ];

  const testimonials = [
    {
      quote: "ESGrade redujo nuestro tiempo de certificación ESG de 8 meses a 6 semanas. Ahora tenemos nuestro certificado oficial y cumplimos con CSRD sin contratar consultores externos.",
      author: "Director de Sostenibilidad",
      company: "Universidad América de Colombia",
      image: "/lovable-uploads/team-01.jpg",
      rating: 5
    },
    {
      quote: "La plataforma nos ahorró más de 50.000€ en consultorías ESG. El dashboard automatizado nos permite monitorizar nuestro impacto ambiental y social en tiempo real con una precisión excepcional.",
      author: "Raquel",
      company: "Auditorio de Tenerife",
      image: "/lovable-uploads/team-02.jpg",
      rating: 5
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden relative">
      {/* Enhanced Floating Elements */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <div className="absolute top-20 left-10 w-3 h-3 bg-esg-primary/30 rounded-full animate-pulse" />
        <div className="absolute top-40 right-20 w-2 h-2 bg-esg-lime/40 rounded-full animate-bounce" style={{animationDelay: '1s'}} />
        <div className="absolute bottom-40 left-20 w-4 h-4 bg-esg-teal/20 rounded-full animate-pulse" style={{animationDelay: '2s'}} />
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-esg-primary/25 rounded-full animate-bounce" style={{animationDelay: '3s'}} />
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-esg-primary/10 to-esg-lime/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-esg-teal/10 to-esg-primary/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
      </div>

      {/* Hero Section - Fixed overlap issue */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95" />
        
        {/* Hero Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(29, 181, 132, 0.3) 2px, transparent 0)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-esg-primary/20 to-esg-lime/20 border border-esg-primary/30 rounded-full backdrop-blur-sm">
                  <Star className="w-4 h-4 text-esg-lime" />
                  <span className="text-esg-lime text-sm font-bold tracking-wider">CERTIFICACIÓN ESG OFICIAL SIN CONSULTORES</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
                  <span className="block text-white">CERTIFICA TU</span>
                  <span className="block bg-gradient-to-r from-esg-primary to-esg-lime bg-clip-text text-transparent">
                    ESG Y CSRD
                  </span>
                  <span className="block text-esg-lime">AUTOMÁTICAMENTE</span>
                </h1>
                
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
                  La única plataforma que automatiza completamente tu <span className="text-esg-primary font-semibold">certificación ESG oficial</span> e 
                  <span className="text-esg-lime font-semibold"> informe CSRD conforme a la UE</span>. Diseñada para empresas que buscan sostenibilidad real sin consultorías costosas.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Link 
                  to="/contacto" 
                  className="group inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-esg-primary to-esg-primary-dark text-white font-bold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-esg-primary/25"
                >
                  <span>Empezar Certificación Gratis</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="group inline-flex items-center justify-center space-x-3 bg-transparent text-white font-bold py-4 px-8 rounded-full border-2 border-white/30 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white">
                  <Play className="w-5 h-5" />
                  <span>Ver Demo ESG</span>
                </button>
              </div>

              {/* Enhanced Trust Indicators */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 hover:border-esg-primary/50 transition-all duration-300 cursor-pointer">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="text-esg-primary group-hover:text-esg-lime transition-colors">
                        {stat.icon}
                      </div>
                      <div className="text-2xl md:text-3xl font-black text-white group-hover:text-esg-primary transition-colors">
                        {stat.value}
                      </div>
                    </div>
                    <div className="text-sm text-gray-300 leading-relaxed">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Certification Card - Moved to right and improved spacing */}
            <div className="relative flex justify-center xl:justify-end">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-br from-esg-primary to-esg-lime rounded-3xl transform rotate-3 hover:rotate-6 transition-transform duration-700 opacity-80" />
                <div className="relative bg-white/95 backdrop-blur-sm border-2 border-esg-primary/20 transform -rotate-3 hover:rotate-0 transition-transform duration-700 rounded-3xl shadow-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-esg-primary/5" />
                  <div className="relative p-12 text-center space-y-6">
                    <div className="mb-8">
                      <img 
                        src="/lovable-uploads/e8d05bf0-fda8-4a35-9fde-7dcd1bcec0c7.png" 
                        alt="ESGrade Logo" 
                        className="w-48 h-auto mx-auto drop-shadow-lg"
                      />
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-3xl font-black text-slate-800">Certificación ESG</h3>
                      <p className="text-esg-primary font-bold text-xl">100% Automatizada</p>
                      <div className="inline-flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-esg-lime fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Features Section */}
      <section className="relative py-24 bg-gradient-to-b from-white to-esg-gray/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-2 bg-esg-primary/10 rounded-full text-esg-primary font-semibold text-sm mb-6">
              TECNOLOGÍA LÍDER
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-esg-gray-dark mb-6 leading-tight">
              PLATAFORMA ESG <br />
              <span className="bg-gradient-to-r from-esg-primary to-esg-lime bg-clip-text text-transparent">REVOLUCIONARIA</span>
            </h2>
            <p className="text-xl text-esg-gray-dark/80 max-w-3xl mx-auto leading-relaxed">
              Funcionalidades avanzadas que convierten la sostenibilidad en ventaja competitiva
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-esg-primary/20 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-2xl font-black text-esg-gray-dark mb-4 group-hover:text-esg-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-esg-gray-dark/80 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <ul className="space-y-3">
                    {feature.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-esg-primary flex-shrink-0" />
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

      {/* Enhanced How It Works Section */}
      <section className="relative py-24 bg-gradient-to-br from-esg-gray-dark to-esg-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(45deg, rgba(29, 181, 132, 0.1) 25%, transparent 25%), linear-gradient(-45deg, rgba(29, 181, 132, 0.1) 25%, transparent 25%)`,
            backgroundSize: '60px 60px'
          }} />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              CERTIFICACIÓN ESG EN <br />
              <span className="bg-gradient-to-r from-esg-primary to-esg-lime bg-clip-text text-transparent">3 PASOS AUTOMÁTICOS</span>
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
              De diagnóstico a certificación oficial ESG en semanas, no meses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { step: "01", title: "Diagnóstico IA", desc: "Evaluamos tu situación ESG actual con inteligencia artificial en 200+ criterios internacionales", icon: <Eye className="w-8 h-8" />, color: "from-esg-primary to-esg-primary-dark" },
              { step: "02", title: "Plan Personalizado", desc: "Creamos tu roadmap ESG específico para tu sector con tareas priorizadas y plazos realistas", icon: <FileText className="w-8 h-8" />, color: "from-esg-teal to-esg-primary" },
              { step: "03", title: "Certificación Oficial", desc: "Obtienes tu certificado ESG reconocido + informe CSRD conforme UE automáticamente", icon: <Award className="w-8 h-8" />, color: "from-esg-lime to-esg-primary" }
            ].map((item, index) => (
              <div key={index} className="relative text-center group">
                <div className={`bg-gradient-to-br ${item.color} text-white rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                  <span className="text-3xl font-black">{item.step}</span>
                </div>
                
                <div className="text-esg-primary mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-esg-primary transition-colors">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.desc}</p>
                
                {index < 2 && (
                  <div className="hidden md:block absolute top-12 right-0 transform translate-x-1/2">
                    <ArrowRight className="w-8 h-8 text-esg-primary/50" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section className="relative py-24 bg-gradient-to-b from-white to-esg-gray/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-block px-6 py-2 bg-esg-primary/10 rounded-full text-esg-primary font-semibold text-sm mb-6">
              CASOS DE ÉXITO
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-esg-gray-dark mb-6 leading-tight">
              ORGANIZACIONES QUE YA <br />
              <span className="bg-gradient-to-r from-esg-primary to-esg-lime bg-clip-text text-transparent">TRANSFORMARON SU ESG</span>
            </h2>
            <p className="text-xl text-esg-gray-dark/80 max-w-3xl mx-auto leading-relaxed">
              Empresas e instituciones que ya obtuvieron su certificación ESG con ESGrade
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-esg-primary/5 to-esg-lime/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                  <Quote className="w-12 h-12 text-esg-primary/20 mb-6" />
                  
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-esg-lime fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-lg text-esg-gray-dark italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
                  
                  <div className="flex items-center space-x-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.author} 
                      className="w-16 h-16 rounded-full object-cover border-2 border-esg-primary/20" 
                    />
                    <div>
                      <h4 className="font-bold text-esg-gray-dark text-lg">{testimonial.author}</h4>
                      <p className="text-esg-primary font-semibold">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="relative py-24 bg-gradient-to-br from-esg-primary to-esg-primary-dark text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 50px 50px, rgba(255, 255, 255, 0.1) 2px, transparent 0)`,
            backgroundSize: '100px 100px'
          }} />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            ¿LISTO PARA TU <br />
            <span className="text-esg-lime">CERTIFICACIÓN ESG?</span>
          </h2>
          <p className="text-xl mb-8 opacity-90 leading-relaxed max-w-2xl mx-auto">
            Únete a las organizaciones que ya obtuvieron su certificado ESG oficial sin consultores costosos
          </p>
          <Link 
            to="/contacto" 
            className="inline-flex items-center space-x-3 bg-white text-esg-primary font-bold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl text-lg"
          >
            <span>Empezar Certificación Gratis</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
