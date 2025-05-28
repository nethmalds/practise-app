import { useState } from "react";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SearchBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would navigate to search results
    console.log("Search for:", searchQuery);
  };

  return (
    <>
      {!isOpen ? (
        <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)} className="h-9 w-9">
          <Search className="h-5 w-5" />
        </Button>
      ) : (
        <div className="relative z-50 animate-in fade-in slide-in-from-top-2 duration-300">
          <form 
            onSubmit={handleSubmit}
            className="absolute right-0 top-0 flex items-center border rounded-md bg-background shadow-lg"
          >
            <input
              type="text"
              placeholder="Search movies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-32 xs:w-48 sm:w-64 md:w-72 h-9 px-3 bg-transparent border-none focus:outline-none text-sm"
              autoFocus
            />
            <Button 
              type="button" 
              variant="ghost" 
              size="icon" 
              className="h-9 w-9"
              onClick={() => setIsOpen(false)}
            >
              <X className="h-4 w-4" />
            </Button>
          </form>
        </div>
      )}
    </>
  );
}
