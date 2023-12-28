import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
    return (
        <section id="about-us"
        className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
        >
            <div className="flex flex-1 flex-col">
            <h2 className=" font-palanquin capitalize text-4xl font-bold lg:max-w-lg">
            We Provide You
            
            <span className="text-coral-red inline-block mt-3">Super</span><br />
            <span className="text-coral-red inline-block mt-3">Quality</span> Shoes
            </h2>
            <p className="mt-4 lg:max-w-lg info-text">Ensuring premium comfort and style, Our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>
            <p className="mt-4 info-text lg:max-w-lg mb-4">Our dedication to detail and excellence ensure your satisfaction</p>
            <div className="">
            <Button
            label='Show Now'
           ></Button>
            </div>
            </div>

            <div className="flex flex-1 justify-center items-center">
                <img
                 src={shoe8}
                  alt="shoe8"
                  width={570}
                  height={522}
                  className="object-contain"
                  />
            </div>
        </section>
    );
};

export default SuperQuality;