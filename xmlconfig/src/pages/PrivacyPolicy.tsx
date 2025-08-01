import React from 'react';
import { Shield, Eye, Database, Lock } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-gray-900 rounded-lg">
              <Shield className="h-6 w-6 text-white" />
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold mb-3">
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-sm">
            How we collect, use, and protect your information.
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
            <div className="flex items-center mb-3">
              <Database className="h-4 w-4 text-white mr-2" />
              <h2 className="text-sm font-medium">Information We Collect</h2>
            </div>
            <div className="text-gray-400 text-xs space-y-2">
              <p>We may collect:</p>
              <ul className="list-disc list-inside space-y-1 ml-2 text-xs">
                <li>Device information (model, Android version)</li>
                <li>App usage statistics</li>
                <li>Configuration download preferences</li>
                <li>Crash reports for improvement</li>
                <li>Anonymous analytics data</li>
              </ul>
            </div>
          </section>

          <section className="bg-gray-950 rounded-lg p-4 border border-gray-800">
            <div className="flex items-center mb-3">
              <Eye className="h-4 w-4 text-white mr-2" />
              <h2 className="text-sm font-medium">How We Use Information</h2>
            </div>
            <div className="text-gray-400 text-xs space-y-2">
              <p>We use information to:</p>
              <ul className="list-disc list-inside space-y-1 ml-2 text-xs">
                <li>Provide and maintain the service</li>
                <li>Improve app performance</li>
                <li>Recommend relevant configurations</li>
                <li>Analyze usage patterns</li>
                <li>Ensure app security</li>
              </ul>
            </div>
          </section>

          <section className="bg-gray-950 rounded-lg p-4 border border-gray-800">
            <div className="flex items-center mb-3">
              <Lock className="h-4 w-4 text-white mr-2" />
              <h2 className="text-sm font-medium">Data Protection</h2>
            </div>
            <div className="text-gray-400 text-xs space-y-2">
              <p>We protect your data with:</p>
              <ul className="list-disc list-inside space-y-1 ml-2 text-xs">
                <li>Encryption in transit and at rest</li>
                <li>Regular security audits</li>
                <li>Limited access on need-to-know basis</li>
                <li>Secure servers with protection</li>
                <li>Regular vulnerability monitoring</li>
              </ul>
            </div>
          </section>

          <section className="bg-gray-950 rounded-lg p-4 border border-gray-800">
            <h2 className="text-sm font-medium mb-3">Your Rights</h2>
            <div className="text-gray-400 text-xs space-y-2">
              <p>You have rights to:</p>
              <ul className="list-disc list-inside space-y-1 ml-2 text-xs">
                <li>Access your personal data</li>
                <li>Correct inaccurate information</li>
                <li>Delete your data (right to be forgotten)</li>
                <li>Data portability</li>
                <li>Opt-out of marketing</li>
                <li>Withdraw consent anytime</li>
              </ul>
            </div>
          </section>

          <section className="bg-gray-950 rounded-lg p-4 border border-gray-800">
            <h2 className="text-sm font-medium mb-3">Contact Us</h2>
            <div className="text-gray-400 text-xs space-y-2">
              <p>Questions about this policy?</p>
              <ul className="list-disc list-inside space-y-1 ml-2 text-xs">
                <li>Through the Xml Config app</li>
                <li>Visit: <a href="https://www.wriink.com" className="text-white hover:text-gray-300">www.wriink.com</a></li>
                <li>Use contact form on our website</li>
              </ul>
            </div>
          </section>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-500 text-xs">
            This Privacy Policy is effective as of January 1, 2025.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;