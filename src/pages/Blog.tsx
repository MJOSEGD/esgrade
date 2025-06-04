
import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Search, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const featuredPost = {
    id: 1,
    title: "El Futuro de la Sostenibilidad Empresarial: Tendencias ESG 2024",
    excerpt: "Exploramos las principales tendencias que marcarán el panorama ESG este año, desde nuevas normativas hasta tecnologías emergentes que están revolucionando la sostenibilidad empresarial.",
    author: "Elena Martínez",
    date: "2024-01-20",
    readTime: "10 min",
    image: "/placeholder.svg",
    category: "Tendencias",
    featured: true
  };

  const posts = [
    {
      id: 2,
      title: "CSRD: Cómo Preparar tu Empresa para la Nueva Normativa",
      excerpt: "Una guía práctica para implementar los requisitos de la Corporate Sustainability Reporting Directive.",
      author: "Carlos González",
      date: "2024-01-18",
      readTime: "8 min",
      image: "/placeholder.svg",
      category: "Normativas"
    },
    {
      id: 3,
      title: "5 Errores Comunes en la Implementación ESG y Cómo Evitarlos",
      excerpt: "Aprende de los errores más frecuentes que cometen las empresas al implementar estrategias ESG.",
      author: "Ana Rodríguez",
      date: "2024-01-15",
      readTime: "6 min",
      image: "/placeholder.svg",
      category: "Estrategia"
    },
    {
      id: 4,
      title: "La Importancia de la Transparencia en el Reporting ESG",
      excerpt: "Por qué la transparencia es clave para generar confianza con stakeholders y obtener ventajas competitivas.",
      author: "Miguel Torres",
      date: "2024-01-12",
      readTime: "7 min",
      image: "/placeholder.svg",
      category: "Reporting"
    },
    {
      id: 5,
      title: "Tecnología e Inteligencia Artificial en la Gestión ESG",
      excerpt: "Cómo la IA está transformando la manera en que las empresas gestionan sus iniciativas de sostenibilidad.",
      author: "Laura Vega",
      date: "2024-01-10",
      readTime: "9 min",
      image: "/placeholder.svg",
      category: "Tecnología"
    },
    {
      id: 6,
      title: "Casos de Éxito: PYMEs que Lideran en Sostenibilidad",
      excerpt: "Historias inspiradoras de pequeñas y medianas empresas que están marcando la diferencia en ESG.",
      author: "David Ruiz",
      date: "2024-01-08",
      readTime: "12 min",
      image: "/placeholder.svg",
      category: "Casos de Éxito"
    }
  ];

  const categories = ["Todas", "Tendencias", "Normativas", "Estrategia", "Reporting", "Tecnología", "Casos de Éxito"];

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-20 bg-white">
      {/* Hero Section */}
      <section className="bg-esg-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-black mb-6">
            BLOG <span className="text-esg-gray-dark">ESG</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto opacity-90">
            Insights, tendencias y mejores prácticas en sostenibilidad empresarial
          </p>
          
          {/* Search */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
            <input
              type="text"
              placeholder="Buscar artículos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-6 py-4 text-lg text-esg-gray-dark border-2 border-white focus:outline-none focus:border-esg-primary"
            />
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-8">
            <TrendingUp className="w-8 h-8 text-esg-primary" />
            <h2 className="text-3xl font-black text-esg-gray-dark">ARTÍCULO DESTACADO</h2>
          </div>
          
          <article className="group bg-white border-4 border-esg-primary overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative overflow-hidden">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-6 left-6 bg-esg-primary text-white px-4 py-2 font-bold">
                  DESTACADO
                </div>
              </div>
              
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="bg-esg-primary text-white px-3 py-1 text-sm font-bold inline-block mb-4 w-fit">
                  {featuredPost.category}
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-black text-esg-gray-dark mb-4 group-hover:text-esg-primary transition-colors">
                  {featuredPost.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(featuredPost.date).toLocaleDateString('es-ES')}</span>
                    </div>
                  </div>
                  <span className="font-semibold">{featuredPost.readTime}</span>
                </div>
                
                <Link 
                  to={`/blog/${featuredPost.id}`}
                  className="inline-flex items-center space-x-2 text-esg-primary font-bold text-lg hover:text-esg-primary-dark transition-colors group-hover:translate-x-2 transition-transform duration-300"
                >
                  <span>Leer artículo</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-esg-gray-dark mb-12">ÚLTIMOS ARTÍCULOS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article 
                key={post.id}
                className="group bg-white border-4 border-gray-200 transition-all duration-500 hover:border-esg-primary hover:-translate-y-2 hover:shadow-xl cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-esg-primary text-white px-3 py-1 text-sm font-bold">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-black text-esg-gray-dark mb-3 group-hover:text-esg-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString('es-ES')}</span>
                      </div>
                    </div>
                    <span className="font-semibold">{post.readTime}</span>
                  </div>
                  
                  <Link 
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center space-x-2 text-esg-primary font-bold hover:text-esg-primary-dark transition-colors group-hover:translate-x-2 transition-transform duration-300"
                  >
                    <span>Leer más</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-esg-gray-dark mb-2">No se encontraron artículos</h3>
              <p className="text-gray-600">Intenta con otros términos de búsqueda.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-esg-gray-dark text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            NO TE PIERDAS <span className="text-esg-primary">NADA</span>
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Suscríbete a nuestro newsletter y recibe los mejores contenidos ESG en tu inbox
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto">
            <input
              type="email"
              placeholder="Tu email"
              className="flex-1 px-6 py-4 text-esg-gray-dark border-2 border-white focus:outline-none focus:border-esg-primary"
            />
            <button className="bg-esg-primary text-white font-bold px-8 py-4 border-2 border-esg-primary hover:bg-esg-primary-dark hover:border-esg-primary-dark transition-all duration-300">
              Suscribirse
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
