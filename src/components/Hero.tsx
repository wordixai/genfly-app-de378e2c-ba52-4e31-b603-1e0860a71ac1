import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Build something <span className="relative">
          <span className="relative z-10">Lovable</span>
          <span className="absolute -top-1 -right-1 h-8 w-8 bg-gradient-to-br from-pink-500 to-orange-500 rounded-md -z-0"></span>
        </span>
      </h1>
      <p className="text-xl mb-12">
        Idea to app in seconds, with your personal full stack engineer
      </p>
      
      <div className="bg-white rounded-xl shadow-lg p-4 max-w-3xl mx-auto">
        <div className="min-h-24 mb-4">
          <textarea 
            placeholder="Ask Lovable to create" 
            className="w-full h-full p-2 border-none outline-none resize-none text-gray-800"
            rows={3}
          />
        </div>
        <div className="flex justify-between items-center">
          <button className="flex items-center text-gray-600 hover:text-gray-800">
            <span className="mr-1">Attach</span>
          </button>
          <div className="flex items-center space-x-2">
            <span className="text-gray-600">Public</span>
            <button className="bg-gray-200 rounded-full p-1">
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </div>
      
      <div className="flex flex-wrap justify-center gap-2 mt-6">
        <button className="bg-white rounded-full px-4 py-2 text-sm flex items-center gap-2 shadow-sm hover:shadow">
          <span className="text-gray-600">Recharts dashboard</span>
        </button>
        <button className="bg-white rounded-full px-4 py-2 text-sm flex items-center gap-2 shadow-sm hover:shadow">
          <span className="text-gray-600">Personal website</span>
        </button>
        <button className="bg-white rounded-full px-4 py-2 text-sm flex items-center gap-2 shadow-sm hover:shadow">
          <span className="text-gray-600">File uploader</span>
        </button>
        <button className="bg-white rounded-full px-4 py-2 text-sm flex items-center gap-2 shadow-sm hover:shadow">
          <span className="text-gray-600">Task manager</span>
        </button>
      </div>
    </div>
  );
}