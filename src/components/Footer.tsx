import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-background border-t w-full">
      <div className="container py-8 md:py-12 mx-auto max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">MovieVerse</h3>
            <p className="text-sm text-muted-foreground">
              Your one-stop destination for all things cinema.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              {["Home", "Popular", "Coming Soon", "Categories"].map((item) => (
                <li key={item}>
                  <Link 
                    to="/" 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-3">Top Genres</h3>
            <ul className="space-y-2">
              {["Action", "Comedy", "Drama", "Horror", "Sci-Fi"].map((item) => (
                <li key={item}>
                  <Link 
                    to="/" 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-3">Legal</h3>
            <ul className="space-y-2">
              {["Terms of Use", "Privacy Policy", "Cookie Policy"].map((item) => (
                <li key={item}>
                  <Link 
                    to="/" 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} MovieVerse. All rights reserved.</p>
          <p className="mt-1">This is a demo site built with React, Tailwind CSS and shadcn/ui.</p>
        </div>
      </div>
    </footer>
  );
}
