import Layout from "@/components/Layout";
import { Link, useLocation } from "react-router-dom";
import { Home, ArrowRight } from "lucide-react";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <Layout hideFooter>
      <div className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-gradient-to-br from-primary-50 to-background">
        <div className="text-center max-w-md px-4">
          <div className="text-7xl mb-6">🔍</div>
          <h1 className="text-5xl font-bold text-foreground mb-4">404</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Oops! We couldn't find the page you're looking for.
          </p>
          <div className="space-y-3">
            <p className="text-muted-foreground mb-6">
              This page might have been moved or doesn't exist yet.
              Want to see it built? Let us know what feature to build next!
            </p>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-700 transition-all hover:shadow-lg group"
            >
              <Home className="w-5 h-5" />
              Back to Home
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
