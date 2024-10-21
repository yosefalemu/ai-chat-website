import { check } from "../assets";
import Button from "./Button";
import { pricing } from "./constants";

const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {pricing.map((price) => (
        <div
          key={price.id}
          className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2 [&>h4]:even:text-color-1 [&>h4]:last:text-color-3"
        >
          <h4 className="h4 mb-4">{price.title}</h4>
          <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
            {price.description}
          </p>
          <div className="flex items-center h-[5.5rem] mb-6">
            {price.price && (
              <>
                <div className="h3">$</div>
                <div className="text-[5.5rem] font-bold leading-none">
                  {price.price}
                </div>
              </>
            )}
          </div>
          <Button
            className="w-full mb-6"
            href={price.price ? "/pricing" : "mainto:yosefalemu007@gmail.com"}
            white={!!price.price}
          >
            {price.price ? "Get Started" : "Contact us"}
          </Button>
          <ul>
            {price.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start py-5 border-t border-n-6"
              >
                <img src={check} width={24} height={24} alt="check" />
                <p className="ml-4 body-2">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
