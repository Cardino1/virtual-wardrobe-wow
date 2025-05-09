
import { useState } from 'react';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "sonner";

const Hero = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // This would typically connect to an email service API
    setTimeout(() => {
      setIsLoading(false);
      toast.success("You've been added to the waitlist!");
      setEmail('');
    }, 1000);
  };

  return (
    <section className="hero-gradient py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Virtual Try-On, <span className="text-brand-purple">Reimagined</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Upload your photo and instantly see how any outfit looks on you. No changing rooms. No returns. Just perfect fits.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 mb-4">
              <Input 
                type="email" 
                placeholder="Enter your email to join waitlist"
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                required
                className="flex-grow"
              />
              <Button 
                type="submit" 
                className="bg-brand-purple hover:bg-opacity-90 text-white"
                disabled={isLoading}
              >
                {isLoading ? 'Joining...' : 'Join Waitlist'} 
                <span className="ml-2">→</span>
              </Button>
            </form>
            
            <p className="text-sm text-gray-500">
              Join our exclusive waitlist to be the first to experience StyleSwap when we launch.
            </p>
          </div>

          <div className="relative bg-brand-purple bg-opacity-10 p-4 rounded-2xl">
            <div className="relative">
              <img 
                src="/lovable-uploads/c84cd54e-b973-4887-a077-b19d25e7e66d.png" 
                alt="Virtual Try-On Example" 
                className="w-full rounded-xl shadow-lg" 
              />
              <div className="absolute top-2 left-2 bg-black text-white px-2 py-1 text-sm font-bold rounded">
                AI
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg mt-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Outfit Transformation Magic
              </h3>
              <p className="text-gray-600">
                See how our AI instantly transforms outfits, letting you visualize exactly how clothes will look on you before purchasing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
