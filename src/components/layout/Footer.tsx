import logo from "../../assets/GenBrightSchoolLogo.png";

export function Footer() {
  return (
    <footer className="bg-background text-primary pt-24 pb-8 px-6 border-t border-[#d2d2d7]/50">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 mb-20">
          
          {/* Column 1: Brand & Social */}
          <div className="lg:col-span-2 lg:pr-12">
            <img src={logo} alt="GenBright World School" className="h-12 w-auto mb-8 object-contain mix-blend-multiply" />
            <p className="text-[14px] leading-relaxed mb-8 opacity-80 font-medium text-[#86868b]">
              A holistic learning community where children grow in thought, heart, body, and balance while discovering their true potential.
            </p>
            <div className="flex items-center gap-5 text-[#86868b]">
              <a href="#" className="hover:text-primary transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Explore */}
          <div>
            <h4 className="font-semibold text-[13px] tracking-widest uppercase mb-6 text-primary">EXPLORE</h4>
            <ul className="flex flex-col gap-4 text-[14px] opacity-80 font-medium text-[#86868b]">
              <li><a href="#" className="hover:text-[#0066cc] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#0066cc] transition-colors">Our Approach</a></li>
              <li><a href="#" className="hover:text-[#0066cc] transition-colors">Learning Centers</a></li>
              <li><a href="#" className="hover:text-[#0066cc] transition-colors">Programs</a></li>
              <li><a href="#" className="hover:text-[#0066cc] transition-colors">Campus Life</a></li>
              <li><a href="#" className="hover:text-[#0066cc] transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Column 3: Admissions */}
          <div>
            <h4 className="font-semibold text-[13px] tracking-widest uppercase mb-6 text-primary">ADMISSIONS</h4>
            <ul className="flex flex-col gap-4 text-[14px] opacity-80 font-medium text-[#86868b]">
              <li><a href="#" className="hover:text-[#0066cc] transition-colors">Admissions Process</a></li>
              <li><a href="#" className="hover:text-[#0066cc] transition-colors">Age Criteria</a></li>
              <li><a href="#" className="hover:text-[#0066cc] transition-colors">Fee Structure</a></li>
              <li><a href="#" className="hover:text-[#0066cc] transition-colors">Scholarships</a></li>
              <li><a href="#" className="hover:text-[#0066cc] transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-[#0066cc] transition-colors">Book a Tour</a></li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div>
            <h4 className="font-semibold text-[13px] tracking-widest uppercase mb-6 text-primary">RESOURCES</h4>
            <ul className="flex flex-col gap-4 text-[14px] opacity-80 font-medium text-[#86868b]">
              <li><a href="#" className="hover:text-[#0066cc] transition-colors">Parent Partnership</a></li>
              <li><a href="#" className="hover:text-[#0066cc] transition-colors">Mentor Development</a></li>
              <li><a href="#" className="hover:text-[#0066cc] transition-colors">Blogs & Insights</a></li>
              <li><a href="#" className="hover:text-[#0066cc] transition-colors">Events</a></li>
              <li><a href="#" className="hover:text-[#0066cc] transition-colors">Handbook</a></li>
              <li><a href="#" className="hover:text-[#0066cc] transition-colors">School Policies</a></li>
            </ul>
          </div>

          {/* Column 5: Connect */}
          <div>
            <h4 className="font-semibold text-[13px] tracking-widest uppercase mb-6 text-primary">CONNECT</h4>
            <ul className="flex flex-col gap-5 text-[14px] opacity-80 font-medium text-[#86868b]">
              <li className="leading-relaxed">
                Donthanpalle, Mokila,<br />
                Hyderabad - 501203
              </li>
              <li>+91 888 444 1234</li>
              <li><a href="mailto:hello@genbright.in" className="hover:text-[#0066cc] transition-colors">hello@genbright.in</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#d2d2d7]/50 flex flex-col md:flex-row items-center justify-between gap-6 text-[13px] opacity-70 font-medium text-[#86868b]">
          <p>© 2026 GenBright World School. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <span className="opacity-30">|</span>
            <a href="#" className="hover:text-primary transition-colors">Terms of Use</a>
            <span className="opacity-30">|</span>
            <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
