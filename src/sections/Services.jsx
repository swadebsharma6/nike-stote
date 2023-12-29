import ServiceCard from "../components/ServiceCard";
import { services } from "../constance";


const Services = () => {
    return (
        <section className="max-container flex justify-center flex-wrap gap-9">
          {
            services.map((service, idx) =>(
                <ServiceCard
                key={idx}
                service={service}
                ></ServiceCard>
            ))
          }
        </section>
    );
};

export default Services;