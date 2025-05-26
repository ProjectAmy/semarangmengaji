import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white shadow-inner py-2 sm:py-4 mt-auto">
      <div className="max-w-6xl mx-auto text-center text-gray-500 font-medium text-sm sm:text-base">
        © {new Date().getFullYear()} <Link href="/about-us" className="text-blue-600 hover:underline">Project Amy</Link>. All rights reserved.
      </div>
    </footer>
  );
}
