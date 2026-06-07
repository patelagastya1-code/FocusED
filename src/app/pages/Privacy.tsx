export function Privacy() {
  return (
    <div className="w-full flex justify-center py-24 px-4 md:px-0">
      <div className="max-w-[800px] w-full bg-white rounded-[60px] p-12 md:p-20 shadow-sm border border-gray-50">
        
        <div className="text-center mb-16">
          <span className="font-display font-medium text-sm uppercase text-primary mb-4 tracking-wide block">
            Legal & Security
          </span>
          <h1 className="font-display font-bold text-4xl md:text-[50px] text-primary mb-6">
            Privacy Policy
          </h1>
          <p className="font-sans text-lg text-primary/70">
            Last updated: May 2026
          </p>
        </div>

        <div className="font-sans text-lg text-primary leading-relaxed space-y-8">
          <section>
            <h2 className="font-display font-bold text-2xl mb-4">1. Introduction</h2>
            <p>At FocusED, we build tools to help you reclaim your attention, not to harvest your data. We believe that privacy is a fundamental human right, especially when it comes to personal habits, screen time data, and therapeutic engagements.</p>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl mb-4">2. Data We Collect</h2>
            <p className="mb-2">We only collect what is strictly necessary to make our app and services function:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Account Information:</strong> Email address and basic profile details when you sign up.</li>
              <li><strong>Usage Analytics:</strong> Anonymous, aggregated data on timer usage to provide you with your personal focus reports.</li>
              <li><strong>Device Info:</strong> Basic device telemetry for crash reporting.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl mb-4">3. Data We Do NOT Collect</h2>
            <p>Because our app includes an "App Blocker" feature, we want to be incredibly clear: <strong>We do not track which specific websites you visit, messages you send, or content you consume.</strong> The app blocker functions entirely on-device using local APIs. Your browsing history never touches our servers.</p>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl mb-4">4. Sharing Your Information</h2>
            <p>We do not sell, rent, or trade your personal information to third parties. Data is only shared with trusted service providers (like secure hosting platforms) who are bound by strict confidentiality agreements.</p>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl mb-4">5. Your Rights</h2>
            <p>You have the right to access, modify, or permanently delete your data at any time directly through the FocusED app settings. If you delete your account, all associated focus history is wiped from our servers immediately.</p>
          </section>

          <section className="bg-[#FDF7F1] p-8 rounded-[24px] mt-12">
            <h3 className="font-display font-bold text-xl mb-2">Questions about your privacy?</h3>
            <p className="mb-4">Reach out to our Data Protection Officer.</p>
            <a href="mailto:privacy@focused.com" className="font-display font-semibold underline hover:opacity-80">
              privacy@focused.com
            </a>
          </section>
        </div>

      </div>
    </div>
  );
}
