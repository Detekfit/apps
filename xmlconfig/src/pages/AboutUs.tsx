import React from 'react';
import { Users, Target, Award, Globe, Camera, Code, Heart, Zap } from 'lucide-react';

const AboutUs = () => {
  const values = [
    {
      icon: <Camera className="h-5 w-5 text-white" />,
      title: 'Photography Excellence',
      description: 'Professional-grade camera configurations for everyone.'
    },
    {
      icon: <Users className="h-5 w-5 text-white" />,
      title: 'Community First',
      description: 'Community of photographers drives innovation.'
    },
    {
      icon: <Code className="h-5 w-5 text-white" />,
      title: 'Technical Excellence',
      description: 'Highest standards in development and UX.'
    },
    {
      icon: <Heart className="h-5 w-5 text-white" />,
      title: 'User-Centric',
      description: 'Every feature designed with user feedback.'
    }
  ];

  const milestones = [
    {
      year: '2023',
      title: 'Company Founded',
      description: 'Wriink established to democratize mobile photography tools.'
    },
    {
      year: '2024',
      title: 'App Launch',
      description: 'Released Xml Config, revolutionizing camera configuration.'
    },
    {
      year: '2024',
      title: 'Community Growth',
      description: 'Thousands of users sharing configurations.'
    },
    {
      year: '2025',
      title: 'Innovation',
      description: 'Expanding features based on community feedback.'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-gray-900 rounded-lg">
              <Globe className="h-6 w-6 text-white" />
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold mb-3">
            About Wriink
          </h1>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto leading-relaxed">
            We empower mobile photographers with professional-grade tools and configurations. Our mission is to make advanced camera optimization accessible to everyone.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
          <div className="bg-gray-950 p-4 rounded-lg border border-gray-800">
            <div className="flex items-center mb-3">
              <Target className="h-5 w-5 text-white mr-2" />
              <h2 className="text-sm font-medium">Our Mission</h2>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed">
              To democratize professional photography by providing accessible, high-quality camera configuration tools that enable anyone to capture stunning images with their mobile device.
            </p>
          </div>

          <div className="bg-gray-950 p-4 rounded-lg border border-gray-800">
            <div className="flex items-center mb-3">
              <Award className="h-5 w-5 text-white mr-2" />
              <h2 className="text-sm font-medium">Our Vision</h2>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed">
              To become the leading platform for mobile camera optimization, fostering a global community of photographers who share knowledge and creativity.
            </p>
          </div>
        </div>

        {/* Company Story */}
        <div className="bg-gray-950 rounded-lg p-4 border border-gray-800 mb-8">
          <h2 className="text-lg font-bold mb-3 text-center">Our Story</h2>
          <div className="text-gray-400 text-xs space-y-3 leading-relaxed">
            <p>
              Wriink was born from a simple observation: mobile photography had incredible potential, but most users were limited by default camera settings that didn't showcase their device's true capabilities.
            </p>
            <p>
              Starting as a small team of developers and photography enthusiasts, we set out to create tools that would bridge this gap. Xml Config represents our commitment to making professional-grade camera optimization accessible to everyone.
            </p>
            <p>
              Today, we continue to innovate and expand our offerings, driven by our community's feedback and the belief that everyone deserves to capture their world in the best possible quality.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-8">
          <h2 className="text-lg font-bold mb-4 text-center">Our Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gray-950 p-3 rounded-lg border border-gray-800"
              >
                <div className="flex items-center space-x-2 mb-2">
                  <div className="p-1.5 bg-gray-800 rounded">
                    {value.icon}
                  </div>
                  <h3 className="text-xs font-medium">{value.title}</h3>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-8">
          <h2 className="text-lg font-bold mb-4 text-center">Our Journey</h2>
          <div className="space-y-3">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-8 h-8 bg-white text-black rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold">{milestone.year.slice(-2)}</span>
                </div>
                <div className="flex-1 bg-gray-950 p-3 rounded-lg border border-gray-800">
                  <h3 className="text-xs font-medium mb-1">{milestone.title}</h3>
                  <p className="text-gray-400 text-xs">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy */}
        <div className="bg-gray-950 rounded-lg p-4 border border-gray-800 mb-8">
          <div className="text-center">
            <Zap className="h-6 w-6 text-white mx-auto mb-3" />
            <h2 className="text-lg font-bold mb-2">What Drives Us</h2>
            <p className="text-gray-400 text-xs leading-relaxed">
              We're driven by seeing users discover new creative possibilities with their mobile cameras. Every configuration shared and photo improved motivates us to continue innovating.
            </p>
          </div>
        </div>

        {/* Contact */}
        <div className="text-center bg-gray-950 rounded-lg p-4 border border-gray-800">
          <h2 className="text-lg font-bold mb-2">Get in Touch</h2>
          <p className="text-gray-400 text-sm mb-4">
            We'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://www.wriink.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-600 text-white px-3 py-2 rounded text-xs font-medium hover:bg-gray-900 transition-colors inline-flex items-center justify-center"
            >
              <Globe className="mr-2 h-3 w-3" />
              Visit Website
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.octocore.gcamconfig"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-3 py-2 rounded text-xs font-medium hover:bg-gray-100 transition-colors border border-white"
            >
              Try Our App
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;