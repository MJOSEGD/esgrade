
import React, { useState } from 'react';
import { CheckCircle, ArrowRight, Play, Clock, Users, Target, Sparkles, Zap, Shield, Star, FileText } from 'lucide-react';

const ComoFunciona = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: "01",
      title: "Diagnóstico Inteligente",
      duration: "2-3 días",
      description: "Evaluamos automáticamente tu situación actual ESG mediante cuestionarios inteligentes y análisis de datos avanzados",
      details: [
        "Cuestionario adaptativo personalizado según tu sector",
        "Análisis automático de gaps ESG con IA",
        "Identificación de oportunidades de mejora",
        "Benchmark inteligente con empresas de tu industria"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      icon: <Zap className="w-8 h-8" />
    },
    {
      number: "02",
      title: "Plan Personalizado",
      duration: "1 día",
      description: "Generamos tu hoja de ruta ESG personalizada con objetivos claros, plazos realistas y recursos necesarios",
      details: [
        "Roadmap ESG específico para tu empresa y sector",
        "Objetivos SMART con métricas claras y alcanzables",
        "Asignación inteligente de recursos y responsables",
        "Cronograma detallado de implementación por fases"
      ],
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
      icon: <FileText className="w-8 h-8" />
    },
    {
      number: "03",
      title: "Implementación Guiada",
      duration: "30-90 días",
      description: "Te acompañamos paso a paso en la ejecución con tareas específicas, recordatorios inteligentes y validación automática",
      details: [
        "Tareas específicas organizadas semana a semana",
        "Recordatorios automáticos y notificaciones inteligentes",
        "Validación automática de progreso con IA",
        "Soporte experto disponible cuando lo necesites"
      ],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      icon: <Users className="w-8 h-8" />
    },
    {
      number: "04",
      title: "Certificación y Reporte",
      duration: "7 días",
      description: "Obtienes tu certificado ESG oficial y generamos automáticamente tu informe CSRD completo y verificado",
      details: [
        "Certificado ESG oficial verificado por expertos",
        "Informe CSRD generado automáticamente",
        "Dashboard de monitoreo continuo en tiempo real",
        "Actualizaciones automáticas de compliance normativo"
      ],
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=400&fit=crop",
      icon: <Shield className="w-8 h-8" />
    }
  ];

  const features = [
    {
      icon: <Clock className="w-8 h-8" />,
      title: "95% Menos Tiempo",
      description: "Comparado con consultorías tradicionales",
      metric: "95%",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Proceso Autónomo",
      description: "Sin dependencia de consultores externos",
      metric: "100%",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Totalmente Personalizado",
      description: "Adaptado a tu sector y tamaño",
      metric: "∞",
      color: "from-purple-500 to-purple-600"
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 via-transparent to-green-500/20" />
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Sparkles className="w-8 h-8 text-blue-400 animate-bounce" />
              <span className="text-blue-400 font-semibold text-lg tracking-wide">PROCESO REVOLUCIONARIO</span>
              <Sparkles className="w-8 h-8 text-blue-400 animate-bounce" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-white via-blue-100 to-green-100 bg-clip-text text-transparent leading-tight">
              CÓMO
              <span className="block text-blue-400 mt-4">FUNCIONA</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              El proceso más <span className="text-blue-400 font-bold">simple</span>, <span className="text-green-400 font-bold">rápido</span> y <span className="text-purple-400 font-bold">efectivo</span> para obtener tu certificación ESG
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {features.map((feature, index) => (
                <div key={index} className="group text-center relative">
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${feature.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-2xl`}>
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="text-4xl font-black text-blue-400 mb-2">{feature.metric}</div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-green-100 px-6 py-3 rounded-full border border-blue-200 mb-6">
              <Star className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-semibold text-slate-700">METODOLOGÍA PROBADA</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-6">
              TU VIAJE <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">ESG</span> PASO A PASO
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Un proceso científicamente diseñado que ha ayudado a más de <span className="font-bold text-blue-600">500+ empresas</span> a obtener su certificación ESG
            </p>
          </div>

          {/* Timeline Navigation */}
          <div className="flex justify-center mb-16">
            <div className="flex space-x-2 p-2 bg-white rounded-2xl shadow-xl border border-slate-200">
              {steps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`relative px-8 py-4 font-bold transition-all duration-300 rounded-xl ${
                    activeStep === index
                      ? 'bg-gradient-to-r from-blue-600 to-green-600 text-white shadow-lg scale-105'
                      : 'bg-transparent text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <span className="relative z-10">{step.number}</span>
                  {activeStep === index && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-600 rounded-xl opacity-20 animate-pulse" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Active Step Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-6">
                <div className={`p-4 bg-gradient-to-r ${
                  activeStep === 0 ? 'from-blue-500 to-blue-600' :
                  activeStep === 1 ? 'from-green-500 to-green-600' :
                  activeStep === 2 ? 'from-purple-500 to-purple-600' :
                  'from-orange-500 to-orange-600'
                } rounded-2xl shadow-lg`}>
                  <div className="text-white">
                    {steps[activeStep].icon}
                  </div>
                </div>
                <div>
                  <div className="text-6xl font-black bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-2">
                    {steps[activeStep].number}
                  </div>
                  <h3 className="text-3xl font-black text-slate-800">
                    {steps[activeStep].title}
                  </h3>
                  <div className="flex items-center space-x-2 mt-2">
                    <Clock className="w-5 h-5 text-slate-500" />
                    <p className="text-slate-600 font-semibold">
                      Duración: {steps[activeStep].duration}
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-lg text-slate-600 leading-relaxed bg-slate-50 p-6 rounded-2xl border border-slate-200">
                {steps[activeStep].description}
              </p>

              <div className="space-y-4">
                {steps[activeStep].details.map((detail, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-slate-700 leading-relaxed group-hover:text-slate-900 transition-colors">
                      {detail}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                {activeStep < steps.length - 1 && (
                  <button
                    onClick={() => setActiveStep(activeStep + 1)}
                    className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-green-600 text-white font-bold px-8 py-4 rounded-xl hover:from-blue-700 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    <span>Siguiente Paso</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                )}
                <button className="inline-flex items-center space-x-3 bg-white text-slate-700 font-bold px-8 py-4 rounded-xl border-2 border-slate-200 hover:border-blue-300 hover:text-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <Play className="w-5 h-5" />
                  <span>Ver Demo Interactiva</span>
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-white hover:scale-105 transition-transform duration-500">
                <img
                  src={steps[activeStep].image}
                  alt={steps[activeStep].title}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center shadow-2xl">
                <span className="text-white font-black text-2xl">{steps[activeStep].number}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Benefits */}
      <section className="py-24 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-6">
              ¿POR QUÉ NUESTRO <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">PROCESO</span>?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Resultados comprobados que transforman empresas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Automatización Completa",
                description: "Sin dependencia de consultores externos ni largos procesos manuales. Todo está optimizado por IA.",
                metric: "95%",
                icon: <Zap className="w-8 h-8" />,
                color: "from-blue-500 to-blue-600"
              },
              {
                title: "Resultados Garantizados",
                description: "Metodología científicamente probada con tasa de éxito del 98% en certificaciones ESG.",
                metric: "98%",
                icon: <Target className="w-8 h-8" />,
                color: "from-green-500 to-green-600"
              },
              {
                title: "Cumplimiento CSRD",
                description: "Generación automática de informes que cumplen 100% con la normativa europea vigente.",
                metric: "100%",
                icon: <Shield className="w-8 h-8" />,
                color: "from-purple-500 to-purple-600"
              },
              {
                title: "Soporte Continuo",
                description: "Asistencia experta disponible 24/7 durante todo el proceso de implementación.",
                metric: "24/7",
                icon: <Users className="w-8 h-8" />,
                color: "from-orange-500 to-orange-600"
              }
            ].map((benefit, index) => (
              <div key={index} className="group relative bg-white rounded-3xl shadow-xl border border-slate-200/50 p-8 text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-green-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${benefit.color} rounded-2xl mb-6 shadow-lg`}>
                    <div className="text-white">
                      {benefit.icon}
                    </div>
                  </div>
                  
                  <div className="text-4xl font-black bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-4">
                    {benefit.metric}
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-800 mb-4">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500/20 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 mb-6">
              <Sparkles className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-semibold text-blue-100">ÚNETE AL FUTURO</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              ¿LISTO PARA <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">EMPEZAR</span>?
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Únete a las <span className="font-bold text-blue-400">500+ empresas</span> que ya han transformado su estrategia ESG con nosotros
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-gradient-to-r from-blue-600 to-green-600 text-white font-bold text-lg px-12 py-6 rounded-xl hover:from-blue-700 hover:to-green-700 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105">
              Empieza Tu Diagnóstico Gratis
            </button>
            <button className="bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white font-bold text-lg px-12 py-6 rounded-xl hover:bg-white/20 transition-all duration-300 shadow-xl hover:shadow-2xl">
              Habla con un Experto
            </button>
          </div>
          
          <p className="text-sm text-slate-400 mt-6">
            ✓ Sin compromiso ✓ Diagnóstico gratuito ✓ Resultados en 48h
          </p>
        </div>
      </section>
    </div>
  );
};

export default ComoFunciona;
