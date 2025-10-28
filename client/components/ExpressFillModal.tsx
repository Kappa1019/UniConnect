import { useState } from 'react';
import { X, Crown, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface ExpressFillModalProps {
  isOpen: boolean;
  onClose: () => void;
  opportunityTitle: string;
}

export default function ExpressFillModal({
  isOpen,
  onClose,
  opportunityTitle,
}: ExpressFillModalProps) {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [showPremiumPopup, setShowPremiumPopup] = useState(false);

  const handleConfirm = () => {
    setIsLoading(true);
    
    setTimeout(() => {
      toast({
        title: 'Success',
        description: 'Application pre-filled successfully!',
      });
      setIsLoading(false);
      onClose();
    }, 1000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md mx-4 bg-white rounded-lg shadow-xl animate-fade-in">
        {/* Header */}
        <div className="border-b border-gray-200 p-6 flex items-center justify-between bg-gradient-to-r from-purple-50 to-blue-50">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-bold text-gray-800">Express Fill</h2>
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-purple-500 to-blue-600 text-white text-xs font-bold rounded-full">
              <Crown className="w-3 h-3" />
              PREMIUM
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div>
            <p className="text-gray-700 mb-2">
              <span className="font-semibold">Opportunity:</span> {opportunityTitle}
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-purple-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-gray-800 mb-1">
                  Express Fill - Premium Feature
                </p>
                <p className="text-sm text-gray-600">
                  Automatically pre-fill your profile information into research opportunity applications with one click. This feature saves time and ensures consistency.
                </p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <div 
              className="flex-1 relative"
              onMouseEnter={() => setShowPremiumPopup(true)}
              onMouseLeave={() => setShowPremiumPopup(false)}
            >
              <button
                disabled
                className="w-full px-4 py-2 bg-gray-300 text-gray-600 font-medium rounded-lg cursor-not-allowed transition-all flex items-center justify-center gap-2"
              >
                <Crown className="w-4 h-4" />
                Upgrade Required
              </button>
              
              {/* Premium Popup Tooltip */}
              {showPremiumPopup && (
                <div className="absolute bottom-full left-0 mb-2 w-72 bg-white rounded-lg shadow-2xl border-2 border-purple-200 p-4 z-50 animate-fade-in">
                  <div className="absolute bottom-0 left-6 transform translate-y-1/2 rotate-45 w-3 h-3 bg-white border-r border-b border-purple-200"></div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <Crown className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800 mb-1">Unlock Premium Features</h4>
                      <p className="text-xs text-gray-600 mb-3">
                        Express Fill is a premium feature. Upgrade now to save time and streamline your applications.
                      </p>
                      <button className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-semibold rounded-lg hover:shadow-lg transition-shadow">
                        Upgrade to Premium
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
