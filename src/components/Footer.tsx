import { Settings } from "./Settings";

interface FooterProps {
  className?: string;
}

function Footer({ className }: FooterProps) {
  return (
    <div className={`bg-google-gray-100 h-[10%] ${className}`}>
      <div className="w-full h-1/2 flex items-center ps-5 border-b border-google-gray-50">
        Polska
      </div>
      <div className="w-full h-1/2 flex items-center gap-5 px-5">
        <a href="https://ads.google.com/" className="footer-info">
          Reklamuj się
        </a>
        <a href="https://www.google.com/services" className="footer-info">
          Dla firm
        </a>
        <a
          href="https://www.google.com/search/howsearchworks"
          className="footer-info"
        >
          Jak działa wyszukiwarka
        </a>
        <div className="flex-1 hidden lg:flex justify-center items-center gap-2">
          <img src="leaf.png" alt="leaf" className="h-[14px]" />
          <a href="https://sustainability.google/" className="text-center">
            Już 30 lat działamy na rzecz klimatu: zobacz, co robimy
          </a>
        </div>
        <a
          href="https://policies.google.com/privacy"
          className="md:ms-auto lg:ms-0"
        >
          Prywatność
        </a>
        <a href="https://policies.google.com/terms">Warunki</a>
        <Settings />
      </div>
    </div>
  );
}

export default Footer;
