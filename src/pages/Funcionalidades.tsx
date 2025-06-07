import React from 'react';
import { Shield, TrendingUp, FileText, BarChart3, Users, Zap, Eye, CheckCircle, ArrowRight, Sparkles, Star, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';

const Funcionalidades = () => {
  const features = [
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Certificación ESG Automatizada",
      description: "Obtén tu certificado ESG oficial siguiendo nuestra metodología probada paso a paso",
      highlights: ["Proceso guiado", "100% digital", "Certificado oficial"],
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Dashboard Inteligente",
      description: "Monitorea todos tus KPIs ESG en tiempo real con análisis predictivo",
      highlights: ["Métricas en vivo", "Análisis predictivo", "Alertas automáticas"],
      gradient: "from-emerald-600 to-teal-600"
    },
    {
      icon: <FileText className="w-12 h-12" />,
      title: "Informe CSRD Automático",
      description: "Genera tu informe de sostenibilidad conforme a la normativa CSRD europea",
      highlights: ["Cumplimiento CSRD", "Generación automática", "Exportación PDF"],
      gradient: "from-purple-600 to-violet-600"
    },
    {
      icon: <BarChart3 className="w-12 h-12" />,
      title: "Mapa de Doble Materialidad",
      description: "Identifica y gestiona riesgos ESG con nuestro sistema de evaluación avanzado",
      highlights: ["Detección temprana", "Matriz de riesgos", "Plan de mitigación"],
      gradient: "from-orange-600 to-red-600"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Gestión de Stakeholders",
      description: "Centraliza la comunicación y reportes para todos tus grupos de interés",
      highlights: ["Portal stakeholders", "Comunicación directa", "Reportes personalizados"],
      gradient: "from-pink-600 to-rose-600"
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Automatización ESG",
      description: "Automatiza la recopilación de datos y generación de reportes ESG",
      highlights: ["Integración APIs", "Datos automáticos", "Reportes programados"],
      gradient: "from-indigo-600 to-purple-600"
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <Rocket className="w-5 h-5 text-yellow-300" />
            <span className="text-white font-semibold">Tecnología Avanzada</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-8 text-white leading-tight">
            FUNCIONALIDADES<br />
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              REVOLUCIONARIAS
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
            Todo lo que necesitas para transformar tu estrategia ESG en una<br />
            <span className="text-yellow-300 font-semibold">ventaja competitiva definitiva</span>
          </p>
          
          <Link 
            to="/contacto" 
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold py-5 px-10 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl text-lg"
          >
            <Star className="w-6 h-6" />
            <span>Prueba Gratis</span>
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-esg-primary to-blue-600 rounded-full px-6 py-3 mb-6">
              <Zap className="w-5 h-5 text-white" />
              <span className="text-white font-semibold">Plataforma Completa</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
              PLATAFORMA <br />
              <span className="bg-gradient-to-r from-esg-primary to-blue-600 bg-clip-text text-transparent">TODO-EN-UNO</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Desde la evaluación inicial hasta la certificación, todo integrado en una sola plataforma
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="group bg-white rounded-3xl p-8 shadow-lg border border-gray-200 transition-all duration-500 hover:shadow-2xl hover:scale-105 cursor-pointer relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl`} />
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300" style={{backgroundImage: `linear-gradient(to right, ${feature.gradient.split(' ')[1]}, ${feature.gradient.split(' ')[3]})`}}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-3">
                    {feature.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${feature.gradient} flex items-center justify-center`}>
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-sm font-semibold text-gray-800">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-6">
              <TrendingUp className="w-5 h-5 text-yellow-300" />
              <span className="text-white font-semibold">Proceso Optimizado</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">
              PROCESO <br />
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">SIMPLIFICADO</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              De la evaluación a la certificación en 4 pasos simples
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { 
                step: "01", 
                title: "Diagnóstico", 
                desc: "Evaluamos tu situación ESG actual con IA", 
                icon: <Eye className="w-8 h-8" />,
                gradient: "from-blue-500 to-cyan-500"
              },
              { 
                step: "02", 
                title: "Planificación", 
                desc: "Creamos tu hoja de ruta personalizada", 
                icon: <FileText className="w-8 h-8" />,
                gradient: "from-emerald-500 to-teal-500"
              },
              { 
                step: "03", 
                title: "Implementación", 
                desc: "Te guiamos paso a paso hacia tus objetivos", 
                icon: <Zap className="w-8 h-8" />,
                gradient: "from-orange-500 to-red-500"
              },
              { 
                step: "04", 
                title: "Certificación", 
                desc: "Obtienes tu certificado ESG oficial", 
                icon: <Shield className="w-8 h-8" />,
                gradient: "from-purple-500 to-violet-500"
              }
            ].map((item, index) => (
              <div key={index} className="text-center group cursor-pointer relative">
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${item.gradient} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <span className="text-2xl font-black text-white">{item.step}</span>
                </div>
                <div className="text-white mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-yellow-300 transition-colors">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 right-0 transform translate-x-1/2">
                    <ArrowRight className="w-6 h-6 text-yellow-300" />
                  </div>
                )}
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
            <span className="text-white font-semibold">Únete a la Revolución</span>
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
            <span>Demo Gratuita</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Funcionalidades;
