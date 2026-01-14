import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    { icon: <FaFacebookF />, href: "https://facebook.com/" },
    { icon: <FaTwitter />, href: "https://twitter.com/" },
    { icon: <FaInstagram />, href: "https://instagram.com/" },
    { icon: <FaLinkedinIn />, href: "https://linkedin.com/" },
    { icon: <FaYoutube />, href: "https://youtube.com/" },
    { icon: <FaWhatsapp />, href: "https://wa.me/25078321787" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-7xl mx-auto px-20 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Copyright */}
        <p className="text-sm">
          © {new Date().getFullYear()} Mushroom Farm. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex gap-4">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-green-600 transition-colors text-white text-lg md:text-xl"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
