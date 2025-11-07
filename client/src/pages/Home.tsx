import { useState, useMemo } from 'react';
import { expertRoles, ExpertRole } from '@/data/expertRoles';
import RoleCard from '@/components/RoleCard';
import RoleDetailModal from '@/components/RoleDetailModal';
import CategoryFilter from '@/components/CategoryFilter';
import SearchBar from '@/components/SearchBar';
import PromptTemplate from '@/components/PromptTemplate';
import { useTheme } from '@/contexts/ThemeContext';
import { Moon, Sun, Github } from 'lucide-react';

export default function Home() {
  const { theme, toggleTheme } = useTheme();
  const [selectedRole, setSelectedRole] = useState<ExpertRole | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // 过滤角色
  const filteredRoles = useMemo(() => {
    return expertRoles.filter((role) => {
      const matchesCategory = !selectedCategory || role.category === selectedCategory;
      const matchesSearch =
        !searchQuery ||
        role.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        role.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        role.skills.some((skill) =>
          skill.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-background text-foreground gradient-bg">
      {/* 导航栏 */}
      <nav className="sticky top-0 z-30 bg-card/80 backdrop-blur-md border-b border-border">
        <div className="container py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
              <span className="text-white font-bold text-lg">LLM</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">LLM 专家角色全集</h1>
              <p className="text-xs text-muted-foreground">100+ 个专业角色 | Neumorphism UI</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* 主题切换 */}
            <button
              onClick={toggleTheme}
              className="neu-button p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label="切换主题"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            {/* GitHub 链接 */}
            <a
              href="#"
              className="neu-button p-2 rounded-lg hover:bg-secondary transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </nav>

      {/* 主要内容 */}
      <main className="container py-12">
        {/* Prompt 模板区域 */}
        <PromptTemplate />

        {/* 搜索和筛选区域 */}
        <div className="mb-8">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
          <CategoryFilter
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>

        {/* 结果统计 */}
        <div className="mb-6 text-sm text-muted-foreground">
          找到 <span className="font-bold text-foreground">{filteredRoles.length}</span> 个角色
          {selectedCategory && ` (分类: ${expertRoles.find(r => r.category === selectedCategory)?.categoryLabel})`}
          {searchQuery && ` (搜索: "${searchQuery}")`}
        </div>

        {/* 角色卡片网格 */}
        {filteredRoles.length > 0 ? (
          <div className="grid-cols-auto">
            {filteredRoles.map((role) => (
              <div key={role.id} className="animate-slide-in-up">
                <RoleCard role={role} onClick={() => setSelectedRole(role)} />
              </div>
            ))}
          </div>
        ) : (
          <div className="neu-card p-12 text-center">
            <p className="text-lg text-muted-foreground mb-2">未找到匹配的角色</p>
            <p className="text-sm text-muted-foreground">
              尝试调整搜索条件或浏览所有角色
            </p>
          </div>
        )}
      </main>

      {/* 角色详情弹窗 */}
      <RoleDetailModal role={selectedRole} onClose={() => setSelectedRole(null)} />

      {/* 页脚 */}
      <footer className="border-t border-border mt-16 py-8 bg-card/50">
        <div className="container text-center text-sm text-muted-foreground">
          <p>100+ LLM 专家角色全集 | 使用 Neumorphism UI 设计</p>
          <p className="mt-2">© 2024 LLM Expert Roles. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
