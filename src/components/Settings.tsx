import {
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";

const settings = [
  "Ustawienia wyszukiwania",
  "Szukanie zaawansowane",
  "Twoje dane w wyszukiwarce",
  "Historia wyszukiwania ",
  "Pomoc dotycząca wyszukiwania",
  "Prześlij opinię",
];

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
          {settings.map((setting) => (
            <li key={setting}>{setting}</li>
          ))}
        </ul>
      </PopoverContent>
    </Popover>
  );
}
