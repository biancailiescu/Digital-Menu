import React from "react";

interface CategoryFilterProps {
  categories: string[];
  onCategorySelect: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, onCategorySelect }) => {
  return (
    <div>
      {categories.map((category) => (
        <button key={category} onClick={() => onCategorySelect(category)}>
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;