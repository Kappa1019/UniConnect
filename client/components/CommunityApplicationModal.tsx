import { useState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';

interface FormData {
  fullName: string;
  email: string;
  portfolioUrl: string;
  expertise: string;
  achievements: string;
  skills: string[];
  motivation: string;
  file: File | null;
}

interface CommunityApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const expertiseOptions = [
  'AI & Machine Learning',
  'UI/UX Design',
  'Entrepreneurship',
  'Research & Innovation',
  'Engineering',
  'Marketing',
  'Other',
];

export default function CommunityApplicationModal({ isOpen, onClose }: CommunityApplicationModalProps) {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    portfolioUrl: '',
    expertise: '',
    achievements: '',
    skills: [],
    motivation: '',
    file: null,
  });

  const [submitted, setSubmitted] = useState(false);
  const [skillInput, setSkillInput] = useState('');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFormData((prev) => ({
        ...prev,
        file: e.target.files![0],
      }));
    }
  };

  const addSkill = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && skillInput.trim()) {
      e.preventDefault();
      if (!formData.skills.includes(skillInput.trim())) {
        setFormData((prev) => ({
          ...prev,
          skills: [...prev.skills, skillInput.trim()],
        }));
        setSkillInput('');
      }
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setFormData((prev) => ({
      ...prev,
      skills: prev.skills.filter((skill) => skill !== skillToRemove),
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email || !formData.expertise || !formData.achievements) {
      alert('Please fill in all required fields');
      return;
    }

    setSubmitted(true);
    
    setTimeout(() => {
      setFormData({
        fullName: '',
        email: '',
        portfolioUrl: '',
        expertise: '',
        achievements: '',
        skills: [],
        motivation: '',
        file: null,
      });
      setSubmitted(false);
      onClose();
    }, 2000);
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
      <div className="relative w-full max-w-2xl mx-4 bg-white rounded-lg shadow-xl max-h-[90vh] overflow-y-auto animate-fade-in">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Apply to Join the UniConnect Community</h2>
            <p className="text-sm text-gray-600 mt-1">
              We're looking for students and professionals with extraordinary achievements or unique skills.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors flex-shrink-0"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Form Content */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {submitted ? (
            <div className="py-12 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-12 h-12 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Thank you for applying!</h3>
              <p className="text-gray-600">We'll review your application and get back to you soon.</p>
            </div>
          ) : (
            <>
              {/* Full Name */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* LinkedIn / Portfolio URL */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  LinkedIn / Portfolio URL <span className="text-gray-500">(Optional)</span>
                </label>
                <input
                  type="url"
                  name="portfolioUrl"
                  value={formData.portfolioUrl}
                  onChange={handleInputChange}
                  placeholder="https://linkedin.com/in/yourprofile"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Area of Expertise */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Select Area of Expertise <span className="text-red-500">*</span>
                </label>
                <select
                  name="expertise"
                  value={formData.expertise}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Choose an area of expertise</option>
                  {expertiseOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Describe Your Special Achievements */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Describe Your Special Achievements <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="achievements"
                  value={formData.achievements}
                  onChange={handleInputChange}
                  placeholder="Tell us about your best accomplishments..."
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  required
                />
              </div>

              {/* Extraordinary Skills */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Extraordinary Skills You Possess
                </label>
                <input
                  type="text"
                  value={skillInput}
                  onChange={(e) => setSkillInput(e.target.value)}
                  onKeyDown={addSkill}
                  placeholder="Type a skill and press Enter"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
                />
                <div className="flex flex-wrap gap-2">
                  {formData.skills.map((skill) => (
                    <div
                      key={skill}
                      className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                    >
                      {skill}
                      <button
                        type="button"
                        onClick={() => removeSkill(skill)}
                        className="hover:text-blue-900"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* File Upload */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Upload Supporting Documents or Certificates <span className="text-gray-500">(Optional)</span>
                </label>
                <input
                  type="file"
                  name="file"
                  onChange={handleFileChange}
                  accept=".pdf,.png,.jpg,.jpeg"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p className="text-xs text-gray-500 mt-2">Supported formats: PDF, PNG, JPG</p>
                {formData.file && (
                  <p className="text-sm text-green-600 mt-2">✓ {formData.file.name}</p>
                )}
              </div>

              {/* Motivation Statement */}
              <div>
                <label className="block text-sm font-semibold text-gray-800 mb-2">
                  Motivation Statement <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleInputChange}
                  placeholder="Why should we select you?"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Submit Application
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
}
