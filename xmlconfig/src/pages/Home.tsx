import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Download, Star, Users, Zap, Shield } from 'lucide-react';

const Home = () => {
  const [currentScreenshot, setCurrentScreenshot] = useState(0);

  const screenshots = [
    'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=300&h=600',
    'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=300&h=600',
    'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=300&h=600',
    'https://images.pexels.com/photos/1181325/pexels-photo-1181325.jpeg?auto=compress&cs=tinysrgb&w=300&h=600',
    'https://images.pexels.com/photos/1181403/pexels-photo-1181403.jpeg?auto=compress&cs=tinysrgb&w=300&h=600',
  ];

  const features = [
    {
      icon: <Zap className="h-5 w-5 text-white" />,
      title: 'Fast Downloads',
      description: 'Quick XML config downloads'
    },
    {
      icon: <Users className="h-5 w-5 text-white" />,
      title: 'Community',
      description: 'Share configurations worldwide'
    },
    {
      icon: <Star className="h-5 w-5 text-white" />,
      title: 'Quality',
      description: 'Tested configurations'
    },
    {
      icon: <Shield className="h-5 w-5 text-white" />,
      title: 'Safe',
      description: 'Verified and secure'
    },
  ];

  const nextScreenshot = () => {
    setCurrentScreenshot((prev) => (prev + 1) % screenshots.length);
  };

  const prevScreenshot = () => {
    setCurrentScreenshot((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <img 
              src="https://play-lh.googleusercontent.com/Vl53L60zPmNhyu9vlRbYfryNjD945Unqt3BO2BX-gBWKHx9tizOXchzfv_OPkzk6U6n5=w512-h512-rw"
              alt="Xml Config"
              className="h-16 w-16 rounded-lg"
            />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">
            Xml Config: Camera Perest
          </h1>
          <p className="text-gray-400 text-sm sm:text-base mb-8 max-w-2xl mx-auto leading-relaxed">
            Camera configuration tool for Android. Explore, download, and apply XML config files to optimize your camera performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a
              href="https://play.google.com/store/apps/details?id=com.octocore.gcamconfig"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors border border-white inline-flex items-center"
            >
              <Download className="mr-2 h-4 w-4" />
              Download
            </a>
            <a
              href="#features"
              className="border border-gray-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-900 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="px-4 py-8 bg-gray-950">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-2">
              App Preview
            </h2>
            <p className="text-gray-400 text-sm">
              See the interface in action
            </p>
          </div>
          
          <div className="relative">
            <div className="flex justify-center items-center">
              <button
                onClick={prevScreenshot}
                className="absolute left-2 z-10 p-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors"
              >
                <ChevronLeft className="h-4 w-4 text-white" />
              </button>
              
              <div className="w-48 h-80 mx-auto">
                <img
                  src={screenshots[currentScreenshot]}
                  alt={`Screenshot ${currentScreenshot + 1}`}
                  className="w-full h-full object-cover rounded-lg border border-gray-800"
                />
              </div>
              
              <button
                onClick={nextScreenshot}
                className="absolute right-2 z-10 p-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors"
              >
                <ChevronRight className="h-4 w-4 text-white" />
              </button>
            </div>
            
            <div className="flex justify-center mt-4 space-x-1">
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentScreenshot(index)}
                  className={`h-1.5 w-1.5 rounded-full transition-colors ${
                    index === currentScreenshot ? 'bg-white' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl font-bold mb-2">
              Key Features
            </h2>
            <p className="text-gray-400 text-sm">
              Everything you need for camera optimization
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-950 p-4 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors"
              >
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 bg-gray-800 rounded">
                    {feature.icon}
                  </div>
                  <h3 className="text-sm font-medium">{feature.title}</h3>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-8 bg-gray-950">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-3">
            Ready to Optimize?
          </h2>
          <p className="text-gray-400 text-sm mb-6">
            Join users who trust Xml Config for camera optimization.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.octocore.gcamconfig"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors border border-white inline-flex items-center"
          >
            <Download className="mr-2 h-4 w-4" />
            Download from Google Play
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;