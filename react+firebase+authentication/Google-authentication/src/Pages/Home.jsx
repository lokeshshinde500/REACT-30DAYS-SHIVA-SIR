import React from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const store = useSelector((store) => store);
  console.log(store);
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      <nav className="bg-white shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center px-6">
          <a href="#" className="text-xl font-semibold text-gray-700">
            MyBrand
          </a>
          <div className="space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Home
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              About
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Services
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-20">
        <div className="container mx-auto text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to My Awesome Site
          </h1>
          <p className="text-lg md:text-2xl mb-6">
            Discover amazing content and features
          </p>
          <a
            href="#"
            className="bg-white text-indigo-600 px-6 py-3 rounded-full text-lg font-semibold"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto py-16 px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold">Our Features</h2>
          <p className="text-gray-600 mt-4">What makes us stand out</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Feature One</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Feature Two</h3>
            <p className="text-gray-600">
              Quisque vel urna eu urna aliquam auctor.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Feature Three</h3>
            <p className="text-gray-600">
              Praesent vel est a nisi cursus consequat.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 MyBrand. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
