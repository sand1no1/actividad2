import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="w-full px-8 py-4 flex items-center justify-between bg-blue-600 shadow-sm">
      <div className="flex items-center gap-8">
        <div className="flex gap-6">
          <Link href="/" className="text-white hover:text-gray-200">
            Home
          </Link>
          <Link href="/page1" className="text-white hover:text-gray-200">
            Page 1
          </Link>
          <Link href="/page2" className="text-white hover:text-gray-200">
            Page 2
          </Link>
        </div>
      </div>
    </nav>
  );
} 