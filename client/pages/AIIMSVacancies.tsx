import Layout from '@/components/Layout';
import JobOpeningsCards, { ResearchOpening } from '@/components/JobOpeningsCards';
import EventsCarousel from '@/components/EventsCarousel';
import AIIMSBanner from '@/components/AIIMSBanner';
import { ChevronLeft, Calendar, Users, Trophy, Code, Briefcase, GraduationCap, Handshake, DollarSign, Network, Target, BookOpen, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const aimsOpenings: ResearchOpening[] = [
  {
    id: 'aims-1',
    post: 'Postdoctoral Fellow',
    discipline: 'Biomedical Engineering',
    piName: 'Prof. Aditi Mehra',
    institute: 'AIIMS Delhi',
    postingDate: '21.10.2025',
    lastDate: '07.11.2025',
    status: 'Open',
  },
  {
    id: 'aims-2',
    post: 'Research Fellow',
    discipline: 'Neuroscience',
    piName: 'Dr. Piyush Sharma',
    institute: 'AIIMS Bhopal',
    postingDate: '22.10.2025',
    lastDate: '08.11.2025',
    status: 'Open',
  },
  {
    id: 'aims-3',
    post: 'Clinical Research Assistant',
    discipline: 'Molecular Biology',
    piName: 'Dr. Tanya Roy',
    institute: 'AIIMS Jodhpur',
    postingDate: '23.10.2025',
    lastDate: '09.11.2025',
    status: 'Open',
  },
  {
    id: 'aims-4',
    post: 'Lab Technician',
    discipline: 'Immunology',
    piName: 'Dr. Ramesh Patel',
    institute: 'AIIMS Patna',
    postingDate: '20.10.2025',
    lastDate: '06.11.2025',
    status: 'Open',
  },
  {
    id: 'aims-5',
    post: 'Research Scholar',
    discipline: 'Cardiology',
    piName: 'Dr. Sunita Singh',
    institute: 'AIIMS Rishikesh',
    postingDate: '19.10.2025',
    lastDate: '05.11.2025',
    status: 'Closed',
  },
];

const aiimsFests = [
  {
    id: 'fest-1',
    name: 'Medifest AIIMS Delhi',
    date: 'Apr 15-18, 2025',
    location: 'AIIMS Delhi',
    description: 'Medical and healthcare innovation festival',
    participants: '15,000+',
    status: 'Upcoming',
    category: 'Medical'
  },
  {
    id: 'fest-2',
    name: 'HealthTech Summit AIIMS Bhopal',
    date: 'May 20-22, 2025',
    location: 'AIIMS Bhopal',
    description: 'Healthcare technology and innovation conference',
    participants: '8,000+',
    status: 'Upcoming',
    category: 'Technology'
  },
  {
    id: 'fest-3',
    name: 'MediCarnival AIIMS Jodhpur',
    date: 'Mar 10-13, 2025',
    location: 'AIIMS Jodhpur',
    description: 'Cultural and medical awareness festival',
    participants: '12,000+',
    status: 'Upcoming',
    category: 'Cultural'
  }
];

const aiimsHackathons = [
  {
    id: 'hack-1',
    name: 'MedTech Hackathon AIIMS Delhi',
    date: 'Apr 20-21, 2025',
    location: 'AIIMS Delhi',
    description: 'Healthcare innovation and medical technology hackathon',
    prize: '₹75,000',
    participants: '500+',
    status: 'Upcoming',
    category: 'Medical Technology'
  },
  {
    id: 'hack-2',
    name: 'Health Innovation Challenge',
    date: 'Feb 15-16, 2025',
    location: 'Multiple AIIMS',
    description: 'National healthcare innovation competition',
    prize: '₹1,00,000',
    participants: '1,000+',
    status: 'Open',
    category: 'Healthcare'
  },
  {
    id: 'hack-3',
    name: 'Digital Health Hackathon AIIMS Patna',
    date: 'Jun 10-11, 2025',
    location: 'AIIMS Patna',
    description: 'Digital solutions for healthcare challenges',
    prize: '₹60,000',
    participants: '400+',
    status: 'Upcoming',
    category: 'Digital Health'
  }
];

export default function AIIMSVacancies() {
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
              All India Institute of Medical Sciences (AIIMS)
            </h1>
            <p className="text-gray-600">
              Explore job openings, fests, and hackathons across All India Institute of Medical Sciences
            </p>
          </div>

          {/* AIIMS Banner */}
          <AIIMSBanner />

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
              instituteType="AIIMS"
              data={aimsOpenings}
              applyBaseUrl="https://aimsapply.uniconnect.in/"
            />
          </div>

          {/* Fests Section */}
          <div id="upcoming-fests">
            <EventsCarousel
              title="Upcoming Fests"
              data={aiimsFests}
              showPrize={false}
            />
          </div>

          {/* Hackathons Section */}
          <div id="hackathons">
            <EventsCarousel
              title="Hackathons & Competitions"
              data={aiimsHackathons}
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
