import {
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";

export function Settings() {
  return (
    <Popover>
      <PopoverHandler>
        <a>Ustawienia</a>
      </PopoverHandler>
      <PopoverContent
        className="text-black text-md p-0 shadow-lg"
        // that TypeScript wants
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <ul className="settings-list whitespace-nowrap py-2">
          <li>Ustawienia wyszukiwania</li>
          <li>Szukanie zaawansowane</li>
          <li>Twoje dane w wyszukiwarce</li>
          <li>Historia wyszukiwania </li>
          <li>Pomoc dotycząca wyszukiwania</li>
          <li>Prześlij opinię</li>
        </ul>
      </PopoverContent>
    </Popover>
  );
}
