import { ExpertRole } from '@/data/expertRoles';
import { ChevronRight } from 'lucide-react';

interface RoleCardProps {
  role: ExpertRole;
  onClick?: () => void;
}

export default function RoleCard({ role, onClick }: RoleCardProps) {
  return (
    <div
      onClick={onClick}
      className="neu-card p-6 cursor-pointer group"
    >
      <div className="flex flex-col h-full">
        {/* 分类标签 */}
        <div className="mb-3">
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200">
            {role.categoryLabel}
          </span>
        </div>

        {/* 角色名称 */}
        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {role.name}
        </h3>

        {/* 描述 */}
        <p className="text-sm text-muted-foreground mb-4 flex-grow line-clamp-3">
          {role.description}
        </p>

        {/* 技能标签 */}
        <div className="flex flex-wrap gap-2 mb-4">
          {role.skills.slice(0, 2).map((skill, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 rounded-lg bg-secondary text-secondary-foreground"
            >
              {skill}
            </span>
          ))}
          {role.skills.length > 2 && (
            <span className="text-xs px-2 py-1 rounded-lg bg-muted text-muted-foreground">
              +{role.skills.length - 2}
            </span>
          )}
        </div>

        {/* 查看详情按钮 */}
        <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm font-medium group-hover:translate-x-1 transition-transform">
          查看详情
          <ChevronRight className="w-4 h-4 ml-1" />
        </div>
      </div>
    </div>
  );
}
