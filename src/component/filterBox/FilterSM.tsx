import CategoryFilter from "./setFilterSm/CategoryFilter";
import BrandFilter from "./setFilterSm/BrandFilter";
import PriceFilter from "./setFilterSm/PriceFilter";
import RatingFilter from "./setFilterSm/RatingFilter";

type Props = {};

const mockOptions = ["option 1", "option 2", "option 3"];

const FilterSM = ({}: Props) => {
  return (
    <div className="hidden sm:block">
      <CategoryFilter listCat={mockOptions} />
      <BrandFilter listBrands={mockOptions} />
      <PriceFilter />
      <RatingFilter />
    </div>
  );
};

export default FilterSM;
