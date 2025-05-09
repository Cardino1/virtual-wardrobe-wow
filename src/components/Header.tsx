
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="border-b border-gray-100">
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-0">
        <Link to="/" className="text-2xl font-bold text-brand-purple">
          StyleSwap
        </Link>
        
        <nav className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="text-gray-600 hover:text-brand-purple">
            How It Works
          </Link>
          <Link to="/" className="text-gray-600 hover:text-brand-purple">
            Try it Out
          </Link>
          <Link to="/" className="text-gray-600 hover:text-brand-purple">
            Join Waitlist
          </Link>
        </nav>

        <Button className="bg-brand-purple hover:bg-opacity-90 text-white">
          Join Waitlist
        </Button>
      </div>
    </header>
  );
};

export default Header;
