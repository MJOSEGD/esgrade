import React, { useState } from 'react';
import { Check, X, Zap, Crown, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const Precios = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      icon: <Zap className="w-8 h-8" />,
      price: { monthly: 0, annual: 0 },
      description: "Ideal para empresas que comienzan su viaje ESG",
      features: [
        "Evaluación ESG básica",
        "Dashboard simplificado",
        "1 usuario",
        "Soporte por email",
        "Acceso a recursos básicos"
      ],
      limitations: [
        "Sin certificación oficial",
        "Sin informe CSRD",
        "Funciones limitadas"
      ],
      cta: "Empezar Gratis",
      popular: false,
      color: "border-esg-gray-dark"
    },
    {
      name: "Growth",
      icon: <Crown className="w-8 h-8" />,
      price: { monthly: 299, annual: 2390 },
      description: "Para empresas serias sobre ESG y sostenibilidad",
      features: [
        "Evaluación ESG completa",
        "Dashboard avanzado con IA",
        "Hasta 5 usuarios",
        "Certificación ESG oficial",
        "Informe CSRD automático",
        "Análisis de riesgos",
        "Soporte prioritario",
        "Integración con APIs"
      ],
      limitations: [],
      cta: "Empezar Prueba",
      popular: true,
      color: "border-esg-primary"
    },
    {
      name: "Enterprise",
      icon: <Rocket className="w-8 h-8" />,
      price: { monthly: 799, annual: 6390 },
      description: "Solución completa para grandes organizaciones",
      features: [
        "Todo de Growth +",
        "Usuarios ilimitados",
        "Múltiples certificaciones",
        "White-label disponible",
        "Gestión multi-empresa",
        "Consultoría ESG incluida",
        "Soporte 24/7 dedicado",
        "Integraciones personalizadas",
        "Entrenamientos on-site"
      ],
      limitations: [],
      cta: "Contactar Ventas",
      popular: false,
      color: "border-esg-gray-dark"
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-white">
      {/* Hero Section */}
      <section className="bg-slate-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            PRECIOS <span className="text-esg-primary">TRANSPARENTES</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
            Elige el plan perfecto para tu empresa. Sin sorpresas, sin letras pequeñas.
          </p>
          
          {/* Toggle Monthly/Annual */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`font-semibold ${!isAnnual ? 'text-esg-primary' : 'text-gray-400'}`}>
              Mensual
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${
                isAnnual ? 'bg-esg-primary' : 'bg-gray-600'
              }`}
            >
              <div
                className={`absolute w-6 h-6 bg-white rounded-full top-1 transition-transform duration-300 ${
                  isAnnual ? 'translate-x-9' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`font-semibold ${isAnnual ? 'text-esg-primary' : 'text-gray-400'}`}>
              Anual
            </span>
            {isAnnual && (
              <span className="bg-esg-primary text-white px-3 py-1 rounded-full text-sm font-bold">
                Ahorra 20%
              </span>
            )}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`relative bg-white border-4 ${plan.color} p-8 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl ${
                  plan.popular ? 'scale-105 border-esg-primary shadow-xl' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-esg-primary text-white px-6 py-2 rounded-full text-sm font-bold">
                      MÁS POPULAR
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className={`text-esg-primary mb-4 flex justify-center ${plan.popular ? 'text-esg-primary' : ''}`}>
                    {plan.icon}
                  </div>
                  <h3 className="text-3xl font-black text-esg-gray-dark mb-4">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-5xl font-black text-esg-gray-dark">
                      €{isAnnual ? Math.round(plan.price.annual / 12) : plan.price.monthly}
                    </span>
                    <span className="text-gray-600">/mes</span>
                    {isAnnual && plan.price.annual > 0 && (
                      <div className="text-sm text-gray-500 line-through">
                        €{plan.price.monthly}/mes
                      </div>
                    )}
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-esg-primary flex-shrink-0" />
                      <span className="text-esg-gray-dark">{feature}</span>
                    </div>
                  ))}
                  {plan.limitations.map((limitation, idx) => (
                    <div key={idx} className="flex items-center space-x-3 opacity-60">
                      <X className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      <span className="text-gray-600">{limitation}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contacto"
                  className={`w-full block text-center font-bold py-4 px-6 border-2 transition-all duration-300 ${
                    plan.popular
                      ? 'bg-esg-primary text-white border-esg-primary hover:bg-esg-primary-dark'
                      : 'bg-transparent text-esg-primary border-esg-primary hover:bg-esg-primary hover:text-white'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black text-center mb-16">
            PREGUNTAS <span className="text-esg-primary">FRECUENTES</span>
          </h2>
          
          <div className="space-y-8">
            {[
              {
                q: "¿Puedo cambiar de plan en cualquier momento?",
                a: "Sí, puedes actualizar o degradar tu plan en cualquier momento. Los cambios se reflejan inmediatamente."
              },
              {
                q: "¿Qué incluye el soporte?",
                a: "Todos los planes incluyen soporte técnico. Growth y Enterprise tienen soporte prioritario y 24/7 respectivamente."
              },
              {
                q: "¿Hay descuentos para organizaciones sin fines de lucro?",
                a: "Sí, ofrecemos descuentos especiales para ONGs y organizaciones sin fines de lucro. Contacta con ventas."
              },
              {
                q: "¿Puedo cancelar en cualquier momento?",
                a: "Absolutamente. No hay compromisos de permanencia. Puedes cancelar tu suscripción cuando quieras."
              }
            ].map((faq, index) => (
              <div key={index} className="border-b border-esg-primary pb-6">
                <h3 className="text-xl font-bold mb-4 text-esg-primary">{faq.q}</h3>
                <p className="text-gray-300 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-esg-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            ¿NECESITAS UNA SOLUCIÓN PERSONALIZADA?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contacta con nuestro equipo para una propuesta adaptada a tus necesidades específicas
          </p>
          <Link 
            to="/contacto" 
            className="inline-block bg-white text-esg-primary font-bold py-4 px-8 rounded-none border-2 border-white transition-all duration-300 hover:bg-esg-primary hover:text-white hover:border-esg-primary text-lg"
          >
            Contactar Ventas
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Precios;
