import { Link } from "react-router-dom";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink, NavigationMenuContent, NavigationMenuTrigger } from "@/components/ui/navigation-menu";
import SearchBox from "@/components/SearchBox";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-40 w-full border-b bg-background">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex items-center">
          <Link 
            to="/" 
            className="flex items-center space-x-2"          
            onClick ={(e) => {
              e.preventDefault();
              const heroElement = document.getElementById('hero');
              if (heroElement) {
                const headerHeight = document.querySelector('header')?.offsetHeight || 0;
                window.scrollTo({
                  top: heroElement.offsetTop - headerHeight,
                  behavior: 'smooth'
                });
              }
            }}
          >
            <span className="font-bold text-xl sm:text-2xl">CINEMAX</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="focus:bg-none hover:bg-none">Categories</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-rose-500 to-indigo-700 p-6 no-underline outline-none focus:shadow-md"
                          to="/tranding"
                          onClick={(e) => {
                            e.preventDefault();
                            const trendingElement = document.getElementById('tranding');
                            if (trendingElement) {
                              const headerHeight = document.querySelector('header')?.offsetHeight || 0;
                              window.scrollTo({
                                top: trendingElement.offsetTop - headerHeight,
                                behavior: 'smooth'
                              });
                            }
                          }}
                        >
                          <div className="mt-4 mb-2 text-lg font-medium text-white">
                            New Releases
                          </div>
                          <p className="text-sm leading-tight text-white/90">
                            Discover the latest and greatest movies just released
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    {["Action", "Drama", "Comedy", "Horror", "Sci-Fi", "Thriller"].map((genre) => (
                      <li key={genre}>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{genre}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Top {genre.toLowerCase()} movies
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>              
              <NavigationMenuItem>
                <Link 
                  to="/popular-now" 
                  className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:text-accent-foreground/60"                  onClick={(e) => {
                    e.preventDefault();
                    const popularElement = document.getElementById('popular-now');
                    if (popularElement) {
                      const headerHeight = document.querySelector('header')?.offsetHeight || 0;
                      window.scrollTo({
                        top: popularElement.offsetTop - headerHeight,
                        behavior: 'smooth'
                      });
                    }
                  }}
                >
                  Popular
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link 
                to="/coming-soon" 
                className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:text-accent-foreground/60"                onClick={(e) => {
                  e.preventDefault();
                  const comingSoonElement = document.getElementById('coming-soon');
                  if (comingSoonElement) {
                    const headerHeight = document.querySelector('header')?.offsetHeight || 0;
                    window.scrollTo({
                      top: comingSoonElement.offsetTop - headerHeight,
                      behavior: 'smooth'
                    });
                  }
                }}
                >
                  Coming Soon
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex items-center space-x-2">
            <SearchBox />
            <ThemeSwitcher />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center space-x-2 md:hidden">
          <SearchBox />
          <ThemeSwitcher />
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t p-4 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/"
              className="px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                const heroElement = document.getElementById('hero');
                if (heroElement) {
                  const headerHeight = document.querySelector('header')?.offsetHeight || 0;
                  window.scrollTo({
                    top: heroElement.offsetTop - headerHeight,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              Home
            </Link>
            <Link 
              to="/tranding"
              className="px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                const trendingElement = document.getElementById('tranding');
                if (trendingElement) {
                  const headerHeight = document.querySelector('header')?.offsetHeight || 0;
                  window.scrollTo({
                    top: trendingElement.offsetTop - headerHeight,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              Trending
            </Link>
            <Link 
              to="/categories"
              className="px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground"
            >
              Categories
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
