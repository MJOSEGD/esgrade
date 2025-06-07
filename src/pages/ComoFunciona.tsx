
import React, { useState } from 'react';
import { CheckCircle, ArrowRight, Play, Clock, Users, Target } from 'lucide-react';

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
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
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
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop"
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
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
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
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=400&fit=crop"
    }
  ];

  const features = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "95% Menos Tiempo",
      description: "Comparado con consultorías tradicionales"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Sin Consultores",
      description: "Todo el proceso es autónomo y automatizado"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "100% Personalizado",
      description: "Adaptado a tu sector y tamaño de empresa"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="section-padding gradient-bg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="brutalist-text mb-8">
            CÓMO<br />
            <span className="text-esg-lime">FUNCIONA</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto">
            El proceso más simple y rápido para obtener tu certificación ESG
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-esg-lime mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="section-padding bg-esg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-esg-black mb-6">
              TU VIAJE <span className="text-esg-lime">ESG</span> PASO A PASO
            </h2>
            <p className="text-xl text-esg-dark max-w-3xl mx-auto">
              Un proceso probado que ha ayudado a más de 500 empresas a obtener su certificación ESG
            </p>
          </div>

          {/* Timeline Navigation */}
          <div className="flex justify-center mb-12">
            <div className="flex space-x-4 p-2 bg-esg-gray border-2 border-esg-black">
              {steps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`px-6 py-3 font-bold transition-all duration-300 ${
                    activeStep === index
                      ? 'bg-esg-lime text-esg-black'
                      : 'bg-transparent text-esg-black hover:bg-esg-black hover:text-white'
                  }`}
                >
                  {step.number}
                </button>
              ))}
            </div>
          </div>

          {/* Active Step Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-6xl font-black text-esg-lime">
                  {steps[activeStep].number}
                </span>
                <div>
                  <h3 className="text-3xl font-black text-esg-black">
                    {steps[activeStep].title}
                  </h3>
                  <p className="text-esg-dark font-semibold">
                    Duración: {steps[activeStep].duration}
                  </p>
                </div>
              </div>

              <p className="text-lg text-esg-dark mb-8 leading-relaxed">
                {steps[activeStep].description}
              </p>

              <div className="space-y-4">
                {steps[activeStep].details.map((detail, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-esg-dark">{detail}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex space-x-4">
                {activeStep < steps.length - 1 && (
                  <button
                    onClick={() => setActiveStep(activeStep + 1)}
                    className="btn-primary flex items-center space-x-2"
                  >
                    <span>Siguiente Paso</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                )}
                <button className="btn-secondary flex items-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>Ver Demo</span>
                </button>
              </div>
            </div>

            <div>
              <img
                src={steps[activeStep].image}
                alt={steps[activeStep].title}
                className="w-full h-96 object-cover border-4 border-esg-black hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Benefits */}
      <section className="section-padding bg-esg-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-esg-black mb-6">
              ¿POR QUÉ NUESTRO <span className="text-esg-lime">PROCESO</span>?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Automatización Completa",
                description: "Sin dependencia de consultores externos ni largos procesos manuales",
                metric: "95% automatizado"
              },
              {
                title: "Resultados Garantizados",
                description: "Metodología probada con tasa de éxito del 98% en certificaciones",
                metric: "98% éxito"
              },
              {
                title: "Cumplimiento CSRD",
                description: "Generación automática de informes que cumplen 100% con la normativa",
                metric: "100% compliant"
              },
              {
                title: "Soporte Continuo",
                description: "Asistencia experta disponible 24/7 durante todo el proceso",
                metric: "24/7 disponible"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white border-4 border-esg-black p-6 text-center hover-lift">
                <div className="text-3xl font-black text-esg-lime mb-4">
                  {benefit.metric}
                </div>
                <h3 className="text-xl font-bold text-esg-black mb-4">
                  {benefit.title}
                </h3>
                <p className="text-esg-dark text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-esg-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            ¿LISTO PARA <span className="text-esg-lime">EMPEZAR</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Únete a las 500+ empresas que ya han transformado su estrategia ESG
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="btn-primary text-lg px-12 py-6">
              Empieza Tu Diagnóstico Gratis
            </button>
            <button className="btn-secondary text-lg px-12 py-6">
              Habla con un Experto
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComoFunciona;
