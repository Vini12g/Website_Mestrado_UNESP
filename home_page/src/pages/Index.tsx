
import { useState, useRef } from "react";
import { Play, Pause, Users, Microscope, Target, Mail, Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isVideoPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsVideoPlaying(!isVideoPlaying);
    }
  };

  const researchAreas = [
    {
      icon: <Microscope className="w-8 h-8 text-blue-400" />,
      title: "Material Science Innovation",
      description: "Advanced polymer matrix composites with embedded healing agents that activate upon damage detection."
    },
    {
      icon: <Target className="w-8 h-8 text-blue-400" />,
      title: "Damage Detection Systems",
      description: "Real-time monitoring using embedded sensors and AI-driven analysis for predictive maintenance."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-400" />,
      title: "Aerospace Applications",
      description: "Collaborative research with leading aerospace manufacturers for next-generation aircraft materials."
    }
  ];

  const teamMembers = [
    {
      name: "Maria Odila Hilário Cioffi",
      role: "Research Advisor",
      specialty: "Composite Materials & RTM Processing"
    },
    {
      name: "Luis Rogério de Oliveira Hein",
      role: "Research Co-Advisor",
      specialty: "Microscopy & Digital Image Analysis"
    },
    {
      name: "André Vinicius Guimarães",
      role: "Master Student Researcher",
      specialty: "Materials Engineering & Computational Modeling"
    } 
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Video Background */}
      <div className="fixed inset-0 z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          onLoadedData={() => setIsVideoPlaying(true)}
        >
          <source 
            src="/Video/plane_02.mp4" 
            type="video/mp4" 
          />
          {/* Fallback for browsers that don't support video */}
          <div className="w-full h-full bg-gradient-to-br from-blue-900 via-slate-800 to-gray-900"></div>
        </video>
        
        {/* Video Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-slate-900/80 to-gray-900/90"></div>
        
        {/* Video Controls */}
        <button
          onClick={toggleVideo}
          className="absolute bottom-6 right-6 z-10 bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-all duration-300"
        >
          {isVideoPlaying ? (
            <Pause className="w-6 h-6 text-white" />
          ) : (
            <Play className="w-6 h-6 text-white" />
          )}
        </button>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-blue-300 bg-clip-text text-transparent animate-fade-in">
              Self-Repairing Composite Materials
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed animate-fade-in">
              Pioneering the future of aerospace engineering through intelligent materials that heal themselves, ensuring safer and more efficient flight operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                Explore Research
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg">
                Contact Team
              </Button>
            </div>
          </div>
        </section>

        {/* Research Overview */}
        <section className="py-20 px-4 bg-gradient-to-b from-transparent to-gray-900/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Research Initiative
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Advanced polymer matrix composites with embedded healing agents that are activated after damage occurs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {researchAreas.map((area, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <div className="flex items-center justify-center mb-4">
                      {area.icon}
                    </div>
                    <CardTitle className="text-white text-xl text-center">
                      {area.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-300 text-center leading-relaxed">
                      {area.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Research Methodology */}
        <section className="py-20 px-4 bg-gray-900/80 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  Our Methodology
                </h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-400 pl-6">
                    <h4 className="text-xl font-semibold text-white mb-2">Phase 1: Manufacturing and Structural Characterization</h4>
                    <p className="text-gray-300">
                      - Materials Processing: Fabrication of CFRP/epoxy laminates via Resin Transfer Molding (RTM), both with and without 5% encapsulated epoxy-mercaptan self-healing agents.
                    </p>
                    <p className="text-gray-300">

                      - Physical and Microstructural Characterization: Analysis using optical, electron, and ultrasonic microscopy to investigate microcapsule dispersion, fracture morphology, and mapping of damaged regions.
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-6">
                    <h4 className="text-xl font-semibold text-white mb-2">Phase 2: Mechanical Testing and Self-Healing Evaluation</h4>
                    <p className="text-gray-300">
                      - Experimental Assessment: Execution of mode II interlaminar fracture toughness tests (ENF – ASTM D7905) to compare performance, delamination resistance, and self-healing efficiency between conventional and self-healing laminates.
                    </p>
                     <p className="text-gray-300">
                      - Damage Monitoring: Quantitative analysis of crack propagation and healing efficiency via digital image analysis and micro-computed tomography, enabling measurement of fracture resistance restoration after damage.
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-6">
                    <h4 className="text-xl font-semibold text-white mb-2">Phase 3: Advanced Computational Analysis and Prediction</h4>
                    <p className="text-gray-300">
                      - Image Processing: Acquisition, segmentation, and feature extraction from fracture images using computer vision techniques (OpenCV/Python), correlating fracture patterns with mechanical performance.



                    </p>
                    <p className="text-gray-300">
                      - Structural Simulation and Multiscale Modeling: Finite Element Method (FEM) simulations using open-source software to predict crack initiation/propagation and validate self-healing efficiency under realistic loading scenarios.
                    </p>
                    <p className="text-gray-300">
                      - Machine Learning and Deep Learning: Application of supervised algorithms and convolutional neural networks (CNNs) to predict key properties (e.g., delamination resistance) and classify damage patterns, accelerating the correlation between experimental, microstructural, and computational data.
                    </p>
                    <p className="text-gray-300">
                      - Experimental-Computational Integration: Convergence of experimental results, numerical modeling, and AI-based predictions to optimize formulations and develop open-source pipelines for intelligent damage monitoring.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
                <h4 className="text-2xl font-bold text-white mb-6">Project Timeline</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Materials Research and Manufacturing </span>
                    <span className="text-blue-400 font-semibold">2025-2025</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full w-3/4"></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Experimental Evaluation </span>
                    <span className="text-blue-400 font-semibold">2025-2026</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full w-1/2"></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Computational Modeling and Predictive Analysis</span>
                    <span className="text-blue-400 font-semibold">2026-2027</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full w-1/4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Research Team
              </h3>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Leading experts in materials science, aerospace engineering, and smart sensor technology.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-12 h-12 text-white" />
                    </div>
                    <CardTitle className="text-white text-xl">
                      {member.name}
                    </CardTitle>
                    <CardDescription className="text-blue-300 font-semibold">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-300">{member.specialty}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 px-4 bg-gradient-to-t from-gray-900 to-transparent">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Get Involved
            </h3>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Get Involved Interested in collaborating or learning more about our research? We welcome partnerships with industry and academic institutions
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 text-blue-400 mb-4" />
                <h4 className="text-white font-semibold mb-2">Email</h4>
                <p className="text-gray-300">andre.guimaraes@unesp.br</p>
              </div>
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 text-blue-400 mb-4" />
                <h4 className="text-white font-semibold mb-2">Phone</h4>
                <p className="text-gray-300">+55 (12) 99195-5240</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 text-blue-400 mb-4" />
                <h4 className="text-white font-semibold mb-2">Location</h4>
                <p className="text-gray-300">Unesp - Faculty of Engineering and Sciences (FEG)</p>
              </div>
            </div>
            
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
              Contact Research Team
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 px-4 bg-gray-900/95 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-gray-400 mb-4">
              © 2024 Self-Repairing Composite Materials Research Initiative
            </p>
            <p className="text-gray-500 text-sm">
              Advancing aerospace safety through intelligent material science
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
