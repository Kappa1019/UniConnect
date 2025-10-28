import { useState } from 'react';
import Layout from '@/components/Layout';
import { Users, Award, Sparkles, Rocket, Shield, Crown, Target, Zap, CheckCircle2, X } from 'lucide-react';

interface FormData {
  fullName: string;
  email: string;
  portfolioUrl: string;
  profileType: string;
  achievements: string;
  project: string;
  file: File | null;
  motivation: string;
  confirmAccuracy: boolean;
}

const profileTypes = [
  'Startup Founder',
  'Open Source Contributor',
  'Researcher',
  'Innovator',
  'Other',
];

export default function Communities() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    portfolioUrl: '',
    profileType: '',
    achievements: '',
    project: '',
    file: null,
    motivation: '',
    confirmAccuracy: false,
  });
  const [submitted, setSubmitted] = useState(false);

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

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      confirmAccuracy: e.target.checked,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email || !formData.profileType || !formData.confirmAccuracy) {
      alert('Please fill in all required fields');
      return;
    }

    setSubmitted(true);
    
    setTimeout(() => {
      setFormData({
        fullName: '',
        email: '',
        portfolioUrl: '',
        profileType: '',
        achievements: '',
        project: '',
        file: null,
        motivation: '',
        confirmAccuracy: false,
      });
      setSubmitted(false);
      setIsModalOpen(false);
    }, 3000);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-[#f9fafb]">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-br from-[#0077b5] via-blue-600 to-purple-600 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>

          <div className="relative container max-w-7xl mx-auto px-4 py-20 md:py-32">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-6">
                <Crown className="w-4 h-4" />
                <span>Invitation Only</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                Welcome to the Exclusive
                <br />
                <span className="bg-gradient-to-r from-yellow-300 to-white bg-clip-text text-transparent">
                  UniConnect Club
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
                A private circle for innovators, open-source pioneers, and extraordinary achievers shaping the future.
              </p>

              <button
                onClick={() => setIsModalOpen(true)}
                className="group px-8 py-4 bg-gradient-to-r from-white to-blue-100 text-[#0077b5] font-bold text-lg rounded-xl shadow-2xl hover:shadow-blue-500/50 transition-all transform hover:scale-105 hover:glow-glow"
                style={{
                  boxShadow: '0 0 30px rgba(255,255,255,0.3)',
                }}
              >
                Apply for Access
                <Sparkles className="inline-block ml-2 w-5 h-5 group-hover:animate-pulse" />
              </button>
            </div>
          </div>
        </div>

        {/* About the Club */}
        <div className="py-20 bg-white">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="relative h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-purple-500 to-blue-600">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="grid grid-cols-3 gap-4 opacity-20">
                      {[...Array(9)].map((_, i) => (
                        <div key={i} className="w-20 h-20 bg-white rounded-lg animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-4xl font-bold text-[#111827] mb-6">
                  Not Everyone Gets In.
                </h2>
                <p className="text-lg text-[#6b7280] leading-relaxed mb-6">
                  The UniConnect Club is a closed network for individuals who've proven themselves through exceptional achievements — whether in startups, open-source, innovation, research, or impact. It's where the best minds collaborate, share insights, and create the next big thing.
                </p>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2 text-[#0077b5] font-semibold">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Curated Membership</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#0077b5] font-semibold">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Elite Network</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Eligibility Criteria */}
        <div className="py-20 bg-[#f9fafb]">
          <div className="container max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-[#111827] mb-12">
              Who Can Join?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div className="mt-4">
                  <h3 className="text-2xl font-bold text-[#111827] mb-3">
                    Innovators & Founders
                  </h3>
                  <p className="text-[#6b7280] leading-relaxed">
                    Built or co-founded impactful startups that have made a real difference in their industry.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="mt-4">
                  <h3 className="text-2xl font-bold text-[#111827] mb-3">
                    Open Source Leaders
                  </h3>
                  <p className="text-[#6b7280] leading-relaxed">
                    Maintainers or major contributors to recognized open-source projects with significant community impact.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="group relative bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-2xl transition-all transform hover:-translate-y-2">
                <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="mt-4">
                  <h3 className="text-2xl font-bold text-[#111827] mb-3">
                    Exceptional Achievers
                  </h3>
                  <p className="text-[#6b7280] leading-relaxed">
                    Won national/international awards, hackathons, or led breakthrough initiatives in your field.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Membership Perks */}
        <div className="py-20 bg-white">
          <div className="container max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-[#111827] mb-12">
              Membership Perks
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Users, title: 'Exclusive Mentorship', desc: 'Direct mentorship sessions with industry experts' },
                { icon: Rocket, title: 'VC & Incubator Access', desc: 'Connect with top VCs and startup incubators' },
                { icon: Zap, title: 'Early Beta Access', desc: 'Get early access to UniConnect beta tools' },
                { icon: Award, title: 'Spotlight Feature', desc: 'Featured on UniConnect\'s Spotlight Page' },
                { icon: Sparkles, title: 'Invite-Only Events', desc: 'Access to exclusive events and global hackathons' },
                { icon: Shield, title: 'Priority Programs', desc: 'Priority in collaborations, grants, and internships' },
              ].map((perk, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-[#f9fafb] to-white rounded-xl p-6 border border-gray-200 hover:border-[#0077b5] hover:shadow-xl transition-all transform hover:-translate-y-1"
                >
                  <perk.icon className="w-8 h-8 text-[#0077b5] mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-[#111827] mb-2">
                    {perk.title}
                  </h3>
                  <p className="text-[#6b7280] text-sm">
                    {perk.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 bg-gradient-to-br from-[#0077b5] to-blue-600">
          <div className="container max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Join the Elite?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Apply now and become part of an exclusive network of innovators shaping tomorrow.
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-10 py-4 bg-white text-[#0077b5] font-bold text-lg rounded-xl shadow-2xl hover:shadow-white/50 transition-all transform hover:scale-105"
            >
              Apply for Access
            </button>
          </div>
        </div>

        {/* Application Form Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => !submitted && setIsModalOpen(false)}
            />

            <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto">
              {/* Header */}
              <div className="sticky top-0 bg-gradient-to-r from-[#0077b5] to-blue-600 px-8 py-6 flex items-center justify-between z-10">
                <div className="text-white">
                  <h2 className="text-2xl font-bold">Request an Invitation</h2>
                  <p className="text-blue-100 text-sm mt-1">
                    Tell us about yourself and your achievements
                  </p>
                </div>
                <button
                  onClick={() => !submitted && setIsModalOpen(false)}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-8">
                {submitted ? (
                  <div className="py-16 text-center">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-[#111827] mb-2">Application Received!</h3>
                    <p className="text-[#6b7280] text-lg">
                      Your application has been received. Our verification team will reach out if you qualify.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-[#111827] mb-2">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          placeholder="Enter your full name"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0077b5]"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-[#111827] mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Enter your email"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0077b5]"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#111827] mb-2">
                        LinkedIn / Portfolio / GitHub
                      </label>
                      <input
                        type="url"
                        name="portfolioUrl"
                        value={formData.portfolioUrl}
                        onChange={handleInputChange}
                        placeholder="https://linkedin.com/in/yourprofile"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0077b5]"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#111827] mb-2">
                        Select Profile Type <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="profileType"
                        value={formData.profileType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0077b5]"
                        required
                      >
                        <option value="">Choose your profile type</option>
                        {profileTypes.map((type) => (
                          <option key={type} value={type}>{type}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#111827] mb-2">
                        Describe your top achievements <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="achievements"
                        value={formData.achievements}
                        onChange={handleInputChange}
                        placeholder="Tell us about your most significant achievements..."
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0077b5] resize-none"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#111827] mb-2">
                        Highlight your most extraordinary project or creation
                      </label>
                      <textarea
                        name="project"
                        value={formData.project}
                        onChange={handleInputChange}
                        placeholder="Describe your best work or project..."
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0077b5] resize-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#111827] mb-2">
                        Upload proof of work / media / certificate (Optional)
                      </label>
                      <input
                        type="file"
                        name="file"
                        onChange={handleFileChange}
                        accept=".pdf,.png,.jpg,.jpeg"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0077b5]"
                      />
                      <p className="text-xs text-[#6b7280] mt-1">Supported formats: PDF, PNG, JPG</p>
                      {formData.file && (
                        <p className="text-sm text-green-600 mt-2">✓ {formData.file.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-[#111827] mb-2">
                        Motivation — Why do you want to be part of UniConnect Club?
                      </label>
                      <textarea
                        name="motivation"
                        value={formData.motivation}
                        onChange={handleInputChange}
                        placeholder="Share your motivation..."
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0077b5] resize-none"
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="confirmAccuracy"
                        name="confirmAccuracy"
                        checked={formData.confirmAccuracy}
                        onChange={handleCheckboxChange}
                        className="mt-1 w-4 h-4 text-[#0077b5] border-gray-300 rounded focus:ring-[#0077b5]"
                        required
                      />
                      <label htmlFor="confirmAccuracy" className="text-sm text-[#6b7280]">
                        I confirm that the information shared is accurate. <span className="text-red-500">*</span>
                      </label>
                    </div>

                    <div className="flex gap-4 pt-4">
                      <button
                        type="button"
                        onClick={() => setIsModalOpen(false)}
                        className="flex-1 px-6 py-3 border border-gray-300 text-[#111827] font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="flex-1 px-6 py-3 bg-[#0077b5] text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-lg"
                      >
                        Request Invitation
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
