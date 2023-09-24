import cc from "clsx";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["400"],
  subsets: ["latin"],
});
const FooterComponent = () => {
  return (
    <footer
      className={cc(
        poppins.className,
        "w-full h-32 border-t border-gray-800 text-sm text-[#CBD5E1]"
      )}
    >
      <p className='flex items-center justify-center mt-10'>
        <span>&copy; Copyright {new Date().getFullYear()},&nbsp;</span>
        <span>All Rights Reserved by Play Games</span>
      </p>
    </footer>
  );
};

export default FooterComponent;
