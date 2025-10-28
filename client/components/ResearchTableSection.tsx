import { useState } from 'react';
import { ChevronDown, Zap } from 'lucide-react';
import ExpressFillModal from './ExpressFillModal';

export interface ResearchOpening {
  id: string;
  post: string;
  discipline: string;
  piName: string;
  institute: string;
  postingDate: string;
  lastDate: string;
  status: 'Open' | 'Closed';
}

interface ResearchTableSectionProps {
  title: string;
  instituteType: 'IIT' | 'NIT' | 'AIIMS';
  data: ResearchOpening[];
  applyBaseUrl: string;
}

export default function ResearchTableSection({
  title,
  instituteType,
  data,
  applyBaseUrl,
}: ResearchTableSectionProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [selectedOpportunity, setSelectedOpportunity] = useState<ResearchOpening | null>(null);
  const [isExpressFillOpen, setIsExpressFillOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleApply = (opportunity: ResearchOpening) => {
    const applyUrl = `${applyBaseUrl}?post=${encodeURIComponent(opportunity.post)}&institute=${encodeURIComponent(opportunity.institute)}`;
    window.open(applyUrl, '_blank');
  };

  const handleExpressFill = (opportunity: ResearchOpening) => {
    setSelectedOpportunity(opportunity);
    setIsExpressFillOpen(true);
  };

  const getStatusColor = (status: string) => {
    return status === 'Open'
      ? 'bg-green-100 text-green-800'
      : 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
      {/* Section Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors"
      >
        <h2 className="text-xl font-bold" style={{ color: '#0077b5' }}>
          {title}
        </h2>
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-gray-600">
            {data.length} opening{data.length !== 1 ? 's' : ''}
          </span>
          <ChevronDown
            className={`w-5 h-5 text-gray-600 transition-transform ${
              isExpanded ? 'rotate-180' : ''
            }`}
          />
        </div>
      </button>

      {/* Table Content */}
      {isExpanded && (
        <div className="border-t border-gray-200 overflow-x-auto">
          <table className="w-full text-sm min-w-[1200px]">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-4 py-3 text-left font-semibold text-gray-700 w-40">Post</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700 w-48">
                  {instituteType === 'AIIMS' ? 'Department' : 'Discipline'}
                </th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700 w-36">PI Name</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700 w-40">Institute</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700 w-28">Posting Date</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700 w-28">Last Date</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700 w-24">PDF</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700 w-28">Status</th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700 w-40">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((opportunity) => (
                <tr
                  key={opportunity.id}
                  className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  <td className="px-4 py-4 text-gray-800 font-medium whitespace-nowrap">{opportunity.post}</td>
                  <td className="px-4 py-4 text-gray-700">{opportunity.discipline}</td>
                  <td className="px-4 py-4 text-gray-700 whitespace-nowrap">{opportunity.piName}</td>
                  <td className="px-4 py-4 text-gray-700 whitespace-nowrap">{opportunity.institute}</td>
                  <td className="px-4 py-4 text-gray-700 whitespace-nowrap">{opportunity.postingDate}</td>
                  <td className="px-4 py-4 text-gray-700 whitespace-nowrap">{opportunity.lastDate}</td>
                  <td className="px-4 py-4">
                    <button className="text-blue-600 hover:text-blue-800 font-medium transition-colors whitespace-nowrap">
                      Detail
                    </button>
                  </td>
                  <td className="px-4 py-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full font-medium text-xs whitespace-nowrap ${getStatusColor(
                        opportunity.status
                      )}`}
                    >
                      {opportunity.status}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleApply(opportunity)}
                        className="px-3 py-1 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium text-xs whitespace-nowrap"
                      >
                        Apply
                      </button>
                      <button
                        onClick={() => handleExpressFill(opportunity)}
                        className="px-3 py-1 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-xs flex items-center gap-1 whitespace-nowrap"
                        title="Express Fill - Auto-fill your information"
                      >
                        <Zap className="w-3 h-3" />
                        Fill
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 p-4 border-t border-gray-200 bg-gray-50">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-3 py-1 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                Previous
              </button>
              <div className="flex gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                      currentPage === page
                        ? 'bg-blue-600 text-white'
                        : 'border border-gray-300 hover:bg-gray-100'
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="px-3 py-1 rounded-lg border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                Next
              </button>
            </div>
          )}
        </div>
      )}

      {/* Express Fill Modal */}
      {selectedOpportunity && (
        <ExpressFillModal
          isOpen={isExpressFillOpen}
          onClose={() => {
            setIsExpressFillOpen(false);
            setSelectedOpportunity(null);
          }}
          opportunityTitle={`${selectedOpportunity.post} at ${selectedOpportunity.institute}`}
        />
      )}
    </div>
  );
}
