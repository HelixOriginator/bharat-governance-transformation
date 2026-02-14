import { useEffect, useState, useRef } from 'react';
import { 
  Download, 
  FileText, 
  TrendingUp, 
  Users, 
  Globe, 
  Shield, 
  Zap, 
  Award,
  ChevronRight,
  Landmark,
  Cpu,
  Wallet,
  BarChart3,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
  Target,
  Lightbulb,
  BookOpen,
  Menu,
  X
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

// Navigation Component
function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Highlights', href: '#highlights' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Key Stats', href: '#stats' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#ff9933] via-white to-[#138808] flex items-center justify-center group-hover:scale-105 transition-transform">
              <Landmark className="w-5 h-5 text-[#0a0a0f]" />
            </div>
            <span className="font-bold text-lg hidden sm:block">
              <span className="text-[#ff9933]">Bharat</span>
              <span className="text-white">Governance</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-300 hover:text-[#ff9933] transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#ff9933] transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="hidden md:block">
            <Button 
              onClick={() => window.open('/india-governance-transformation.pdf', '_blank')}
              className="bg-gradient-to-r from-[#ff9933] to-[#e88a2a] hover:from-[#ffb366] hover:to-[#ff9933] text-[#0a0a0f] font-semibold btn-shine"
            >
              <FileText className="w-4 h-4 mr-2" />
              View PDF
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-slate-800 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-slate-300 hover:text-[#ff9933] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Button 
                onClick={() => {
                  window.open('/india-governance-transformation.pdf', '_blank');
                  setIsMobileMenuOpen(false);
                }}
                className="bg-gradient-to-r from-[#ff9933] to-[#e88a2a] text-[#0a0a0f] font-semibold mt-2"
              >
                <FileText className="w-4 h-4 mr-2" />
                View PDF
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute inset-0 radial-gradient" />
      
      {/* Animated Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ff9933]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#138808]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#000080]/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-float">
          <Sparkles className="w-4 h-4 text-[#ff9933]" />
          <span className="text-sm text-slate-300">Strategic Policy Briefing Document</span>
          <Badge variant="secondary" className="bg-[#138808]/20 text-[#138808] border-[#138808]/30">
            52 Slides
          </Badge>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="text-white">India's Governance</span>
          <br />
          <span className="text-gradient">Transformation</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto mb-4">
          A comprehensive strategic analysis of India's journey from a civilizational state to a global knowledge superpower (2014-2025)
        </p>
        
        <p className="text-sm text-slate-500 mb-10">
          Prepared for PMO | Cabinet Secretariat | NITI Aayog | NSCS
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button 
            size="lg"
            onClick={() => window.open('/india-governance-transformation.pdf', '_blank')}
            className="bg-gradient-to-r from-[#ff9933] to-[#e88a2a] hover:from-[#ffb366] hover:to-[#ff9933] text-[#0a0a0f] font-bold text-lg px-8 py-6 btn-shine animate-pulse-glow"
          >
            <Download className="w-5 h-5 mr-2" />
            Download Presentation
            <ChevronRight className="w-5 h-5 ml-2" />
          </Button>
          
          <Button 
            size="lg"
            variant="outline"
            onClick={() => document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-6"
          >
            <BookOpen className="w-5 h-5 mr-2" />
            Explore Content
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { value: '500+', label: 'Schemes Redesigned' },
            { value: '₹35L+ Cr', label: 'DBT Transferred' },
            { value: '900M+', label: 'Internet Users' },
            { value: '5th', label: 'Global Economy' },
          ].map((stat, index) => (
            <div key={index} className="glass rounded-xl p-4 text-center">
              <div className="text-2xl sm:text-3xl font-bold text-[#ff9933]">{stat.value}</div>
              <div className="text-xs text-slate-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-[#ff9933] rounded-full" />
        </div>
      </div>
    </section>
  );
}

// Overview Section
function OverviewSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Landmark,
      title: 'Civilizational Foundations',
      description: 'From Arthashastra to modern governance - 5,000+ years of administrative wisdom',
      color: '#ff9933'
    },
    {
      icon: Cpu,
      title: 'Digital Transformation',
      description: 'UPI, Aadhaar, DBT - World\'s most advanced digital public infrastructure',
      color: '#138808'
    },
    {
      icon: TrendingUp,
      title: 'Economic Revolution',
      description: 'From Fragile Five to Top Five economy - Unprecedented growth trajectory',
      color: '#000080'
    },
    {
      icon: Shield,
      title: 'Strategic Autonomy',
      description: 'Defense indigenization, space milestones, and global leadership',
      color: '#ff9933'
    }
  ];

  return (
    <section id="overview" ref={sectionRef} className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Badge className="mb-4 bg-[#ff9933]/10 text-[#ff9933] border-[#ff9933]/30">
            <Target className="w-3 h-3 mr-1" />
            Document Overview
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Comprehensive <span className="text-gradient">Strategic Analysis</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            This 52-slide presentation synthesizes government data, policy architecture, implementation intelligence, 
            and original intellectual framework contributions into a unified national strategic document.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className={`glass card-lift border-slate-800/50 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${feature.color}20` }}
                  >
                    <feature.icon className="w-6 h-6" style={{ color: feature.color }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// Highlights Section
function HighlightsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: Wallet,
      title: 'JAM Trinity',
      description: 'Jan Dhan + Aadhaar + Mobile = Governance Transformation',
      stats: '52+ Cr Bank Accounts | 1.39B Aadhaar | 900M+ Internet'
    },
    {
      icon: Zap,
      title: 'UPI Revolution',
      description: 'World\'s most advanced real-time payment system',
      stats: '13+ Billion Monthly Transactions | ₹20+ Lakh Cr Monthly Value'
    },
    {
      icon: Users,
      title: 'Direct Benefit Transfer',
      description: 'Eliminating intermediary corruption through technology',
      stats: '₹35+ Lakh Cr Transferred | 10+ Cr Fake Beneficiaries Removed'
    },
    {
      icon: Globe,
      title: 'Global Leadership',
      description: 'From regional actor to global shaper',
      stats: 'G20 Presidency | QUAD | Voice of Global South'
    },
    {
      icon: Lightbulb,
      title: 'Knowledge Economy',
      description: 'Transitioning from service provider to knowledge creator',
      stats: '3rd Largest Startup Ecosystem | 100+ Unicorns'
    },
    {
      icon: Award,
      title: 'Anti-Corruption Architecture',
      description: 'System-design approach to eliminating corruption',
      stats: '₹2.73+ Lakh Cr Savings | 300+ Schemes on DBT'
    }
  ];

  return (
    <section id="highlights" ref={sectionRef} className="py-24 relative">
      <div className="absolute inset-0 radial-gradient opacity-50" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Badge className="mb-4 bg-[#138808]/10 text-[#138808] border-[#138808]/30">
            <Sparkles className="w-3 h-3 mr-1" />
            Key Highlights
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Transformation <span className="text-gradient">Highlights</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Discover the groundbreaking initiatives that have redefined governance delivery and positioned India as a global leader.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <Card 
              key={index}
              className={`glass card-lift border-slate-800/50 overflow-hidden group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#ff9933] via-white to-[#138808] opacity-0 group-hover:opacity-100 transition-opacity" />
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#ff9933]/20 to-[#138808]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-[#ff9933]" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{item.description}</p>
                <div className="pt-4 border-t border-slate-800">
                  <p className="text-xs text-[#138808] font-medium">{item.stats}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// Achievements Section
function AchievementsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const achievements = [
    {
      category: 'Economic Transformation',
      items: [
        'GDP grew from $1.86T to $3.94T (5th largest economy)',
        'India emerged as the fastest-growing major economy',
        'FDI inflows crossed $70 billion annually',
        'Forex reserves reached $650+ billion'
      ]
    },
    {
      category: 'Digital Infrastructure',
      items: [
        'UPI became world\'s largest real-time payment system',
        'Aadhaar: 1.39 billion enrollments (99.9% coverage)',
        'Internet users grew from 250M to 900M+',
        'India Stack adopted by 50+ countries'
      ]
    },
    {
      category: 'Social Empowerment',
      items: [
        '52+ crore Jan Dhan bank accounts opened',
        '10+ crore LPG connections under Ujjwala',
        '3+ crore houses built under PMAY',
        'Ayushman Bharat: 55 crore beneficiaries'
      ]
    },
    {
      category: 'Global Recognition',
      items: [
        'G20 Presidency 2023 - "Vasudhaiva Kutumbakam"',
        'International Solar Alliance (100+ members)',
        'Coalition for Disaster Resilient Infrastructure',
        'Voice of Global South Summit leadership'
      ]
    }
  ];

  return (
    <section id="achievements" ref={sectionRef} className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Badge className="mb-4 bg-[#000080]/20 text-[#6b7cff] border-[#000080]/30">
            <Award className="w-3 h-3 mr-1" />
            Major Achievements
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            National <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A decade of transformative governance that has reshaped India's position on the global stage.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((section, index) => (
            <div 
              key={index}
              className={`glass rounded-2xl p-6 border border-slate-800/50 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#ff9933]" />
                {section.category}
              </h3>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3 text-slate-400 text-sm">
                    <ArrowUpRight className="w-4 h-4 text-[#138808] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Stats Section
function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: 52, suffix: '', label: 'Strategic Slides', icon: FileText },
    { value: 500, suffix: '+', label: 'Schemes Redesigned', icon: Target },
    { value: 35, suffix: 'L+ Cr', label: 'DBT Transferred', icon: Wallet },
    { value: 2.73, suffix: 'L+ Cr', label: 'Corruption Savings', icon: Shield },
    { value: 900, suffix: 'M+', label: 'Internet Users', icon: Globe },
    { value: 13, suffix: 'B+', label: 'Monthly UPI Transactions', icon: Zap },
  ];

  return (
    <section id="stats" ref={sectionRef} className="py-24 relative">
      <div className="absolute inset-0 radial-gradient opacity-50" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Badge className="mb-4 bg-[#ff9933]/10 text-[#ff9933] border-[#ff9933]/30">
            <BarChart3 className="w-3 h-3 mr-1" />
            By The Numbers
          </Badge>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Transformation in <span className="text-gradient">Numbers</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Quantifiable impact of India's governance transformation across key sectors.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`glass rounded-2xl p-6 text-center border border-slate-800/50 group hover:border-[#ff9933]/30 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ff9933]/20 to-[#138808]/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <stat.icon className="w-6 h-6 text-[#ff9933]" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#ff9933]/5 to-transparent" />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="glass rounded-3xl p-8 sm:p-12 border border-slate-800/50">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#ff9933] to-[#e88a2a] flex items-center justify-center mx-auto mb-6">
            <Download className="w-8 h-8 text-[#0a0a0f]" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Access the Complete <span className="text-gradient">Strategic Presentation</span>
          </h2>
          
          <p className="text-slate-400 mb-8 max-w-xl mx-auto">
            Download the full 52-slide presentation for comprehensive insights into India's governance transformation journey.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg"
              onClick={() => window.open('/india-governance-transformation.pdf', '_blank')}
              className="bg-gradient-to-r from-[#ff9933] to-[#e88a2a] hover:from-[#ffb366] hover:to-[#ff9933] text-[#0a0a0f] font-bold text-lg px-8 py-6 btn-shine w-full sm:w-auto"
            >
              <FileText className="w-5 h-5 mr-2" />
              View Full Presentation
              <ChevronRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
          
          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-slate-500">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#138808]" />
              52 Slides
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#138808]" />
              Strategic Analysis
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#138808]" />
              PMO Grade
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="py-12 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#ff9933] via-white to-[#138808] flex items-center justify-center">
              <Landmark className="w-5 h-5 text-[#0a0a0f]" />
            </div>
            <div>
              <span className="font-bold text-lg">
                <span className="text-[#ff9933]">Bharat</span>
                <span className="text-white">Governance</span>
              </span>
              <p className="text-xs text-slate-500">Strategic Policy Research</p>
            </div>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-slate-400">
            <a href="#overview" className="hover:text-[#ff9933] transition-colors">Overview</a>
            <a href="#highlights" className="hover:text-[#ff9933] transition-colors">Highlights</a>
            <a href="#achievements" className="hover:text-[#ff9933] transition-colors">Achievements</a>
            <a href="#stats" className="hover:text-[#ff9933] transition-colors">Stats</a>
          </div>
          
          <div className="text-sm text-slate-500">
            © 2025 Bharat Governance Research
          </div>
        </div>
        
        <Separator className="my-8 bg-slate-800/50" />
        
        <div className="text-center text-xs text-slate-600">
          <p>This presentation is an independent intellectual contribution toward strengthening India's governance architecture.</p>
          <p className="mt-2">Dedicated to Bharat's continued rise as a knowledge superpower and civilizational leader.</p>
          <p className="mt-4 text-[#138808]">Jai Hind 🇮🇳</p>
        </div>
      </div>
    </footer>
  );
}

// Main App
function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-foreground">
      <Navigation />
      <HeroSection />
      <OverviewSection />
      <HighlightsSection />
      <AchievementsSection />
      <StatsSection />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;
