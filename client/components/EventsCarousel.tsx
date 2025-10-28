import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Event {
  id: string;
  name: string;
  date: string;
  location: string;
  description: string;
  participants: string;
  status: string;
  category: string;
  prize?: string;
}

interface EventsCarouselProps {
  title: string;
  data: Event[];
  showPrize?: boolean;
}

export default function EventsCarousel({ title, data, showPrize = false }: EventsCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Show 3 cards at a time on desktop, 1 on mobile
  const cardsPerView = 3;
  const totalSlides = Math.ceil(data.length / cardsPerView);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (slideIndex: number) => {
    if (isTransitioning || slideIndex === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(slideIndex);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const getStatusColor = (status: string) => {
    return status === 'Upcoming' || status === 'Open'
      ? 'bg-blue-100 text-blue-800 border-blue-200'
      : 'bg-gray-100 text-gray-800 border-gray-200';
  };

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-6 max-w-6xl mx-auto px-2">
        <h2 className="text-2xl font-bold" style={{ color: '#0077b5' }}>
          {title}
        </h2>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">
            {currentSlide + 1} of {totalSlides}
          </span>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors"
          disabled={totalSlides <= 1}
        >
          <ChevronLeft className="h-5 w-5 text-gray-600" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg border border-gray-200 hover:bg-gray-50 transition-colors"
          disabled={totalSlides <= 1}
        >
          <ChevronRight className="h-5 w-5 text-gray-600" />
        </button>

        {/* Cards Container */}
        <div className="overflow-hidden">
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 px-2 max-w-6xl mx-auto transition-all duration-500 ease-in-out ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
            {data
              .slice(currentSlide * cardsPerView, (currentSlide + 1) * cardsPerView)
              .map((event, index) => (
                <Card 
                  key={`${event.id}-${currentSlide}`} 
                  className="hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out transform hover:-translate-y-2 animate-fade-in h-full card-hover"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: 'both'
                  }}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-2 line-clamp-2">{event.name}</CardTitle>
                        <CardDescription className="text-sm text-gray-600 line-clamp-2">
                          {event.description}
                        </CardDescription>
                      </div>
                      <Badge variant="outline" className={`text-xs ${getStatusColor(event.status)}`}>
                        {event.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-2">
                      {/* Date */}
                      <div className="text-sm text-gray-600">
                        <span className="font-medium">Date:</span> {event.date}
                      </div>

                      {/* Location */}
                      <div className="text-sm text-gray-600">
                        <span className="font-medium">Location:</span> {event.location}
                      </div>

                      {/* Participants */}
                      <div className="text-sm text-gray-600">
                        <span className="font-medium">Participants:</span> {event.participants}
                      </div>

                      {/* Prize (for hackathons) */}
                      {showPrize && event.prize && (
                        <div className="text-sm text-green-600 font-semibold">
                          <span className="font-medium">Prize:</span> {event.prize}
                        </div>
                      )}

                      {/* Category */}
                      <div className="pt-2">
                        <Badge variant="outline" className="text-xs">
                          {event.category}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>

        {/* Dots Indicator */}
        {totalSlides > 1 && (
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: totalSlides }, (_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentSlide 
                    ? 'bg-blue-600' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
