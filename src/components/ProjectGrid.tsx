import Image from "next/image";

export default function ProjectGrid() {
  // Mock project data
  const projects = [
    {
      id: 1,
      title: "Personal Portfolio",
      description: "A modern portfolio website with animations",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 2,
      title: "Task Management Dashboard",
      description: "Interactive dashboard for managing tasks",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      id: 3,
      title: "E-commerce Store",
      description: "Modern online store with product listings",
      image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <div key={project.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
          <div className="relative h-48 w-full">
            <Image 
              src={project.image}
              alt={project.title}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
            <p className="text-gray-600 text-sm">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}