
import { useState } from 'react';
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "sonner";
import { Mail } from "lucide-react";

const Waitlist = () => {
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
    <section className="py-16 bg-brand-light-purple" id="join-waitlist">
      <div className="container mx-auto px-4 md:px-0">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Waitlist</h2>
          <p className="text-lg text-gray-700 mb-8">
            Be the first to experience StyleSwap when we launch. Sign up for exclusive early access.
          </p>
          
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="flex justify-center mb-6">
              <div className="bg-brand-purple bg-opacity-20 p-4 rounded-full">
                <Mail className="h-8 w-8 text-brand-purple" />
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <Input 
                type="email" 
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                required
                className="flex-grow"
              />
              <Button 
                type="submit" 
                className="bg-brand-purple hover:bg-opacity-90 text-white whitespace-nowrap"
                disabled={isLoading}
              >
                {isLoading ? 'Joining...' : 'Join Waitlist'} 
                <span className="ml-2">→</span>
              </Button>
            </form>
            
            <p className="text-sm text-gray-500 mt-4">
              We respect your privacy and will never share your information.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Waitlist;
