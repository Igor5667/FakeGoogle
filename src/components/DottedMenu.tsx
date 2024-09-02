import {
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";

const moreApps = [
  { name: "Drive", icon: "gmail-icon.png" },
  { name: "Hangouts", icon: "hangouts-icon.png" },
  { name: "Maps", icon: "gmail-icon.png" },
  { name: "Play", icon: "hangouts-icon.png" },
  { name: "Photos", icon: "gmail-icon.png" },
  { name: "Play Music", icon: "hangouts-icon.png" },
  { name: "Play Movies", icon: "gmail-icon.png" },
  { name: "Play Store", icon: "hangouts-icon.png" },
  { name: "Google+", icon: "gmail-icon.png" },
  { name: "Grafika", icon: "hangouts-icon.png" },
  { name: "Gmail", icon: "gmail-icon.png" },
  { name: "Grafika", icon: "hangouts-icon.png" },
  { name: "Drive", icon: "gmail-icon.png" },
  { name: "Hangouts", icon: "hangouts-icon.png" },
  { name: "Maps", icon: "gmail-icon.png" },
  { name: "Play", icon: "hangouts-icon.png" },
  { name: "Photos", icon: "gmail-icon.png" },
  { name: "Play Music", icon: "hangouts-icon.png" },
  { name: "Play Movies", icon: "gmail-icon.png" },
  { name: "Play Store", icon: "hangouts-icon.png" },
  { name: "Google+", icon: "gmail-icon.png" },
  { name: "Grafika", icon: "hangouts-icon.png" },
  { name: "Gmail", icon: "gmail-icon.png" },
  { name: "Grafika", icon: "hangouts-icon.png" },
];

function DottedMenu() {
  return (
    <Popover>
      <PopoverHandler>
        <img src="dots-menu.png" alt="dots menu" />
      </PopoverHandler>
      <PopoverContent
        className="w-[300px] max-h-[300px] p-0 flex flex-wrap content-start overflow-y-auto text-black shadow-md"
        // that TypeScript wants
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        {moreApps.map(({ name, icon }) => (
          <div className="w-1/3 h-[100px] p-1" key={name}>
            <div
              className="h-full bg-google-gray-50 hover:bg-google-gray-100 p-2 rounded-full
              justify-center items-center text-center flex flex-col"
            >
              <img src={icon} alt="gmail" className="w-[70%] " />
              {name}
            </div>
          </div>
        ))}
      </PopoverContent>
    </Popover>
  );
}
export default DottedMenu;
