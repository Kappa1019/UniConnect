import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { ArrowRight, Users, Calendar, Lightbulb, MessageCircle, Star, CheckCircle, Briefcase } from 'lucide-react';

export default function Index() {
  const features = [
    {
      icon: Calendar,
      title: 'Discover Events',
      description: 'Find hackathons, competitions, and networking events from universities across India.',
    },
    {
      icon: Users,
      title: 'Join Communities',
      description: 'Connect with like-minded students and join verified clubs from your university.',
    },
    {
      icon: Lightbulb,
      title: 'Find Opportunities',
      description: 'Explore internships, projects, and collaborations tailored to your interests.',
    },
    {
      icon: MessageCircle,
      title: 'AI Recommendations',
      description: 'Get personalized event and community suggestions based on your profile.',
    },
  ];

  const testimonials = [
    {
      name: 'Priya Sharma',
      university: 'IIT Delhi',
      text: 'Uniconnect helped me discover amazing hackathons and connect with brilliant peers from other colleges!',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    },
    {
      name: 'Rahul Patel',
      university: 'BITS Pilani',
      text: 'The community features are incredible. I found my startup co-founder through Uniconnect!',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    },
    {
      name: 'Anjali Singh',
      university: 'Delhi University',
      text: 'Finally, a platform that unites students from Tier 1 and Tier 4 colleges equally. Love the inclusivity!',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    },
  ];

  const stats = [
    { number: '10,000+', label: 'Verified Students' },
    { number: '500+', label: 'Events Hosted' },
    { number: '200+', label: 'Universities' },
    { number: '1000+', label: 'Clubs & Communities' },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-background to-background opacity-60"></div>
        <div className="relative container max-w-7xl mx-auto px-4 py-24 md:py-32 lg:py-40">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-slide-up">
              <div className="inline-block">
                <span className="px-4 py-2 bg-primary-100 text-primary font-medium rounded-full text-sm">
                  Join 10,000+ students
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
                Connecting Every University. Empowering Every Student.
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Discover events, connect with peers, and explore opportunities nationwide. Uniconnect is the unified ecosystem for India's student community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  to="/signup"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-700 transition-all hover:shadow-lg"
                >
                  Join as Student
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <button className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary text-primary font-semibold rounded-xl hover:bg-primary-50 transition-all">
                  List Your University
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-primary-600 rounded-3xl opacity-10 blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-white to-primary-50 rounded-3xl p-8 border border-border shadow-xl">
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Amity Hack 2025</h3>
                        <p className="text-sm text-muted-foreground">Amity University</p>
                        <p className="text-xs text-primary mt-2">Feb 15 - Feb 17</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">AI/ML Study Group</h3>
                        <p className="text-sm text-muted-foreground">IIT Delhi Robotics</p>
                        <p className="text-xs text-primary mt-2">Weekly on Thursdays</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl p-6 border border-border shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">Startup Weekend</h3>
                        <p className="text-sm text-muted-foreground">Multiple Universities</p>
                        <p className="text-xs text-primary mt-2">Mar 1 - Mar 3</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-primary to-primary-600 text-white py-12 md:py-16">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, idx) => (
              <div key={idx} className="animate-slide-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 md:py-32">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Everything You Need</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A complete platform designed for the modern student. Discover, connect, and grow with Uniconnect.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="group p-8 bg-white rounded-2xl border border-border hover:border-primary hover:shadow-xl transition-all duration-300 animate-slide-up"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                    <Icon className="w-7 h-7 text-primary group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 md:py-32 bg-primary-50">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">How Uniconnect Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get started in minutes and start exploring your opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Create Your Profile',
                description: 'Sign up with your college email and complete your student profile with your skills and interests.',
              },
              {
                step: '2',
                title: 'Discover & Connect',
                description: 'Browse thousands of events, join communities, and connect with peers from across India.',
              },
              {
                step: '3',
                title: 'Grow Together',
                description: 'Collaborate on projects, attend events, and unlock opportunities through AI recommendations.',
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center animate-slide-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 md:py-32">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Loved by Students</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of students who are already using Uniconnect to transform their college experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="p-8 bg-white rounded-2xl border border-border hover:shadow-xl transition-all animate-slide-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center gap-4 pt-6 border-t border-border">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = `https://via.placeholder.com/150?text=${testimonial.name.split(' ').map(n => n[0]).join('')}`;
                    }}
                  />
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.university}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-gradient-to-r from-primary to-primary-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="relative container max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your College Experience?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join Uniconnect today and become part of India's largest student community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-primary-50 transition-all"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:bg-opacity-10 transition-all">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
