function UnderButtons() {
  return (
    <div className="flex justify-center gap-5 p-6 flex-wrap">
      <GreyButton text="Szukaj w Google" />
      <GreyButton text="Szczęśliwy traf" />
    </div>
  );
}

function GreyButton({ text }: { text: string }) {
  return (
    <button className="bg-google-gray-50 py-2 px-4 rounded magic-border">
      {text}
    </button>
  );
}

export default UnderButtons;
