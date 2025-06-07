import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Filter, Search, BookOpen, FileText, Video } from 'lucide-react';
import { Link } from 'react-router-dom';

const Recursos = () => {
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'todos', name: 'Todos' },
    { id: 'guias', name: 'Guías ESG' },
    { id: 'casos', name: 'Casos de Éxito' },
    { id: 'normativas', name: 'Normativas' },
    { id: 'webinars', name: 'Webinars' },
    { id: 'plantillas', name: 'Plantillas' }
  ];

  const resources = [
    {
      id: 1,
      title: "Guía Completa CSRD 2024: Todo lo que Necesitas Saber",
      excerpt: "Una guía exhaustiva sobre la nueva directiva europea de informes de sostenibilidad corporativa.",
      category: 'normativas',
      type: 'guia',
      author: "Equipo ESGrade",
      date: "2024-01-15",
      readTime: "12 min",
      image: "/placeholder.svg",
      tags: ["CSRD", "Normativa", "Europa"]
    },
    {
      id: 2,
      title: "Caso de Éxito: Cómo TechCorp Redujo su Huella de Carbono en 40%",
      excerpt: "Descubre las estrategias que permitieron a esta empresa tecnológica alcanzar sus objetivos de sostenibilidad.",
      category: 'casos',
      type: 'caso',
      author: "María González",
      date: "2024-01-10",
      readTime: "8 min",
      image: "/placeholder.svg",
      tags: ["Caso de éxito", "Carbono", "Tecnología"]
    },
    {
      id: 3,
      title: "Plantilla: Matriz de Materialidad ESG",
      excerpt: "Herramienta descargable para identificar y priorizar los temas ESG más relevantes para tu empresa.",
      category: 'plantillas',
      type: 'plantilla',
      author: "Departamento ESG",
      date: "2024-01-08",
      readTime: "5 min",
      image: "/placeholder.svg",
      tags: ["Plantilla", "Materialidad", "ESG"]
    },
    {
      id: 4,
      title: "Webinar: Estrategias de Reporting ESG para PYMEs",
      excerpt: "Sesión en vivo sobre cómo las pequeñas y medianas empresas pueden implementar reporting ESG efectivo.",
      category: 'webinars',
      type: 'video',
      author: "Carlos Martínez",
      date: "2024-01-05",
      readTime: "45 min",
      image: "/placeholder.svg",
      tags: ["Webinar", "PYME", "Reporting"]
    },
    {
      id: 5,
      title: "Guía ESG para Principiantes: Primeros Pasos",
      excerpt: "Una introducción completa al mundo ESG para empresas que están comenzando su viaje de sostenibilidad.",
      category: 'guias',
      type: 'guia',
      author: "Ana Rodríguez",
      date: "2024-01-03",
      readTime: "15 min",
      image: "/placeholder.svg",
      tags: ["Principiantes", "ESG", "Introducción"]
    },
    {
      id: 6,
      title: "Checklist: Preparación para Auditoría ESG",
      excerpt: "Lista completa de verificación para preparar tu empresa para una auditoría ESG exitosa.",
      category: 'plantillas',
      type: 'plantilla',
      author: "Equipo ESGrade",
      date: "2024-01-01",
      readTime: "10 min",
      image: "/placeholder.svg",
      tags: ["Checklist", "Auditoría", "Preparación"]
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === 'todos' || resource.category === selectedCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <Video className="w-5 h-5" />;
      case 'plantilla':
        return <FileText className="w-5 h-5" />;
      default:
        return <BookOpen className="w-5 h-5" />;
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-white">
      {/* Hero Section */}
      <section className="bg-slate-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            RECURSOS <span className="text-esg-primary">ESG</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
            Aprende, implementa y lidera el cambio hacia la sostenibilidad empresarial
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-6 lg:space-y-0">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar recursos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 focus:border-esg-primary outline-none"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 font-semibold border-2 transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-esg-primary text-white border-esg-primary'
                      : 'bg-white text-esg-gray-dark border-esg-gray-dark hover:border-esg-primary hover:text-esg-primary'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource) => (
              <article 
                key={resource.id}
                className="group bg-white border-4 border-gray-200 transition-all duration-500 hover:border-esg-primary hover:-translate-y-2 hover:shadow-xl cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={resource.image} 
                    alt={resource.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-esg-primary text-white px-3 py-1 text-sm font-bold flex items-center space-x-2">
                    {getTypeIcon(resource.type)}
                    <span className="uppercase">{resource.type}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {resource.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="bg-gray-100 text-esg-gray-dark px-2 py-1 text-xs font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-black text-esg-gray-dark mb-3 group-hover:text-esg-primary transition-colors">
                    {resource.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {resource.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{resource.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(resource.date).toLocaleDateString('es-ES')}</span>
                      </div>
                    </div>
                    <span className="font-semibold">{resource.readTime}</span>
                  </div>
                  
                  <Link 
                    to={`/blog/${resource.id}`}
                    className="inline-flex items-center space-x-2 text-esg-primary font-bold hover:text-esg-primary-dark transition-colors group-hover:translate-x-2 transition-transform duration-300"
                  >
                    <span>Leer más</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-16">
              <Filter className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-esg-gray-dark mb-2">No se encontraron recursos</h3>
              <p className="text-gray-600">Intenta con otros términos de búsqueda o cambia la categoría.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-esg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            MANTENTE ACTUALIZADO
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Recibe los últimos recursos ESG, normativas y mejores prácticas directamente en tu inbox
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto">
            <input
              type="email"
              placeholder="Tu email"
              className="flex-1 px-6 py-4 text-esg-gray-dark border-2 border-white focus:outline-none focus:border-esg-primary"
            />
            <button className="bg-white text-esg-primary font-bold px-8 py-4 border-2 border-white hover:bg-esg-primary hover:text-white transition-all duration-300">
              Suscribirse
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Recursos;
