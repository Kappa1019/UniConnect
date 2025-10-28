import Layout from '@/components/Layout';
import LeftSidebar from './dashboard/LeftSidebar';
import MainFeed from './dashboard/MainFeed';
import RightSidebar from './dashboard/RightSidebar';

export default function Dashboard() {
  return (
    <Layout hideFooter={true}>
      <div className="min-h-screen bg-gray-100">
        <div className="container max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Left Sidebar - Profile & Vacancies */}
            <div className="md:col-span-3">
              <div className="sticky top-16">
                <LeftSidebar />
              </div>
            </div>

            {/* Main Feed */}
            <div className="md:col-span-6">
              <MainFeed />
            </div>

            {/* Right Sidebar - News & Challenges */}
            <div className="md:col-span-3">
              <div className="sticky top-16">
                <RightSidebar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
