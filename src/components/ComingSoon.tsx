
import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ComingSoonProps {
  title: string;
  description: string;
  expectedDate?: string;
  features?: string[];
}

const ComingSoon: React.FC<ComingSoonProps> = ({
  title,
  description,
  expectedDate = "Próximamente",
  features = []
}) => {
  return (
    <div className="min-h-screen pt-20 bg-esg-gray">
      <div className="section-padding">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <span className="inline-block bg-esg-lime text-esg-black px-4 py-2 font-bold text-sm border-2 border-esg-black mb-6">
              {expectedDate}
            </span>
            <h1 className="text-5xl md:text-6xl font-black text-esg-black mb-6">
              {title}
            </h1>
            <p className="text-xl text-esg-dark max-w-2xl mx-auto mb-12">
              {description}
            </p>
          </div>

          {features.length > 0 && (
            <div className="bg-white border-4 border-esg-black p-8 mb-12">
              <h3 className="text-2xl font-black text-esg-black mb-6">
                Lo que estamos preparando:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-esg-lime border border-esg-black"></div>
                    <span className="text-esg-dark">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="space-y-6">
            <p className="text-esg-dark font-semibold">
              ¿Quieres ser el primero en conocer cuando esté disponible?
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-4 py-3 border-2 border-esg-black text-esg-black placeholder-gray-500 focus:border-esg-lime focus:outline-none"
              />
              <button className="btn-primary flex items-center justify-center space-x-2">
                <Mail className="w-5 h-5" />
                <span>Notificarme</span>
              </button>
            </div>

            <div className="pt-8">
              <Link 
                to="/"
                className="inline-flex items-center space-x-2 text-esg-dark hover:text-esg-black transition-colors duration-300"
              >
                <span>Volver al inicio</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
