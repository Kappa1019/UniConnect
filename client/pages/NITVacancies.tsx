import Layout from '@/components/Layout';
import JobOpeningsCards, { ResearchOpening } from '@/components/JobOpeningsCards';
import EventsCarousel from '@/components/EventsCarousel';
import NITBanner from '@/components/NITBanner';
import { ChevronLeft, Calendar, Users, Trophy, Code, Briefcase, GraduationCap, Handshake, DollarSign, Network, Target, BookOpen, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const iimOpenings: ResearchOpening[] = [
  {
    id: 'iim-1',
    post: 'Research Associate',
    discipline: 'Business Analytics',
    piName: 'Prof. Rajesh Kumar',
    institute: 'IIM Ahmedabad',
    postingDate: '21.10.2025',
    lastDate: '30.10.2025',
    status: 'Open',
  },
  {
    id: 'iim-2',
    post: 'Project Manager',
    discipline: 'Operations Research',
    piName: 'Prof. Priya Sharma',
    institute: 'IIM Bangalore',
    postingDate: '22.10.2025',
    lastDate: '31.10.2025',
    status: 'Open',
  },
  {
    id: 'iim-3',
    post: 'Data Analyst',
    discipline: 'Management Information Systems',
    piName: 'Prof. Amit Patel',
    institute: 'IIM Calcutta',
    postingDate: '23.10.2025',
    lastDate: '02.11.2025',
    status: 'Open',
  },
  {
    id: 'iim-4',
    post: 'Research Fellow',
    discipline: 'Finance',
    piName: 'Prof. Sunita Singh',
    institute: 'IIM Lucknow',
    postingDate: '20.10.2025',
    lastDate: '29.10.2025',
    status: 'Open',
  },
  {
    id: 'iim-5',
    post: 'Business Development Associate',
    discipline: 'Marketing',
    piName: 'Prof. Vikram Mehta',
    institute: 'IIM Indore',
    postingDate: '19.10.2025',
    lastDate: '28.10.2025',
    status: 'Closed',
  },
  {
    id: 'iim-6',
    post: 'Strategy Consultant',
    discipline: 'Strategic Management',
    piName: 'Prof. Anjali Gupta',
    institute: 'IIM Kozhikode',
    postingDate: '18.10.2025',
    lastDate: '27.10.2025',
    status: 'Open',
  },
  {
    id: 'iim-7',
    post: 'Operations Analyst',
    discipline: 'Supply Chain Management',
    piName: 'Prof. Ravi Kumar',
    institute: 'IIM Shillong',
    postingDate: '17.10.2025',
    lastDate: '26.10.2025',
    status: 'Open',
  },
  {
    id: 'iim-8',
    post: 'Digital Marketing Specialist',
    discipline: 'Digital Marketing',
    piName: 'Prof. Deepika Joshi',
    institute: 'IIM Udaipur',
    postingDate: '16.10.2025',
    lastDate: '25.10.2025',
    status: 'Open',
  },
  {
    id: 'iim-9',
    post: 'HR Business Partner',
    discipline: 'Human Resource Management',
    piName: 'Prof. Manish Agarwal',
    institute: 'IIM Raipur',
    postingDate: '15.10.2025',
    lastDate: '24.10.2025',
    status: 'Open',
  },
  {
    id: 'iim-10',
    post: 'Financial Analyst',
    discipline: 'Corporate Finance',
    piName: 'Prof. Kavita Reddy',
    institute: 'IIM Trichy',
    postingDate: '14.10.2025',
    lastDate: '23.10.2025',
    status: 'Open',
  },
];

const iimFests = [
  {
    id: 'fest-1',
    name: 'Confluence IIM Ahmedabad',
    date: 'Feb 15-18, 2025',
    location: 'IIM Ahmedabad',
    description: 'Asia\'s largest business festival with case studies and competitions',
    participants: '50,000+',
    status: 'Upcoming',
    category: 'Business'
  },
  {
    id: 'fest-2',
    name: 'Unmaad IIM Bangalore',
    date: 'Mar 20-23, 2025',
    location: 'IIM Bangalore',
    description: 'Cultural extravaganza with business competitions and performances',
    participants: '35,000+',
    status: 'Upcoming',
    category: 'Cultural'
  },
  {
    id: 'fest-3',
    name: 'Intaglio IIM Calcutta',
    date: 'Jan 10-13, 2025',
    location: 'IIM Calcutta',
    description: 'International business summit with global case competitions',
    participants: '40,000+',
    status: 'Upcoming',
    category: 'Business'
  },
  {
    id: 'fest-4',
    name: 'Manfest IIM Lucknow',
    date: 'Apr 5-8, 2025',
    location: 'IIM Lucknow',
    description: 'Management festival with leadership workshops and competitions',
    participants: '25,000+',
    status: 'Upcoming',
    category: 'Management'
  },
  {
    id: 'fest-5',
    name: 'Fluxus IIM Indore',
    date: 'May 12-15, 2025',
    location: 'IIM Indore',
    description: 'Cultural and business festival with innovation challenges',
    participants: '30,000+',
    status: 'Upcoming',
    category: 'Innovation'
  }
];

const iimHackathons = [
  {
    id: 'hack-1',
    name: 'Business Innovation Challenge IIM Ahmedabad',
    date: 'Feb 1-2, 2025',
    location: 'IIM Ahmedabad',
    description: '48-hour business case solving and innovation competition',
    prize: '₹1,00,000',
    participants: '1,500+',
    status: 'Open',
    category: 'Business Innovation'
  },
  {
    id: 'hack-2',
    name: 'FinTech Hackathon IIM Bangalore',
    date: 'Mar 15-16, 2025',
    location: 'IIM Bangalore',
    description: 'Financial technology solutions and fintech innovation',
    prize: '₹75,000',
    participants: '800+',
    status: 'Upcoming',
    category: 'FinTech'
  },
  {
    id: 'hack-3',
    name: 'Digital Marketing Challenge IIM Calcutta',
    date: 'Jan 25-26, 2025',
    location: 'IIM Calcutta',
    description: 'Digital marketing strategy and campaign development',
    prize: '₹60,000',
    participants: '600+',
    status: 'Open',
    category: 'Digital Marketing'
  },
  {
    id: 'hack-4',
    name: 'Supply Chain Innovation IIM Lucknow',
    date: 'Apr 10-11, 2025',
    location: 'IIM Lucknow',
    description: 'Supply chain optimization and logistics solutions',
    prize: '₹80,000',
    participants: '700+',
    status: 'Upcoming',
    category: 'Supply Chain'
  },
  {
    id: 'hack-5',
    name: 'Startup Pitch Competition IIM Indore',
    date: 'May 20-21, 2025',
    location: 'IIM Indore',
    description: 'Business plan development and startup pitch competition',
    prize: '₹1,50,000',
    participants: '1,200+',
    status: 'Upcoming',
    category: 'Entrepreneurship'
  }
];

export default function NITVacancies() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.offsetTop - 100; // 100px offset from top
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Layout hideFooter={false}>
      <div className="min-h-screen bg-gray-100">
        <div className="container max-w-7xl mx-auto px-4 py-8">
          {/* Back to Dashboard Link */}
          <div className="flex items-center gap-4 mb-8">
            <Link
              to="/dashboard"
              className="flex items-center gap-2 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
              Back to Dashboard
            </Link>
          </div>

          {/* Page Title */}
          <div className="mb-8">
            <h1
              className="text-4xl font-bold mb-2"
              style={{ color: '#0077b5' }}
            >
              National Institute of Technology (NIT)
            </h1>
            <p className="text-gray-600">
              Explore job openings, fests, and hackathons across National Institutes of Technology
            </p>
          </div>

          {/* NIT Banner */}
          <NITBanner />

          {/* Navigation Bar */}
          <div className="mb-8">
            <div className="bg-white rounded-2xl border border-gray-200 p-4 shadow-sm">
              <div className="flex overflow-x-auto gap-4 pb-2">
                {/* Job Openings */}
                <button 
                  onClick={() => scrollToSection('job-openings')}
                  className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-gray-50 transition-colors min-w-[80px]"
                >
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Job Openings</span>
                </button>

                {/* Fest */}
                <button 
                  onClick={() => scrollToSection('upcoming-fests')}
                  className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-gray-50 transition-colors min-w-[80px]"
                >
                  <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-yellow-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Fest</span>
                </button>

                {/* Hackathons */}
                <button 
                  onClick={() => scrollToSection('hackathons')}
                  className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-gray-50 transition-colors min-w-[80px]"
                >
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Code className="w-5 h-5 text-purple-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Hackathons</span>
                </button>

                {/* Seminar */}
                <button className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-gray-50 transition-colors min-w-[80px]">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Seminar</span>
                </button>

                {/* Colab */}
                <button className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-gray-50 transition-colors min-w-[80px]">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <Handshake className="w-5 h-5 text-green-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Colab</span>
                </button>

                {/* Coding */}
                <button className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-gray-50 transition-colors min-w-[80px]">
                  <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Code className="w-5 h-5 text-purple-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Coding</span>
                </button>

                {/* Sports */}
                <button className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-gray-50 transition-colors min-w-[80px]">
                  <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-orange-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Sports</span>
                </button>

                {/* Cultures */}
                <button className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-gray-50 transition-colors min-w-[80px]">
                  <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-pink-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Cultures</span>
                </button>

                {/* OwnUni */}
                <button className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-gray-50 transition-colors min-w-[80px]">
                  <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-indigo-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">OwnUni</span>
                </button>

                {/* Chance */}
                <button className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-gray-50 transition-colors min-w-[80px]">
                  <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-yellow-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Chance</span>
                </button>

                {/* Alumni */}
                <button className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-gray-50 transition-colors min-w-[80px]">
                  <div className="w-8 h-8 bg-cyan-100 rounded-lg flex items-center justify-center">
                    <Network className="w-5 h-5 text-cyan-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Alumni</span>
                </button>

                {/* Funding */}
                <button className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-gray-50 transition-colors min-w-[80px]">
                  <div className="w-8 h-8 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-emerald-600" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Funding</span>
                </button>
              </div>
            </div>
          </div>

          {/* Job Openings Section */}
          <div id="job-openings">
            <JobOpeningsCards
              title="Job Openings"
              instituteType="NIT"
              data={iimOpenings}
              applyBaseUrl="https://nitapply.uniconnect.in/"
            />
          </div>

          {/* Fests Section */}
          <div id="upcoming-fests">
            <EventsCarousel
              title="Upcoming Fests"
              data={iimFests}
              showPrize={false}
            />
          </div>

          {/* Hackathons Section */}
          <div id="hackathons">
            <EventsCarousel
              title="Hackathons & Competitions"
              data={iimHackathons}
              showPrize={true}
            />
          </div>

          {/* Footer Info */}
          <div className="mt-12 p-6 bg-white rounded-lg border border-gray-200">
            <h3 className="font-semibold text-gray-800 mb-2">About Express Fill</h3>
            <p className="text-gray-600 text-sm">
              UniConnect Express Fill is an exclusive feature that automatically pre-fills your
              profile information into research opportunity applications, saving you time and ensuring
              consistency across multiple submissions.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}
