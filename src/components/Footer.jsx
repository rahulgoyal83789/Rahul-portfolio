import { FiGithub , FiLinkedin } from 'react-icons/fi';
import { BsTwitterX } from "react-icons/bs";
const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-6 mt-40">
        <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center">
                {/* Logo and description */}
                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-200 bg-clip-text text-transparent">_rahul.devlogs</h2>
                {/* Scroll Links */}
                <div>
                    <h3 className="text-xl font-semibold mb-4 text-purple-200">
                        Connect
                    </h3>
                    <div className="flex space-x-4">
                        <a href="https://github.com/rahulgoyal83789" className="text-gray-700 hover:text-violet-400 transition-colors">
                            <FiGithub  className='w-5 h-5'/>
                        </a>
                        <a href="https://linkedin.com/in/rahulgoyal83789" className="text-gray-700 hover:text-violet-400 transition-colors">
                            <FiLinkedin className='w-5 h-5'/>
                        </a>
                        <a href="https://x.com/rahulgoyal83789" className="text-gray-700 hover:text-violet-400 transition-colors">
                            <BsTwitterX className='w-5 h-5'/>
                        </a>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} Rahul Goyal. All rights reserved.
                </p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a href="#" className='text-gray-500 hover:text-white text-sm transition-colors'>Privacy Policy</a>
                    <a href="#" className='text-gray-500 hover:text-white text-sm transition-colors'>Terms of Service</a>
                    <a href="#" className='text-gray-500 hover:text-white text-sm transition-colors'>Cookie Policy</a>
                </div>
            </div>
        </div>
    </footer>
  )
}
export default Footer