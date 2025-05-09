
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white py-12 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-brand-purple">StyleSwap</h2>
            <p className="text-gray-600 mt-2">
              Virtual try-on technology reimagined
            </p>
          </div>
          
          <div className="flex flex-wrap gap-x-8 gap-y-4">
            <a href="#" className="text-gray-600 hover:text-brand-purple">About</a>
            <a href="#" className="text-gray-600 hover:text-brand-purple">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-brand-purple">Terms of Service</a>
            <a href="#" className="text-gray-600 hover:text-brand-purple">Contact</a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-100 text-center text-gray-500 text-sm">
          <p>© {currentYear} StyleSwap. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
