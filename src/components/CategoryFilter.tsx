import React from "react";

interface CategoryFilterProps {
  categories: string[];
  onCategorySelect: (category: string | null) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, onCategorySelect }) => {
  return (
    <div className="category-filter">
      {/* "All" Button */}
      <button onClick={() => onCategorySelect(null)} className="filter-button">
        All
      </button>

      {/* Category Buttons */}
      {categories.map((category) => (
        <button key={category} onClick={() => onCategorySelect(category)} className="filter-button">
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
