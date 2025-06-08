
import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Search, TrendingUp, Sparkles, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const featuredPost = {
    id: 1,
    title: "CSRD: La Nueva Era del Reporting de Sostenibilidad en Europa",
    excerpt: "La Corporate Sustainability Reporting Directive (CSRD) marca un antes y un después en la transparencia empresarial. Descubre cómo esta normativa transformará el panorama ESG y qué significa para tu empresa.",
    author: "Equipo ESGrade",
    date: "2024-01-20",
    readTime: "12 min",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=500&fit=crop",
    category: "Normativas CSRD",
    featured: true
  };

  const posts = [
    {
      id: 2,
      title: "Taxonomía Europea: Guía Completa para la Clasificación de Actividades Sostenibles",
      excerpt: "Comprende en profundidad cómo la Taxonomía Europea define qué actividades económicas pueden considerarse ambientalmente sostenibles y cómo aplicarla en tu empresa.",
      author: "Ana Martínez",
      date: "2024-01-18",
      readTime: "15 min",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=500&fit=crop",
      category: "Taxonomía Europea"
    },
    {
      id: 3,
      title: "SFDR: Transparencia en los Servicios Financieros Sostenibles",
      excerpt: "El Reglamento sobre la Divulgación de Finanzas Sostenibles está redefiniendo cómo las entidades financieras comunican sus impactos en sostenibilidad.",
      author: "Carlos González",
      date: "2024-01-15",
      readTime: "10 min",
      image: "https://images.unsplash.com/photo-1559526324-593bc073d938?w=800&h=500&fit=crop",
      category: "SFDR"
    },
    {
      id: 4,
      title: "Doble Materialidad: El Corazón del Reporting ESG Moderno",
      excerpt: "La doble materialidad revoluciona cómo las empresas evalúan y reportan sus impactos ESG. Aprende a implementar este enfoque fundamental en tu estrategia.",
      author: "María López",
      date: "2024-01-12",
      readTime: "8 min",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
      category: "Metodología ESG"
    },
    {
      id: 5,
      title: "Tecnología y Sostenibilidad: Cómo la Digitalización Impulsa el ESG",
      excerpt: "Descubre cómo las tecnologías emergentes están transformando la gestión ESG y facilitando el cumplimiento normativo de manera más eficiente.",
      author: "David Ruiz",
      date: "2024-01-10",
      readTime: "11 min",
      image: "https://images.unsplash.com/photo-1518186233392-c232efbf2373?w=800&h=500&fit=crop",
      category: "Tecnología ESG"
    },
    {
      id: 6,
      title: "Casos de Éxito: PYMEs Líderes en Sostenibilidad",
      excerpt: "Historias inspiradoras de pequeñas y medianas empresas que han logrado destacar en sostenibilidad y obtener ventajas competitivas significativas.",
      author: "Laura Vega",
      date: "2024-01-08",
      readTime: "14 min",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=500&fit=crop",
      category: "Casos de Éxito"
    },
    {
      id: 7,
      title: "Huella de Carbono Corporativa: Medición y Reducción Efectiva",
      excerpt: "Guía práctica para calcular, verificar y reducir la huella de carbono de tu empresa conforme a los estándares internacionales más exigentes.",
      author: "Miguel Torres",
      date: "2024-01-05",
      readTime: "13 min",
      image: "https://images.unsplash.com/photo-1569163139394-de4e4f43e4e5?w=800&h=500&fit=crop",
      category: "Medioambiente"
    },
    {
      id: 8,
      title: "ESG en la Cadena de Suministro: Más Allá de las Fronteras Empresariales",
      excerpt: "Aprende a evaluar y mejorar los criterios ESG en toda tu cadena de valor, desde proveedores hasta distribuidores finales.",
      author: "Elena Rodríguez",
      date: "2024-01-03",
      readTime: "9 min",
      image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=800&h=500&fit=crop",
      category: "Cadena de Suministro"
    }
  ];

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-20 bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-esg-primary rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-esg-primary rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-8">
              <Sparkles className="w-8 h-8 text-esg-primary" />
              <span className="text-esg-primary font-semibold text-lg tracking-wide">BLOG ESPECIALIZADO ESG</span>
              <Sparkles className="w-8 h-8 text-esg-primary" />
            </div>
            
            <h1 className="text-5xl md:text-7xl font-black mb-8 text-white leading-tight">
              INSIGHTS ESG
              <span className="block text-4xl md:text-5xl text-esg-primary mt-4">
                & SOSTENIBILIDAD
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Descubre las últimas tendencias en CSRD, Taxonomía Europea, SFDR y todas las normativas 
              que están transformando el panorama empresarial hacia la sostenibilidad
            </p>
            
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-slate-400 w-6 h-6" />
              <input
                type="text"
                placeholder="Buscar artículos sobre CSRD, Taxonomía, SFDR..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-16 pr-8 py-6 text-lg text-slate-700 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-esg-primary focus:ring-4 focus:ring-esg-primary/20 transition-all duration-300 shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4 mb-12">
            <div className="p-3 bg-esg-primary rounded-xl">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-4xl font-black text-slate-800">ARTÍCULO DESTACADO</h2>
              <p className="text-slate-600 text-lg">Lo más relevante del momento</p>
            </div>
          </div>
          
          <article className="group relative bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative overflow-hidden h-80 lg:h-auto">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6">
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-esg-primary fill-current" />
                    <span className="bg-esg-primary text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      DESTACADO
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-6 left-6">
                  <span className="bg-white/90 backdrop-blur-sm text-slate-800 px-4 py-2 rounded-full text-sm font-bold">
                    {featuredPost.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <h3 className="text-3xl lg:text-4xl font-black text-slate-800 mb-6 group-hover:text-esg-primary transition-colors duration-300">
                  {featuredPost.title}
                </h3>
                
                <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                  {featuredPost.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-slate-500 mb-8">
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-esg-primary rounded-full flex items-center justify-center">
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
                  className="inline-flex items-center space-x-3 bg-esg-primary text-white font-bold text-lg px-8 py-4 rounded-xl hover:bg-esg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl"
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-6">
              ÚLTIMOS <span className="text-esg-primary">ARTÍCULOS</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Mantente al día con las normativas ESG más importantes: CSRD, Taxonomía Europea, SFDR y más
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <article 
                key={post.id}
                className="group bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden h-48">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-slate-800 px-3 py-1 rounded-full text-sm font-bold">
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-black text-slate-800 mb-3 group-hover:text-esg-primary transition-colors duration-300 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-6 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-slate-500 mb-6">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-esg-primary rounded-full flex items-center justify-center">
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
                    className="inline-flex items-center space-x-2 text-esg-primary font-bold hover:text-esg-primary-dark transition-colors"
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
              <p className="text-slate-600 text-lg">Intenta con otros términos como CSRD, Taxonomía o SFDR.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20 mb-6">
              <Sparkles className="w-5 h-5 text-esg-primary" />
              <span className="text-sm font-semibold text-esg-primary">NEWSLETTER EXCLUSIVO ESG</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              MANTENTE <span className="text-esg-primary">ACTUALIZADO</span>
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Recibe semanalmente las últimas actualizaciones sobre CSRD, nuevas normativas ESG 
              y análisis exclusivos del panorama de sostenibilidad empresarial
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row max-w-lg mx-auto gap-4">
            <input
              type="email"
              placeholder="tu@empresa.com"
              className="flex-1 px-6 py-4 text-slate-700 bg-white border border-slate-200 rounded-xl focus:outline-none focus:border-esg-primary focus:ring-4 focus:ring-esg-primary/20 transition-all duration-300"
            />
            <button className="bg-esg-primary text-white font-bold px-8 py-4 rounded-xl hover:bg-esg-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl">
              Suscribirse
            </button>
          </div>
          
          <p className="text-sm text-slate-400 mt-6">
            ✓ Sin spam ✓ Cancela cuando quieras ✓ Contenido especializado en normativas ESG
          </p>
        </div>
      </section>
    </div>
  );
};

export default Blog;
