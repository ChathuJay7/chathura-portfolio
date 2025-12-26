import {
  Briefcase,
  Code,
  GraduationCap,
  Terminal,
  Building,
  User,
} from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Full Stack Software Engineer
            </h3>

            <p className="text-muted-foreground">
              Experienced Software Engineer with around 3 years of hands-on
              expertise across the full Software Development Life Cycle (SDLC),
              including requirement gathering, design, development, testing,
              deployment, and maintenance. Quick to adapt to new technologies
              and domains with minimal guidance, ensuring fast learning curves
              and efficient project contributions. Proactive and dedicated
              professional, excelling in collaborative environments and
              committed to delivering scalable, high-quality software solutions.
            </p>

            <p className="text-muted-foreground">
              Architecting full-stack solutions that merge intuitive interfaces
              with scalable backend systems, emphasizing cloud-native approaches
              and sustainable development practices.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              {/* <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a> */}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Terminal className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Software Engineer</h4>
                  <p className="text-muted-foreground">
                    Aventage Labs | 2024/01 - Present
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Building className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Intern Software Engineer
                  </h4>
                  <p className="text-muted-foreground">
                    Softcodeit Solutions | 2023/03 - 2023/09
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    BSc. (sp) Computer Science & Technology
                  </h4>
                  <p className="text-muted-foreground">
                    Uva Wellassa University of Sri Lanka | 2019 – 2023
                  </p>
                  <p className="text-muted-foreground text-sm mt-1">
                    GPA: 3.18/4.00 | Second Class Lower
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
