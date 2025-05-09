
import { Upload, Image, User } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Upload className="h-8 w-8 text-brand-purple" />,
      title: "Upload Your Photo",
      description: "Take a selfie or upload an existing photo to start with your base image."
    },
    {
      icon: <Image className="h-8 w-8 text-brand-purple" />,
      title: "Choose Clothing",
      description: "Upload an image of any garment you want to try on virtually."
    },
    {
      icon: <User className="h-8 w-8 text-brand-purple" />,
      title: "See the Result",
      description: "Our AI instantly generates a realistic image of you wearing the selected clothing."
    }
  ];

  return (
    <section className="py-16 bg-white" id="how-it-works">
      <div className="container mx-auto px-4 md:px-0">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
              <div className="bg-brand-light-purple p-4 rounded-full mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
