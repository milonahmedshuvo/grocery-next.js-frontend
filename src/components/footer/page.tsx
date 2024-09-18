

const FooterPage = () => {
  return (
    <footer className="bg-[#3e3b52] text-white py-20 mt-10">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Section 1: About */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p className="text-sm text-gray-400">
            We are a company dedicated to providing the best products and services to our customers. Learn more about our mission and values.
          </p>
          <img className="mt-2" src="https://ebangladesh.com/_ipx/_/images/get_it_on_google_play.png" alt="" />
        </div>

        {/* Section 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="text-sm text-gray-400">
            <li className="mb-2">
              <a href="#" className="hover:text-gray-200">Home</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-200">Services</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-200">About</a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:text-gray-200">Contact</a>
            </li>
          </ul>
        </div>

        {/* Section 3: Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">


            <img src="https://ebangladesh.com/_ipx/_/images/2_lines.webp" alt="" />

            {/* <a href="#" className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="..."></path></svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="..."></path></svg>
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="..."></path></svg>
            </a> */}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-900 pt-4 text-center text-sm text-gray-400">
        &copy; 2024 Your Company. All rights reserved.
      </div>
    </div>
  </footer>
  )
}

export default FooterPage;