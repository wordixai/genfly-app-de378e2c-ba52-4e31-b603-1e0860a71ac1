import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-transparent py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="relative h-8 w-8 mr-2">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500 to-orange-500 rounded-md"></div>
                <div className="absolute inset-[2px] bg-white rounded-[4px]"></div>
              </div>
              <span className="text-xl font-bold">Lovable</span>
            </Link>
            <div className="hidden md:flex ml-10 space-x-8">
              <Link href="/community" className="text-gray-800 hover:text-gray-600">
                Community
              </Link>
              <Link href="/teams" className="text-gray-800 hover:text-gray-600">
                Teams
              </Link>
              <Link href="/learn" className="text-gray-800 hover:text-gray-600">
                Learn
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/login" className="text-gray-800 hover:text-gray-600 px-3 py-2">
              Log in
            </Link>
            <Link href="/signup" className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}