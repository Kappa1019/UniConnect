import { Users, Search, Filter, Star, Cpu, Briefcase, Laptop, Palette } from 'lucide-react';

const clubs = [
  {
    id: 1,
    name: 'IIT Delhi Robotics Club',
    university: 'IIT Delhi',
    members: '450+',
    icon: Cpu,
    iconColor: 'from-purple-400 to-purple-600',
    category: 'Robotics',
    about: 'Building autonomous robots and competing in national competitions.',
  },
  {
    id: 2,
    name: 'BITS Startup Club',
    university: 'BITS Pilani',
    members: '320+',
    icon: Briefcase,
    iconColor: 'from-blue-400 to-blue-600',
    category: 'Startup',
    about: 'Fostering entrepreneurship and building the next generation of founders.',
  },
  {
    id: 3,
    name: 'Delhi University Tech Club',
    university: 'Delhi University',
    members: '280+',
    icon: Laptop,
    iconColor: 'from-green-400 to-green-600',
    category: 'Technology',
    about: 'Learning cutting-edge tech and building projects together.',
  },
  {
    id: 4,
    name: 'Amity Design Club',
    university: 'Amity University',
    members: '200+',
    icon: Palette,
    iconColor: 'from-pink-400 to-pink-600',
    category: 'Design',
    about: 'UI/UX design, digital art, and creative projects.',
  },
];

export default function DashboardCommunities() {
  return (
    <div className="space-y-6">
      {/* Search & Filter */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2 relative">
          <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search clubs, communities, interests..."
            className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-100 transition-all"
          />
        </div>
        <button className="flex items-center justify-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-muted transition-all font-medium">
          <Filter className="w-5 h-5" />
          Filters
        </button>
      </div>

      {/* Communities Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {clubs.map((club) => (
          <div
            key={club.id}
            className="group bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:border-primary transition-all"
          >
            <div className={`bg-gradient-to-br ${club.iconColor} h-32 flex items-center justify-center group-hover:scale-110 transition-transform`}>
              <club.icon className="w-16 h-16 text-white" />
            </div>

            <div className="p-6">
              <div className="mb-2">
                <span className="text-xs px-3 py-1 bg-primary-100 text-primary rounded-full font-medium">
                  {club.category}
                </span>
              </div>

              <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                {club.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">{club.university}</p>

              <p className="text-sm text-foreground mb-4 line-clamp-2">{club.about}</p>

              <div className="flex items-center justify-between mb-6 text-sm">
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{club.members}</span>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < 4 ? 'fill-yellow-400 text-yellow-400' : 'text-border'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <button className="w-full py-2 px-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-700 transition-all group-hover:shadow-lg">
                View Club
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
