import React from 'react';
import { Rocket, Shield, TrendingUp, FileText, BarChart3, Users, Zap, Eye, CheckCircle, ArrowRight, Sparkles, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const ComoFunciona = () => {
  const steps = [
    {
      step: "01",
      title: "Diagnóstico Inicial",
      description: "Evaluamos tu situación actual con herramientas de análisis de datos y machine learning.",
      icon: <Eye className="w-8 h-8" />,
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      step: "02",
      title: "Planificación Estratégica",
      description: "Creamos una hoja de ruta personalizada para alcanzar tus objetivos ESG.",
      icon: <FileText className="w-8 h-8" />,
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      step: "03",
      title: "Implementación y Seguimiento",
      description: "Te guiamos paso a paso en la implementación de tu estrategia, con seguimiento continuo.",
      icon: <Zap className="w-8 h-8" />,
      gradient: "from-orange-500 to-red-500"
    },
    {
      step: "04",
      title: "Certificación y Reporte",
      description: "Obtén tu certificación oficial y genera informes de sostenibilidad automáticamente.",
      icon: <Shield className="w-8 h-8" />,
      gradient: "from-purple-500 to-violet-500"
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-white">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <Rocket className="w-5 h-5 text-yellow-300" />
            <span className="text-white font-semibold">Metodología Probada</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-8 text-white leading-tight">
            CÓMO <br />
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              FUNCIONA
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
            Nuestro proceso paso a paso te guía desde la evaluación inicial hasta la<br />
            <span className="text-yellow-300 font-semibold">certificación ESG oficial</span>
          </p>
          
          <Link 
            to="/contacto" 
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold py-5 px-10 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl text-lg"
          >
            <Star className="w-6 h-6" />
            <span>Comienza Ahora</span>
          </Link>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-esg-primary to-blue-600 rounded-full px-6 py-3 mb-6">
              <TrendingUp className="w-5 h-5 text-white" />
              <span className="text-white font-semibold">Proceso Optimizado</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              TRANSFORMA TU <br />
              <span className="bg-gradient-to-r from-esg-primary to-blue-600 bg-clip-text text-transparent">ESTRATEGIA ESG</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              De la evaluación a la certificación en 4 pasos simples
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((item, index) => (
              <div key={index} className="text-center group cursor-pointer relative">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${item.gradient} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <span className="text-2xl font-black text-white">{item.step}</span>
                </div>
                <div className="text-esg-gray-dark mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-esg-primary transition-colors">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
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

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-esg-primary to-blue-600 rounded-full px-6 py-3 mb-6">
              <Zap className="w-5 h-5 text-white" />
              <span className="text-white font-semibold">Plataforma Completa</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              TODO LO QUE <br />
              <span className="bg-gradient-to-r from-esg-primary to-blue-600 bg-clip-text text-transparent">NECESITAS</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Desde la evaluación inicial hasta la certificación, todo integrado en una sola plataforma
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Certificación ESG Automatizada", 
                desc: "Obtén tu certificado ESG oficial siguiendo nuestra metodología probada paso a paso", 
                icon: <Shield className="w-10 h-10" /> 
              },
              { 
                title: "Dashboard Inteligente", 
                desc: "Monitorea todos tus KPIs ESG en tiempo real con análisis predictivo", 
                icon: <BarChart3 className="w-10 h-10" /> 
              },
              { 
                title: "Informe CSRD Automático", 
                desc: "Genera tu informe de sostenibilidad conforme a la normativa CSRD europea", 
                icon: <FileText className="w-10 h-10" /> 
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg border border-gray-200 transition-all duration-500 hover:shadow-2xl hover:scale-105 cursor-pointer">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-esg-primary to-blue-600 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-black text-esg-gray-dark mb-4">{feature.title}</h3>
                <p className="text-gray-700">{feature.desc}</p>
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
            <Sparkles className="w-5 h-5 text-yellow-300" />
            <span className="text-white font-semibold">Resultados Comprobados</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
            ¿LISTO PARA <br />
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">EMPEZAR</span>?
          </h2>
          
          <p className="text-xl text-gray-200 mb-12 leading-relaxed">
            Únete a más de <span className="font-bold text-yellow-300">500 empresas</span> que ya transformaron su estrategia ESG<br />
            con nuestra plataforma revolucionaria
          </p>
          
          <Link 
            to="/contacto" 
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold py-5 px-10 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl text-lg"
          >
            <Rocket className="w-6 h-6" />
            <span>Solicita una Demo</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ComoFunciona;
