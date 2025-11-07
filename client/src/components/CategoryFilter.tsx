import { categories } from '@/data/expertRoles';

interface CategoryFilterProps {
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

export default function CategoryFilter({
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      {/* 全部按钮 */}
      <button
        onClick={() => onSelectCategory(null)}
        className={`neu-button px-6 py-2 rounded-lg text-sm font-medium transition-all ${
          selectedCategory === null
            ? 'bg-blue-600 text-white shadow-lg'
            : 'bg-card text-foreground hover:bg-secondary'
        }`}
      >
        全部角色
      </button>

      {/* 分类按钮 */}
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onSelectCategory(category.id)}
          className={`neu-button px-6 py-2 rounded-lg text-sm font-medium transition-all ${
            selectedCategory === category.id
              ? 'bg-blue-600 text-white shadow-lg'
              : 'bg-card text-foreground hover:bg-secondary'
          }`}
        >
          {category.label}
          <span className="ml-2 text-xs opacity-75">({category.count})</span>
        </button>
      ))}
    </div>
  );
}
