import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface NITData {
  id: string;
  name: string;
  location: string;
  description: string;
  image: string;
  established: string;
  specialties: string[];
}

const nitData: NITData[] = [
  {
    id: 'nit-delhi',
    name: 'NIT Delhi',
    location: 'New Delhi',
    description: 'Premier engineering institute in the capital city',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    established: '2010',
    specialties: ['Engineering', 'Technology', 'Research']
  },
  {
    id: 'nit-trichy',
    name: 'NIT Tiruchirappalli',
    location: 'Tiruchirappalli',
    description: 'One of the oldest and most prestigious NITs',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    established: '1964',
    specialties: ['Engineering', 'Technology', 'Management']
  },
  {
    id: 'nit-surathkal',
    name: 'NIT Surathkal',
    location: 'Mangalore',
    description: 'Leading institute for engineering excellence',
    image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    established: '1960',
    specialties: ['Engineering', 'Computer Science', 'Technology']
  },
  {
    id: 'nit-warangal',
    name: 'NIT Warangal',
    location: 'Warangal',
    description: 'Excellence in engineering education and research',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    established: '1959',
    specialties: ['Engineering', 'Technology', 'Innovation']
  },
  {
    id: 'nit-kurukshetra',
    name: 'NIT Kurukshetra',
    location: 'Kurukshetra',
    description: 'Pioneer in engineering and technology education',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    established: '1963',
    specialties: ['Engineering', 'Technology', 'Research']
  },
  {
    id: 'nit-calicut',
    name: 'NIT Calicut',
    location: 'Kozhikode',
    description: 'Premier institute for engineering and technology',
    image: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    established: '1961',
    specialties: ['Engineering', 'Technology', 'Management']
  }
];

export default function NITBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === nitData.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // 2 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? nitData.length - 1 : currentIndex - 1);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === nitData.length - 1 ? 0 : currentIndex + 1);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const currentNIT = nitData[currentIndex];

  return (
    <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-lg mb-8">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
        style={{ backgroundImage: `url(${currentNIT.image})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-4xl px-8 text-white">
          <div className="mb-4">
            <h2 className="text-4xl font-bold mb-2">{currentNIT.name}</h2>
            <p className="text-xl text-gray-200 mb-2">{currentNIT.location}</p>
            <p className="text-lg text-gray-300 mb-4 max-w-2xl">{currentNIT.description}</p>
          </div>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="text-sm font-medium">Est. {currentNIT.established}</span>
            </div>
            {currentNIT.specialties.map((specialty, index) => (
              <div key={index} className="bg-green-600/80 backdrop-blur-sm rounded-lg px-4 py-2">
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
        {nitData.map((_, index) => (
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
