import { ChevronRight } from 'lucide-react';

const communityNews = [
  { id: 1, title: 'Andrea bott lice leaves 25 dead', views: '1.2M views' },
  { id: 2, title: 'HR world records Pyaeh Panday', views: '780K views' },
  { id: 3, title: 'Ad world records 1,704 crashes', views: '1.1M views' },
  { id: 4, title: 'Appetite groups for dating out', views: '689K views' },
  { id: 5, title: 'Tech startups raise record funding', views: '945K views' },
];

const challenges = [
  { id: 1, name: 'Mini Sudoku', count: '12 consecutive plays' },
  { id: 2, name: 'Zip', count: '20 consecutive plays' },
  { id: 3, name: 'Tango', count: '15 consecutive plays' },
  { id: 4, name: 'Queens', count: '8 consecutive plays' },
];

export default function RightSidebar() {
  return (
    <div className="space-y-4">
      {/* Community News */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-gray-800">News</h3>
          <button className="text-gray-500 hover:text-gray-700">⋮</button>
        </div>

        <div className="space-y-3">
          {communityNews.map((news) => (
            <div key={news.id} className="hover:bg-gray-50 p-2 rounded-lg cursor-pointer transition-colors">
              <p className="text-sm font-semibold text-gray-800 leading-tight mb-1">
                {news.title}
              </p>
              <p className="text-xs text-gray-500">{news.views}</p>
            </div>
          ))}
        </div>

        <button className="w-full mt-4 text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors">
          Show more
        </button>
      </div>

      {/* Today's Challenges */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-gray-800">Today's Challenges</h3>
          <button className="text-gray-500 hover:text-gray-700">⋮</button>
        </div>

        <div className="space-y-2">
          {challenges.map((challenge) => (
            <div
              key={challenge.id}
              className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer transition-colors"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-blue-300 to-blue-500 rounded-lg flex items-center justify-center text-white text-xs font-bold">
                {challenge.name.substring(0, 1)}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-800">{challenge.name}</p>
                <p className="text-xs text-gray-600">{challenge.count}</p>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
            </div>
          ))}
        </div>

        <button className="w-full mt-4 text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors">
          Show more
        </button>
      </div>
    </div>
  );
}
