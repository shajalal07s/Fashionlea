import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex-shrink-0">
      <Image
        src="/Fashionlea-logo-21.png"
        alt="Fashionlea Logo"
        width={160}
        height={50}
        className="h-10 w-auto"
        priority
      />
    </div>
  );
};

export default Logo;
