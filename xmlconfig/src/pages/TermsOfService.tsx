import React from 'react';
import { FileText, AlertTriangle, Users, Scale } from 'lucide-react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-gray-900 rounded-lg">
              <FileText className="h-6 w-6 text-white" />
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold mb-3">
            Terms of Service
          </h1>
          <p className="text-gray-400 text-sm">
            Please read these terms before using Xml Config.
          </p>
        </div>

        <div className="bg-gray-950 rounded-lg p-4 border border-gray-800 mb-6">
          <p className="text-gray-400 text-xs mb-2">
            <strong>Effective:</strong> January 1, 2025
          </p>
          <p className="text-gray-400 text-xs">
            <strong>Updated:</strong> January 1, 2025
          </p>
        </div>

        <div className="space-y-6">
          <section className="bg-gray-950 rounded-lg p-4 border border-gray-800">
            <h2 className="text-sm font-medium mb-3">1. Acceptance of Terms</h2>
            <div className="text-gray-400 text-xs space-y-2">
              <p>
                By using Xml Config: Camera Perest ("the App"), you agree to these Terms of Service. If you don't agree, don't use the App.
              </p>
              <p>
                These Terms are a legal agreement between you and Wriink regarding your use of the App.
              </p>
            </div>
          </section>

          <section className="bg-gray-950 rounded-lg p-4 border border-gray-800">
            <div className="flex items-center mb-3">
              <Users className="h-4 w-4 text-white mr-2" />
              <h2 className="text-sm font-medium">2. Service Description</h2>
            </div>
            <div className="text-gray-400 text-xs space-y-2">
              <p>Xml Config provides:</p>
              <ul className="list-disc list-inside space-y-1 ml-2 text-xs">
                <li>XML configuration files for camera apps</li>
                <li>Community sharing of configurations</li>
                <li>Preview and download functionality</li>
                <li>Search and discovery tools</li>
                <li>User ratings and reviews</li>
              </ul>
            </div>
          </section>

          <section className="bg-gray-950 rounded-lg p-4 border border-gray-800">
            <h2 className="text-sm font-medium mb-3">3. User Responsibilities</h2>
            <div className="text-gray-400 text-xs space-y-2">
              <p>You agree to:</p>
              <ul className="list-disc list-inside space-y-1 ml-2 text-xs">
                <li>Use the App only for lawful purposes</li>
                <li>Not distribute harmful configurations</li>
                <li>Respect intellectual property rights</li>
                <li>Provide accurate information</li>
                <li>Not reverse engineer the App</li>
                <li>Comply with all applicable laws</li>
              </ul>
            </div>
          </section>

          <section className="bg-gray-950 rounded-lg p-4 border border-gray-800">
            <div className="flex items-center mb-3">
              <AlertTriangle className="h-4 w-4 text-white mr-2" />
              <h2 className="text-sm font-medium">4. Disclaimers</h2>
            </div>
            <div className="text-gray-400 text-xs space-y-2">
              <p><strong>Use at Your Own Risk:</strong> We're not responsible for:</p>
              <ul className="list-disc list-inside space-y-1 ml-2 text-xs">
                <li>Device damage from configurations</li>
                <li>Camera app compatibility issues</li>
                <li>Performance degradation</li>
                <li>Data loss or corruption</li>
                <li>Third-party content accuracy</li>
              </ul>
              <p className="mt-2 text-xs">
                <strong>Backup Recommendation:</strong> Always backup your device before applying new configurations.
              </p>
            </div>
          </section>

          <section className="bg-gray-950 rounded-lg p-4 border border-gray-800">
            <h2 className="text-sm font-medium mb-3">5. Intellectual Property</h2>
            <div className="text-gray-400 text-xs space-y-2">
              <p>
                The App and its content are owned by Wriink and protected by intellectual property laws.
              </p>
              <p>
                User-contributed configurations remain property of their creators. By sharing, you grant us license to distribute them.
              </p>
            </div>
          </section>

          <section className="bg-gray-950 rounded-lg p-4 border border-gray-800">
            <div className="flex items-center mb-3">
              <Scale className="h-4 w-4 text-white mr-2" />
              <h2 className="text-sm font-medium">6. Limitation of Liability</h2>
            </div>
            <div className="text-gray-400 text-xs space-y-2">
              <p>Wriink is not liable for:</p>
              <ul className="list-disc list-inside space-y-1 ml-2 text-xs">
                <li>Device damage or malfunction</li>
                <li>Loss of data or configurations</li>
                <li>Business interruption</li>
                <li>Third-party claims</li>
                <li>Any damages from app use</li>
              </ul>
            </div>
          </section>

          <section className="bg-gray-950 rounded-lg p-4 border border-gray-800">
            <h2 className="text-sm font-medium mb-3">7. Contact Information</h2>
            <div className="text-gray-400 text-xs space-y-2">
              <p>Questions about these Terms?</p>
              <ul className="list-disc list-inside space-y-1 ml-2 text-xs">
                <li>Through the Xml Config app</li>
                <li>Visit: <a href="https://www.wriink.com" className="text-white hover:text-gray-300">www.wriink.com</a></li>
                <li>Use contact form on our website</li>
              </ul>
            </div>
          </section>
        </div>

        <div className="mt-8 p-4 bg-gray-900 border border-gray-700 rounded-lg">
          <div className="flex items-start space-x-2">
            <AlertTriangle className="h-4 w-4 text-white flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-xs font-medium mb-1">Important Notice</h3>
              <p className="text-gray-400 text-xs">
                By using Xml Config, you acknowledge that you have read and agree to these Terms of Service, effective January 1, 2025.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;