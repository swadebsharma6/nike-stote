import { FaArrowRight } from "react-icons/fa6";

const Button = ({label}) => {
    return (
       <button className="flex justify-center items-center gap-2 px-7 py-4 border text-lg leading-none bg-coral-red rounded-full text-white border-coral-red">
      {label}
      <FaArrowRight />
       </button>
    );
};

export default Button;