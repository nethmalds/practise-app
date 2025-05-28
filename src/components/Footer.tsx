import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-background border-t w-full">
      <div className="container py-6 sm:py-8 md:py-12 mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
              CINEMAX
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              Your one-stop destination for all things cinema.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-2 sm:mb-3">Quick Links</h3>
            <ul className="space-y-1 sm:space-y-2">
              {["Home", "Popular", "Coming Soon", "Categories"].map((item) => (
                <li key={item}>
                  <Link
                    to="/practise-app"
                    className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-2 sm:mb-3">Top Genres</h3>
            <ul className="space-y-1 sm:space-y-2">
              {["Action", "Comedy", "Drama", "Horror", "Sci-Fi"].map((item) => (
                <li key={item}>
                  <Link
                    to="/"
                    className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-2 sm:mb-3">Legal</h3>
            <ul className="space-y-1 sm:space-y-2">
              {["Terms of Use", "Privacy Policy", "Cookie Policy"].map((item) => (
                <li key={item}>
                  <Link
                    to="/"
                    className="text-xs sm:text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center border-t mt-6 sm:mt-8 pt-6 sm:pt-8 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} CINEMAX. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link
              to="/"
              className="hover:text-foreground transition-colors"
            >
              Facebook
            </Link>
            <Link
              to="/"
              className="hover:text-foreground transition-colors"
            >
              Twitter
            </Link>
            <Link
              to="/"
              className="hover:text-foreground transition-colors"
            >
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
