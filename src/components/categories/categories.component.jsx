import Directory from "../Directory/Directory.component";
import CategoryItem from "../category-item/category-item";
import "./categories.styles.scss";

const Categories = () => {
  return (
    <div className="categories-container">
      {Directory.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Categories;
