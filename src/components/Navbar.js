
import React, { useState } from 'react';

function Nav() {
  const [expanded, setExpanded] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  const closeNavbar = () => {
    setExpanded(false);
    setServicesExpanded(false);
  };

  const services = [
    { name: 'Website Designing', link: '#website-designing' },
    { name: 'Website Development', link: '#website-development' },
    { name: 'Search Engine Optimization', link: '#seo' },
    { name: 'Social Media Marketing', link: '#social-media-marketing' },
    { name: 'Google Business Profile', link: '#google-business-profile' }
  ];

  return (
    <nav className="bg-primary  fixed top-0 left-0 w-full z-50">

      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">

        {/* Navbar Main Section */}
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0">
              <h1 className="text-white mx-2 sm:mx-10 px-2 py-2 text-2xl rounded-sm hover:text-gray-700 hover:bg-white">
                Weblift Solutions
              </h1>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">

            <a
              href="#home"
              className="px-3 py-2 rounded-md text-xl font-medium text-white bg-gray-900 duration-200"
            >
              Home
            </a>

            {/* Services Dropdown */}
            <div className="relative group">

              <button
                type="button"
                className="px-3 py-2 rounded-md text-xl font-medium text-gray-300 hover:text-white hover:bg-gray-700 flex items-center"
              >
                Services

                <svg
                  className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown Items */}
              <div className="absolute left-0 top-full hidden w-64 pt-2 group-hover:block group-focus-within:block">

                <div className="rounded-md bg-gray-900 shadow-lg ring-1 ring-black ring-opacity-5 py-2">

                  {services.map((service) => (
                    <a
                      key={service.name}
                      href={service.link}
                      className="block px-4 py-3 text-base text-gray-300 hover:bg-gray-700 hover:text-white duration-200"
                    >
                      {service.name}
                    </a>
                  ))}

                </div>
              </div>
            </div>

            <a
              href="#our-work"
              className="px-3 py-2 rounded-md text-xl font-medium text-gray-300 hover:text-white hover:bg-gray-700"
            >
              Our Work
            </a>

            <a
              href="#pricing-plan"
              className="px-3 py-2 rounded-md text-xl font-medium text-gray-300 hover:text-white hover:bg-gray-700"
            >
              Pricing Plan
            </a>

            <a
              href="#blog"
              className="px-3 py-2 rounded-md text-xl font-medium text-gray-300 hover:text-white hover:bg-gray-700"
            >
              Blog
            </a>

            <a
              href="#contact"
              className="px-3 py-2 rounded-md text-xl font-medium text-gray-300 hover:text-white hover:bg-gray-700"
            >
              Contact
            </a>

          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">

            <button
              onClick={toggleNavbar}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-700"
              aria-label="Toggle navigation"
              aria-expanded={expanded}
            >

              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    expanded
                      ? 'M6 18L18 6M6 6l12 12'
                      : 'M4 6h16M4 12h16M4 18h16'
                  }
                />
              </svg>

            </button>
          </div>

        </div>

        {/* Mobile Navigation */}
        {expanded && (
          <div className="md:hidden pb-4">

            <a
              href="#home"
              onClick={closeNavbar}
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900"
            >
              Home
            </a>

            {/* Mobile Services Dropdown */}
            <div>

              <button
                type="button"
                onClick={() => setServicesExpanded(!servicesExpanded)}
                className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
                aria-expanded={servicesExpanded}
              >
                Services

                <svg
                  className={`h-4 w-4 transition-transform duration-200 ${
                    servicesExpanded ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>

              </button>

              {servicesExpanded && (
                <div className="pl-5 bg-blue-950 rounded-md">

                  {services.map((service) => (
                    <a
                      key={service.name}
                      href={service.link}
                      onClick={closeNavbar}
                      className="block px-3 py-3 text-sm text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
                    >
                      {service.name}
                    </a>
                  ))}

                </div>
              )}

            </div>

            <a
              href="#our-work"
              onClick={closeNavbar}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
            >
              Our Work
            </a>

            <a
              href="#pricing-plan"
              onClick={closeNavbar}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
            >
              Pricing Plan
            </a>

            <a
              href="#blog"
              onClick={closeNavbar}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
            >
              Blog
            </a>

            <a
              href="#contact"
              onClick={closeNavbar}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700"
            >
              Contact
            </a>

          </div>
        )}

      </div>
    </nav>
  );
}

export default Nav;
