import { CardContainer } from "@/libs";
import { FEATURES } from "./constants/constants";

const FeaturesContainer = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-8 text-center">Features</h2>
      <div className="flex flex-wrap gap-6 justify-center 2xl:px-20">
        {FEATURES.map((feature, index) => (
            <CardContainer
              key={index}
              title={feature.title}
              description={feature.description}
              available={feature.available}
            />
        ))}
      </div>
    </div>
  );
};

export default FeaturesContainer;
