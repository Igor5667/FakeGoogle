interface PropsLogo {
  className?: string;
}

function Logo({ className }: PropsLogo) {
  return (
    <div className={`flex justify-center ${className}`}>
      <img src="main-logo.png" alt="google" className="w-[30%]" />
    </div>
  );
}

export default Logo;
