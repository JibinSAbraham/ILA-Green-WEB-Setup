import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Menu,
  X,
  Leaf,
  Scale,
  Users,
  FileText,
  GraduationCap,
  Heart,
  Recycle,
  BarChart3,
  CheckCircle2,
  ClipboardList,
  Lightbulb,
  Cog,
  TrendingUp,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

import heroImage from "@assets/stock_images/professional_office__2c521617.jpg";
import schoolProgramImage from "@assets/stock_images/students_children_le_afaa148a.jpg";
import volunteerImage from "@assets/stock_images/volunteers_community_4e3ac343.jpg";
import ewasteImage from "@assets/stock_images/recycling_bins_waste_b93d8db1.jpg";

function useCountUp(end: number, duration: number = 2000, startOnView: boolean = true) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startOnView) {
      setHasStarted(true);
    }
  }, [startOnView]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, hasStarted]);

  return { count, ref };
}

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-lg border-b"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <nav className="flex items-center justify-between gap-4 h-16 md:h-20">
          <a
            href="#"
            className="flex items-center gap-2"
            data-testid="link-logo"
            aria-label="Ila Green home"
          >
            <img
              src="/Logo.png"
              alt="Ila Green"
              className="w-32 h-32 object-contain"
            />
          </a>

          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-services"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-projects"
            >
              CSR Projects
            </button>
            <button
              onClick={() => scrollToSection("why-us")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-why-us"
            >
              Why Us
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-process"
            >
              Process
            </button>
            <Button
              onClick={() => scrollToSection("services")}
              data-testid="button-contact-nav"
            >
              Get Started
            </Button>
          </div>

          <Button
            size="icon"
            variant="ghost"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="button-mobile-menu"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </nav>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 border-b">
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
              data-testid="link-services-mobile"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="block w-full text-left px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
              data-testid="link-projects-mobile"
            >
              CSR Projects
            </button>
            <button
              onClick={() => scrollToSection("why-us")}
              className="block w-full text-left px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
              data-testid="link-why-us-mobile"
            >
              Why Us
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="block w-full text-left px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-accent rounded-md transition-colors"
              data-testid="link-process-mobile"
            >
              Process
            </button>
            <Button
              className="w-full mt-2"
              onClick={() => scrollToSection("services")}
              data-testid="button-contact-mobile"
            >
              Get Started
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}

