import Layout from '@/components/Layout';
import ResearchTableSection, { ResearchOpening } from '@/components/ResearchTableSection';

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
];

const nitOpenings: ResearchOpening[] = [
  {
    id: 'nit-1',
    post: 'Junior Research Fellow',
    discipline: 'Electrical Engg.',
    piName: 'Prof. Madhav Pathak',
    institute: 'NIT Trichy',
    postingDate: '21.10.2025',
    lastDate: '30.10.2025',
    status: 'Open',
  },
  {
    id: 'nit-2',
    post: 'Research Assistant',
    discipline: 'Civil Engg.',
    piName: 'Prof. S. Venkataraman',
    institute: 'NIT Rourkela',
    postingDate: '22.10.2025',
    lastDate: '31.10.2025',
    status: 'Open',
  },
  {
    id: 'nit-3',
    post: 'Technical Associate',
    discipline: 'Materials Science',
    piName: 'Prof. Reena Sharma',
    institute: 'NIT Surat',
    postingDate: '23.10.2025',
    lastDate: '02.11.2025',
    status: 'Open',
  },
  {
    id: 'nit-4',
    post: 'Project Fellow',
    discipline: 'Computer Science',
    piName: 'Prof. Anand Kumar',
    institute: 'NIT Jamshedpur',
    postingDate: '20.10.2025',
    lastDate: '29.10.2025',
    status: 'Open',
  },
  {
    id: 'nit-5',
    post: 'Research Intern',
    discipline: 'Chemical Engineering',
    piName: 'Prof. Neha Gupta',
    institute: 'NIT Warangal',
    postingDate: '19.10.2025',
    lastDate: '28.10.2025',
    status: 'Closed',
  },
];

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

export default function ResearchOpportunities() {
  return (
    <Layout hideFooter={false}>
      <div className="min-h-screen bg-gray-100">
        <div className="container max-w-7xl mx-auto px-4 py-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1
              className="text-4xl font-bold mb-2"
              style={{ color: '#0077b5' }}
            >
              Research Opportunities Dashboard
            </h1>
            <p className="text-gray-600">
              Explore and apply to research positions across IITs, NITs, and AIIMS institutes
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-6">
            {/* IIT Openings */}
            <ResearchTableSection
              title="IIT Openings"
              instituteType="IIT"
              data={iitOpenings}
              applyBaseUrl="https://iitapply.uniconnect.in/"
            />

            {/* NIT Openings */}
            <ResearchTableSection
              title="NIT Openings"
              instituteType="NIT"
              data={nitOpenings}
              applyBaseUrl="https://nitapply.uniconnect.in/"
            />

            {/* AIIMS Openings */}
            <ResearchTableSection
              title="AIIMS Openings"
              instituteType="AIIMS"
              data={aimsOpenings}
              applyBaseUrl="https://aimsapply.uniconnect.in/"
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
