

const ServiceCard = ({service}) => {
    console.log(service)
    const {imgURL,label, subtext} = service;
    return (
        <div className="flex-1 sm-w:[350px] sm:min-w[350px] w-full rounded-[20px] shadow-3xl px-10 py-16">
            <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
                <img src={imgURL} alt={label} width={24} height={24} />
            </div>
            <h3 className="mt-5 text-3xl font-palanquin leading-normal font-bold">{label}</h3>
            <p className="mt-3 break-words text-lg leading-normal text-slate-gray">{subtext}</p>
        </div>
    );
};

export default ServiceCard;