import React, { useEffect, useState, useRef } from 'react';
import { Menu, X, ArrowRight, Check, MapPin, Phone, Mail, Clock, HelpCircle, FileText, Compass, Info } from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'resident' | 'non-resident'>('non-resident');
  
  // Form state
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  
  // Stats animation trigger
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Simple timer to trigger stats counter emergence subtly
    const timer = setTimeout(() => {
      setStatsVisible(true);
    }, 400);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setFormSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F0E5D0] text-[#3A2418] font-sans selection:bg-[#2E6F8E] selection:text-[#FAF4E8] overflow-x-hidden antialiased">
      
      {/* 1. Navigation Sticky */}
      <nav
        id="navbar"
        className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out ${
          isScrolled
            ? 'bg-[#F0E5D0]/95 backdrop-blur-md shadow-md py-4 border-b border-[#3A2418]/10'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#" className="flex flex-col">
            <span className={`font-serif font-semibold text-xl md:text-2xl tracking-tight transition-colors duration-300 ${isScrolled ? 'text-[#3A2418]' : 'text-[#FAF4E8]'}`}>
              Aloha Immo Services
            </span>
            <span className={`text-[9px] tracking-[0.25em] font-sans font-medium uppercase mt-0.5 transition-colors duration-300 ${isScrolled ? 'text-[#C8A668]' : 'text-[#C8A668]'}`}>
              Tuléar · Madagascar
            </span>
          </a>

          {/* Nav Links */}
          <div className="hidden lg:flex items-center space-x-8 text-xs font-semibold uppercase tracking-wider">
            <a href="#acheter" className={`transition-all hover:translate-y-[-1px] ${isScrolled ? 'text-[#3A2418] hover:text-[#2E6F8E]' : 'text-[#FAF4E8]/90 hover:text-white'}`}>Acheter</a>
            <a href="#louer" className={`transition-all hover:translate-y-[-1px] ${isScrolled ? 'text-[#3A2418] hover:text-[#2E6F8E]' : 'text-[#FAF4E8]/90 hover:text-white'}`}>Louer</a>
            <a href="#professionnels" className={`transition-all hover:translate-y-[-1px] ${isScrolled ? 'text-[#3A2418] hover:text-[#2E6F8E]' : 'text-[#FAF4E8]/90 hover:text-white'}`}>Professionnels</a>
            <a href="#investisseurs" className={`transition-all hover:translate-y-[-1px] ${isScrolled ? 'text-[#3A2418] hover:text-[#2E6F8E]' : 'text-[#FAF4E8]/90 hover:text-white'}`}>Investisseurs Étrangers</a>
            <a href="#contact" className={`transition-all hover:translate-y-[-1px] ${isScrolled ? 'text-[#3A2418] hover:text-[#2E6F8E]' : 'text-[#FAF4E8]/90 hover:text-white'}`}>Contact</a>
          </div>

          <div className="hidden lg:block">
            <a
              href="#contact"
              className={`px-6 py-3 rounded-[4px] text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                isScrolled
                  ? 'bg-[#2E6F8E] text-[#FAF4E8] hover:bg-[#2E6F8E]/90 shadow-sm'
                  : 'bg-[#FAF4E8] text-[#3A2418] hover:bg-white'
              }`}
            >
              Nous contacter
            </a>
          </div>

          <button
            className={`lg:hidden p-2 transition-colors ${isScrolled ? 'text-[#3A2418]' : 'text-[#FAF4E8]'}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 w-full bg-[#FAF4E8] border-t border-[#3A2418]/10 py-6 px-8 flex flex-col space-y-5 shadow-xl transition-all duration-300 origin-top ${
            isMobileMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'
          }`}
        >
          <a href="#acheter" onClick={() => setIsMobileMenuOpen(false)} className="text-[#3A2418] text-sm font-semibold tracking-wide uppercase hover:text-[#2E6F8E]">Acheter</a>
          <a href="#louer" onClick={() => setIsMobileMenuOpen(false)} className="text-[#3A2418] text-sm font-semibold tracking-wide uppercase hover:text-[#2E6F8E]">Louer</a>
          <a href="#professionnels" onClick={() => setIsMobileMenuOpen(false)} className="text-[#3A2418] text-sm font-semibold tracking-wide uppercase hover:text-[#2E6F8E]">Professionnels</a>
          <a href="#investisseurs" onClick={() => setIsMobileMenuOpen(false)} className="text-[#3A2418] text-sm font-semibold tracking-wide uppercase hover:text-[#2E6F8E]">Investisseurs Étrangers</a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="text-[#3A2418] text-sm font-semibold tracking-wide uppercase hover:text-[#2E6F8E]">Contact</a>
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-[#2E6F8E] text-[#FAF4E8] py-3.5 px-6 rounded-[4px] text-center text-xs font-bold uppercase tracking-widest hover:bg-[#2E6F8E]/90 transition-colors"
          >
            Nous contacter
          </a>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <section className="relative min-h-screen flex items-end pb-24 md:pb-32 px-6 md:px-12 bg-[#3A2418] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1589197331516-4d84b72ebde3?w=1920&q=80"
            alt="Paysage côtier préservé de Tuléar, Madagascar"
            className="w-full h-full object-cover scale-105 animate-[subtle-zoom_20s_infinite_alternate]"
          />
          {/* Overlay sable chaud multiply à 30% */}
          <div className="absolute inset-0 bg-[#F0E5D0]/30 mix-blend-multiply"></div>
          {/* Deep elegant gradient for absolute legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#3A2418] via-[#3A2418]/65 to-transparent"></div>
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto pl-0 md:pl-6 lg:pl-12">
          <div className="max-w-[75%] lg:max-w-[60%] text-left">
            <p className="font-sans text-[12px] font-semibold tracking-[0.3em] text-[#C8A668] uppercase mb-6 leading-none">
              Tuléar · Madagascar
            </p>
            
            <h1 className="font-serif font-bold text-[#FAF4E8] tracking-tight leading-[1.05] mb-8" style={{ fontSize: 'clamp(2.5rem, 6.5vw, 6.5rem)' }}>
              L'immobilier <br />
              <span className="italic font-normal text-[#C8A668]">du sud-ouest malgache.</span>
            </h1>
            
            <p className="text-[#FAF4E8]/90 font-sans text-base md:text-lg lg:text-xl max-w-[540px] leading-relaxed font-light">
              Vente, location, accompagnement administratif. Aloha Immo Services accompagne particuliers, investisseurs et entreprises dans leurs projets immobiliers à Tuléar et sur la côte sud.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a href="#univers" className="bg-[#2E6F8E] text-[#FAF4E8] px-8 py-4 rounded-[4px] text-xs font-bold tracking-widest uppercase hover:bg-[#2E6F8E]/90 transition-all shadow-md">
                Explorer nos solutions
              </a>
              <a href="#investisseurs" className="border border-[#FAF4E8]/40 hover:border-white text-[#FAF4E8] px-8 py-4 rounded-[4px] text-xs font-bold tracking-widest uppercase transition-all backdrop-blur-sm">
                S'installer à Madagascar
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Bande de Transition Discrète */}
      <section className="bg-[#FAF4E8] py-14 border-y border-[#3A2418]/5 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <p className="font-serif italic text-base md:text-lg lg:text-xl text-[#3A2418]/85 leading-relaxed font-normal">
            "Une agence ancrée dans le sud-ouest malgache depuis plusieurs années, au service des particuliers, investisseurs et entreprises."
          </p>
        </div>
      </section>

      {/* 4. Section "Nos univers" */}
      <section id="univers" className="py-24 md:py-32 px-6 md:px-12 bg-[#F0E5D0]">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="font-sans text-[11px] font-bold tracking-[0.25em] text-[#2E6F8E] uppercase block mb-3">
              NOS UNIVERS
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#3A2418] mb-6 tracking-tight leading-none">
              Chaque projet a <span className="italic font-normal">son chemin</span>.
            </h2>
            <div className="w-16 h-[2px] bg-[#C8A668] mx-auto mb-6"></div>
            <p className="text-sm md:text-base text-[#3A2418]/80 max-w-xl mx-auto font-light leading-relaxed">
              Quatre univers distincts, des parcours de recherche pensés pour chaque profil et chaque ambition sur le territoire de Toliara.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Univers 1 */}
            <div className="group bg-[#FAF4E8] rounded-[6px] overflow-hidden flex flex-col justify-between border border-[#3A2418]/5 shadow-sm transition-all duration-300 hover:shadow-md">
              <div>
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#3A2418]/10">
                  <img
                    src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
                    alt="Villas de prestige à Tuléar"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="p-8">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-sans font-bold text-[#C8A668] block mb-2">
                    ACHETER
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#3A2418] mb-3">
                    Villas, propriétés et terrains
                  </h3>
                  <p className="text-xs text-[#3A2418]/85 leading-relaxed font-light">
                    Biens d'habitation et terrains d'exception à Tuléar et sur la magnifique côte sud-ouest. Sélection rigoureuse de parcelles qualifiées pour s'établir ou investir sereinement.
                  </p>
                </div>
              </div>
              <div className="px-8 pb-8 pt-0">
                <a href="#biens" className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#2E6F8E] hover:text-[#3A2418] transition-colors group/link">
                  Explorer la sélection 
                  <ArrowRight size={14} className="ml-2 transition-transform duration-300 group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Univers 2 */}
            <div className="group bg-[#FAF4E8] rounded-[6px] overflow-hidden flex flex-col justify-between border border-[#3A2418]/5 shadow-sm transition-all duration-300 hover:shadow-md">
              <div>
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#3A2418]/10">
                  <img
                    src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80"
                    alt="Appartements et locations de standing"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="p-8">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-sans font-bold text-[#C8A668] block mb-2">
                    LOUER
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#3A2418] mb-3">
                    Appartements et villas meublés
                  </h3>
                  <p className="text-xs text-[#3A2418]/85 leading-relaxed font-light">
                    Solutions de locations résidentielles de courte ou longue durée pour expatriés, professionnels en mission ou voyageurs exigeants. En centre-ville ou les pieds dans l'eau.
                  </p>
                </div>
              </div>
              <div className="px-8 pb-8 pt-0">
                <a href="#biens" className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#2E6F8E] hover:text-[#3A2418] transition-colors group/link">
                  Voir les locations 
                  <ArrowRight size={14} className="ml-2 transition-transform duration-300 group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Univers 3 */}
            <div className="group bg-[#FAF4E8] rounded-[6px] overflow-hidden flex flex-col justify-between border border-[#3A2418]/5 shadow-sm transition-all duration-300 hover:shadow-md">
              <div>
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#3A2418]/10">
                  <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                    alt="Bureaux et structures commerciales à Tuléar"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="p-8">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-sans font-bold text-[#C8A668] block mb-2">
                    PROFESSIONNELS
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#3A2418] mb-3">
                    Locaux, bureaux, fonds de commerce
                  </h3>
                  <p className="text-xs text-[#3A2418]/85 leading-relaxed font-light">
                    Trouvez les meilleurs emplacements pour implanter ou étendre votre activité commerciale à Toliara. Services complémentaires de conciergerie d'entreprises et domiciliation juridique.
                  </p>
                </div>
              </div>
              <div className="px-8 pb-8 pt-0">
                <a href="#contact" className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#2E6F8E] hover:text-[#3A2418] transition-colors group/link">
                  Découvrir nos services 
                  <ArrowRight size={14} className="ml-2 transition-transform duration-300 group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>

            {/* Univers 4 - Accompagnement (Bordure dorée distinctive) */}
            <div className="group bg-[#FAF4E8] rounded-[6px] overflow-hidden flex flex-col justify-between border-2 border-[#C8A668] shadow-md transition-all duration-300 hover:shadow-lg relative">
              <div className="absolute top-4 right-4 bg-[#C8A668] text-[#3A2418] text-[9px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-[3px] z-10 shadow-sm">
                SÉCURISÉ
              </div>
              <div>
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#3A2418]/10">
                  <img
                    src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80"
                    alt="Accompagnement foncier et juridique agréé"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
                <div className="p-8">
                  <span className="text-[10px] uppercase tracking-[0.2em] font-sans font-bold text-[#C8A668] block mb-2">
                    EXPERTISE LOCALE
                  </span>
                  <h3 className="font-serif text-xl font-bold text-[#3A2418] mb-3">
                    Accompagnement administratif
                  </h3>
                  <p className="text-xs text-[#3A2418]/85 leading-relaxed font-light">
                    Bénéficiez d'une sécurisation absolue : démarches foncières, immatriculation, mutation de titre, bornage contradictoire agréé. Nous prenons en charge la complexité administrative.
                  </p>
                </div>
              </div>
              <div className="px-8 pb-8 pt-0">
                <a href="#investisseurs" className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-[#2E6F8E] hover:text-[#C8A668] transition-colors group/link">
                  En savoir plus 
                  <ArrowRight size={14} className="ml-2 transition-transform duration-300 group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Section "Investisseurs étrangers" */}
      <section id="investisseurs" className="py-24 md:py-32 px-6 md:px-12 bg-[#3A2418] text-[#FAF4E8] relative overflow-hidden">
        {/* Background micro elements for safety styling */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FAF4E8]/2 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C8A668]/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Info Column */}
            <div className="lg:col-span-7">
              <span className="font-sans text-[11px] font-bold tracking-[0.25em] text-[#C8A668] uppercase block mb-3">
                INVESTISSEURS ÉTRANGERS
              </span>
              <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-[#FAF4E8] mb-8 tracking-tight leading-none">
                Investir à Madagascar, <br />
                <span className="italic font-normal text-[#C8A668]">en toute sécurité</span>.
              </h2>
              
              <div className="space-y-6 text-[#FAF4E8]/90 font-light text-base leading-relaxed max-w-2xl">
                <p>
                  Vous appartenez à la communauté internationale ou êtes expatrié et vous projetez d'acquérir un bien immobilier ou un terrain d'envergure à Madagascar ? La législation nationale propose un outil juridique d'une stabilité exemplaire : le <strong className="font-semibold text-[#C8A668]">bail emphytéotique de longue durée (jusqu'à 99 ans)</strong>.
                </p>
                <p>
                  Aloha Immo Services s'est forgé une réputation de référence absolue dans le sud-ouest malgache pour auditer, restructurer et sécuriser ces protocoles d'investissements. Nous validons avec méthodologie l'origine de propriété, l'absence de litiges coutumiers et assurons la conformité auprès des services des domaines.
                </p>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact" 
                  className="bg-[#2E6F8E] text-[#FAF4E8] px-8 py-4 rounded-[4px] text-xs font-bold tracking-widest uppercase hover:bg-[#2E6F8E]/90 transition-all text-center"
                >
                  Découvrir notre accompagnement
                </a>
                <a 
                  href="#contact" 
                  className="border border-[#FAF4E8]/20 hover:border-[#C8A668] text-[#FAF4E8] px-8 py-4 rounded-[4px] text-xs font-bold tracking-widest uppercase transition-all text-center"
                >
                  Réserver un rendez-vous d'information
                </a>
              </div>
            </div>

            {/* Right Summary Column */}
            <div className="lg:col-span-5 lg:pl-6">
              <div className="bg-[#FAF4E8] text-[#3A2418] p-10 rounded-[8px] border border-[#C8A668]/30 shadow-xl relative">
                <div className="absolute top-0 right-10 transform translate-y-[-50%] bg-[#C8A668] text-[#3A2418] uppercase text-[9px] tracking-widest font-bold px-3 py-1.5 rounded-[3px]">
                  VOTRE CADRE LÉGAL
                </div>
                
                <span className="text-[10px] uppercase tracking-[0.2em] font-sans font-bold text-[#C8A668] block mb-4">
                  EN BREF
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#3A2418] mb-6">
                  Garanties Offertes
                </h3>

                <ul className="space-y-5 text-sm text-[#3A2418]/90 font-light">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#C8A668] rounded-full mt-2 mr-3"></span>
                    <div>
                      <strong className="font-semibold text-[#3A2418]">Bail emphytéotique sécurisé</strong> allant jusqu'à 99 ans, pleinement renouvelable et transmissible.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#C8A668] rounded-full mt-2 mr-3"></span>
                    <div>
                      <strong className="font-semibold text-[#3A2418]">Vérifications foncières complètes</strong> (historique cadastral, statut des servitudes, hypothèques).
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#C8A668] rounded-full mt-2 mr-3"></span>
                    <div>
                      <strong className="font-semibold text-[#3A2418]">Accompagnement de bout en bout</strong> auprès du conservateur, du géomètre officiel et des notaires.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-1.5 h-1.5 bg-[#C8A668] rounded-full mt-2 mr-3"></span>
                    <div>
                      <strong className="font-semibold text-[#3A2418]">Transparence financière absolue</strong> sur les taxes domaniales et enveloppes prévisionnelles de mutation.
                    </div>
                  </li>
                </ul>

                <div className="mt-8 pt-8 border-t border-[#3A2418]/10 flex items-center justify-between">
                  <div className="flex items-center text-xs text-[#3A2418]/70">
                    <Info size={16} className="text-[#2E6F8E] mr-2" />
                    Démarche 100% légale et transparente
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Section "Sélection Éditoriale" */}
      <section id="biens" className="py-24 md:py-32 px-6 md:px-12 bg-[#FAF4E8]">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <span className="font-sans text-[11px] font-bold tracking-[0.25em] text-[#C8A668] uppercase block mb-3">
                NOS DERNIÈRES OPPORTUNITÉS
              </span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-[#3A2418] tracking-tight leading-none">
                Sélection <span className="italic font-normal text-[#C8A668]">exclusive</span>.
              </h2>
            </div>
            <p className="text-sm text-[#3A2418]/70 md:max-w-xs font-light leading-relaxed">
              Une collection restreinte de biens d'habitation et de foncier d'exception, méticuleusement expertisés par notre direction.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Bien 1 */}
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-[6px] mb-6 aspect-[16/10] bg-[#3A2418]/10 relative">
                <img
                  src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80"
                  alt="Hôtel-restaurant de standing en bord de mer"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-1000 ease-out"
                />
                <div className="absolute top-4 left-4 bg-[#2E6F8E] text-[#FAF4E8] text-[9px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-[2px] z-10 shadow-sm">
                  Coup de Coeur
                </div>
              </div>
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-[#3A2418] mb-1.5 group-hover:text-[#2E6F8E] transition-colors duration-300">
                    Hôtel-restaurant en bord de mer
                  </h3>
                  <div className="flex items-center text-xs text-[#3A2418]/60 uppercase tracking-wider font-semibold font-sans">
                    <MapPin size={12} className="mr-1 text-[#C8A668]" />
                    Côte sud-ouest · Prêt à exploiter
                  </div>
                </div>
                <div className="text-[#2E6F8E] font-serif font-semibold text-lg md:text-xl whitespace-nowrap">
                  Sur demande
                </div>
              </div>
            </div>

            {/* Bien 2 */}
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-[6px] mb-6 aspect-[16/10] bg-[#3A2418]/10 relative">
                <img
                  src="https://images.unsplash.com/photo-1600607686527-6fb886090705?w=1200&q=80"
                  alt="Terrain vue lagon à Madagascar"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-1000 ease-out"
                />
                <div className="absolute top-4 left-4 bg-[#C8A668] text-[#3A2418] text-[9px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-[2px] z-10 shadow-sm">
                  Foncier Rare
                </div>
              </div>
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-[#3A2418] mb-1.5 group-hover:text-[#2E6F8E] transition-colors duration-300">
                    Terrain vue lagon, 60m de façade plage
                  </h3>
                  <div className="flex items-center text-xs text-[#3A2418]/60 uppercase tracking-wider font-semibold font-sans">
                    <MapPin size={12} className="mr-1 text-[#C8A668]" />
                    5289 m² · Bord de mer constructible
                  </div>
                </div>
                <div className="text-[#2E6F8E] font-serif font-semibold text-lg md:text-xl whitespace-nowrap">
                  Sur demande
                </div>
              </div>
            </div>

            {/* Bien 3 */}
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-[6px] mb-6 aspect-[16/10] bg-[#3A2418]/10 relative">
                <img
                  src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80"
                  alt="Grande propriété au centre ville de Tuléar"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-1000 ease-out"
                />
                <div className="absolute top-4 left-4 bg-[#3A2418] text-[#FAF4E8] text-[9px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-[2px] z-10 shadow-sm">
                  En exclusivité
                </div>
              </div>
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-[#3A2418] mb-1.5 group-hover:text-[#2E6F8E] transition-colors duration-300">
                    Propriété F10 centre ville
                  </h3>
                  <div className="flex items-center text-xs text-[#3A2418]/60 uppercase tracking-wider font-semibold font-sans">
                    <MapPin size={12} className="mr-1 text-[#C8A668]" />
                    Tuléar centre · Idéal bureaux ou maison d'hôtes
                  </div>
                </div>
                <div className="text-[#2E6F8E] font-serif font-semibold text-lg md:text-xl whitespace-nowrap">
                  À vendre
                </div>
              </div>
            </div>

            {/* Bien 4 */}
            <div className="group cursor-pointer">
              <div className="overflow-hidden rounded-[6px] mb-6 aspect-[16/10] bg-[#3A2418]/10 relative">
                <img
                  src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80"
                  alt="Villa de plage front de mer à louer"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-1000 ease-out"
                />
                <div className="absolute top-4 left-4 bg-[#2E6F8E] text-[#FAF4E8] text-[9px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-[2px] z-10 shadow-sm">
                  Disponible
                </div>
              </div>
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-[#3A2418] mb-1.5 group-hover:text-[#2E6F8E] transition-colors duration-300">
                    Villa F4 front de mer
                  </h3>
                  <div className="flex items-center text-xs text-[#3A2418]/60 uppercase tracking-wider font-semibold font-sans">
                    <MapPin size={12} className="mr-1 text-[#C8A668]" />
                    Tuléar · Bord de mer privatise
                  </div>
                </div>
                <div className="text-[#2E6F8E] font-serif font-semibold text-lg md:text-xl whitespace-nowrap">
                  Sur demande
                </div>
              </div>
            </div>

          </div>

          <div className="mt-20 text-center">
            <a 
              href="#contact"
              className="inline-block border border-[#3A2418]/30 text-[#3A2418] hover:bg-[#3A2418] hover:text-[#FAF4E8] px-10 py-4 rounded-[4px] font-semibold transition-all duration-300 uppercase tracking-widest text-xs"
            >
              Voir tous nos biens
            </a>
          </div>
        </div>
      </section>

      {/* 7. Section "Honoraires Transparents" */}
      <section id="honoraires" className="py-24 md:py-28 px-6 md:px-12 bg-[#F0E5D0] border-t border-[#3A2418]/5">
        <div className="max-w-4xl mx-auto text-center">
          <span className="font-sans text-[11px] font-bold tracking-[0.25em] text-[#2E6F8E] uppercase block mb-3">
            TRANSPARENCE
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#3A2418] mb-6 tracking-tight">
            Nos honoraires <span className="italic font-normal text-[#C8A668]">en toute clarté</span>.
          </h2>
          
          <div className="w-16 h-[1.5px] bg-[#C8A668] mx-auto mb-8"></div>

          <p className="text-base text-[#3A2418]/80 leading-relaxed font-light max-w-2xl mx-auto mb-10">
            Parce que la confiance réciproque se construit sur la clarté financière immédiate, nous publions nos barèmes d'honoraires sans équivoque. Pas d'intermédiaires informels, pas de surcoûts inattendus ni de commissions d'apport opaques.
          </p>

          <p className="text-base text-[#3A2418]/80 leading-relaxed font-normal max-w-2xl mx-auto mb-10">
            Notre grille tarifaire complète est publique. Honoraires de vente, de location, frais de mutation administrative, accompagnement juridique : tous nos taux sont consultables en agence ou sur demande, sans surprise.
          </p>

          <a 
            href="#contact"
            className="inline-block border border-[#3A2418]/30 text-[#3A2418] hover:bg-[#3A2418] hover:text-[#FAF4E8] px-10 py-4 rounded-[4px] font-semibold transition-all duration-300 uppercase tracking-widest text-xs"
          >
            Consulter nos honoraires
          </a>
        </div>
      </section>

      {/* 8. Section "Notre Territoire" */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-[#3A2418] text-[#FAF4E8] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#3A2418]/45 to-[#3A2418]"></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-6">
              <span className="font-sans text-[11px] font-bold tracking-[0.25em] text-[#C8A668] uppercase block mb-3">
                NOTRE TERRITOIRE
              </span>
              <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl font-bold text-[#FAF4E8] mb-8 tracking-tight leading-none animate-[fade-in_1s_ease-out]">
                Tuléar, <br />
                <span className="italic font-normal text-[#C8A668]">notre maison</span>.
              </h2>
              
              <p className="text-base text-[#FAF4E8]/90 font-light leading-relaxed max-w-xl mb-6">
                Depuis plusieurs années, nous guidons et sécurisons les projets immobiliers sur toute l'étendue de la côte sud-ouest de Madagascar. Notre implantation historique à Tuléar et notre connaissance intime des forces et arbitrages locaux constituent la meilleure protection pour vos transactions.
              </p>
            </div>

            {/* Right Statistics Grid */}
            <div className={`lg:col-span-5 lg:offset-1 transition-all duration-1000 transform ${statsVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <div className="grid grid-cols-2 gap-8">
                
                {/* Stat 1 */}
                <div className="bg-[#FAF4E8]/5 p-6 rounded-[4px] border border-[#FAF4E8]/10 hover:border-[#C8A668]/30 hover:bg-[#FAF4E8]/10 transition-all duration-300">
                  <div className="font-serif font-bold text-[#C8A668] mb-2 tracking-tight" style={{ fontSize: 'clamp(1.750rem, 3.5vw, 3rem)' }}>
                    Une centaine
                  </div>
                  <div className="font-sans text-[11px] uppercase tracking-[0.15em] text-[#FAF4E8]/70 font-medium">
                    Biens accompagnés
                  </div>
                </div>

                {/* Stat 2 */}
                <div className="bg-[#FAF4E8]/5 p-6 rounded-[4px] border border-[#FAF4E8]/10 hover:border-[#C8A668]/30 hover:bg-[#FAF4E8]/10 transition-all duration-300">
                  <div className="font-serif font-bold text-[#C8A668] mb-2 tracking-tight" style={{ fontSize: 'clamp(1.750rem, 3.5vw, 3rem)' }}>
                    Plusieurs années
                  </div>
                  <div className="font-sans text-[11px] uppercase tracking-[0.15em] text-[#FAF4E8]/70 font-medium">
                    D'expertise locale
                  </div>
                </div>

                {/* Stat 3 */}
                <div className="bg-[#FAF4E8]/5 p-6 rounded-[4px] border border-[#FAF4E8]/10 hover:border-[#C8A668]/30 hover:bg-[#FAF4E8]/10 transition-all duration-300">
                  <div className="font-serif text-4xl md:text-5xl font-bold text-[#C8A668] mb-2 tracking-tight">
                    4
                  </div>
                  <div className="font-sans text-[11px] uppercase tracking-[0.15em] text-[#FAF4E8]/70 font-medium">
                    Pôles d'expertise
                  </div>
                </div>

                {/* Stat 4 */}
                <div className="bg-[#FAF4E8]/5 p-6 rounded-[4px] border border-[#FAF4E8]/10 hover:border-[#C8A668]/30 hover:bg-[#FAF4E8]/10 transition-all duration-300">
                  <div className="font-serif text-4xl md:text-5xl font-bold text-[#C8A668] mb-2 tracking-tight">
                    100%
                  </div>
                  <div className="font-sans text-[11px] uppercase tracking-[0.15em] text-[#FAF4E8]/70 font-medium">
                    Suivi personnalisé
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 9. Section Contact */}
      <section id="contact" className="py-24 md:py-32 px-6 md:px-12 bg-[#FAF4E8]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Contact Form Column */}
            <div className="lg:col-span-7">
              <span className="font-sans text-[11px] font-bold tracking-[0.25em] text-[#2E6F8E] uppercase block mb-3">
                PARLONS DE VOTRE PROJET
              </span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#3A2418] mb-6 tracking-tight leading-none">
                Une question, <br />
                <span className="italic font-normal text-[#C8A668]">un projet particulier</span> ?
              </h2>
              
              <p className="text-base text-[#3A2418]/75 font-light leading-relaxed mb-12 max-w-xl">
                Notre équipe d'experts est pleinement mobilisée pour étudier votre dossier à Tuléar et sur la côte sud-ouest de Madagascar. Remplissez ce formulaire d'intention pour être recontacté à votre convenance.
              </p>

              {formSubmitted ? (
                <div className="bg-[#F0E5D0] p-8 rounded-[4px] border border-[#2E6F8E]/30 text-center animate-[fade-in_0.5s_ease-out]">
                  <Check size={40} className="text-[#2E6F8E] mx-auto mb-4" />
                  <h3 className="font-serif text-xl font-bold text-[#3A2418] mb-2">Votre demande a été enregistrée</h3>
                  <p className="text-sm text-[#3A2418]/80 max-w-md mx-auto">
                    Merci pour votre message. Un conseiller expert d'Aloha Immo Services vous recontactera par email dans un délai de 24 heures ouvrées.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-8 max-w-xl">
                  <div>
                    <label htmlFor="name" className="block text-[11px] font-bold uppercase tracking-wider text-[#3A2418]/60 mb-2">
                      Nom complet / Raison sociale
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jean Pierre Rakoto"
                      className="w-full bg-transparent border-b border-[#3A2418]/30 py-3.5 focus:border-[#2E6F8E] focus:outline-none transition-colors text-sm text-[#3A2418]"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-[11px] font-bold uppercase tracking-wider text-[#3A2418]/60 mb-2">
                      Adresse email de contact
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jp.rakoto@example.com"
                      className="w-full bg-transparent border-b border-[#3A2418]/30 py-3.5 focus:border-[#2E6F8E] focus:outline-none transition-colors text-sm text-[#3A2418]"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-[11px] font-bold uppercase tracking-wider text-[#3A2418]/60 mb-2">
                      Décrivez brièvement votre projet ou demande
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Je recherche un terrain avec façade plage pour un projet d'écolodge ou une villa résidentielle à Mangily..."
                      className="w-full bg-transparent border-b border-[#3A2418]/30 py-3.5 focus:border-[#2E6F8E] focus:outline-none transition-colors text-sm text-[#3A2418] resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-[#2E6F8E] text-[#FAF4E8] hover:bg-[#2E6F8E]/90 py-4 px-10 rounded-[4px] text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-md"
                  >
                    Envoyer ma demande
                  </button>
                </form>
              )}
            </div>

            {/* Right Information Blocks Column */}
            <div className="lg:col-span-5 lg:pl-10 space-y-12">
              
              {/* Block 1 */}
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] font-sans font-bold text-[#C8A668] block mb-4">
                  AGENCE
                </span>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#F0E5D0] rounded-[4px] text-[#2E6F8E]">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-lg text-[#3A2418] mb-1">Aloha Immo Services</h4>
                    <p className="text-sm text-[#3A2418]/80 font-light leading-relaxed">
                      Rue Henri Martin<br />
                      Tuléar Centre, Toliara 601<br />
                      Madagascar
                    </p>
                  </div>
                </div>
              </div>

              {/* Block 2 */}
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] font-sans font-bold text-[#C8A668] block mb-4">
                  CONTACT
                </span>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#F0E5D0] rounded-[4px] text-[#2E6F8E]">
                    <Phone size={20} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-serif font-bold text-lg text-[#3A2418] mb-1">Direct Bureau</h4>
                    <p className="text-sm text-[#3A2418]/80 font-semibold tracking-wide">
                      +261 34 22 201 02
                    </p>
                    <p className="text-xs text-[#3A2418]/60 flex items-center">
                      <Mail size={12} className="mr-1.5" />
                      contact@alohaimmoservices.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Block 3 */}
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] font-sans font-bold text-[#C8A668] block mb-4">
                  HORAIRES D'OUVERTURE
                </span>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#F0E5D0] rounded-[4px] text-[#2E6F8E]">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-lg text-[#3A2418] mb-1">Heures Locales</h4>
                    <ul className="text-sm text-[#3A2418]/80 font-light space-y-1">
                      <li>Lundi - Vendredi : 8h - 17h</li>
                      <li>Samedi : 8h - 12h</li>
                      <li className="text-[11px] text-[#3A2418]/60 italic mt-1">Sauf dimanches et jours fériés</li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 10. Footer Section */}
      <footer className="bg-[#3A2418] text-[#FAF4E8] pt-20 pb-10 px-6 md:px-12 relative overflow-hidden border-t border-[#C8A668]/20">
        <div className="max-w-7xl mx-auto z-10 relative">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start pb-16">
            
            {/* Logo and brief descriptive paragraph */}
            <div className="md:col-span-4 space-y-4">
              <span className="font-serif font-bold text-2xl tracking-tight text-[#FAF4E8]">
                Aloha Immo Services
              </span>
              <p className="text-xs text-[#FAF4E8]/60 font-light leading-relaxed max-w-xs">
                Agence immobilière majeure agréée et implantée durablement à Tuléar et sur la bande côtière de Mangily-Ifaty, Madagascar. Spécialiste de la sécurisation foncière des investissements locaux et internationaux.
              </p>
            </div>

            {/* Quick Links Column */}
            <div className="md:col-span-4">
              <h4 className="font-sans text-[11px] font-bold tracking-[0.2em] text-[#C8A668] uppercase mb-4">
                NAVIGATION ACCÈS RAPIDE
              </h4>
              <ul className="space-y-2.5 text-xs text-[#FAF4E8]/70 font-medium">
                <li><a href="#acheter" className="hover:text-white transition-colors">Acheter à Tuléar</a></li>
                <li><a href="#louer" className="hover:text-white transition-colors">Nos Solutions de Location</a></li>
                <li><a href="#univers" className="hover:text-white transition-colors">Scénario Professionnels & Commerces</a></li>
                <li><a href="#investisseurs" className="hover:text-white transition-colors">Investisseurs Étrangers & Emphytéose</a></li>
                <li><a href="#honoraires" className="hover:text-white transition-colors">Consulter nos Honoraires Transparents</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Nous contacter en direct</a></li>
              </ul>
            </div>

            {/* Local market insight small disclaimer info block */}
            <div className="md:col-span-4 space-y-4">
              <h4 className="font-sans text-[11px] font-bold tracking-[0.2em] text-[#C8A668] uppercase mb-4">
                NOTE D'INFORMATION FONCIÈRE
              </h4>
              <p className="text-xs text-[#FAF4E8]/50 font-light leading-relaxed">
                Toute acquisition de terrain ou contrat longue durée à Madagascar implique des contrôles cadastraux en amont. Ne versez aucun acompte sans l'attestation légale de propriété signée par le conservateur foncier local de Toliara.
              </p>
            </div>

          </div>

          <div className="border-t border-[#FAF4E8]/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[11px] text-[#FAF4E8]/40 font-light font-sans tracking-wide">
              © {new Date().getFullYear()} Aloha Immo Services. Tous droits réservés. Tuléar, Madagascar.
            </p>
            <p className="text-[11px] text-[#FAF4E8]/30 font-light font-sans italic">
              Conçu pour audit de portfolio immobilier haut de gamme.
            </p>
          </div>

        </div>
      </footer>

    </div>
  );
}
