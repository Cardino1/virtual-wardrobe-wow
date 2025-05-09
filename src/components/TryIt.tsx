
import { useState } from 'react';
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Upload, Image as ImageIcon, User } from "lucide-react";

const TryIt = () => {
  const [selfieImage, setSelfieImage] = useState<string | null>(null);
  const [clothingImage, setClothingImage] = useState<string | null>(null);
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSelfieUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelfieImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClothingUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setClothingImage(event.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const generateResult = () => {
    if (!selfieImage || !clothingImage) return;
    
    setIsProcessing(true);
    
    // In a real implementation, we would call the OpenAI image API here
    // For now, we'll simulate a delay and then just use one of the example images
    setTimeout(() => {
      // In real implementation, we would set the result from the API
      setResultImage('/lovable-uploads/c84cd54e-b973-4887-a077-b19d25e7e66d.png');
      setIsProcessing(false);
    }, 2000);
  };

  const resetImages = () => {
    setSelfieImage(null);
    setClothingImage(null);
    setResultImage(null);
  };

  return (
    <section className="py-16 bg-gray-50" id="try-it-out">
      <div className="container mx-auto px-4 md:px-0">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">Try It Out</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Experience the future of online shopping with our virtual try-on technology.
          Upload your photo and a clothing item to see how they would look together.
        </p>

        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-6">
            {!resultImage ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col items-center">
                  <div 
                    className={`w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center mb-4 border-2 border-dashed
                      ${selfieImage ? 'border-brand-purple' : 'border-gray-300'}`}
                  >
                    {selfieImage ? (
                      <img 
                        src={selfieImage} 
                        alt="Your selfie" 
                        className="h-full w-full object-cover rounded-lg"
                      />
                    ) : (
                      <div className="text-center p-4">
                        <User className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-500">Upload your selfie</p>
                      </div>
                    )}
                  </div>
                  <div className="mt-2">
                    <input 
                      type="file" 
                      id="selfie-upload" 
                      className="hidden" 
                      accept="image/*"
                      onChange={handleSelfieUpload}
                    />
                    <label htmlFor="selfie-upload">
                      <Button 
                        variant="outline" 
                        className="cursor-pointer border-brand-purple text-brand-purple"
                      >
                        <Upload className="w-4 h-4 mr-2" />
                        {selfieImage ? 'Change Selfie' : 'Upload Selfie'}
                      </Button>
                    </label>
                  </div>
                </div>

                <div className="flex flex-col items-center">
                  <div 
                    className={`w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center mb-4 border-2 border-dashed
                      ${clothingImage ? 'border-brand-purple' : 'border-gray-300'}`}
                  >
                    {clothingImage ? (
                      <img 
                        src={clothingImage} 
                        alt="Clothing item" 
                        className="h-full w-full object-cover rounded-lg"
                      />
                    ) : (
                      <div className="text-center p-4">
                        <ImageIcon className="h-10 w-10 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-500">Upload clothing image</p>
                      </div>
                    )}
                  </div>
                  <div className="mt-2">
                    <input 
                      type="file" 
                      id="clothing-upload" 
                      className="hidden" 
                      accept="image/*"
                      onChange={handleClothingUpload}
                    />
                    <label htmlFor="clothing-upload">
                      <Button 
                        variant="outline" 
                        className="cursor-pointer border-brand-purple text-brand-purple"
                      >
                        <Upload className="w-4 h-4 mr-2" />
                        {clothingImage ? 'Change Clothing' : 'Upload Clothing'}
                      </Button>
                    </label>
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <div className="mb-6 relative">
                  <img 
                    src={resultImage} 
                    alt="Virtual try-on result" 
                    className="max-w-full max-h-96 rounded-lg shadow-lg" 
                  />
                  <div className="absolute top-2 left-2 bg-black text-white px-2 py-1 text-sm font-bold rounded">
                    AI
                  </div>
                </div>
                <p className="text-center text-lg mb-4">
                  Here's your virtual try-on result!
                </p>
              </div>
            )}

            <div className="mt-8 flex justify-center">
              {!resultImage ? (
                <Button 
                  className="bg-brand-purple hover:bg-opacity-90 text-white"
                  onClick={generateResult}
                  disabled={!selfieImage || !clothingImage || isProcessing}
                >
                  {isProcessing ? 'Processing...' : 'Generate Virtual Try-On'}
                </Button>
              ) : (
                <Button 
                  variant="outline"
                  className="border-brand-purple text-brand-purple"
                  onClick={resetImages}
                >
                  Try Another Outfit
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TryIt;
