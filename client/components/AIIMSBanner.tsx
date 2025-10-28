import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface AIIMSData {
  id: string;
  name: string;
  location: string;
  description: string;
  image: string;
  established: string;
  specialties: string[];
}

const aiimsData: AIIMSData[] = [
  {
    id: 'aiims-delhi',
    name: 'AIIMS Delhi',
    location: 'New Delhi',
    description: 'Premier medical institute and hospital in India\'s capital',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    established: '1956',
    specialties: ['Medicine', 'Research', 'Healthcare']
  },
  {
    id: 'aiims-bhopal',
    name: 'AIIMS Bhopal',
    location: 'Bhopal',
    description: 'Leading medical institute in central India',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    established: '2012',
    specialties: ['Medicine', 'Surgery', 'Research']
  },
  {
    id: 'aiims-jodhpur',
    name: 'AIIMS Jodhpur',
    location: 'Jodhpur',
    description: 'Excellence in medical education and healthcare',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    established: '2012',
    specialties: ['Medicine', 'Healthcare', 'Research']
  },
  {
    id: 'aiims-patna',
    name: 'AIIMS Patna',
    location: 'Patna',
    description: 'Premier medical institute in eastern India',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba0ef8d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    established: '2012',
    specialties: ['Medicine', 'Surgery', 'Healthcare']
  },
  {
    id: 'aiims-rishikesh',
    name: 'AIIMS Rishikesh',
    location: 'Rishikesh',
    description: 'Medical excellence in the foothills of Himalayas',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    established: '2012',
    specialties: ['Medicine', 'Yoga', 'Healthcare']
  },
  {
    id: 'aiims-bhubaneswar',
    name: 'AIIMS Bhubaneswar',
    location: 'Bhubaneswar',
    description: 'Leading medical institute in eastern India',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
    established: '2012',
    specialties: ['Medicine', 'Research', 'Healthcare']
  }
];

export default function AIIMSBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === aiimsData.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000); // 2 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? aiimsData.length - 1 : currentIndex - 1);
    setIsAutoPlaying(false);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === aiimsData.length - 1 ? 0 : currentIndex + 1);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const currentAIIMS = aiimsData[currentIndex];

  return (
    <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-lg mb-8">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
        style={{ backgroundImage: `url(${currentAIIMS.image})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-4xl px-8 text-white">
          <div className="mb-4">
            <h2 className="text-4xl font-bold mb-2">{currentAIIMS.name}</h2>
            <p className="text-xl text-gray-200 mb-2">{currentAIIMS.location}</p>
            <p className="text-lg text-gray-300 mb-4 max-w-2xl">{currentAIIMS.description}</p>
          </div>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2">
              <span className="text-sm font-medium">Est. {currentAIIMS.established}</span>
            </div>
            {currentAIIMS.specialties.map((specialty, index) => (
              <div key={index} className="bg-red-600/80 backdrop-blur-sm rounded-lg px-4 py-2">
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
        {aiimsData.map((_, index) => (
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
