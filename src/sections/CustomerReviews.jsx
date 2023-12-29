import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constance";


const CustomerReviews = () => {
    return (
        <section className="max-container ">
          <h3 className="font-palanquin text-center font-bold text-4xl">
          What Our 
          <span className="text-coral-red"> Customers </span>
          Say?
          </h3>
          <p className="info-text m-auto mt-4 max-w-lg text-center"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid numquam earum consequatur fuga nemo placeat voluptas pariatur neque cumque vel!</p>

          <div className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
          {
            reviews.map((review, idx) =>(
               <ReviewCard
               key={idx}
               review={review}
               ></ReviewCard> 
            ))

          }
          </div>
        </section>
    );
};

export default CustomerReviews;