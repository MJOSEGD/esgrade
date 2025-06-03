
import React, { useState, useEffect } from 'react';
import { TrendingUp } from 'lucide-react';

interface ESGScoreWidgetProps {
  score?: number;
  title?: string;
  subtitle?: string;
  animated?: boolean;
}

const ESGScoreWidget: React.FC<ESGScoreWidgetProps> = ({
  score = 75,
  title = "Tu Score ESG",
  subtitle = "Certificación en progreso",
  animated = true
}) => {
  const [displayScore, setDisplayScore] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (animated && isVisible) {
      const timer = setTimeout(() => {
        const interval = setInterval(() => {
          setDisplayScore(prev => {
            if (prev >= score) {
              clearInterval(interval);
              return score;
            }
            return prev + 1;
          });
        }, 20);
        return () => clearInterval(interval);
      }, 500);
      return () => clearTimeout(timer);
    } else if (!animated) {
      setDisplayScore(score);
    }
  }, [score, animated, isVisible]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.querySelector('#esg-widget');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-500';
    if (score >= 60) return 'text-yellow-500';
    return 'text-red-500';
  };

  const getProgressColor = (score: number) => {
    if (score >= 80) return 'bg-green-500';
    if (score >= 60) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div id="esg-widget" className="bg-esg-white border-4 border-esg-black p-6 hover-lift">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="font-black text-xl text-esg-black">{title}</h3>
          <p className="text-esg-dark text-sm">{subtitle}</p>
        </div>
        <TrendingUp className="w-6 h-6 text-esg-lime" />
      </div>
      
      <div className="relative mb-4">
        <div className="flex items-center justify-center w-32 h-32 mx-auto relative">
          <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 120 120">
            <circle
              cx="60"
              cy="60"
              r="50"
              stroke="#F5F5F5"
              strokeWidth="8"
              fill="none"
            />
            <circle
              cx="60"
              cy="60"
              r="50"
              stroke="#B6FF5B"
              strokeWidth="8"
              fill="none"
              strokeDasharray={`${(displayScore / 100) * 314} 314`}
              strokeLinecap="round"
              className="transition-all duration-1000 ease-out"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className={`font-black text-3xl ${getScoreColor(displayScore)}`}>
              {displayScore}
            </span>
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-esg-dark">Progreso</span>
          <span className="text-esg-black font-semibold">{displayScore}/100</span>
        </div>
        <div className="w-full bg-esg-gray h-3 border border-esg-black">
          <div
            className={`h-full transition-all duration-1000 ease-out ${getProgressColor(displayScore)}`}
            style={{ width: `${displayScore}%` }}
          ></div>
        </div>
      </div>

      <div className="mt-4 text-center">
        <button className="btn-secondary text-xs py-2 px-4">
          Ver Detalles
        </button>
      </div>
    </div>
  );
};

export default ESGScoreWidget;
