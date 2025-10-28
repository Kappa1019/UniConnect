import Layout from '@/components/Layout';
import { Search, Filter, Users, Bookmark, TrendingUp, Building2, GraduationCap, BookOpen, Sparkles, Landmark, Target } from 'lucide-react';

export default function Universities() {
  const universities = [
    {
      id: 1,
      name: 'IIT Delhi',
      location: 'Delhi',
      icon: Building2,
      iconColor: 'from-blue-400 to-blue-600',
      students: '10,500+',
      clubs: '150+',
      events: '50+',
      topSkills: ['AI/ML', 'Robotics', 'Blockchain'],
      ranking: '#1 in India',
    },
    {
      id: 2,
      name: 'BITS Pilani',
      location: 'Rajasthan',
      icon: GraduationCap,
      iconColor: 'from-purple-400 to-purple-600',
      students: '15,000+',
      clubs: '180+',
      events: '60+',
      topSkills: ['Startup', 'Tech', 'Design'],
      ranking: '#2 in India',
    },
    {
      id: 3,
      name: 'Delhi University',
      location: 'Delhi',
      icon: BookOpen,
      iconColor: 'from-green-400 to-green-600',
      students: '35,000+',
      clubs: '200+',
      events: '80+',
      topSkills: ['Business', 'Arts', 'Science'],
      ranking: '#3 in India',
    },
    {
      id: 4,
      name: 'Amity University',
      location: 'Delhi NCR',
      icon: Sparkles,
      iconColor: 'from-pink-400 to-pink-600',
      students: '20,000+',
      clubs: '160+',
      events: '70+',
      topSkills: ['Tech', 'Management', 'Design'],
      ranking: '#5 in India',
    },
    {
      id: 5,
      name: 'IIT Bombay',
      location: 'Mumbai',
      icon: Landmark,
      iconColor: 'from-indigo-400 to-indigo-600',
      students: '12,000+',
      clubs: '140+',
      events: '55+',
      topSkills: ['Engineering', 'Research', 'Tech'],
      ranking: '#2 in India',
    },
    {
      id: 6,
      name: 'Pune University',
      location: 'Pune',
      icon: Target,
      iconColor: 'from-orange-400 to-orange-600',
      students: '25,000+',
      clubs: '170+',
      events: '75+',
      topSkills: ['IT', 'Business', 'Science'],
      ranking: '#7 in India',
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="bg-gradient-to-r from-primary-50 to-background border-b border-border">
          <div className="container max-w-7xl mx-auto px-4 py-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Explore Universities
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Discover top universities, their clubs, events, and student communities across India.
            </p>
          </div>
        </div>

        {/* Search & Filter */}
        <div className="container max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="md:col-span-2 relative">
              <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search universities, colleges..."
                className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary-100 transition-all"
              />
            </div>
            <button className="flex items-center justify-center gap-2 px-6 py-3 border border-border rounded-lg hover:bg-muted transition-all font-medium">
              <Filter className="w-5 h-5" />
              Filters
            </button>
          </div>

          {/* Universities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {universities.map((uni) => (
              <div
                key={uni.id}
                className="group bg-white rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:border-primary transition-all"
              >
                {/* Cover */}
                <div className={`bg-gradient-to-r ${uni.iconColor} h-40 relative group-hover:opacity-90 transition-opacity`}>
                  <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <uni.icon className="w-20 h-20 text-white opacity-90" />
                  </div>
                  <button className="absolute top-4 right-4 p-2 bg-white rounded-lg hover:bg-primary-100 transition-colors shadow-lg">
                    <Bookmark className="w-5 h-5 text-primary" />
                  </button>
                </div>

                <div className="p-6">
                  <div className="mb-3">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {uni.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{uni.location}</p>
                  </div>

                  {/* Rankings */}
                  <div className="flex items-center gap-2 mb-4 text-sm font-medium text-primary">
                    <TrendingUp className="w-4 h-4" />
                    {uni.ranking}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6 py-4 border-y border-border">
                    <div className="text-center">
                      <div className="text-lg font-bold text-foreground">{uni.students}</div>
                      <div className="text-xs text-muted-foreground">Students</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-foreground">{uni.clubs}</div>
                      <div className="text-xs text-muted-foreground">Clubs</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-foreground">{uni.events}</div>
                      <div className="text-xs text-muted-foreground">Events</div>
                    </div>
                  </div>

                  {/* Top Skills */}
                  <div className="mb-6">
                    <p className="text-xs font-semibold text-muted-foreground mb-2">TOP SKILLS</p>
                    <div className="flex flex-wrap gap-2">
                      {uni.topSkills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-3 py-1 bg-primary-100 text-primary rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="w-full py-2 px-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-700 transition-all group-hover:shadow-lg">
                    View University
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Placeholder for complete feature */}
          <div className="bg-primary-50 rounded-2xl border-2 border-dashed border-primary-200 p-12 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-3">
              University Profiles & Analytics
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-6">
              Each university page features clubs, events, top achievements, and student profiles. 
              Want to build university pages with detailed analytics, achievement showcases, and alumni networks? 
              Let us know what features to add next!
            </p>
            <button className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-700 transition-all">
              Continue Building
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
