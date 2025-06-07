import React from 'react';
import { Rocket, Sparkles, LayoutDashboard, FileText, ShieldCheck, Users, BarChart3, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      icon: <LayoutDashboard className="w-8 h-8" />,
      title: "Dashboard Inteligente",
      description: "Visualiza tus métricas ESG clave en tiempo real y toma decisiones informadas.",
      link: "/funcionalidades"
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Informes Automatizados",
      description: "Genera informes ESG completos y personalizados en segundos.",
      link: "/funcionalidades"
    },
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Certificación Simplificada",
      description: "Obtén tu certificación ESG de forma rápida y sencilla.",
      link: "/funcionalidades"
    }
  ];

  const testimonials = [
    {
      name: "Ana Pérez",
      company: "EcoTech Solutions",
      quote: "ESGrade nos ha permitido mejorar nuestra estrategia ESG y obtener resultados tangibles.",
      image: "/placeholder.svg"
    },
    {
      name: "Juan Gómez",
      company: "GreenFuture Investments",
      quote: "La plataforma es intuitiva y fácil de usar, lo que nos ha ahorrado mucho tiempo y recursos.",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <Rocket className="w-5 h-5 text-yellow-300" />
            <span className="text-white font-semibold">Impulsa tu Impacto ESG</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-8 text-white leading-tight">
            TRANSFORMA TU EMPRESA<br />
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              CON ESG
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
            La plataforma integral para gestionar tu estrategia ESG, <br />
            medir tu impacto y alcanzar tus objetivos de sostenibilidad.
          </p>
          
          <div className="flex items-center justify-center space-x-4">
            <Link 
              to="/contacto" 
              className="bg-esg-primary text-white font-bold py-5 px-10 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl text-lg"
            >
              Demo Gratuita
            </Link>
            <Link 
              to="/como-funciona" 
              className="inline-flex items-center space-x-3 text-white font-semibold py-5 px-8 rounded-xl transition-all duration-300 hover:scale-105"
            >
              <span>Descubre cómo funciona</span>
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-esg-primary to-blue-600 rounded-full px-6 py-3 mb-6">
              <Sparkles className="w-5 h-5 text-white" />
              <span className="text-white font-semibold">Funcionalidades Clave</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              GESTIONA, MIDE Y <br />
              <span className="bg-gradient-to-r from-esg-primary to-blue-600 bg-clip-text text-transparent">CERTIFICA</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Todo lo que necesitas para una estrategia ESG exitosa
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Link 
                key={index} 
                to={feature.link}
                className="group bg-white rounded-3xl p-8 shadow-lg border border-gray-200 transition-all duration-500 hover:shadow-2xl hover:scale-105 cursor-pointer"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-esg-primary to-blue-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-2 group-hover:text-esg-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-esg-primary to-blue-600 rounded-full px-6 py-3 mb-6">
              <Users className="w-5 h-5 text-white" />
              <span className="text-white font-semibold">Testimonios</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              LO QUE DICEN <br />
              <span className="bg-gradient-to-r from-esg-primary to-blue-600 bg-clip-text text-transparent">NUESTROS CLIENTES</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Empresas líderes que ya están transformando su impacto con ESGrade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200 transition-all duration-500 hover:shadow-2xl hover:scale-105"
              >
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full object-cover mr-4" 
                  />
                  <div>
                    <h4 className="text-xl font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-500">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-esg-primary via-blue-600 to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <BarChart3 className="w-5 h-5 text-yellow-300" />
            <span className="text-white font-semibold">Comienza a Medir tu Impacto</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
            ¿LISTO PARA <br />
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">TRANSFORMAR</span> TU EMPRESA?
          </h2>
          
          <p className="text-xl text-gray-200 mb-12 leading-relaxed">
            Únete a la revolución ESG y construye un futuro más sostenible
          </p>
          
          <Link 
            to="/contacto" 
            className="bg-esg-primary text-white font-bold py-5 px-10 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl text-lg"
          >
            Solicita una Demo
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
