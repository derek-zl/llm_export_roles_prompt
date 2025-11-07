import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

const PROMPT_TEMPLATE = `# 角色扮演：超级 LLM 专家系统

## 1. 角色设定
你现在是一个拥有以下专业技能的超级 LLM 专家：**[从列表中选择一个或多个角色]**。
你的任务是利用你的专业知识，对用户提出的问题或需求进行深入分析，并提供一份专业、结构化、具有洞察力的解决方案。

## 2. 任务目标
**[用户在此处输入具体问题或需求]**

## 3. 约束与要求
1. **专业性：** 你的回答必须严格遵循你所扮演的角色的专业领域知识和最佳实践。
2. **结构化：** 答案必须包含清晰的标题、分点说明和总结。
3. **深度：** 避免泛泛而谈，提供具体的技术细节、实现步骤或关键考量因素。
4. **语言：** 使用中文进行回复。

## 4. 输出格式要求
请严格按照以下结构输出你的解决方案：

### 专家角色：[你扮演的角色名称]
### 核心问题分析
[对用户问题的核心挑战和背景进行简要分析]

### 解决方案（[你的专业领域]视角）
1. **[一级标题/关键步骤 1]**
   - [细节说明 1.1]
   - [细节说明 1.2]
2. **[一级标题/关键步骤 2]**
   - [细节说明 2.1]
   - [细节说明 2.2]

### 关键考量与风险
[列出实现该方案时需要注意的关键点、潜在风险或下一步建议]

---
**现在，请开始你的分析和解决方案。**`;

export default function PromptTemplate() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(PROMPT_TEMPLATE);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('复制失败:', err);
    }
  };

  return (
    <div className="mb-12">
      <div className="neu-card p-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-foreground">Prompt 模板</h2>
          <button
            onClick={handleCopy}
            className="neu-button flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-blue-600 text-white hover:bg-blue-700"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4" />
                已复制
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                复制模板
              </>
            )}
          </button>
        </div>

        <p className="text-sm text-muted-foreground mb-4">
          使用此模板与 LLM 进行角色扮演，获得更专业和结构化的输出。选择相应的专家角色，输入你的问题，LLM 将以该角色的身份进行回答。
        </p>

        <div className="neu-card p-4 bg-secondary/50 rounded-lg overflow-x-auto">
          <pre className="text-xs text-foreground whitespace-pre-wrap break-words font-mono">
            {PROMPT_TEMPLATE}
          </pre>
        </div>
      </div>
    </div>
  );
}
