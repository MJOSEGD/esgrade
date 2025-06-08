
import React from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

interface ContactFormData {
  nombre: string;
  email: string;
  empresa: string;
  telefono: string;
  mensaje: string;
}

const Contacto = () => {
  const form = useForm<ContactFormData>({
    defaultValues: {
      nombre: '',
      email: '',
      empresa: '',
      telefono: '',
      mensaje: ''
    }
  });

  const onSubmit = (data: ContactFormData) => {
    console.log('Form data:', data);
    // Aquí se enviaría el formulario
    alert('¡Gracias por contactarnos! Te responderemos pronto.');
    form.reset();
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "hola@esgrade.com",
      href: "mailto:hola@esgrade.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Teléfono",
      content: "+34 900 123 456",
      href: "tel:+34900123456"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Ubicación",
      content: "Madrid, España",
      href: null
    }
  ];

  const benefits = [
    "Consulta gratuita de 30 minutos",
    "Análisis personalizado de tu situación ESG",
    "Propuesta de valor específica para tu empresa",
    "Roadmap claro hacia la certificación"
  ];

  return (
    <div className="min-h-screen pt-20 bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(29, 181, 132, 0.3) 2px, transparent 0)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-esg-primary/20 to-esg-lime/20 border border-esg-primary/30 rounded-full backdrop-blur-sm mb-8">
              <Mail className="w-5 h-5 text-esg-lime" />
              <span className="text-esg-lime font-semibold text-sm tracking-wider">CONTACTO DIRECTO</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8">
              <span className="block text-white">COMIENZA TU</span>
              <span className="block bg-gradient-to-r from-esg-primary to-esg-lime bg-clip-text text-transparent">
                CERTIFICACIÓN ESG
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Habla con nuestros expertos y descubre cómo obtener tu certificación ESG oficial en semanas, no meses
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
              <div className="mb-8">
                <h2 className="text-3xl font-black text-slate-800 mb-4">
                  Solicita tu <span className="text-esg-primary">Consulta Gratuita</span>
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Completa el formulario y te contactaremos en menos de 24 horas para ofrecerte una propuesta personalizada.
                </p>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="nombre"
                      rules={{ required: "El nombre es obligatorio" }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700 font-semibold">Nombre completo</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Tu nombre"
                              className="border-slate-200 focus:border-esg-primary focus:ring-esg-primary/20"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      rules={{ 
                        required: "El email es obligatorio",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Email inválido"
                        }
                      }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700 font-semibold">Email corporativo</FormLabel>
                          <FormControl>
                            <Input 
                              type="email"
                              placeholder="tu@empresa.com"
                              className="border-slate-200 focus:border-esg-primary focus:ring-esg-primary/20"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="empresa"
                      rules={{ required: "La empresa es obligatoria" }}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700 font-semibold">Empresa</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Nombre de tu empresa"
                              className="border-slate-200 focus:border-esg-primary focus:ring-esg-primary/20"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="telefono"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-slate-700 font-semibold">Teléfono</FormLabel>
                          <FormControl>
                            <Input 
                              type="tel"
                              placeholder="+34 600 000 000"
                              className="border-slate-200 focus:border-esg-primary focus:ring-esg-primary/20"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="mensaje"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-slate-700 font-semibold">Mensaje</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Cuéntanos sobre tus necesidades ESG y objetivos de sostenibilidad..."
                            className="border-slate-200 focus:border-esg-primary focus:ring-esg-primary/20 min-h-[120px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-esg-primary to-esg-primary-dark text-white font-bold py-4 px-8 rounded-xl hover:from-esg-primary-dark hover:to-esg-primary transition-all duration-300 shadow-lg hover:shadow-xl group"
                  >
                    <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Enviar Solicitud
                  </Button>
                </form>
              </Form>
            </div>

            {/* Contact Info & Benefits */}
            <div className="space-y-8">
              {/* Contact Information */}
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
                <h3 className="text-2xl font-black text-slate-800 mb-6">Información de Contacto</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="bg-esg-primary/10 p-3 rounded-xl text-esg-primary">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-800">{info.title}</h4>
                        {info.href ? (
                          <a 
                            href={info.href} 
                            className="text-slate-600 hover:text-esg-primary transition-colors"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-slate-600">{info.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-gradient-to-br from-esg-primary to-esg-primary-dark rounded-2xl shadow-xl p-8 text-white">
                <h3 className="text-2xl font-black mb-6">¿Qué incluye tu consulta gratuita?</h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-esg-lime flex-shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacto;
