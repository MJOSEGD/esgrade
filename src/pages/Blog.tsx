
import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Search, TrendingUp, Sparkles, BookOpen, Filter, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todas');

  const featuredPost = {
    id: 1,
    title: "El Futuro de la Sostenibilidad Empresarial: Tendencias ESG 2024",
    excerpt: "Exploramos las principales tendencias que marcarán el panorama ESG este año, desde nuevas normativas hasta tecnologías emergentes que están revolucionando la sostenibilidad empresarial.",
    author: "Elena Martínez",
    date: "2024-01-20",
    readTime: "10 min",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
    category: "Tendencias",
    featured: true,
    gradient: "from-blue-600 to-purple-600"
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
      category: "Normativas",
      gradient: "from-emerald-600 to-teal-600"
    },
    {
      id: 3,
      title: "5 Errores Comunes en la Implementación ESG y Cómo Evitarlos",
      excerpt: "Aprende de los errores más frecuentes que cometen las empresas al implementar estrategias ESG.",
      author: "Ana Rodríguez",
      date: "2024-01-15",
      readTime: "6 min",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
      category: "Estrategia",
      gradient: "from-orange-600 to-red-600"
    },
    {
      id: 4,
      title: "La Importancia de la Transparencia en el Reporting ESG",
      excerpt: "Por qué la transparencia es clave para generar confianza con stakeholders y obtener ventajas competitivas.",
      author: "Miguel Torres",
      date: "2024-01-12",
      readTime: "7 min",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600&h=400&fit=crop",
      category: "Reporting",
      gradient: "from-purple-600 to-violet-600"
    },
    {
      id: 5,
      title: "Tecnología e Inteligencia Artificial en la Gestión ESG",
      excerpt: "Cómo la IA está transformando la manera en que las empresas gestionan sus iniciativas de sostenibilidad.",
      author: "Laura Vega",
      date: "2024-01-10",
      readTime: "9 min",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
      category: "Tecnología",
      gradient: "from-indigo-600 to-purple-600"
    },
    {
      id: 6,
      title: "Casos de Éxito: PYMEs que Lideran en Sostenibilidad",
      excerpt: "Historias inspiradoras de pequeñas y medianas empresas que están marcando la diferencia en ESG.",
      author: "David Ruiz",
      date: "2024-01-08",
      readTime: "12 min",
      image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop",
      category: "Casos de Éxito",
      gradient: "from-pink-600 to-rose-600"
    }
  ];

  const categories = ["Todas", "Tendencias", "Normativas", "Estrategia", "Reporting", "Tecnología", "Casos de Éxito"];

  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Todas' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-esg-primary via-blue-600 to-purple-600"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <BookOpen className="w-5 h-5 text-yellow-300" />
            <span className="text-white font-semibold">Conocimiento ESG</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-8 text-white leading-tight">
            BLOG <br />
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">ESG</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">
            Insights, tendencias y mejores prácticas en<br />
            <span className="text-yellow-300 font-semibold">sostenibilidad empresarial</span>
          </p>
          
          {/* Search */}
          <div className="relative max-w-2xl mx-auto mb-8">
            <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-6" />
            <input
              type="text"
              placeholder="Buscar artículos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-16 pr-6 py-5 text-lg text-gray-900 bg-white/90 backdrop-blur-sm rounded-2xl border-2 border-white/30 focus:outline-none focus:border-yellow-300 focus:bg-white transition-all duration-300"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-yellow-300 text-gray-900'
                    : 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-12">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl font-black text-gray-900">ARTÍCULO DESTACADO</h2>
          </div>
          
          <article className="group bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-200 transition-all duration-500 hover:shadow-3xl hover:scale-[1.02]">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative overflow-hidden">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-6 left-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 px-4 py-2 font-bold rounded-xl">
                  DESTACADO
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className={`bg-gradient-to-r ${featuredPost.gradient} text-white px-4 py-2 text-sm font-bold inline-block mb-6 w-fit rounded-xl`}>
                  {featuredPost.category}
                </div>
                
                <h3 className="text-3xl lg:text-4xl font-black text-gray-900 mb-6 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-esg-primary group-hover:to-blue-600 group-hover:bg-clip-text transition-all duration-300 leading-tight">
                  {featuredPost.title}
                </h3>
                
                <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-8">
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2">
                      <User className="w-5 h-5" />
                      <span className="font-medium">{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-5 h-5" />
                      <span>{new Date(featuredPost.date).toLocaleDateString('es-ES')}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="w-5 h-5" />
                    <span className="font-semibold">{featuredPost.readTime}</span>
                  </div>
                </div>
                
                <Link 
                  to={`/blog/${featuredPost.id}`}
                  className="inline-flex items-center space-x-3 bg-gradient-to-r from-esg-primary to-blue-600 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg group-hover:translate-x-2 w-fit"
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
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-3 mb-12">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-purple-600 to-violet-600 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-4xl font-black text-gray-900">ÚLTIMOS ARTÍCULOS</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article 
                key={post.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-200 transition-all duration-500 hover:shadow-2xl hover:scale-105 cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute top-4 left-4 bg-gradient-to-r ${post.gradient} text-white px-3 py-1 text-sm font-bold rounded-xl`}>
                    {post.category}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-black text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300 leading-tight" style={{backgroundImage: `linear-gradient(to right, ${post.gradient.split(' ')[1]}, ${post.gradient.split(' ')[3]})`}}>
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
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
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span className="font-semibold">{post.readTime}</span>
                    </div>
                  </div>
                  
                  <Link 
                    to={`/blog/${post.id}`}
                    className={`inline-flex items-center space-x-2 bg-gradient-to-r ${post.gradient} text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 group-hover:translate-x-2 w-fit`}
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
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-r from-gray-400 to-gray-500 flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">No se encontraron artículos</h3>
              <p className="text-gray-600 text-lg">Intenta con otros términos de búsqueda o cambia la categoría.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <Sparkles className="w-5 h-5 text-yellow-300" />
            <span className="text-white font-semibold">Newsletter Exclusivo</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight">
            NO TE PIERDAS <br />
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">NADA</span>
          </h2>
          
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Suscríbete a nuestro newsletter y recibe los mejores contenidos ESG<br />
            directamente en tu inbox cada semana
          </p>
          
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Tu email"
              className="flex-1 px-6 py-4 text-gray-900 bg-white rounded-xl border-2 border-white/30 focus:outline-none focus:border-yellow-300 transition-all duration-300"
            />
            <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg">
              Suscribirse
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
