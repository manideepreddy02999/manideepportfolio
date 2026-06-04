import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Linkedin, Mail, ChevronRight, Download } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Modern Tech-Forward Minimalism Portfolio
 * Design: Clean lines, bold typography, asymmetric layout
 * Colors: Deep charcoal (#0f0f0f) background, electric blue (#0066ff) accents
 * Typography: Poppins (bold headings), Inter (body text)
 */

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="container flex items-center justify-between py-4">
          <div className="text-xl font-bold text-primary">MDR</div>
          <div className="flex gap-6 items-center">
            <a href="#experience" className="text-sm hover:text-primary transition-colors">
              Experience
            </a>
            <a href="#projects" className="text-sm hover:text-primary transition-colors">
              Projects
            </a>
            <a href="#skills" className="text-sm hover:text-primary transition-colors">
              Skills
            </a>
            <Button size="sm" variant="outline" asChild>
              <a href="mailto:manideepreddytippana@gmail.com">Contact</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://d2xsxph8kpxj0f.cloudfront.net/310519663286889315/5MrdqZrUrWxkoUBNFUuJBx/hero-bg-BwKr7AkWpSoHTxQiMnZzAU.webp')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.15,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-0" />

        <div className="container relative z-10">
          <div className="max-w-3xl">
            <div className="mb-6 inline-block">
              <Badge variant="outline" className="border-primary text-primary">
                Backend Developer • AI/ML Enthusiast
              </Badge>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Tippana Mani Deep Reddy
            </h1>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Aspiring Backend Developer specializing in Python and FastAPI. Building scalable RESTful APIs and
              intelligent systems that solve complex data challenges. Passionate about clean code, system design, and
              applying AI/ML to modern software ecosystems.
            </p>

            <div className="flex gap-4 mb-12">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                <a href="#projects">
                  View My Work <ChevronRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/resume.pdf" download>
                  <Download className="mr-2 w-4 h-4" /> Download Resume
                </a>
              </Button>
            </div>

            <div className="flex gap-6 text-muted-foreground">
              <a href="https://linkedin.com/in/tippanamanideepreddy" className="hover:text-primary transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://github.com/manideepreddy02999" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="mailto:manideepreddytippana@gmail.com" className="hover:text-primary transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="container">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-bold mb-12">Professional Experience</h2>

            <div className="space-y-8">
              <Card className="bg-card border-border p-8 hover:border-primary/50 transition-colors">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-primary">Web Developer Intern</h3>
                    <p className="text-lg text-muted-foreground">Codevocado</p>
                  </div>
                  <span className="text-sm text-muted-foreground">Sept 2025 – Dec 2025</span>
                </div>

                <p className="text-muted-foreground mb-6">Enterprise Resource Planning (ERP) System</p>

                <ul className="space-y-3 text-foreground">
                  <li className="flex gap-3">
                    <span className="text-primary mt-1">▸</span>
                    <span>
                      Engineered a scalable Backend Architecture for an Enterprise Resource Planning (ERP) system using
                      Python and Flask, implementing JWT authentication and secure RESTful endpoints.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary mt-1">▸</span>
                    <span>
                      Automated PDF certificate and invoice generation workflows, reducing manual processing time by 70%
                      and increasing operational throughput by 40%.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-primary mt-1">▸</span>
                    <span>
                      Participated in regular code reviews and followed strict coding standards to ensure delivery of
                      clean, maintainable, and scalable code for 100+ users.
                    </span>
                  </li>
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {["Python", "Flask", "MySQL", "JWT", "REST APIs", "Git"].map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-secondary/50 text-foreground">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <Card className="bg-card border-border p-8 hover:border-primary/50 transition-all hover:shadow-lg group">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-primary mb-2">Mutate AI</h3>
                <p className="text-sm text-muted-foreground">Conversational AI Chatbot</p>
              </div>

              <p className="text-foreground mb-6 leading-relaxed">
                Engineered a chatbot using Python, FastAPI, and LangGraph featuring a complex state management system
                for seamless conversation exchange.
              </p>

              <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Dual-memory architecture with ChromaDB and PostgreSQL</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Vector-based search with cosine similarity embeddings</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Optimized information retrieval for multi-turn dialogues</span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-2 mb-6">
                {["Python", "FastAPI", "LangGraph", "ChromaDB", "PostgreSQL"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-secondary/50 text-foreground text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>

              <Button variant="ghost" className="text-primary hover:bg-primary/10 p-0 h-auto">
                View Project <ExternalLink className="ml-2 w-4 h-4" />
              </Button>
            </Card>

            {/* Project 2 */}
            <Card className="bg-card border-border p-8 hover:border-primary/50 transition-all hover:shadow-lg group">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-primary mb-2">Calorie Burn Prediction</h3>
                <p className="text-sm text-muted-foreground">AI-based Fitness Tracking Web Application</p>
              </div>

              <p className="text-foreground mb-6 leading-relaxed">
                Developed a real-time calorie burn prediction engine utilizing computer vision, effectively replacing
                wearable fitness trackers and reducing user costs by up to 60%.
              </p>

              <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Role-Based Access Control (RBAC) for Admin and User management</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Optimized database schemas reducing latency by 30%</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Computer vision integration for real-time analysis</span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-2 mb-6">
                {["Python", "React", "MySQL", "Computer Vision", "RBAC"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-secondary/50 text-foreground text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>

              <Button variant="ghost" className="text-primary hover:bg-primary/10 p-0 h-auto">
                View Project <ExternalLink className="ml-2 w-4 h-4" />
              </Button>
            </Card>

            {/* Project 3 */}
            <Card className="bg-card border-border p-8 hover:border-primary/50 transition-all hover:shadow-lg group">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-primary mb-2">Question Papers Hub</h3>
                <p className="text-sm text-muted-foreground">Generative AI Document Management System</p>
              </div>

              <p className="text-foreground mb-6 leading-relaxed">
                Engineered a Generative AI backend using Python to analyze PDF documents, utilizing Natural Language
                Processing to identify complex patterns and extract key insights.
              </p>

              <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>NLP-powered document analysis and pattern recognition</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Robust REST APIs for seamless frontend integration</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Reduced document research time by 90%</span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-2 mb-6">
                {["Python", "NLP", "Generative AI", "REST APIs", "PDF Processing"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-secondary/50 text-foreground text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>

              <Button variant="ghost" className="text-primary hover:bg-primary/10 p-0 h-auto">
                View Project <ExternalLink className="ml-2 w-4 h-4" />
              </Button>
            </Card>

            {/* Project 4 */}
            <Card className="bg-card border-border p-8 hover:border-primary/50 transition-all hover:shadow-lg group">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-primary mb-2">Dress Me Up</h3>
                <p className="text-sm text-muted-foreground">Smart Fashion Recommendation Engine</p>
              </div>

              <p className="text-foreground mb-6 leading-relaxed">
                Built a smart fashion e-commerce platform with virtual dress try-on using MediaPipe, weather-appropriate
                and event-based recommendations, accelerating dress selection by 50%.
              </p>

              <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Virtual try-on using MediaPipe technology</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Skin-tone-based color matching improving conversions by 40%</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>Intelligent recommendation engine with contextual awareness</span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-2 mb-6">
                {["Python", "React", "MySQL", "MediaPipe", "ML"].map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-secondary/50 text-foreground text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>

              <Button variant="ghost" className="text-primary hover:bg-primary/10 p-0 h-auto">
                View Project <ExternalLink className="ml-2 w-4 h-4" />
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12">Technical Skills</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-bold text-primary mb-4">Backend & Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Python",
                  "Flask",
                  "FastAPI",
                  "RESTful APIs",
                  "OOP",
                  "Asynchronous Programming",
                  "SQLAlchemy",
                ].map((skill) => (
                  <Badge key={skill} className="bg-primary/20 text-primary hover:bg-primary/30">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-primary mb-4">Databases & DevOps</h3>
              <div className="flex flex-wrap gap-2">
                {["PostgreSQL", "MySQL", "Docker", "Git/GitHub", "Nginx", "Gunicorn", "CI/CD Pipelines"].map(
                  (skill) => (
                    <Badge key={skill} className="bg-primary/20 text-primary hover:bg-primary/30">
                      {skill}
                    </Badge>
                  )
                )}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-primary mb-4">AI & Machine Learning</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "LangGraph",
                  "OpenAI API",
                  "NLP",
                  "ChromaDB",
                  "Vector Databases",
                  "Embeddings",
                  "Generative AI",
                ].map((skill) => (
                  <Badge key={skill} className="bg-primary/20 text-primary hover:bg-primary/30">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-primary mb-4">Frontend & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {["React.js", "JavaScript (ES6+)", "Tailwind CSS", "Agile", "Scrum", "System Design", "Code Reviews"].map(
                  (skill) => (
                    <Badge key={skill} className="bg-primary/20 text-primary hover:bg-primary/30">
                      {skill}
                    </Badge>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Skills Visual */}
          <div className="mt-16 p-8 bg-card border border-border rounded-lg">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663286889315/5MrdqZrUrWxkoUBNFUuJBx/skills-visual-MXcKCp9z8hRPRoUZJdzLWj.webp"
              alt="Skills visualization"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Education Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-4xl font-bold mb-12">Education & Certifications</h2>

          <div className="space-y-8 max-w-3xl">
            <Card className="bg-card border-border p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-primary">B.Tech. Computer Science Engineering</h3>
                  <p className="text-lg text-muted-foreground">Specialization: AI & ML</p>
                </div>
                <span className="text-sm text-muted-foreground">2022 – 2026</span>
              </div>
              <p className="text-foreground mb-2">Swami Vivekananda Institute of Technology, Secunderabad</p>
              <p className="text-muted-foreground">CGPA: 8.20/10</p>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-card border-border p-6">
                <h3 className="font-bold text-primary mb-2">Senior Secondary</h3>
                <p className="text-muted-foreground mb-2">TSBIE Board</p>
                <p className="text-foreground">95.7%</p>
              </Card>

              <Card className="bg-card border-border p-6">
                <h3 className="font-bold text-primary mb-2">Secondary</h3>
                <p className="text-muted-foreground mb-2">SSC Board</p>
                <p className="text-foreground">9.8/10</p>
              </Card>
            </div>

            <div>
              <h3 className="text-xl font-bold text-primary mb-4">Certifications</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-foreground">Udemy: Entry-Level Python Programmer</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-foreground">Udemy: Associate in Python Programming</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary mt-1">✓</span>
                  <span className="text-foreground">
                    Galaxy Institute of Information Technology: Diploma in Computer Application and Programming (D-CAP)
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold mb-6">Let's Build Something Great</h2>
            <p className="text-xl text-muted-foreground mb-8">
              I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                <a href="mailto:manideepreddytippana@gmail.com">
                  Get In Touch
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  View Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-12">
        <div className="container">
          <div className="flex justify-between items-center">
            <p className="text-muted-foreground">© 2026 Tippana Mani Deep Reddy. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="https://linkedin.com/in/tippanamanideepreddy" className="text-muted-foreground hover:text-primary">
                LinkedIn
              </a>
              <a href="https://github.com/manideepreddy02999" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                GitHub
              </a>
              <a href="mailto:manideepreddytippana@gmail.com" className="text-muted-foreground hover:text-primary">
                Email
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
