import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Bell, Search, Home, Users, MessageSquare, Briefcase, User } from 'lucide-react';
import { useState } from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface LayoutProps {
  children: ReactNode;
  hideHeader?: boolean;
  hideFooter?: boolean;
}

export default function Layout({ children, hideHeader = false, hideFooter = false }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isAuth = location.pathname === '/login' || location.pathname === '/signup';
  const isDashboard = location.pathname === '/dashboard' || location.pathname === '/iit-vacancies' || location.pathname === '/nit-vacancies' || location.pathname === '/aiims-vacancies';

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-primary font-semibold' : 'text-foreground hover:text-primary transition-colors';
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {!hideHeader && (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-3">
            <div className="flex items-center justify-between gap-4">
              {/* Logo */}
              <Link to="/" className="flex items-center gap-2 flex-shrink-0 hover:opacity-80 transition-opacity">
                <span className="font-bold text-2xl" style={{ color: '#0077b5' }}>
                  UniConnect
                </span>
              </Link>

              {/* Search Bar - Centered */}
              <div className="hidden md:flex flex-1 max-w-xs mx-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              {/* Desktop Navigation Icons */}
              {isDashboard && (
                <nav className="hidden md:flex items-center gap-8">
                  <Link to="/dashboard" className="flex flex-col items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors py-2 px-2">
                    <Home className="w-5 h-5" />
                    <span className="text-xs font-semibold">Home</span>
                  </Link>
                  <button className="flex flex-col items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors py-2 px-2">
                    <Users className="w-5 h-5" />
                    <span className="text-xs font-semibold">My Network</span>
                  </button>
                  <Link
                    to="/communities"
                    className="flex flex-col items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors py-2 px-2"
                  >
                    <Briefcase className="w-5 h-5" />
                    <span className="text-xs font-semibold">Community</span>
                  </Link>
                  <button className="flex flex-col items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors py-2 px-2">
                    <MessageSquare className="w-5 h-5" />
                    <span className="text-xs font-semibold">Messaging</span>
                  </button>
                </nav>
              )}

              {/* Right Side Icons */}
              <div className="flex items-center gap-2 md:gap-4">
                {isDashboard && (
                  <>
                    <button className="hidden md:flex items-center justify-center p-2 hover:bg-gray-100 rounded-full transition-colors relative">
                      <Bell className="w-5 h-5 text-gray-600 hover:text-blue-600" />
                      <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                    </button>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button className="hidden md:flex flex-col items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors py-2 px-2">
                            <User className="w-5 h-5" />
                            <span className="text-xs font-semibold">Me</span>
                          </button>
                        </TooltipTrigger>
                        <TooltipContent side="bottom" className="w-80 p-0">
                          <div className="bg-white rounded-lg border border-gray-200 shadow-lg">
                            <div className="p-6 text-center">
                              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl">
                                SV
                              </div>
                              <h3 className="font-bold text-gray-800 text-lg mb-1">Summy Verma</h3>
                              <p className="text-sm text-gray-600 mb-3">UI/UX Enthusiast | Student at XYZ University</p>
                              <p className="text-xs text-gray-500 mb-4">New Delhi, India</p>
                              <button className="w-full px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors">
                                View Profile
                              </button>
                            </div>
                          </div>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </>
                )}

                {!isAuth && !isDashboard && (
                  <div className="hidden sm:flex gap-2">
                    <Link
                      to="/login"
                      className="px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      className="px-4 py-2 text-sm font-medium text-white bg-primary hover:bg-primary-700 rounded-lg transition-colors"
                    >
                      Sign Up
                    </Link>
                  </div>
                )}

                {/* Mobile menu button */}
                <button
                  className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  {mobileMenuOpen ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Menu className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && !isDashboard && (
              <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-border pt-4">
                <Link to="/" className={`text-sm font-medium ${isActive('/')}`} onClick={() => setMobileMenuOpen(false)}>
                  Home
                </Link>
                {!isAuth && (
                  <div className="flex gap-2 pt-4 border-t border-border">
                    <Link
                      to="/login"
                      className="flex-1 px-4 py-2 text-sm font-medium text-center text-foreground hover:bg-muted rounded-lg transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Login
                    </Link>
                    <Link
                      to="/signup"
                      className="flex-1 px-4 py-2 text-sm font-medium text-center text-white bg-primary hover:bg-primary-700 rounded-lg transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Sign Up
                    </Link>
                  </div>
                )}
              </nav>
            )}
          </div>
        </header>
      )}

      {/* Main content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      {!hideFooter && (
        <footer className="bg-secondary text-secondary-foreground border-t border-border mt-20">
          <div className="container max-w-7xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">U</span>
                  </div>
                  <span className="font-bold text-lg">Uniconnect</span>
                </div>
                <p className="text-sm opacity-75">Connecting every university. Empowering every student.</p>
              </div>

              <div>
                <h4 className="font-semibold mb-4 text-white">Product</h4>
                <ul className="space-y-2 text-sm opacity-75">
                  <li><Link to="/events" className="hover:opacity-100 transition-opacity">Events</Link></li>
                  <li><Link to="/communities" className="hover:opacity-100 transition-opacity">Communities</Link></li>
                  <li><Link to="/universities" className="hover:opacity-100 transition-opacity">Universities</Link></li>
                  <li><a href="#" className="hover:opacity-100 transition-opacity">Chat</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4 text-white">Company</h4>
                <ul className="space-y-2 text-sm opacity-75">
                  <li><a href="#" className="hover:opacity-100 transition-opacity">About</a></li>
                  <li><a href="#" className="hover:opacity-100 transition-opacity">Blog</a></li>
                  <li><a href="#" className="hover:opacity-100 transition-opacity">Contact</a></li>
                  <li><a href="#" className="hover:opacity-100 transition-opacity">Careers</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4 text-white">Legal</h4>
                <ul className="space-y-2 text-sm opacity-75">
                  <li><a href="#" className="hover:opacity-100 transition-opacity">Privacy</a></li>
                  <li><a href="#" className="hover:opacity-100 transition-opacity">Terms</a></li>
                  <li><a href="#" className="hover:opacity-100 transition-opacity">Cookies</a></li>
                </ul>
              </div>
            </div>

            <div className="border-t border-border pt-8 text-sm opacity-75 text-center">
              <p>&copy; 2025 Uniconnect. All rights reserved.</p>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}
