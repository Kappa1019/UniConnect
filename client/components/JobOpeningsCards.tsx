import { useState } from 'react';
import { Calendar, MapPin, User, Zap, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import ExpressFillModal from './ExpressFillModal';

export interface ResearchOpening {
  id: string;
  post: string;
  discipline: string;
  piName: string;
  institute: string;
  postingDate: string;
  lastDate: string;
  status: 'Open' | 'Closed';
}

interface JobOpeningsCardsProps {
  title: string;
  instituteType: 'IIT' | 'NIT' | 'AIIMS' | 'IIM';
  data: ResearchOpening[];
  applyBaseUrl: string;
}

export default function JobOpeningsCards({
  title,
  instituteType,
  data,
  applyBaseUrl,
}: JobOpeningsCardsProps) {
  const [selectedOpportunity, setSelectedOpportunity] = useState<ResearchOpening | null>(null);
  const [isExpressFillOpen, setIsExpressFillOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Show 3 cards at a time on desktop, 1 on mobile
  const cardsPerView = 3;
  const totalSlides = Math.ceil(data.length / cardsPerView);

  const handleApply = (opportunity: ResearchOpening) => {
    const applyUrl = `${applyBaseUrl}?post=${encodeURIComponent(opportunity.post)}&institute=${encodeURIComponent(opportunity.institute)}`;
    window.open(applyUrl, '_blank');
  };

  const handleExpressFill = (opportunity: ResearchOpening) => {
    setSelectedOpportunity(opportunity);
    setIsExpressFillOpen(true);
  };

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
    return status === 'Open'
      ? 'bg-green-100 text-green-800 border-green-200'
      : 'bg-gray-100 text-gray-800 border-gray-200';
  };

  const getInstituteColor = (instituteType: string) => {
    switch (instituteType) {
      case 'IIT':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'NIT':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'AIIMS':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'IIM':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
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
              .map((opportunity, index) => (
                    <Card 
                      key={`${opportunity.id}-${currentSlide}`} 
                      className="hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out transform hover:-translate-y-2 animate-fade-in card-hover"
                      style={{
                        animationDelay: `${index * 100}ms`,
                        animationFillMode: 'both'
                      }}
                    >
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <CardTitle className="text-lg mb-2">{opportunity.post}</CardTitle>
                            <CardDescription className="text-sm text-gray-600">
                              {opportunity.discipline}
                            </CardDescription>
                          </div>
                          <Badge variant="outline" className={`text-xs ${getStatusColor(opportunity.status)}`}>
                            {opportunity.status}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {/* Institute Info */}
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <MapPin className="h-4 w-4" />
                            <span className="font-medium">{opportunity.institute}</span>
                            <Badge variant="outline" className={`text-xs ${getInstituteColor(instituteType)}`}>
                              {instituteType}
                            </Badge>
                          </div>

                          {/* PI Name */}
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <User className="h-4 w-4" />
                            <span>{opportunity.piName}</span>
                          </div>

                          {/* Dates */}
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <Calendar className="h-4 w-4" />
                            <div className="flex flex-col">
                              <span className="text-xs">
                                <span className="font-medium">Posted:</span> {opportunity.postingDate}
                              </span>
                              <span className="text-xs">
                                <span className="font-medium">Deadline:</span> {opportunity.lastDate}
                              </span>
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="flex gap-2 pt-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleApply(opportunity)}
                              className="flex-1 text-xs btn-hover"
                            >
                              <ExternalLink className="h-3 w-3 mr-1" />
                              Apply
                            </Button>
                            <Button
                              size="sm"
                              onClick={() => handleExpressFill(opportunity)}
                              className="flex-1 text-xs bg-blue-600 hover:bg-blue-700 btn-hover"
                              title="Express Fill - Auto-fill your information"
                            >
                              <Zap className="h-3 w-3 mr-1" />
                              Fill
                            </Button>
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

      {/* Express Fill Modal */}
      {selectedOpportunity && (
        <ExpressFillModal
          isOpen={isExpressFillOpen}
          onClose={() => {
            setIsExpressFillOpen(false);
            setSelectedOpportunity(null);
          }}
          opportunityTitle={`${selectedOpportunity.post} at ${selectedOpportunity.institute}`}
        />
      )}
    </div>
  );
}
