
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    empresa: '',
    telefono: '',
    mensaje: '',
    interes: 'certificacion'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Helmet>
        <title>Contacto ESGrade® | Solicita Demo Gratuita Certificación ESG | +34 900 123 456</title>
        <meta name="description" content="Contacta con ESGrade® para solicitar tu demo gratuita de certificación ESG. Expertos en CSRD disponibles. ☎️ +34 900 123 456 📧 info@esgrade.org" />
        <meta name="keywords" content="contacto ESGrade, demo gratuita ESG, consulta ESG, certificación ESG contacto, CSRD consulta, telefono ESGrade" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Contacto ESGrade® | Demo Gratuita Certificación ESG" />
        <meta property="og:description" content="Solicita tu demo gratuita y descubre cómo ESGrade® puede automatizar tu certificación ESG. Expertos disponibles para ayudarte." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://esgrade.org/contacto" />
        
        {/* Twitter */}
        <meta name="twitter:title" content="Contacto ESGrade® | Demo Gratuita ESG" />
        <meta name="twitter:description" content="Solicita tu demo gratuita de certificación ESG con ESGrade®" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contacto ESGrade",
          "description": "Página de contacto para solicitar información y demo de ESGrade",
          "mainEntity": {
            "@type": "Organization",
            "name": "ESGrade",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+34-900-123-456",
              "email": "info@esgrade.org",
              "contactType": "customer service",
              "availableLanguage": "Spanish"
            }
          }
        })}
        </script>
      </Helmet>

      <div className="min-h-screen pt-20 bg-white">
        {/* Hero Section */}
        <section className="bg-esg-gray-dark text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-black mb-6">
              CONTÁCTANOS
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
              Estamos aquí para ayudarte a transformar tu estrategia ESG
            </p>
          </div>
        </section>

        {/* Breadcrumbs */}
        <nav className="bg-slate-50 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ol className="flex items-center space-x-2 text-sm text-slate-600">
              <li><a href="/" className="hover:text-esg-primary">Inicio</a></li>
              <li className="text-slate-400">/</li>
              <li className="text-slate-800 font-medium">Contacto</li>
            </ol>
          </div>
        </nav>

        {/* Contact Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="text-4xl font-black text-esg-gray-dark mb-8">
                  Hablemos de tu <span className="text-esg-primary">Futuro ESG</span>
                </h2>
                <p className="text-xl text-esg-gray-dark mb-8">
                  Nuestro equipo de expertos está listo para ayudarte a comenzar tu viaje hacia la sostenibilidad.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-esg-primary text-white p-3 rounded-full">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-esg-gray-dark">Teléfono</h3>
                      <p className="text-esg-gray-dark">+34 900 123 456</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-esg-primary text-white p-3 rounded-full">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-esg-gray-dark">Email</h3>
                      <p className="text-esg-gray-dark">info@esgrade.org</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-esg-primary text-white p-3 rounded-full">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-esg-gray-dark">Oficina</h3>
                      <p className="text-esg-gray-dark">Madrid, España</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="bg-esg-primary text-white p-3 rounded-full">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-esg-gray-dark">Horario</h3>
                      <p className="text-esg-gray-dark">Lun - Vie: 9:00 - 18:00</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-slate-50 p-8 rounded-2xl">
                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h3 className="text-2xl font-black text-esg-gray-dark mb-6">
                      Solicita tu Demo Gratuita
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="nombre" className="block text-sm font-bold text-esg-gray-dark mb-2">
                          Nombre *
                        </label>
                        <input
                          type="text"
                          id="nombre"
                          name="nombre"
                          required
                          value={formData.nombre}
                          onChange={handleChange}
                          className="w-full p-3 border-2 border-gray-300 focus:border-esg-primary outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-bold text-esg-gray-dark mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full p-3 border-2 border-gray-300 focus:border-esg-primary outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="empresa" className="block text-sm font-bold text-esg-gray-dark mb-2">
                          Empresa *
                        </label>
                        <input
                          type="text"
                          id="empresa"
                          name="empresa"
                          required
                          value={formData.empresa}
                          onChange={handleChange}
                          className="w-full p-3 border-2 border-gray-300 focus:border-esg-primary outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label htmlFor="telefono" className="block text-sm font-bold text-esg-gray-dark mb-2">
                          Teléfono
                        </label>
                        <input
                          type="tel"
                          id="telefono"
                          name="telefono"
                          value={formData.telefono}
                          onChange={handleChange}
                          className="w-full p-3 border-2 border-gray-300 focus:border-esg-primary outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="interes" className="block text-sm font-bold text-esg-gray-dark mb-2">
                        ¿En qué estás interesado? *
                      </label>
                      <select
                        id="interes"
                        name="interes"
                        required
                        value={formData.interes}
                        onChange={handleChange}
                        className="w-full p-3 border-2 border-gray-300 focus:border-esg-primary outline-none transition-colors"
                      >
                        <option value="certificacion">Certificación ESG</option>
                        <option value="csrd">Informe CSRD</option>
                        <option value="consultoria">Consultoría ESG</option>
                        <option value="formacion">Formación ESG</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="mensaje" className="block text-sm font-bold text-esg-gray-dark mb-2">
                        Mensaje
                      </label>
                      <textarea
                        id="mensaje"
                        name="mensaje"
                        rows={4}
                        value={formData.mensaje}
                        onChange={handleChange}
                        placeholder="Cuéntanos sobre tu empresa y objetivos ESG..."
                        className="w-full p-3 border-2 border-gray-300 focus:border-esg-primary outline-none transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-esg-primary text-white font-bold py-4 px-6 border-2 border-esg-primary transition-all duration-300 hover:bg-white hover:text-esg-primary flex items-center justify-center space-x-2"
                    >
                      <Send className="w-5 h-5" />
                      <span>Enviar Solicitud</span>
                    </button>
                  </form>
                ) : (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-esg-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-black text-esg-gray-dark mb-4">
                      ¡Solicitud Enviada!
                    </h3>
                    <p className="text-esg-gray-dark mb-6">
                      Gracias por tu interés. Nuestro equipo se pondrá en contacto contigo en las próximas 24 horas.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="bg-esg-primary text-white font-bold py-3 px-6 border-2 border-esg-primary transition-all duration-300 hover:bg-white hover:text-esg-primary"
                    >
                      Enviar Otra Solicitud
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contacto;
