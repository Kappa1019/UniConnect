import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const universitiesData = {
  iit: { count: 6, path: '/iit-vacancies', name: 'Indian Institute of Technology (IIT)' },
  iim: { count: 10, path: '/nit-vacancies', name: 'Indian Institute of Management (IIM)' },
  aiims: { count: 5, path: '/aiims-vacancies', name: 'All India Institute of Medical Sciences (AIIMS)' },
};

export default function LeftSidebar() {
  return (
    <div className="w-full space-y-4">
      {/* Top Universities Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="font-bold text-gray-800 mb-4">Top Universities</h3>
        <div className="space-y-2">
          {/* IIT - Clickable Button */}
          <Link
            to={universitiesData.iit.path}
            className="flex items-center justify-between px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-600 rounded-lg flex items-center justify-center text-white text-xs font-bold">
                IIT
              </div>
              <div className="flex-1">
                <span className="text-sm font-semibold text-gray-800 group-hover:text-blue-600">
                  {universitiesData.iit.name}
                </span>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-blue-600 transition-colors" />
          </Link>

          {/* IIM - Clickable Button */}
          <Link
            to={universitiesData.iim.path}
            className="flex items-center justify-between px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-600 rounded-lg flex items-center justify-center text-white text-xs font-bold">
                IIM
              </div>
              <div className="flex-1">
                <span className="text-sm font-semibold text-gray-800 group-hover:text-blue-600">
                  {universitiesData.iim.name}
                </span>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-blue-600 transition-colors" />
          </Link>

          {/* AIIMS - Clickable Button */}
          <Link
            to={universitiesData.aiims.path}
            className="flex items-center justify-between px-4 py-3 hover:bg-gray-100 rounded-lg transition-colors group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-600 rounded-lg flex items-center justify-center text-white text-xs font-bold">
                AIIMS
              </div>
              <div className="flex-1">
                <span className="text-sm font-semibold text-gray-800 group-hover:text-blue-600">
                  {universitiesData.aiims.name}
                </span>
              </div>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-blue-600 transition-colors" />
          </Link>
        </div>
      </div>

      {/* UniConnect Fest Banner */}
      <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg border border-purple-400 p-6 text-white">
        <div className="text-center">
          <h3 className="font-bold text-lg mb-2">UniConnect Fest</h3>
          <p className="text-sm leading-relaxed">
            Coming soon in your city. Stay tuned!
          </p>
        </div>
      </div>
    </div>
  );
}
