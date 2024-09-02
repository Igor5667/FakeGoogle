import { RxCross1 } from "react-icons/rx";

interface PhoneMenuProps {
  className?: string;
  hideMenu: () => void;
}

const links = [
  { text: "O nas", link: "https://about.google/" },
  { text: "Google Store", link: "https://store.google.com/" },
  { text: "Gmail", link: "https://mail.google.com/" },
  { text: "Grafika", link: "https://www.google.com/imghp?hl" },
];

function PhoneMenu({ className, hideMenu }: PhoneMenuProps) {
  return (
    <div
      className={`absolute top-0 left-0 h-[100svh] md:h-screen w-[100svw] md:w-screen
     bg-white flex flex-col items-center gap-10 pt-[30%] z-20 ${className} `}
    >
      <div>
        <RxCross1 className="mb-12" onClick={hideMenu} size={20} />
      </div>
      {links.map(({ text, link }) => (
        <a href={link} key={text}>
          {text}
        </a>
      ))}
    </div>
  );
}

export default PhoneMenu;
