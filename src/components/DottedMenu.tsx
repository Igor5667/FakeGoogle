import {
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";

function DottedMenu() {
  return (
    <Popover>
      <PopoverHandler>
        <img src="dots-menu.png" alt="dots menu" />
      </PopoverHandler>
      <PopoverContent
        className="w-52 h-52 p-0"
        // that TypeScript wants
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        hji adlkfjadl
      </PopoverContent>
    </Popover>
  );
}
export default DottedMenu;
