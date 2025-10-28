import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface IITData {
  id: string;
  name: string;
  location: string;
  description: string;
  image: string;
  established: string;
  specialties: string[];
}

const iitData: IITData[] = [
  {
    id: 'iit-delhi',
    name: 'IIT Delhi',
    location: 'New Delhi',
    description: 'Premier engineering institute in the heart of India\'s capital',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    established: '1961',
    specialties: ['Engineering', 'Technology', 'Research']
  },
  {
    id: 'iit-bombay',
    name: 'IIT Bombay',
    location: 'Mumbai',
    description: 'Leading institute for technology and innovation',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    established: '1958',
    specialties: ['Computer Science', 'Engineering', 'Management']
  },
  {
    id: 'iit-madras',
    name: 'IIT Madras',
    location: 'Chennai',
    description: 'Excellence in engineering education and research',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    established: '1959',
    specialties: ['Engineering', 'Science', 'Technology']
  },
  {
    id: 'iit-kanpur',
    name: 'IIT Kanpur',
    location: 'Kanpur',
    description: 'Pioneer in engineering and technology education',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    established: '1959',
    specialties: ['Engineering', 'Aerospace', 'Technology']
  },
  {
    id: 'iit-kharagpur',
    name: 'IIT Kharagpur',
    location: 'Kharagpur',
    description: 'The first and oldest IIT, setting standards for excellence',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    established: '1951',
    specialties: ['Engineering', 'Technology', 'Management']
  },
  {
    id: 'iit-roorkee',
    name: 'IIT Roorkee',
    location: 'Roorkee',
    description: 'Historic institute with rich legacy in engineering',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    established: '1847',
    specialties: ['Engineering', 'Architecture', 'Technology']
  }
];

export default function IITBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === iitData.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // 2 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? iitData.length - 1 : currentIndex - 1);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === iitData.length - 1 ? 0 : currentIndex + 1);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const currentIIT = iitData[currentIndex];

  return (
    <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-lg mb-8">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
        style={{ backgroundImage: `url(${currentIIT.image})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-4xl px-8 text-white">
          <div className="mb-4">
            <h2 className="text-4xl font-bold mb-2">{currentIIT.name}</h2>
            <p className="text-xl text-gray-200 mb-2">{currentIIT.location}</p>
            <p className="text-lg text-gray-300 mb-4 max-w-2xl">{currentIIT.description}</p>
          </div>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="text-sm font-medium">Est. {currentIIT.established}</span>
            </div>
            {currentIIT.specialties.map((specialty, index) => (
              <div key={index} className="bg-blue-600/80 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-sm font-medium">{specialty}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-200 z-20"
        onMouseEnter={() => setIsAutoPlaying(false)}
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-200 z-20"
        onMouseEnter={() => setIsAutoPlaying(false)}
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {iitData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex 
                ? 'bg-white' 
                : 'bg-white/50 hover:bg-white/70'
            }`}
            onMouseEnter={() => setIsAutoPlaying(false)}
          />
        ))}
      </div>

      {/* Auto-play indicator */}
      <div className="absolute top-4 right-4 z-20">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-lg px-3 py-2 text-white text-sm font-medium transition-all duration-200"
        >
          {isAutoPlaying ? 'Pause' : 'Play'}
        </button>
      </div>
    </div>
  );
}
