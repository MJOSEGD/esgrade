
import React, { useState } from 'react';
import { CheckCircle, ArrowRight, Play, Clock, Users, Target, Sparkles, Zap, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const ComoFunciona = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "01",
      title: "Diagnóstico Inteligente",
      duration: "2-3 días",
      description: "Evaluamos automáticamente tu situación actual ESG mediante cuestionarios inteligentes y análisis de datos",
      details: [
        "Cuestionario adaptativo personalizado",
        "Análisis automático de gaps ESG",
        "Identificación de oportunidades",
        "Benchmark con tu sector"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      gradient: "from-blue-600 to-purple-600"
    },
    {
      number: "02",
      title: "Plan Personalizado",
      duration: "1 día",
      description: "Generamos tu hoja de ruta ESG personalizada con objetivos claros, plazos y recursos necesarios",
      details: [
        "Roadmap ESG específico para tu empresa",
        "Objetivos SMART definidos",
        "Asignación de recursos y responsables",
        "Cronograma de implementación"
      ],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
      gradient: "from-emerald-600 to-teal-600"
    },
    {
      number: "03",
      title: "Implementación Guiada",
      duration: "30-90 días",
      description: "Te acompañamos paso a paso en la ejecución con tareas específicas, recordatorios y validación automática",
      details: [
        "Tareas específicas semana a semana",
        "Recordatorios y notificaciones",
        "Validación automática de progreso",
        "Soporte experto cuando lo necesites"
      ],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      gradient: "from-orange-600 to-red-600"
    },
    {
      number: "04",
      title: "Certificación y Reporte",
      duration: "7 días",
      description: "Obtienes tu certificado ESG oficial y generamos automáticamente tu informe CSRD completo",
      details: [
        "Certificado ESG oficial verificado",
        "Informe CSRD generado automáticamente",
        "Dashboard de monitoreo continuo",
        "Actualizaciones regulares de compliance"
      ],
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=400&fit=crop",
      gradient: "from-violet-600 to-purple-600"
    }
  ];

  const features = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "95% Menos Tiempo",
      description: "Comparado con consultorías tradicionales",
      color: "text-blue-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Sin Consultores",
      description: "Todo el proceso es autónomo y automatizado",
      color: "text-emerald-600"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "100% Personalizado",
      description: "Adaptado a tu sector y tamaño de empresa",
      color: "text-purple-600"
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-esg-primary via-blue-600 to-purple-600"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <Sparkles className="w-5 h-5 text-yellow-300" />
            <span className="text-white font-semibold">Proceso Revolucionario</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-8 text-white leading-tight">
            CÓMO<br />
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              FUNCIONA
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
            El proceso más simple y rápido para obtener tu certificación ESG.<br />
            <span className="text-yellow-300 font-semibold">Automatizado, inteligente y eficaz.</span>
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                <div className={`${feature.color} mb-4 flex justify-center`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-esg-primary to-blue-600 rounded-full px-6 py-3 mb-6">
              <TrendingUp className="w-5 h-5 text-white" />
              <span className="text-white font-semibold">Metodología Probada</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              TU VIAJE <span className="bg-gradient-to-r from-esg-primary to-blue-600 bg-clip-text text-transparent">ESG</span><br />
              PASO A PASO
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Un proceso probado que ha ayudado a más de <span className="font-bold text-esg-primary">500 empresas</span> a obtener su certificación ESG
            </p>
          </div>

          {/* Timeline Navigation */}
          <div className="flex justify-center mb-16">
            <div className="flex space-x-2 p-2 bg-gray-100 rounded-2xl border-2 border-gray-200">
              {steps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`px-8 py-4 font-bold rounded-xl transition-all duration-300 ${
                    activeStep === index
                      ? 'bg-gradient-to-r from-esg-primary to-blue-600 text-white shadow-lg scale-105'
                      : 'bg-transparent text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {step.number}
                </button>
              ))}
            </div>
          </div>

          {/* Active Step Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-6">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${steps[activeStep].gradient} flex items-center justify-center shadow-lg`}>
                  <span className="text-2xl font-black text-white">
                    {steps[activeStep].number}
                  </span>
                </div>
                <div>
                  <h3 className="text-4xl font-black text-gray-900 leading-tight">
                    {steps[activeStep].title}
                  </h3>
                  <div className="flex items-center space-x-2 mt-2">
                    <Clock className="w-5 h-5 text-gray-500" />
                    <p className="text-gray-600 font-semibold">
                      Duración: {steps[activeStep].duration}
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-xl text-gray-700 leading-relaxed">
                {steps[activeStep].description}
              </p>

              <div className="space-y-4">
                {steps[activeStep].details.map((detail, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl border border-gray-200 hover:bg-gray-100 transition-colors duration-200">
                    <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{detail}</span>
                  </div>
                ))}
              </div>

              <div className="flex space-x-4 pt-4">
                {activeStep < steps.length - 1 && (
                  <button
                    onClick={() => setActiveStep(activeStep + 1)}
                    className="inline-flex items-center space-x-3 bg-gradient-to-r from-esg-primary to-blue-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <span>Siguiente Paso</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                )}
                <button className="inline-flex items-center space-x-3 bg-gray-100 text-gray-700 font-bold py-4 px-8 rounded-xl border-2 border-gray-200 transition-all duration-300 hover:bg-gray-200 hover:scale-105">
                  <Play className="w-5 h-5" />
                  <span>Ver Demo</span>
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl transform rotate-3 scale-105 opacity-20"></div>
              <img
                src={steps[activeStep].image}
                alt={steps[activeStep].title}
                className="relative w-full h-96 object-cover rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Benefits */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full px-6 py-3 mb-6">
              <Zap className="w-5 h-5 text-white" />
              <span className="text-white font-semibold">Ventajas Exclusivas</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              ¿POR QUÉ NUESTRO <br />
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">PROCESO</span>?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Automatización Completa",
                description: "Sin dependencia de consultores externos ni largos procesos manuales",
                metric: "95%",
                gradient: "from-blue-500 to-cyan-500",
                icon: <Zap className="w-8 h-8" />
              },
              {
                title: "Resultados Garantizados",
                description: "Metodología probada con tasa de éxito del 98% en certificaciones",
                metric: "98%",
                gradient: "from-green-500 to-emerald-500",
                icon: <Target className="w-8 h-8" />
              },
              {
                title: "Cumplimiento CSRD",
                description: "Generación automática de informes que cumplen 100% con la normativa",
                metric: "100%",
                gradient: "from-purple-500 to-violet-500",
                icon: <CheckCircle className="w-8 h-8" />
              },
              {
                title: "Soporte Continuo",
                description: "Asistencia experta disponible 24/7 durante todo el proceso",
                metric: "24/7",
                gradient: "from-orange-500 to-red-500",
                icon: <Users className="w-8 h-8" />
              }
            ].map((benefit, index) => (
              <div key={index} className="group bg-white rounded-3xl p-8 shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:scale-105">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${benefit.gradient} flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                  {benefit.icon}
                </div>
                <div className={`text-4xl font-black bg-gradient-to-r ${benefit.gradient} bg-clip-text text-transparent mb-4`}>
                  {benefit.metric}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <Sparkles className="w-5 h-5 text-yellow-300" />
            <span className="text-white font-semibold">Únete a la Revolución ESG</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
            ¿LISTO PARA <br />
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">EMPEZAR</span>?
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Únete a las <span className="font-bold text-yellow-300">500+ empresas</span> que ya han transformado su estrategia ESG<br />
            con nuestra metodología revolucionaria
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/contacto"
              className="inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-esg-primary to-blue-600 text-white font-bold py-5 px-10 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl text-lg"
            >
              <Zap className="w-6 h-6" />
              <span>Empieza Tu Diagnóstico Gratis</span>
            </Link>
            <Link 
              to="/contacto"
              className="inline-flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm text-white font-bold py-5 px-10 rounded-xl border-2 border-white/30 transition-all duration-300 hover:bg-white/20 hover:scale-105 text-lg"
            >
              <Users className="w-6 h-6" />
              <span>Habla con un Experto</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComoFunciona;
