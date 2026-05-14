import { motion } from 'motion/react';
import { 
  Building2, 
  Stethoscope, 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight,
  Download,
  PhoneCall,
  Activity,
  Award,
  Globe2
} from 'lucide-react';
import { useState } from 'react';

const CHECKLIST_ITEMS = [
  "Verify hospital's current JCI Encryption/Accreditation status.",
  "Check country-specific healthcare certifications (e.g., MHTC, HA).",
  "Confirm specialty certifications for your specific procedure (e.g., CCPC).",
  "Request the latest accreditation certificate (must be < 3 years old).",
  "Validate surgeon's board certification in the relevant specialty.",
  "Ensure surgeon has minimum 8-10 years of specialized experience.",
  "Confirm surgeon has performed 500+ procedures of your specific surgery.",
  "Verify surgeon's international training or fellowships (USA, UK, etc.).",
  "Review the hospital and surgeon's complication and revision rates.",
  "Check real patient testimonials and authentic before/after photos.",
  "Confirm operating theatres are equipped with laminar airflow.",
  "Verify hospital-wide infection rates are consistently below 1%.",
  "Ensure there is a dedicated International Patient Department.",
  "Confirm availability of English-speaking staff & 24/7 coordinator.",
  "Check availability of on-site ICU / High Dependency Unit."
];

const RED_FLAGS = [
  "Extremely low prices (too good to be true)",
  "No transparent pricing or hidden fees",
  "Pressure to book immediately",
  "Poor English communication",
  "No clear aftercare or post-op plan"
];

