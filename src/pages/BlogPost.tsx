
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Clock, Share2, Twitter, Linkedin, Facebook } from 'lucide-react';

const BlogPost = () => {
  const { id } = useParams();
  
  // Mock data - this would come from a CMS or API in a real application
  const posts = {
    '1': {
      title: "CSRD: La Nueva Era del Reporting de Sostenibilidad en Europa",
      content: `
        <h2>Introducción a la CSRD</h2>
        <p>La Corporate Sustainability Reporting Directive (CSRD) representa un cambio paradigmático en la forma en que las empresas europeas reportan su impacto en sostenibilidad. Esta directiva, que entró en vigor el 5 de enero de 2023, amplía significativamente los requisitos de reporte ESG en comparación con su predecesora, la Non-Financial Reporting Directive (NFRD).</p>
        
        <h2>¿Qué empresas están afectadas?</h2>
        <p>La CSRD se aplicará progresivamente:</p>
        <ul>
          <li><strong>2024:</strong> Grandes empresas de interés público que ya reportan bajo NFRD</li>
          <li><strong>2025:</strong> Todas las grandes empresas (que cumplan 2 de estos 3 criterios: +250 empleados, +€40M facturación, +€20M balance)</li>
          <li><strong>2026:</strong> PYMEs cotizadas (excepto microempresas)</li>
          <li><strong>2028:</strong> Empresas no europeas con filiales significativas en la UE</li>
        </ul>
        
        <h2>Principales cambios respecto a NFRD</h2>
        <p>La CSRD introduce varios cambios fundamentales:</p>
        
        <h3>1. Doble Materialidad</h3>
        <p>Las empresas deben reportar tanto el impacto de sus actividades en el medio ambiente y la sociedad (materialidad de impacto) como el impacto de los factores ESG en el desempeño financiero de la empresa (materialidad financiera).</p>
        
        <h3>2. Estándares Europeos de Reporte de Sostenibilidad (ESRS)</h3>
        <p>Los ESRS proporcionan un marco detallado y estandarizado para el reporte, asegurando comparabilidad entre empresas y sectores.</p>
        
        <h3>3. Verificación Externa Obligatoria</h3>
        <p>Todos los informes CSRD deben ser verificados por un auditor externo independiente, añadiendo una capa adicional de credibilidad y rigor.</p>
        
        <h2>Cómo ESGrade facilita el cumplimiento CSRD</h2>
        <p>Nuestra plataforma automatiza el proceso completo:</p>
        <ul>
          <li>Evaluación automática de doble materialidad</li>
          <li>Recopilación y análisis de datos ESG</li>
          <li>Generación automática de informes conformes ESRS</li>
          <li>Preparación para auditoría externa</li>
        </ul>
        
        <h2>Conclusión</h2>
        <p>La CSRD marca el inicio de una nueva era de transparencia en sostenibilidad. Las empresas que se preparen adecuadamente no solo cumplirán con los requisitos regulatorios, sino que también obtendrán ventajas competitivas significativas en un mercado cada vez más consciente de la sostenibilidad.</p>
      `,
      author: "Equipo ESGrade",
      date: "2024-01-20",
      readTime: "12 min",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=500&fit=crop",
      category: "Normativas CSRD",
      tags: ["CSRD", "Sostenibilidad", "Normativas UE", "ESG"],
      metaDescription: "Guía completa sobre la CSRD: qué empresas afecta, principales cambios vs NFRD, y cómo cumplir con los nuevos requisitos de reporte de sostenibilidad en Europa."
    }
  };
  
  const post = posts[id as keyof typeof posts];
  
  if (!post) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-800 mb-4">Artículo no encontrado</h1>
          <Link to="/blog" className="text-esg-primary hover:underline">
            Volver al blog
          </Link>
        </div>
      </div>
    );
  }
  
  const shareUrl = window.location.href;
  const shareText = `${post.title} - ${post.metaDescription}`;
  
  return (
    <>
      {/* SEO Meta Tags */}
      <title>{post.title} | Blog ESGrade</title>
      <meta name="description" content={post.metaDescription} />
      <meta name="keywords" content={post.tags.join(', ')} />
      <meta property="og:title" content={`${post.title} | Blog ESGrade`} />
      <meta property="og:description" content={post.metaDescription} />
      <meta property="og:image" content={post.image} />
      <meta property="og:url" content={shareUrl} />
      <meta property="article:author" content={post.author} />
      <meta property="article:published_time" content={post.date} />
      <meta property="article:tag" content={post.tags.join(', ')} />
      
      <div className="min-h-screen pt-20 bg-white">
        {/* Breadcrumbs */}
        <nav className="bg-slate-50 py-4">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <ol className="flex items-center space-x-2 text-sm text-slate-600">
              <li><Link to="/" className="hover:text-esg-primary">Inicio</Link></li>
              <li className="text-slate-400">/</li>
              <li><Link to="/blog" className="hover:text-esg-primary">Blog</Link></li>
              <li className="text-slate-400">/</li>
              <li className="text-slate-800 font-medium">{post.title}</li>
            </ol>
          </div>
        </nav>
        
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back to Blog */}
          <Link 
            to="/blog" 
            className="inline-flex items-center space-x-2 text-esg-primary hover:text-esg-primary-dark mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Volver al blog</span>
          </Link>
          
          {/* Article Header */}
          <header className="mb-12">
            <div className="mb-6">
              <span className="inline-block bg-esg-primary/10 text-esg-primary px-4 py-2 rounded-full text-sm font-semibold">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black text-slate-800 mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-slate-600 mb-8">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.date).toLocaleDateString('es-ES', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4" />
                <span>{post.readTime} de lectura</span>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative h-96 rounded-2xl overflow-hidden mb-8">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </header>
          
          {/* Article Content */}
          <div 
            className="prose prose-lg max-w-none prose-headings:text-slate-800 prose-headings:font-black prose-p:text-slate-700 prose-p:leading-relaxed prose-a:text-esg-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-800 prose-ul:text-slate-700 prose-ol:text-slate-700"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-slate-200">
            <h3 className="text-lg font-bold text-slate-800 mb-4">Etiquetas:</h3>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
          
          {/* Share Buttons */}
          <div className="mt-8 pt-8 border-t border-slate-200">
            <h3 className="text-lg font-bold text-slate-800 mb-4">Compartir artículo:</h3>
            <div className="flex space-x-4">
              <a
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Twitter className="w-4 h-4" />
                <span>Twitter</span>
              </a>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Facebook className="w-4 h-4" />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </article>
        
        {/* Related Articles */}
        <section className="bg-slate-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-black text-slate-800 mb-8">Artículos relacionados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Link to="/blog/2" className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=200&fit=crop" 
                  alt="Taxonomía Europea"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-esg-primary transition-colors">
                    Taxonomía Europea: Guía Completa
                  </h3>
                  <p className="text-slate-600 mt-2">Comprende en profundidad la Taxonomía Europea...</p>
                </div>
              </Link>
              
              <Link to="/blog/3" className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1559526324-593bc073d938?w=400&h=200&fit=crop" 
                  alt="SFDR"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-esg-primary transition-colors">
                    SFDR: Transparencia en Servicios Financieros
                  </h3>
                  <p className="text-slate-600 mt-2">El Reglamento sobre la Divulgación de Finanzas...</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPost;
