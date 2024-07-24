import Image from 'next/image';
import { FaMapMarkerAlt, FaPhone, FaClock, FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-transparent opacity-90"></div>
      <div className="relative bg-cover bg-center" style={{ backgroundImage: "url('/footerbg.jpg')" }}>
        <div className="py-12 px-4 lg:px-20">
          <div className="flex flex-col lg:flex-row justify-between space-y-8 lg:space-y-0 border-b border-gray-500 pb-8">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-900 p-4 rounded-lg">
                <FaMapMarkerAlt className="text-white text-5xl" />
              </div>
              <div>
                <h3 className="text-white text-lg font-bold">Address</h3>
                <p className="text-white">123 ABC Street,</p>
                <p className="text-white">9534, United States</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-blue-900 p-4 rounded-lg">
                <FaPhone className="text-white text-5xl" />
              </div>
              <div>
                <h3 className="text-white text-lg font-bold">Contact</h3>
                <p className="text-white">email@example.com</p>
                <p className="text-white">+91 987654321</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="bg-blue-900 p-4 rounded-lg">
                <FaClock className="text-white text-5xl" />
              </div>
              <div>
                <h3 className="text-white text-lg font-bold">Hours</h3>
                <p className="text-white">Mon-Fri: 9am - 5pm</p>
                <p className="text-white">Sat-Sun: Closed</p>
              </div>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-start">
              <div className="flex items-center space-x-4 mb-4">
              <Image src="/logo.png" alt="Company Logo" width={70} height={70} />
                <Image src="/CleanOLogo.png" alt="CleanOLogo" width={120} height={120} />
              </div>
              <p className="text-white mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
              </p>
              <div className="flex space-x-4">

                
                <div className="bg-white p-2 rounded-lg">
                  <a href="https://www.facebook.com" className="hover:text-blue-700">
                    <FaFacebook className="text-gray-900 text-2xl cursor-pointer" />
                  </a>
                </div>
                <div className="bg-white p-2 rounded-lg">
                  <a href="https://www.twitter.com" className="hover:text-blue-700">
                    <FaTwitter className="text-gray-900 text-2xl cursor-pointer" />
                  </a>
                </div>
                <div className="bg-white p-2 rounded-lg">
                  <a href="https://www.linkedin.com" className="hover:text-blue-700">
                    <FaLinkedin className="text-gray-900 text-2xl cursor-pointer" />
                  </a>
                </div>
                <div className="bg-white p-2 rounded-lg">
                  <a href="https://www.whatsapp.com" className="hover:text-blue-700">
                    <FaWhatsapp className="text-gray-900 text-2xl cursor-pointer" />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-white text-xl font-bold">Quick Links</h3>
              <div className="relative mt-1 mb-4">
                <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-transparent rounded-full"></div>
              </div>
              <ul className="space-y-3">
                <li className="text-white hover:text-blue-600 flex items-center space-x-2 cursor-pointer">
                  <span className="text-blue-600">&gt;</span>
                  <span>About Us</span>
                </li>
                <li className="text-white hover:text-blue-600 flex items-center space-x-2 cursor-pointer">
                  <span className="text-blue-600">&gt;</span>
                  <span>Terms of Use</span>
                </li>
                <li className="text-white hover:text-blue-600 flex items-center space-x-2 cursor-pointer">
                  <span className="text-blue-600">&gt;</span>
                  <span>Our Services</span>
                </li>
                <li className="text-white hover:text-blue-600 flex items-center space-x-2 cursor-pointer">
                  <span className="text-blue-600">&gt;</span>
                  <span>Help & FAQs</span>
                </li>
                <li className="text-white hover:text-blue-600 flex items-center space-x-2 cursor-pointer">
                  <span className="text-blue-600">&gt;</span>
                  <span>Blog</span>
                </li>
                <li className="text-white hover:text-blue-600 flex items-center space-x-2 cursor-pointer">
                  <span className="text-blue-600">&gt;</span>
                  <span>Contact Us</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-xl font-bold">Our Services</h3>
              <div className="relative mt-1 mb-4">
                <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-transparent rounded-full"></div>
              </div>
              <ul className="space-y-3">
                <li className="text-white hover:text-blue-600 flex items-center space-x-2 cursor-pointer">
                  <span className="text-blue-600">&gt;</span>
                  <span>Home Cleaning</span>
                </li>
                <li className="text-white hover:text-blue-600 flex items-center space-x-2 cursor-pointer">
                  <span className="text-blue-600">&gt;</span>
                  <span>Office Cleaning</span>
                </li>
                <li className="text-white hover:text-blue-600 flex items-center space-x-2 cursor-pointer">
                  <span className="text-blue-600">&gt;</span>
                  <span>Kitchen Cleaning</span>
                </li>
                <li className="text-white hover:text-blue-600 flex items-center space-x-2 cursor-pointer">
                  <span className="text-blue-600">&gt;</span>
                  <span>Window Cleaning</span>
                </li>
                <li className="text-white hover:text-blue-600 flex items-center space-x-2 cursor-pointer">
                  <span className="text-blue-600">&gt;</span>
                  <span>Bathroom Cleaning</span>
                </li>
                <li className="text-white hover:text-blue-600 flex items-center space-x-2 cursor-pointer">
                  <span className="text-blue-600">&gt;</span>
                  <span>Wall Cleaning</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-xl font-bold">Subscribe Now</h3>
              <div className="relative mt-1 mb-5">
                <div className="w-16 h-1 bg-gradient-to-r from-blue-600 to-transparent rounded-full"></div>
              </div>
              <p className="text-white mb-5">Subscribe to our Newsletter to get our latest updates & news.</p>
              <div className="flex items-center mb-5">
                <input 
                  type="email" 
                  placeholder="Enter Email" 
                  className="p-3 w-full rounded-l-lg focus:outline-none"
                />
                <button className="p-3 bg-blue-600 text-white rounded-r-lg hover:bg-green-600 cursor-pointer">
                  Submit
                </button>
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="terms" className="mr-2 cursor-pointer"  />
                <label htmlFor="terms" className="text-white">I agree with the terms & conditions</label>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black text-white text-center py-6">
          <p>
            Copyright &copy; 2024 <a href="/" className="text-blue-500 hover:underline">Cleano</a>. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
