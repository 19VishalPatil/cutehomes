import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Logo from "../navbar/Logo";

export default function Footer() {
  return (
    <footer className="border-t bg-slate-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Logo />
            </div>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className=" font-semibold text-lg mb-4 uppercase tracking-wider">
              Customer Service
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className=" hover:text-blue-400 transition-colors duration-200 text-sm"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" hover:text-blue-400 transition-colors duration-200 text-sm"
                >
                  Track Order
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" hover:text-blue-400 transition-colors duration-200 text-sm"
                >
                  Return Order
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" hover:text-blue-400 transition-colors duration-200 text-sm"
                >
                  Cancel Order
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4 uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className=" hover:text-blue-400 transition-colors duration-200 text-sm"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" hover:text-blue-400 transition-colors duration-200 text-sm"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" hover:text-blue-400 transition-colors duration-200 text-sm"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Connect With Us & Keep Up To Date */}
          <div className="space-y-8">
            {/* Social Media */}
            <div>
              <h3 className="font-semibold text-lg mb-4 uppercase tracking-wider">
                Connect With Us
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <FaFacebookF className="text-blue-500 text-lg" />
                  <span className="text-sm">4.7M People like this</span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaInstagram className="text-pink-500 text-lg" />
                  <span className="text-sm">1M People like this</span>
                </div>
                {/* <div className="flex items-center space-x-4 mt-3">
                  <a
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  >
                    <FaTwitter className="text-lg" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-red-400 transition-colors duration-200"
                  >
                    <FaPinterestP className="text-lg" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-yellow-400 transition-colors duration-200"
                  >
                    <FaSnapchatGhost className="text-lg" />
                  </a>
                  <a
                    href="#"
                    className="text-gray-400 hover: transition-colors duration-200"
                  >
                    <FaApple className="text-lg" />
                  </a>
                </div> */}
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-blue-400 font-semibold text-lg mb-4 uppercase tracking-wider">
                Keep Up To Date
              </h3>
              <form
                // onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-2"
              >
                <Input
                  type="email"
                  placeholder="Enter Email Id:"
                  //   value={email}
                  //   onChange={(e) => setEmail(e.target.value)}
                  className="bg-slate-800 border-slate-700 text-white placeholder:text-gray-400 focus:border-blue-400 focus:ring-blue-400"
                />
                <Button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 whitespace-nowrap"
                >
                  SUBSCRIBE
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="text-center text-sm">
            © 2025 cute homes. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