function App() {
  const [checkedItems, setCheckedItems] = useState<Set<number>>(new Set());

  const toggleCheck = (index: number) => {
    const newChecked = new Set(checkedItems);
    if (newChecked.has(index)) {
      newChecked.delete(index);
    } else {
      newChecked.add(index);
    }
    setCheckedItems(newChecked);
  };

  return (
    <div className="min-h-screen font-sans text-slate-800 bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center shadow-lg shadow-brand-500/20">
              <ShieldCheck className="w-6 h-6 text-white" />
            </div>
            <span className="font-display font-bold text-2xl tracking-tight text-slate-900">le-medica<span className="text-brand-600">.</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-medium text-slate-600 text-sm">
            <a href="#standards" className="hover:text-brand-600 transition-colors">Standards</a>
            <a href="#verification" className="hover:text-brand-600 transition-colors">Verification</a>
            <a href="#checklist" className="hover:text-brand-600 transition-colors">Safety Checklist</a>
            <a href="#red-flags" className="hover:text-brand-600 transition-colors">Red Flags</a>
          </div>
          <button className="bg-brand-600 hover:bg-brand-700 text-white px-6 py-2.5 rounded-full font-semibold transition-all shadow-md hover:shadow-xl hover:shadow-brand-500/20 active:scale-95 text-sm flex items-center gap-2">
            Get Free Report <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-brand-200/40 blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-100/50 blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-800 font-medium text-sm mb-6 border border-slate-200 shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              Over 60% of medical tourists worry about safety
            </div>
            
            <h1 className="font-display font-extrabold text-5xl lg:text-7xl leading-[1.1] tracking-tight text-slate-900 mb-6">
              Hospital Safety Checklist for <span className="text-brand-600">Medical Tourism.</span>
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Medical tourism can save you <span className="font-semibold text-slate-900">RM50,000–RM200,000+</span>, but one wrong hospital choice can lead to complications, revision surgery, or worse. This definitive safety checklist helps Malaysian patients make smart, safe decisions in 2026.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all shadow-xl shadow-brand-500/30 hover:shadow-brand-500/40 active:scale-95 text-lg flex items-center justify-center gap-2">
                Get My Free Safety Report
              </button>
              <button className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 px-8 py-4 rounded-2xl font-semibold transition-all shadow-sm active:scale-95 text-lg flex items-center justify-center gap-2">
                Download PDF Checklist <Download className="w-5 h-5 ml-1" />
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-[40px] overflow-hidden shadow-2xl shadow-slate-200/50 aspect-[4/5] lg:aspect-square relative outline cursor-pointer hover:outline-brand-200 outline-4 outline-transparent transition-all">
              <img 
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2653&auto=format&fit=crop" 
                alt="Modern Hospital and Medical Team" 
                className="w-full h-full object-cover"
              />
              {/* Floating Badge */}
              <div className="absolute top-8 right-8 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 leading-tight">JCI Accredited</div>
                  <div className="text-sm text-slate-500">Gold Standard</div>
                </div>
              </div>

              {/* Floating Action */}
              <div className="absolute bottom-8 left-8 right-8 bg-slate-900/90 backdrop-blur-md p-6 rounded-3xl text-white shadow-2xl flex items-center justify-between">
                <div>
                  <div className="font-bold text-lg mb-1">Verify Your Surgeon</div>
                  <div className="text-slate-300 text-sm">Don't guess with your health</div>
                </div>
                <div className="w-12 h-12 bg-brand-500 rounded-full flex items-center justify-center cursor-pointer hover:bg-brand-400 transition-colors">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Pillars (Cards) Section */}
      <section id="standards" className="py-24 bg-slate-50 relative border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 relative">
             <h2 className="font-display font-bold text-4xl lg:text-5xl text-slate-900 mb-4 tracking-tight">The 3 Pillars of Safety</h2>
             <p className="text-lg text-slate-600">Before you book any flight or procedure, ensure your chosen hospital meets these non-negotiable criteria.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Box 1 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-start group hover:border-brand-200 hover:shadow-xl hover:shadow-brand-100/50 transition-all cursor-pointer"
            >
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Globe2 className="w-7 h-7" />
              </div>
              <h3 className="font-display font-bold text-2xl text-slate-900 mb-4">Accreditation & Certs</h3>
              <p className="text-slate-600 mb-6 flex-grow">JCI Accreditation is the global gold standard. Only choose hospitals with current active statuses and relevant specialty certifications.</p>
              <ul className="space-y-3 mb-8 w-full border-t border-slate-50 pt-6">
                <li className="flex gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0" /> JCI Accreditation required.
                </li>
                <li className="flex gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0" /> Country-specific standards.
                </li>
              </ul>
              <div className="mt-auto bg-slate-50 p-4 rounded-2xl w-full border border-slate-100">
                <strong className="text-slate-900 block text-sm mb-1 uppercase tracking-wider text-xs font-bold">Action Step</strong>
                <span className="text-sm text-slate-600">Ask for the latest accreditation certificate (must be valid within 3 years).</span>
              </div>
            </motion.div>

            {/* Box 2 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-start group hover:border-brand-200 hover:shadow-xl hover:shadow-brand-100/50 transition-all cursor-pointer"
            >
              <div className="w-14 h-14 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Stethoscope className="w-7 h-7" />
              </div>
              <h3 className="font-display font-bold text-2xl text-slate-900 mb-4">Surgeon Verification</h3>
              <p className="text-slate-600 mb-6 flex-grow">A hospital is only as good as the surgeon holding the scalpel. Rigorously verify credentials and past case history.</p>
              <ul className="space-y-3 mb-8 w-full border-t border-slate-50 pt-6">
                <li className="flex gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0" /> Board Certified & 8+ yrs exp.
                </li>
                <li className="flex gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0" /> 500+ specific procedures done.
                </li>
                <li className="flex gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0" /> Proven international training.
                </li>
              </ul>
              <div className="mt-auto bg-orange-50 p-4 rounded-2xl w-full border border-orange-100">
                <strong className="text-orange-900 block text-sm mb-1 uppercase tracking-wider text-xs font-bold">Red Flag Alert</strong>
                <span className="text-sm text-orange-800">Surgeon refuses to share case volume, success rates, or revision data.</span>
              </div>
            </motion.div>

            {/* Box 3 */}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col items-start group hover:border-brand-200 hover:shadow-xl hover:shadow-brand-100/50 transition-all cursor-pointer"
            >
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Building2 className="w-7 h-7" />
              </div>
              <h3 className="font-display font-bold text-2xl text-slate-900 mb-4">Facility Standards</h3>
              <p className="text-slate-600 mb-6 flex-grow">World-class surgery needs world-class infrastructure. Ensure the environment is sterile, modern, and supportive.</p>
              <ul className="space-y-3 mb-8 w-full border-t border-slate-50 pt-6">
                <li className="flex gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0" /> Laminar airflow in ORs.
                </li>
                <li className="flex gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0" /> Dedicated ICU available.
                </li>
                <li className="flex gap-2 text-sm text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-brand-500 shrink-0" /> &lt; 1% Facility infection rates.
                </li>
              </ul>
              <div className="mt-auto bg-slate-50 p-4 rounded-2xl w-full border border-slate-100">
                <strong className="text-slate-900 block text-sm mb-1 uppercase tracking-wider text-xs font-bold">Patient Support</strong>
                <span className="text-sm text-slate-600">Must have a dedicated International Patient Dept & 24/7 English support.</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive 15-Point Checklist */}
      <section id="checklist" className="py-24 bg-white relative">
        <div className="absolute right-0 top-0 w-1/3 h-full bg-slate-50 rounded-l-[100px] z-0 opacity-50" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center mb-12">
            <span className="bg-brand-50 text-brand-700 px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-4 border border-brand-100">
              Interactive Tool
            </span>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-slate-900 mb-6 tracking-tight">The Complete 15-Point Safety Checklist</h2>
            <p className="text-lg text-slate-600">Click to check off items as you verify them with your prospective hospital. Don't commit until all boxes are green.</p>
          </div>

          <div className="bg-white rounded-[32px] p-8 md:p-12 shadow-2xl shadow-slate-200/50 border border-slate-100">
            <div className="space-y-4">
              {CHECKLIST_ITEMS.map((item, idx) => {
                const isChecked = checkedItems.has(idx);
                return (
                  <motion.div 
                    layout
                    key={idx}
                    onClick={() => toggleCheck(idx)}
                    className={`flex items-start gap-5 p-5 rounded-2xl cursor-pointer transition-all ${
                      isChecked 
                        ? 'bg-brand-50/50 border-brand-200 border' 
                        : 'bg-slate-50 border-transparent border hover:bg-slate-100 hover:border-slate-200'
                    }`}
                  >
                    <div className={`mt-0.5 shrink-0 flex items-center justify-center w-7 h-7 rounded-full border-2 transition-colors ${
                      isChecked
                        ? 'bg-brand-500 border-brand-500 text-white'
                        : 'border-slate-300 text-transparent bg-white'
                    }`}>
                      <CheckCircle2 className="w-5 h-5 absolute" />
                    </div>
                    <span className={`text-base font-medium transition-colors ${
                      isChecked ? 'text-brand-900 line-through opacity-70' : 'text-slate-700'
                    }`}>
                      {item}
                    </span>
                  </motion.div>
                );
              })}
            </div>
            
            {/* Progress indicator */}
            <div className="mt-10 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <div className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-2">Safety Score</div>
                <div className="flex items-end gap-3">
                  <span className="font-display font-bold text-4xl text-slate-900">{checkedItems.size}</span>
                  <span className="text-xl font-medium text-slate-500 mb-1">/ 15</span>
                </div>
              </div>
              <div className="flex-grow w-full sm:w-auto">
                <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-brand-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${(checkedItems.size / 15) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
              <button 
                className="shrink-0 text-brand-600 hover:text-brand-700 font-semibold text-sm flex items-center gap-2 px-4 py-2 hover:bg-brand-50 rounded-xl transition-colors"
                onClick={() => window.print()}
              >
                <Download className="w-4 h-4" /> Print Checklist
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Red Flags Section */}
      <section id="red-flags" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Abstract background shapes */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-red-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-red-400 font-bold tracking-widest uppercase text-sm mb-6">
                <AlertTriangle className="w-5 h-5" /> Warning Signs
              </div>
              <h2 className="font-display font-bold text-4xl lg:text-5xl mb-6 tracking-tight">Common Red Flags in Medical Tourism</h2>
              <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                If you encounter any of these warning signs during your research or communication, it strongly signals that you should look for another provider.
              </p>
              
              <div className="space-y-4">
                {RED_FLAGS.map((flag, idx) => (
                  <div key={idx} className="flex gap-4 p-5 rounded-2xl bg-slate-800/50 border border-slate-700 backdrop-blur-sm">
                    <div className="mt-1 w-8 h-8 rounded-full bg-red-500/20 text-red-400 border border-red-500/30 flex items-center justify-center shrink-0">
                      <span className="font-bold text-sm">{idx + 1}</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">{flag}</h4>
                      <p className="text-slate-400 text-sm">Do not compromise on this point. Trust your instincts.</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?q=80&w=2583&auto=format&fit=crop" 
                alt="Medical Consultation" 
                className="rounded-[40px] opacity-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-brand-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <h2 className="font-display font-bold text-4xl lg:text-6xl text-white mb-6 tracking-tight">
            Protect Your Health & Investment
          </h2>
          <p className="text-xl text-brand-100 mb-12">
            Let <strong className="text-white">le-medica.com</strong> verify hospitals and surgeons for you — entirely free of charge. We do the heavy lifting to ensure your peace of mind.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-slate-900 hover:bg-black text-white px-8 py-5 rounded-2xl font-bold text-lg transition-all shadow-2xl hover:shadow-black/50 active:scale-95 flex items-center justify-center gap-3">
              <ShieldCheck className="w-6 h-6 text-brand-400" />
              Get My Free Hospital Safety Report
            </button>
            <button className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 px-8 py-5 rounded-2xl font-bold text-lg transition-all active:scale-95 flex items-center justify-center gap-3">
              <PhoneCall className="w-5 h-5" />
              Request Personalized Quote
            </button>
          </div>
          <p className="mt-8 text-brand-200 text-sm">
            100% Free Verification. Trusted by 2,000+ Malaysian patients.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-brand-600" />
            <span className="font-display font-bold text-xl text-slate-900">le-medica<span className="text-brand-600">.</span></span>
          </div>
          <div className="text-slate-500 text-sm">
            © {new Date().getFullYear()} le-medica.com. All rights reserved. Medical Tourism Safety Partner.
          </div>
          <div className="flex gap-6 text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-brand-600">Privacy Policy</a>
            <a href="#" className="hover:text-brand-600">Terms of Service</a>
            <a href="#" className="hover:text-brand-600">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

