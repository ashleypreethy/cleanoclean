import Image from "next/image";
import Link from "next/link";

const TopNavbar = () => {
  return (
    <nav className="bg-slate-950 flex items-center px-5 relative z-30 py-2 border-b">
      <div className="hidden lg:flex items-center space-x-2">
        <Image src="/phone.svg" alt="Phone" width={16} height={16} />
        <h2 className="text-sm text-white ">
          Phone: <a href="tel:+91987654321" className="text-white hover:text-blue-700">+91 987654321</a>
        </h2>
        <div className="h-6 border-l border-gray-400 mx-2"></div>
        <Image src="/mail.svg" alt="Mail" width={16} height={16} />
        <h2 className="text-sm text-white">
          Email: <a href="mailto:example@example.com" className="text-white hover:text-blue-700">example@example.com</a>
        </h2>
      </div>
      <div className="flex flex-1 justify-center lg:justify-end items-center space-x-4">
        <select className="hidden sm:block bg-inherit text-white text-md p-3 rounded focus:outline-none hover:text-blue-700">
          <option className="bg-white text-black" value="en">English</option>
          <option className="bg-white text-black" value="es">Español</option>
          <option className="bg-white text-black" value="fr">Français</option>
          <option className="bg-white text-black" value="de">Deutsch</option>
          <option className="bg-white text-black" value="zh">中文</option>
        </select>
        <div className="flex space-x-3">
          <a href="https://www.facebook.com" className="hover:text-blue-700">
            <Image src="/facebook.svg" alt="Facebook" width={16} height={16} className="cursor-pointer" />
          </a>
          <a href="https://www.twitter.com" className="hover:text-blue-700">
            <Image src="/twitter.svg" alt="Twitter" width={16} height={16} className="cursor-pointer" />
          </a>
          <a href="https://www.instagram.com" className="hover:text-blue-700">
            <Image src="/instagram.svg" alt="Instagram" width={16} height={16} className="cursor-pointer" />
          </a>
          <a href="https://www.linkedin.com" className="hover:text-blue-700">
            <Image src="/linkedin.svg" alt="LinkedIn" width={16} height={16} className="cursor-pointer" />
          </a>
          <a href="https://www.youtube.com" className="hover:text-blue-700">
            <Image src="/youtube.svg" alt="Youtube" width={16} height={16} className="cursor-pointer" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default TopNavbar;
