interface PropsLogo {
  className?: string;
}

function Logo({ className }: PropsLogo) {
  return (
    <div className={`flex justify-center relative ${className}`}>
      <img src="main-logo.png" alt="google" className="w-[30%]" />
      <img
        src="fake-img.png"
        alt="fake"
        className="w-[15%] absolute -top-[40%] right-[30%] rotate-[20deg]"
      />
    </div>
  );
}

export default Logo;
