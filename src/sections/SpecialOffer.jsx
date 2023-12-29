import { offer } from "../assets/images";
import Button from "../components/Button";


const SpecialOffer = () => {
    return (
        <section className="flex justify-wrap text-center max-xl:flex-col-reverse gap-10 max-container" >
            <div className="flex-1">
            <img src={offer} alt=""  width={773} height={687} className="object-contain w-full"/>
            </div>
            <div className="flex flex-1 flex-col">
            <h2 className=" font-palanquin capitalize text-4xl font-bold lg:max-w-lg">
            <span className="text-coral-red inline-block mt-3"> Special </span>  Offer
            </h2>
            <p className="mt-4 lg:max-w-lg info-text">Ensuring premium comfort and style, Our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>
            <p className="mt-4 info-text lg:max-w-lg mb-4">Our dedication to detail and excellence ensure your satisfaction</p>
            <div className="mt-11 flex flex-wrap gap-4">
            <Button label='Show Now'></Button>
            <Button label='Learn More' backGroundColor='bg-white' textColor='text-slate-gray'></Button>
            </div>
            </div>
        </section>
    );
};

export default SpecialOffer;