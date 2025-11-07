import { ExpertRole } from '@/data/expertRoles';
import { X } from 'lucide-react';
import { useEffect } from 'react';

interface RoleDetailModalProps {
  role: ExpertRole | null;
  onClose: () => void;
}

export default function RoleDetailModal({ role, onClose }: RoleDetailModalProps) {
  // 按 ESC 关闭弹窗
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (role) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [role, onClose]);

  if (!role) return null;

  return (
    <>
      {/* 背景遮罩 */}
      <div
        className="fixed inset-0 bg-black/50 z-40 animate-fade-in"
        onClick={onClose}
      />

      {/* 弹窗内容 */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="neu-card w-full max-w-2xl max-h-[90vh] overflow-y-auto animate-slide-in-up"
          onClick={(e) => e.stopPropagation()}
        >
          {/* 关闭按钮 */}
          <div className="sticky top-0 flex items-center justify-between p-6 border-b border-border bg-card rounded-t-2xl">
            <h2 className="text-2xl font-bold text-foreground">{role.name}</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-secondary rounded-lg transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* 内容 */}
          <div className="p-6 space-y-6">
            {/* 分类和描述 */}
            <div>
              <div className="mb-3">
                <span className="inline-block px-3 py-1 text-sm font-medium rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200">
                  {role.categoryLabel}
                </span>
              </div>
              <p className="text-lg text-foreground">{role.description}</p>
            </div>

            {/* 核心技能 */}
            <div>
              <h3 className="text-lg font-bold text-foreground mb-3">核心技能</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {role.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="neu-card p-3 text-center text-sm font-medium text-foreground hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Prompt 模板建议 */}
            <div>
              <h3 className="text-lg font-bold text-foreground mb-3">Prompt 模板建议</h3>
              <div className="neu-card p-4 bg-secondary/50">
                <pre className="text-xs text-foreground overflow-x-auto whitespace-pre-wrap break-words">
{`# 角色扮演：${role.name}

## 1. 角色设定
你现在是一个拥有以下专业技能的超级 LLM 专家：**${role.name}**。
你的任务是利用你的专业知识，对用户提出的问题或需求进行深入分析，并提供一份专业、结构化、具有洞察力的解决方案。

## 2. 核心能力
${role.skills.map((skill) => `- ${skill}`).join('\n')}

## 3. 任务目标
[用户在此处输入具体问题或需求]

## 4. 约束与要求
1. **专业性：** 你的回答必须严格遵循你所扮演的角色的专业领域知识和最佳实践。
2. **结构化：** 答案必须包含清晰的标题、分点说明和总结。
3. **深度：** 避免泛泛而谈，提供具体的技术细节、实现步骤或关键考量因素。
4. **语言：** 使用中文进行回复。

## 5. 输出格式要求
请严格按照以下结构输出你的解决方案：

### 专家角色：${role.name}
### 核心问题分析
[对用户问题的核心挑战和背景进行简要分析]

### 解决方案（${role.categoryLabel}视角）
1. **[一级标题/关键步骤 1]**
   - [细节说明 1.1]
   - [细节说明 1.2]
2. **[一级标题/关键步骤 2]**
   - [细节说明 2.1]
   - [细节说明 2.2]

### 关键考量与风险
[列出实现该方案时需要注意的关键点、潜在风险或下一步建议]`}
                </pre>
              </div>
            </div>

            {/* 相关角色 */}
            <div>
              <h3 className="text-lg font-bold text-foreground mb-3">相关领域</h3>
              <p className="text-sm text-muted-foreground">
                该角色属于 <span className="font-semibold text-foreground">{role.categoryLabel}</span> 领域，与其他同领域的专家角色可以形成互补的专业团队。
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