function HeroSection() {
  

  return (
    <section className="relative min-h-[500px] md:min-h-[600px] lg:min-h-[700px] flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
        <div className="max-w-3xl">
          <Badge className="mb-4 md:mb-6 bg-white/10 text-white border-white/20 backdrop-blur-md" data-testid="badge-trust">
            <Leaf className="w-3 h-3 mr-1" />
            Serving 100+ Indian Businesses
          </Badge>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-4 md:mb-6 text-white" data-testid="text-hero-headline">
            Turn Your Corporate Waste Into{" "}
            <span className="text-green-400">Measurable Impact</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-6 md:mb-8" data-testid="text-hero-subheadline">
            We help Indian businesses manage waste sustainably, execute CSR projects, 
            train employees, and document impact for compliance and reporting.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="text-lg px-8"
              onClick={() => {
                const element = document.getElementById("services");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              data-testid="button-hero-cta"
            >
              Schedule a Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 bg-white/10 text-white border-white/30 backdrop-blur-md"
              onClick={() => {
                const element = document.getElementById("services");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              data-testid="button-hero-secondary"
            >
              Explore Services
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}

function ImpactMetrics() {
  const wasteMetric = useCountUp(50000);
  const peopleMetric = useCountUp(5000);
  const companiesMetric = useCountUp(100);

  return (
    <section className="py-12 md:py-16 border-y bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div ref={wasteMetric.ref} className="text-center" data-testid="metric-waste">
            <Scale className="w-8 h-8 text-primary mx-auto mb-3" />
            <div className="text-4xl md:text-5xl font-bold text-foreground mb-1">
              {wasteMetric.count.toLocaleString()}+
            </div>
            <div className="text-sm md:text-base text-muted-foreground font-medium">
              Kg Waste Diverted
            </div>
          </div>
          
          <div ref={peopleMetric.ref} className="text-center" data-testid="metric-people">
            <Users className="w-8 h-8 text-primary mx-auto mb-3" />
            <div className="text-4xl md:text-5xl font-bold text-foreground mb-1">
              {peopleMetric.count.toLocaleString()}+
            </div>
            <div className="text-sm md:text-base text-muted-foreground font-medium">
              People Trained
            </div>
          </div>
          
          <div ref={companiesMetric.ref} className="text-center" data-testid="metric-companies">
            <Heart className="w-8 h-8 text-primary mx-auto mb-3" />
            <div className="text-4xl md:text-5xl font-bold text-foreground mb-1">
              {companiesMetric.count.toLocaleString()}+
            </div>
            <div className="text-sm md:text-base text-muted-foreground font-medium">
              Companies Served
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const services = [
    {
      icon: ClipboardList,
      title: "Waste Audits & Segregation Setup",
      description: "Comprehensive on-site assessment and implementation of effective waste segregation systems tailored to your business.",
      features: [
        "Complete waste stream analysis",
        "Custom segregation infrastructure",
        "Staff training and signage",
      ],
    },
    {
      icon: Heart,
      title: "CSR Initiative Linking",
      description: "Connect your waste management efforts with impactful CSR projects that align with your company's values.",
      features: [
        "Project identification and matching",
        "Community partnership development",
        "Brand visibility and engagement",
      ],
    },
    {
      icon: GraduationCap,
      title: "Employee Workshops & Training",
      description: "Engaging workshops that educate and motivate your workforce to embrace sustainable practices.",
      features: [
        "Interactive training sessions",
        "Behavior change programs",
        "Sustainability champions program",
      ],
    },
    {
      icon: FileText,
      title: "Impact Reporting & Compliance",
      description: "Detailed documentation and reports that meet CSR compliance requirements and showcase your impact.",
      features: [
        "Quantified impact metrics",
        "CSR compliance documentation",
        "Annual sustainability reports",
      ],
    },
  ];

  return (
    <section id="services" className="py-16 md:py-20 lg:py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" data-testid="text-services-title">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="text-services-subtitle">
            End-to-end waste management solutions designed for Indian businesses
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="p-6 md:p-8 hover-elevate transition-all duration-300"
              data-testid={`card-service-${index}`}
            >
              <service.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl md:text-2xl font-semibold mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function CSRProjectsSection() {
  const projects = [
    {
      icon: GraduationCap,
      title: "School & Community Programs",
      description: "Implementing waste segregation education and infrastructure in schools and local communities to build awareness from the ground up.",
      impact: "10,000+ students educated",
      image: schoolProgramImage,
      featured: true,
    },
    {
      icon: Users,
      title: "Employee Volunteering",
      description: "Organize meaningful clean-up drives and awareness campaigns with your team, fostering a culture of environmental responsibility.",
      impact: "500+ volunteer hours logged",
      image: volunteerImage,
      featured: false,
    },
    {
      icon: Recycle,
      title: "E-Waste & Plastic Collection",
      description: "Specialized collection initiatives for electronic waste and plastics, ensuring proper recycling and disposal channels.",
      impact: "15,000 kg collected",
      image: ewasteImage,
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-20 lg:py-24 bg-muted/30 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" data-testid="text-projects-title">
            CSR Project Ideas
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="text-projects-subtitle">
            Impactful initiatives that create lasting change in communities
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`overflow-hidden transition-all duration-300 hover:shadow-lg ${
                project.featured ? "lg:col-span-2 lg:row-span-1" : ""
              }`}
              data-testid={`card-project-${index}`}
            >
              <div className={`${project.featured ? "lg:flex" : ""}`}>
                <div className={`relative ${project.featured ? "lg:w-1/2" : ""}`}>
                  <div className="aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className={`p-6 md:p-8 ${project.featured ? "lg:w-1/2 lg:flex lg:flex-col lg:justify-center" : ""}`}>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <project.icon className="w-5 h-5 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      <BarChart3 className="w-3 h-3 mr-1" />
                      {project.impact}
                    </Badge>
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Card className="inline-block p-6 md:p-8 bg-primary text-primary-foreground border-primary-border">
            <h3 className="text-xl font-semibold mb-2">Measuring Impact</h3>
            <p className="text-primary-foreground/90 max-w-lg">
              We track and report: Kg of waste diverted, people trained, 
              carbon footprint reduction, and social & environmental benefits.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}

function WhyChooseSection() {
  const values = [
    {
      icon: CheckCircle2,
      title: "Transparent & Accountable",
      description: "Clear reporting and full visibility into every step of your sustainability journey.",
    },
    {
      icon: BarChart3,
      title: "Measurable Impact",
      description: "Quantified metrics that demonstrate real results for your CSR reporting needs.",
    },
    {
      icon: Cog,
      title: "End-to-End Execution",
      description: "From audit to implementation to reporting - we handle everything seamlessly.",
    },
    {
      icon: TrendingUp,
      title: "Professional Solutions",
      description: "Industry-leading expertise in sustainable waste management practices.",
    },
  ];

  return (
    <section id="why-us" className="py-16 md:py-20 lg:py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" data-testid="text-whyus-title">
              Why Choose Ila Green?
            </h2>
            <p className="text-lg text-muted-foreground mb-6" data-testid="text-whyus-subtitle">
              We're not just a service provider - we're your partner in creating 
              sustainable impact. Our approach combines professionalism with 
              genuine commitment to environmental and social change.
            </p>
            <Button
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              data-testid="button-whyus-cta"
            >
              Partner With Us
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {values.map((value, index) => (
              <Card
                key={value.title}
                className="p-5 md:p-6"
                data-testid={`card-value-${index}`}
              >
                <value.icon className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    {
      number: "01",
      icon: ClipboardList,
      title: "Audit",
      description: "Comprehensive assessment of your current waste streams and practices",
    },
    {
      number: "02",
      icon: Lightbulb,
      title: "Plan",
      description: "Custom strategy designed to meet your sustainability goals and CSR objectives",
    },
    {
      number: "03",
      icon: Cog,
      title: "Execute",
      description: "Professional implementation with training and infrastructure setup",
    },
    {
      number: "04",
      icon: FileText,
      title: "Report",
      description: "Detailed impact documentation for compliance and stakeholder communication",
    },
  ];

  return (
    <section id="process" className="py-16 md:py-20 lg:py-24 bg-muted/30 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" data-testid="text-process-title">
            Our Process
          </h2>
          <p className="text-lg text-muted-foreground" data-testid="text-process-subtitle">
            A proven 4-step approach to transforming your waste management
          </p>
        </div>
        
        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative" data-testid={`step-${index}`}>
                <Card className="p-6 text-center relative z-10 h-full">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg mb-4">
                    {step.number}
                  </div>
                  <step.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}



function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
                <img src="/Logo.png" alt="Ila Green" className="w-32 h-32 object-contain" />
              </a>
            <p className="text-sm text-muted-foreground max-w-md">
              Helping Indian businesses create measurable environmental and social 
              impact through sustainable waste management and CSR initiatives.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Waste Audits</li>
              <li>CSR Initiatives</li>
              <li>Employee Training</li>
              <li>Impact Reporting</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>About Us</li>
              <li>Our Process</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t text-center text-sm text-muted-foreground">
          <p data-testid="text-copyright">
            &copy; {currentYear} Ila Green. All rights reserved. Committed to a sustainable India.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ImpactMetrics />
        <ServicesSection />
        <CSRProjectsSection />
        <WhyChooseSection />
        <ProcessSection />
        
      </main>
      <Footer />
    </div>
  );
}
