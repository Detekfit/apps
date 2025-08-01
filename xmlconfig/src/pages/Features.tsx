import React from 'react';
import { 
  Download, 
  Search, 
  Share2, 
  Eye, 
  Database, 
  Zap, 
  Shield, 
  Users,
  Camera,
  Settings,
  Star,
  Smartphone
} from 'lucide-react';

const Features = () => {
  const mainFeatures = [
    {
      icon: <Database className="h-6 w-6 text-white" />,
      title: 'Config Library',
      description: 'Access thousands of XML configuration files optimized for different camera scenarios and device models.',
      benefits: ['Professional configurations', 'Regular updates', 'Device-specific']
    },
    {
      icon: <Users className="h-6 w-6 text-white" />,
      title: 'Community Sharing',
      description: 'Share custom configurations and discover settings created by photography enthusiasts worldwide.',
      benefits: ['User contributions', 'Rating system', 'Community feedback']
    },
    {
      icon: <Search className="h-6 w-6 text-white" />,
      title: 'Smart Search',
      description: 'Find perfect configurations with advanced search filters including device model and camera type.',
      benefits: ['Filter by device', 'Category browsing', 'Quick recommendations']
    },
    {
      icon: <Eye className="h-6 w-6 text-white" />,
      title: 'Demo Previews',
      description: 'Preview configuration effects with sample images before downloading.',
      benefits: ['Before/after comparisons', 'Sample galleries', 'Real examples']
    }
  ];

  const additionalFeatures = [
    {
      icon: <Camera className="h-5 w-5 text-white" />,
      title: 'Multi-Camera Support',
      description: 'Various camera apps and device configurations'
    },
    {
      icon: <Settings className="h-5 w-5 text-white" />,
      title: 'Easy Setup',
      description: 'One-tap installation and management'
    },
    {
      icon: <Star className="h-5 w-5 text-white" />,
      title: 'Rating System',
      description: 'Community ratings for best configs'
    },
    {
      icon: <Smartphone className="h-5 w-5 text-white" />,
      title: 'Device Optimized',
      description: 'Specific Android device models'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold mb-3">
            Features
          </h1>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto leading-relaxed">
            Discover everything Xml Config offers to transform your mobile photography with professional camera configurations.
          </p>
        </div>

        {/* Main Features */}
        <div className="space-y-4 mb-8">
          {mainFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-950 p-4 rounded-lg border border-gray-800 hover:border-gray-700 transition-colors"
            >
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-gray-800 rounded flex-shrink-0">
                  {feature.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-medium mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-xs mb-3 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-1">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-xs text-gray-500">
                        <div className="w-1 h-1 bg-gray-600 rounded-full mr-2"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="bg-gray-950 rounded-lg p-4 border border-gray-800 mb-8">
          <h2 className="text-lg font-bold mb-4 text-center">
            More Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {additionalFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-900 p-3 rounded border border-gray-800"
              >
                <div className="flex items-center space-x-2 mb-2">
                  <div className="p-1.5 bg-gray-800 rounded">
                    {feature.icon}
                  </div>
                  <h3 className="text-xs font-medium">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-8">
          <h2 className="text-lg font-bold mb-4 text-center">
            How It Works
          </h2>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-white text-black rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xs font-bold">1</span>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-1">Browse & Search</h3>
                <p className="text-gray-400 text-xs">
                  Explore configurations using smart search tools and filters.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-white text-black rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xs font-bold">2</span>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-1">Preview & Download</h3>
                <p className="text-gray-400 text-xs">
                  Preview effects with demo images, then download settings.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-6 h-6 bg-white text-black rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-xs font-bold">3</span>
              </div>
              <div>
                <h3 className="text-sm font-medium mb-1">Apply & Capture</h3>
                <p className="text-gray-400 text-xs">
                  Apply configurations and start capturing quality photos.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-gray-950 rounded-lg p-6 border border-gray-800">
          <h2 className="text-lg font-bold mb-2">
            Ready to Try?
          </h2>
          <p className="text-gray-400 text-sm mb-4">
            Download Xml Config and transform your photography.
          </p>
          <a
            href="https://play.google.com/store/apps/details?id=com.octocore.gcamconfig"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors border border-white inline-flex items-center"
          >
            <Download className="mr-2 h-4 w-4" />
            Download
          </a>
        </div>
      </div>
    </div>
  );
};

export default Features;