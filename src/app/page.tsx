import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectCategories from "@/components/ProjectCategories";
import ProjectGrid from "@/components/ProjectGrid";

export default function Home() {
  return (
    <main className="min-h-screen gradient-background">
      <Navbar />
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-white rounded-3xl shadow-lg p-8 mt-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">From the Community</h2>
            <a href="#" className="text-sm text-gray-600 hover:underline">View All</a>
          </div>
          <ProjectCategories />
          <ProjectGrid />
        </div>
      </div>
    </main>
  );
}