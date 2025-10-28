import { Calendar, MapPin, Users, Search, Filter } from 'lucide-react';

const upcomingEvents = [
  {
    id: 1,
    title: 'Amity Hack 2025',
    university: 'Amity University',
    date: 'Feb 15-17, 2025',
    location: 'Delhi NCR',
    participants: '500+',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop',
    tags: ['Hackathon', 'Tech'],
  },
  {
    id: 2,
    title: 'IIT Delhi Robotics Summit',
    university: 'IIT Delhi',
    date: 'Feb 20-22, 2025',
    location: 'Delhi',
    participants: '300+',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop',
    tags: ['Robotics', 'AI/ML'],
  },
  {
    id: 3,
    title: 'Startup Weekend India',
    university: 'Multiple Universities',
    date: 'Mar 1-3, 2025',
    location: 'Pan India',
    participants: '1000+',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
    tags: ['Startup', 'Business'],
  },
  {
    id: 4,
    title: 'Web Dev Bootcamp',
    university: 'BITS Pilani',
    date: 'Feb 25, 2025',
    location: 'Pilani',
    participants: '200+',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
    tags: ['Web', 'Development'],
  },
];

export default function DashboardEvents() {
  return (
    <div className="space-y-6">
      {/* Search & Filter */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2 relative">
          <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search events, hackathons, competitions..."
            className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-100 transition-all"
          />
        </div>
        <button className="flex items-center justify-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-muted transition-all font-medium">
          <Filter className="w-5 h-5" />
          Filters
        </button>
      </div>

      {/* Events Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {upcomingEvents.map((event) => (
          <div
            key={event.id}
            className="group bg-white rounded-xl border border-border overflow-hidden hover:shadow-lg hover:border-primary transition-all"
          >
            <div className="aspect-square bg-gradient-to-br from-primary-100 to-primary-50 overflow-hidden group-hover:scale-110 transition-transform">
              <img 
                src={event.image} 
                alt={event.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/800x600/0077b5/ffffff?text=Event';
                }}
              />
            </div>
            <div className="p-6">
              <div className="mb-3 flex flex-wrap gap-2">
                {event.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-3 py-1 bg-primary-100 text-primary rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {event.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">{event.university}</p>

              <div className="space-y-2 mb-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {event.date}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {event.location}
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  {event.participants} participants
                </div>
              </div>

              <button className="w-full py-2 px-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-700 transition-all group-hover:shadow-lg">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
