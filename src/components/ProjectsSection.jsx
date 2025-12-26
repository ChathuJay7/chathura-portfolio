import {ArrowRight, ExternalLink, Github, Youtube} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Travel Diaries",
    description:
      "Social platform for travelers to share experiences with photos and engage with community posts.",
    image: "src/assets/projects/travel-diaries.png",
    tags: [
      "Next.js",
      "Node.js",
      "TailwindCSS",
      "MongoDB",
      "Google Auth",
      "AWS S3",
    ],
    githubUrl: "https://github.com/ChathuJay7/nextjs-travel-diaries",
  },
  {
    id: 2,
    title: "Library Management System",
    description:
      "Desktop library management system with role-based access control, book management, and borrowing records.",
    image: "src/assets/projects/library-management-system.png",
    tags: ["Java", "JavaFX", "Scene builder", "MySQL", "Hibernate"],
    demoUrl: "https://www.youtube.com/watch?v=hj72mhjSJ6M",
    githubUrl: "https://github.com/ChathuJay7/Library_Management_System",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description:
      "E-commerce platform with authentication, payment processing, and live chat capabilities.",
    image: "src/assets/projects/e-commerce.png",
    tags: ["NestJS", "React", "Socket.io", "Microservices", "AWS S3", "Stripe"],
    githubUrl:
      "https://github.com/ChathuJay7/Ecommerce-webiste-with-realtime-chat-application",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project?.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Youtube size={20} />
                      </a>
                    )}

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/ChathuJay7"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
