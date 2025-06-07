
import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Search, TrendingUp, Sparkles, Star } from 'lucide-react';
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
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
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
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
      category: "Normativas"
    },
    {
      id: 3,
      title: "5 Errores Comunes en la Implementación ESG y Cómo Evitarlos",
      excerpt: "Aprende de los errores más frecuentes que cometen las empresas al implementar estrategias ESG.",
      author: "Ana Rodríguez",
      date: "2024-01-15",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      category: "Estrategia"
    },
    {
      id: 4,
      title: "La Importancia de la Transparencia en el Reporting ESG",
      excerpt: "Por qué la transparencia es clave para generar confianza con stakeholders y obtener ventajas competitivas.",
      author: "Miguel Torres",
      date: "2024-01-12",
      readTime: "7 min",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=400&fit=crop",
      category: "Reporting"
    },
    {
      id: 5,
      title: "Tecnología e Inteligencia Artificial en la Gestión ESG",
      excerpt: "Cómo la IA está transformando la manera en que las empresas gestionan sus iniciativas de sostenibilidad.",
      author: "Laura Vega",
      date: "2024-01-10",
      readTime: "9 min",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      category: "Tecnología"
    },
    {
      id: 6,
      title: "Casos de Éxito: PYMEs que Lideran en Sostenibilidad",
      excerpt: "Historias inspiradoras de pequeñas y medianas empresas que están marcando la diferencia en ESG.",
      author: "David Ruiz",
      date: "2024-01-08",
      readTime: "12 min",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop",
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
    <div className="min-h-screen pt-20 bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/20 via-transparent to-green-500/20" />
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Sparkles className="w-8 h-8 text-blue-400 animate-pulse" />
              <span className="text-blue-400 font-semibold text-lg tracking-wide">BLOG ESPECIALIZADO</span>
              <Sparkles className="w-8 h-8 text-blue-400 animate-pulse" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-white via-blue-100 to-green-100 bg-clip-text text-transparent leading-tight">
              INSIGHTS ESG
              <span className="block text-4xl md:text-5xl text-blue-400 mt-4">
                & SOSTENIBILIDAD
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Descubre las últimas tendencias, mejores prácticas y estrategias innovadoras 
              en sostenibilidad empresarial y gestión ESG
            </p>
            
            {/* Enhanced Search */}
            <div className="relative max-w-2xl mx-auto group">
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-slate-400 w-6 h-6 transition-colors group-focus-within:text-blue-500" />
              <input
                type="text"
                placeholder="Buscar artículos, tendencias, guías..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-16 pr-8 py-6 text-lg text-slate-700 bg-white/95 backdrop-blur-sm border-2 border-white/20 rounded-2xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 shadow-2xl"
              />
              <div className="absolute right-6 top-1/2 transform -translate-y-1/2">
                <kbd className="px-3 py-1 text-xs font-semibold text-slate-500 bg-slate-100 border border-slate-300 rounded-lg">
                  Enter
                </kbd>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-12">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-green-500 rounded-xl">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-black text-slate-800">ARTÍCULO DESTACADO</h2>
              <p className="text-slate-600 text-lg">Lo más relevante del momento</p>
            </div>
          </div>
          
          <article className="group relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200/50 hover:shadow-3xl transition-all duration-700 hover:-translate-y-2">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="grid grid-cols-1 lg:grid-cols-2 relative">
              <div className="relative overflow-hidden h-80 lg:h-auto">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6">
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      DESTACADO
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-6 left-6">
                  <span className="bg-white/90 backdrop-blur-sm text-slate-800 px-4 py-2 rounded-full text-sm font-bold border border-white/20">
                    {featuredPost.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8 lg:p-12 flex flex-col justify-center relative">
                <h3 className="text-3xl lg:text-4xl font-black text-slate-800 mb-6 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-green-600 group-hover:bg-clip-text transition-all duration-500">
                  {featuredPost.title}
                </h3>
                
                <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-slate-500 mb-8">
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                        <User className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-semibold">{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(featuredPost.date).toLocaleDateString('es-ES')}</span>
                    </div>
                  </div>
                  <div className="bg-slate-100 px-3 py-1 rounded-full">
                    <span className="font-semibold text-slate-700">{featuredPost.readTime}</span>
                  </div>
                </div>
                
                <Link 
                  to={`/blog/${featuredPost.id}`}
                  className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-green-600 text-white font-bold text-lg px-8 py-4 rounded-xl hover:from-blue-700 hover:to-green-700 transition-all duration-300 group-hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <span>Leer artículo completo</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-24 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-6">
              ÚLTIMOS <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">ARTÍCULOS</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Mantente al día con las últimas tendencias y mejores prácticas en ESG
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <article 
                key={post.id}
                className="group bg-white rounded-2xl shadow-xl border border-slate-200/50 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-slate-800 px-3 py-1 rounded-full text-sm font-bold">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-black text-slate-800 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-green-600 group-hover:bg-clip-text transition-all duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-6 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-slate-500 mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center">
                          <User className="w-3 h-3 text-white" />
                        </div>
                        <span className="font-medium">{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString('es-ES')}</span>
                      </div>
                    </div>
                    <span className="bg-slate-100 px-2 py-1 rounded-full text-xs font-semibold">
                      {post.readTime}
                    </span>
                  </div>
                  
                  <Link 
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center space-x-2 text-blue-600 font-bold hover:text-green-600 transition-colors group-hover:translate-x-1 transition-transform duration-300"
                  >
                    <span>Leer más</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <div className="bg-slate-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-slate-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-800 mb-4">No se encontraron artículos</h3>
              <p className="text-slate-600 text-lg">Intenta con otros términos de búsqueda o explora nuestras categorías.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500/20 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 mb-6">
              <Sparkles className="w-5 h-5 text-blue-400" />
              <span className="text-sm font-semibold text-blue-100">NEWSLETTER EXCLUSIVO</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              NO TE PIERDAS <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">NADA</span>
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Recibe semanalmente los mejores contenidos ESG, análisis exclusivos y 
              las últimas tendencias en sostenibilidad empresarial
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row max-w-lg mx-auto gap-4">
            <input
              type="email"
              placeholder="tu@email.com"
              className="flex-1 px-6 py-4 text-slate-700 bg-white/95 backdrop-blur-sm border-2 border-white/20 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300"
            />
            <button className="bg-gradient-to-r from-blue-600 to-green-600 text-white font-bold px-8 py-4 rounded-xl hover:from-blue-700 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              Suscribirse
            </button>
          </div>
          
          <p className="text-sm text-slate-400 mt-6">
            ✓ Sin spam ✓ Cancela cuando quieras ✓ Contenido exclusivo
          </p>
        </div>
      </section>
    </div>
  );
};

export default Blog;
