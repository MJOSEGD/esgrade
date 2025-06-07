import React from 'react';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "ESG: El Futuro de los Negocios Sostenibles",
      excerpt: "Descubre cómo la sostenibilidad se ha convertido en un pilar fundamental para el éxito empresarial.",
      author: "Carlos Pérez",
      date: "2024-01-20",
      readTime: "10 min",
      image: "/placeholder.svg",
      tags: ["ESG", "Sostenibilidad", "Negocios"]
    },
    {
      id: 2,
      title: "5 Estrategias Clave para Reducir tu Huella de Carbono",
      excerpt: "Aprende cómo tu empresa puede contribuir a la lucha contra el cambio climático.",
      author: "Ana García",
      date: "2024-01-15",
      readTime: "8 min",
      image: "/placeholder.svg",
      tags: ["Huella de carbono", "Medio ambiente", "Estrategias"]
    },
    {
      id: 3,
      title: "Innovación Social: Creando Valor para la Sociedad y tu Empresa",
      excerpt: "Explora cómo la innovación social puede generar un impacto positivo y mejorar tu reputación corporativa.",
      author: "Sofía Martínez",
      date: "2024-01-10",
      readTime: "12 min",
      image: "/placeholder.svg",
      tags: ["Innovación social", "Impacto social", "Valor compartido"]
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-white">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-br from-slate-600 via-slate-700 to-slate-800">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
            BLOG <span className="text-esg-primary">ESG</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
            Artículos, guías y recursos para impulsar tu estrategia de sostenibilidad
          </p>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white border-4 border-gray-200 transition-all duration-500 hover:border-esg-primary hover:-translate-y-2 hover:shadow-xl cursor-pointer">
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
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
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-100 text-esg-gray-dark px-2 py-1 text-xs font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
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
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-esg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            SUSCRÍBETE A NUESTRO NEWSLETTER
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Recibe las últimas noticias, tendencias y análisis sobre sostenibilidad empresarial
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

export default Blog;
