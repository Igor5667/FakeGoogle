function UnderButtons() {
  const handleSzczesliwyTrafClick = () => {
    window.location.href = "https://doodles.google/";
  };

  return (
    <div className="flex justify-center gap-5 p-6 flex-wrap">
      <GreyButton text="Szukaj w Google" />
      <GreyButton text="Szczęśliwy traf" onClick={handleSzczesliwyTrafClick} />
    </div>
  );
}

interface GreyButtonProps {
  text: string;
  onClick?: () => void;
}

function GreyButton({ text, onClick }: GreyButtonProps) {
  return (
    <button
      className="bg-google-gray-50 py-2 px-4 rounded magic-border"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default UnderButtons;
