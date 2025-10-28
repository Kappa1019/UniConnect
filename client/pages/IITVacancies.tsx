import Layout from '@/components/Layout';
import JobOpeningsCards, { ResearchOpening } from '@/components/JobOpeningsCards';
import EventsCarousel from '@/components/EventsCarousel';
import IITBanner from '@/components/IITBanner';
import { ChevronLeft, Calendar, Users, Trophy, Code, Briefcase, GraduationCap, Handshake, DollarSign, Network, Target, BookOpen, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const iitOpenings: ResearchOpening[] = [
  {
    id: 'iit-1',
    post: 'Junior Research Fellow',
    discipline: 'Computer Science and Engg.',
    piName: 'Prof. Nipun Batra',
    institute: 'IIT Gandhinagar',
    postingDate: '23.10.2025',
    lastDate: '06.11.2025',
    status: 'Open',
  },
  {
    id: 'iit-2',
    post: 'Research Associate',
    discipline: 'Mechanical Engg.',
    piName: 'Prof. A.K. Mehta',
    institute: 'IIT Delhi',
    postingDate: '21.10.2025',
    lastDate: '04.11.2025',
    status: 'Open',
  },
  {
    id: 'iit-3',
    post: 'Postdoctoral Fellow',
    discipline: 'Energy Systems',
    piName: 'Prof. Atul Bhargav',
    institute: 'IIT Bombay',
    postingDate: '20.10.2025',
    lastDate: '05.11.2025',
    status: 'Open',
  },
  {
    id: 'iit-4',
    post: 'Research Scholar',
    discipline: 'Electrical Engineering',
    piName: 'Prof. Rajesh Kumar',
    institute: 'IIT Madras',
    postingDate: '19.10.2025',
    lastDate: '03.11.2025',
    status: 'Open',
  },
  {
    id: 'iit-5',
    post: 'Technical Officer',
    discipline: 'Physics',
    piName: 'Prof. Vikram Singh',
    institute: 'IIT Kanpur',
    postingDate: '18.10.2025',
    lastDate: '02.11.2025',
    status: 'Open',
  },
  {
    id: 'iit-6',
    post: 'Lab Assistant',
    discipline: 'Chemistry',
    piName: 'Prof. Priya Sharma',
    institute: 'IIT Roorkee',
    postingDate: '17.10.2025',
    lastDate: '01.11.2025',
    status: 'Closed',
  },
  {
    id: 'iit-7',
    post: 'Senior Research Fellow',
    discipline: 'Computer Science',
    piName: 'Prof. Rajesh Kumar',
    institute: 'IIT Delhi',
    postingDate: '16.10.2025',
    lastDate: '30.10.2025',
    status: 'Open',
  },
  {
    id: 'iit-8',
    post: 'Project Assistant',
    discipline: 'Mechanical Engineering',
    piName: 'Prof. Vikram Singh',
    institute: 'IIT Kanpur',
    postingDate: '15.10.2025',
    lastDate: '29.10.2025',
    status: 'Open',
  },
  {
    id: 'iit-9',
    post: 'Research Intern',
    discipline: 'Physics',
    piName: 'Prof. Sunita Patel',
    institute: 'IIT Madras',
    postingDate: '14.10.2025',
    lastDate: '28.10.2025',
    status: 'Open',
  },
  {
    id: 'iit-10',
    post: 'Technical Assistant',
    discipline: 'Electrical Engineering',
    piName: 'Prof. Amit Kumar',
    institute: 'IIT Bombay',
    postingDate: '13.10.2025',
    lastDate: '27.10.2025',
    status: 'Open',
  },
];

const iitFests = [
  {
    id: 'fest-1',
    name: 'Techfest IIT Bombay',
    date: 'Dec 15-17, 2024',
    location: 'IIT Bombay',
    description: 'Asia\'s largest science and technology festival',
    participants: '150,000+',
    status: 'Upcoming',
    category: 'Technology'
  },
  {
    id: 'fest-2',
    name: 'Cognizance IIT Roorkee',
    date: 'Mar 8-10, 2025',
    location: 'IIT Roorkee',
    description: 'Technical and cultural extravaganza',
    participants: '50,000+',
    status: 'Upcoming',
    category: 'Technical'
  },
  {
    id: 'fest-3',
    name: 'Mood Indigo IIT Bombay',
    date: 'Dec 20-23, 2024',
    location: 'IIT Bombay',
    description: 'Asia\'s largest college cultural festival',
    participants: '200,000+',
    status: 'Upcoming',
    category: 'Cultural'
  },
  {
    id: 'fest-4',
    name: 'Techfest IIT Delhi',
    date: 'Jan 15-18, 2025',
    location: 'IIT Delhi',
    description: 'Technology and innovation showcase',
    participants: '100,000+',
    status: 'Upcoming',
    category: 'Technology'
  },
  {
    id: 'fest-5',
    name: 'Cognizance IIT Kanpur',
    date: 'Feb 10-13, 2025',
    location: 'IIT Kanpur',
    description: 'Technical and cultural extravaganza',
    participants: '75,000+',
    status: 'Upcoming',
    category: 'Technical'
  }
];

const iitHackathons = [
  {
    id: 'hack-1',
    name: 'Smart India Hackathon',
    date: 'Jan 15-16, 2025',
    location: 'Multiple IITs',
    description: 'National level hackathon for solving real-world problems',
    prize: '₹1,00,000',
    participants: '10,000+',
    status: 'Open',
    category: 'National'
  },
  {
    id: 'hack-2',
    name: 'IIT Techfest Hackathon',
    date: 'Dec 16, 2024',
    location: 'IIT Bombay',
    description: '48-hour coding marathon with industry challenges',
    prize: '₹50,000',
    participants: '500+',
    status: 'Open',
    category: 'Technology'
  },
  {
    id: 'hack-3',
    name: 'AI/ML Challenge IIT Delhi',
    date: 'Feb 20-22, 2025',
    location: 'IIT Delhi',
    description: 'Machine learning competition with real datasets',
    prize: '₹75,000',
    participants: '300+',
    status: 'Upcoming',
    category: 'AI/ML'
  },
  {
    id: 'hack-4',
    name: 'Blockchain Hackathon IIT Madras',
    date: 'Mar 15-16, 2025',
    location: 'IIT Madras',
    description: 'Blockchain and cryptocurrency development challenge',
    prize: '₹60,000',
    participants: '250+',
    status: 'Upcoming',
    category: 'Blockchain'
  },
  {
    id: 'hack-5',
    name: 'IoT Innovation Challenge IIT Kanpur',
    date: 'Apr 10-11, 2025',
    location: 'IIT Kanpur',
    description: 'Internet of Things and smart device development',
    prize: '₹80,000',
    participants: '400+',
    status: 'Upcoming',
    category: 'IoT'
  }
];

export default function IITVacancies() {
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
              Indian Institute of Technology (IIT)
            </h1>
            <p className="text-gray-600">
              Explore job openings, fests, and hackathons across Indian Institutes of Technology
            </p>
          </div>

          {/* IIT Banner */}
          <IITBanner />

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
              instituteType="IIT"
              data={iitOpenings}
              applyBaseUrl="https://iitapply.uniconnect.in/"
            />
          </div>

          {/* Fests Section */}
          <div id="upcoming-fests">
            <EventsCarousel
              title="Upcoming Fests"
              data={iitFests}
              showPrize={false}
            />
          </div>

          {/* Hackathons Section */}
          <div id="hackathons">
            <EventsCarousel
              title="Hackathons & Competitions"
              data={iitHackathons}
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
