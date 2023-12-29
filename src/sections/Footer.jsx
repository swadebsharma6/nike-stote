import { footerLogo } from "../assets/images";


const Footer = () => {
    return (
        <footer className="max-container">
         <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
          <div className="flex flex-col items-start">
          <a href="/">
          <img src={footerLogo} alt="logo" width={150} height={46} />
          </a>
         <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">Ensuring premium comfort and style, Our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>
          </div>
         </div>
        </footer>
    );
};

export default Footer;