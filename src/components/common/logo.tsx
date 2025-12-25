import { useTheme } from "next-themes";
import Image from "next/image";

export default function Logo() {
  const { theme } = useTheme();
  return (
    <>
      {theme === "dark" ? (
        <Image src={"/assets/light-logo.svg"} alt="Logo" width={150} height={40} />
      ) : (
        <Image src={"/assets/logo.svg"} alt="Logo" width={150} height={40} />
      )}
    </>
  );
}
