import {
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";

const moreApps = [
  "Drive",
  "Hangouts",
  "Maps",
  "Play",
  "Photos",
  "Play Music",
  "Play Movies",
  "Play Store",
  "Google+",
  "Grafika",
  "Gmail",
  "Grafika",
  "Drive",
  "Hangouts",
  "Maps",
  "Play",
  "Photos",
  "Play Music",
  "Play Movies",
  "Play Store",
  "Google+",
  "Grafika",
  "Gmail",
  "Grafika",
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
        {moreApps.map((app) => (
          <div className="w-1/3 h-[100px] p-1 ">
            <div className="h-full bg-google-gray-50 hover:bg-google-gray-100 p-2 rounded-full flex justify-center items-center text-center">
              {app}
            </div>
          </div>
        ))}
      </PopoverContent>
    </Popover>
  );
}
export default DottedMenu;
