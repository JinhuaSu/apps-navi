'use client';

import { useState } from "react";

type ProjectCategory = "数字孪生" | "营销" | "智能";

type Project = {
  slug: string;
  title: string;
  description: string;
  url: string;
  tags: string[];
  defaultEmbed?: boolean;
  category: ProjectCategory;
};

const projects: Project[] = [
  {
    slug: "offeruc",
    title: "OffeRuc",
    description: "AI快速填简历表格浏览器插件。",
    url: "https://offeruc.simashuhui.cn",
    tags: ["人效", "沟通"],
    defaultEmbed: true,
    category: "智能",
  },
  {
    slug: "course",
    title: "Course AI",
    description: "人大生成式人工智能培训课。",
    url: "https://course.simashuhui.cn/",
    tags: ["课程", "教育"],
    defaultEmbed: true,
    category: "营销",
  },
  {
    slug: "video-translate",
    title: "Video Translate",
    description: "为长视频自动生成多语字幕与音频克隆，支持角色标注、字幕优化等人工介入。",
    url: "https://video-translate.simashuhui.cn",
    tags: ["AI", "字幕"],
    category: "智能",
  },
  {
    slug: "auto-sync",
    title: "Auto Sync",
    description: "多平台自动同步内容，从抖音、快手、西瓜、B站、头条中监控指定作者，并下载视频上传youtube",
    url: "https://autosync.simashuhui.cn",
    tags: ["自动化", "多平台"],
    category: "营销",
  },
  {
    slug: "promote-link",
    title: "Promote Link",
    description: "短剧推广平台，接入Shortmax,Goodshort,KalosTv,Dramabox等渠道数万部可推广获利短剧。",
    url: "https://promote-link.simashuhui.cn/",
    tags: ["营销", "追踪"],
    category: "营销",
  },
  {
    slug: "vr-gallery",
    title: "VR Gallery",
    description: "沉浸式VR作品展厅，展示创意内容与交互案例。",
    url: "https://vr-gallery.simashuhui.cn",
    tags: ["VR", "交互"],
    category: "数字孪生",
    defaultEmbed: true,
  },
  {
    slug: "digital-human",
    title: "Digital Human",
    description: "实时驱动的AI数字人主播，覆盖直播讲解、客服与导览场景。",
    url: "https://digital-human.simashuhui.cn",
    tags: ["AI", "数字人"],
    category: "数字孪生",
  },
  {
    slug: "med-chat",
    title: "Med Chat",
    description: "医疗知识图谱驱动的智能问诊对话助手，支持病例检索。",
    url: "https://med-chat.simashuhui.cn",
    tags: ["医疗", "对话"],
    category: "智能",
  },
  {
    slug: "vr-med",
    title: "VR Med",
    description: "以VR模拟方式训练医护流程，可视化复现实验操作。",
    url: "https://vr-med.simashuhui.cn",
    tags: ["VR", "医疗"],
    category: "数字孪生",
  },
  {
    slug: "bricks",
    title: "Bricks",
    description: "人大文创积木3d说明书。",
    url: "https://bricks.simashuhui.cn",
    tags: ["低代码", "组件库"],
    category: "数字孪生",
  },
  {
    slug: "ad-helper",
    title: "Ad Helper",
    description: "智能广告投放助手，给出预算与素材的最佳策略。",
    url: "https://ad-helper.simashuhui.cn",
    tags: ["广告", "分析"],
    category: "智能",
  },
  {
    slug: "engine",
    title: "Engine",
    description: "统一数据知识切片引擎，负责处理、智能检索，服务于智能问答。",
    url: "https://engine.simashuhui.cn",
    tags: ["数据", "实时"],
    category: "智能",
  },
  {
    slug: "report-guy",
    title: "Report Guy",
    description: "数据处理，自动建模，代码执行结果形成报告，面向宏观经济与社会数据的标准化AI分析报告。",
    url: "https://report-guy.simashuhui.cn",
    tags: ["数据", "报告"],
    category: "智能",
  },
  {
    slug: "sql-boy",
    title: "SQL Boy",
    description: "数据库智能问答，自带金融数据库。",
    url: "https://sql-boy.simashuhui.cn",
    tags: ["数据", "查询"],
    category: "智能",
  },
  {
    slug: "carbon-map",
    title: "Carbon Map",
    description: "遥感影像与碳排放地图，支持碳排放量计算与分析。",
    url: "https://carbon-map.simashuhui.cn",
    tags: ["遥感", "碳排"],
    category: "智能",
  },
  {
    slug: "bid-bot",
    title: "Bid Bot",
    description: "智能标书助手，提取招标文件关键信息，生成标书。",
    url: "https://bidbot.simashuhui.cn",
    tags: ["标书", "生成"],
    category: "智能",
  },
];

const categoryOrder: ProjectCategory[] = [ "智能", "数字孪生", "营销",];

const categoryDescriptions: Record<ProjectCategory, string> = {
  数字孪生: "以数字人、VR 与 3D 形式复刻真实业务流程，打造沉浸式体验。",
  营销: "帮助运营团队在多渠道投放、分发与客户沟通中实现自动化增长。",
  智能: "AI 课程、知识引擎与问答产品，为复杂决策与内容生产提供智能助力。",
};

const groupedProjects = categoryOrder.map((category) => ({
  category,
  description: categoryDescriptions[category],
  projects: projects.filter((project) => project.category === category),
}));

export default function Home() {
  const [previewEnabled, setPreviewEnabled] = useState<Record<string, boolean>>(
    () =>
      Object.fromEntries(
        projects.map((project) => [project.slug, Boolean(project.defaultEmbed)])
      )
  );

  const handleTogglePreview = (slug: string) => {
    setPreviewEnabled((prev) => ({
      ...prev,
      [slug]: !prev[slug],
    }));
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-zinc-100 via-white to-white text-zinc-900">
      <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-20 px-6 py-16 sm:px-12">
        <header className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] lg:items-stretch">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-4 py-1 text-sm text-zinc-600 shadow-sm">
              simashuhui.cn
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Live Apps
            </span>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold text-zinc-900 sm:text-5xl">
                Apps Navi · 轻量导航
              </h1>
              <p className="text-lg text-zinc-600">
                汇总在 simashuhui.cn 旗下正在运行的工具与实验项目。每个卡片都可快速访问，方便在一个页面内感受不同产品的气质。
              </p>
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-zinc-500">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 font-medium text-zinc-600 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                实时运行中
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-zinc-900/5 px-3 py-1 font-medium text-zinc-600">
                {projects.length} 组产品
              </span>
            </div>
            <div className="rounded-2xl border border-zinc-200 bg-white/80 px-4 py-3 text-sm text-zinc-600 shadow-sm">
              如需测试账号或体验版本，微信 / 手机号（同号） 13522117899，备注需求即可快速开通。
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[32px] border border-zinc-200 bg-zinc-950 px-8 py-10 text-white shadow-[0_20px_80px_rgba(15,23,42,0.25)]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(94,234,212,0.35),rgba(59,130,246,0.05))]" />
            <div className="relative flex flex-col gap-6">
              <div className="flex items-center gap-5">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 p-0.5 shadow-inner shadow-white/10 backdrop-blur">
                  <div className="h-full w-full rounded-[22%] bg-[conic-gradient(at_30%_20%,#34d399,#818cf8_45%,#60a5fa_75%,#34d399)]" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-white/60">司马数慧</p>
                  <p className="text-3xl font-semibold leading-tight">Simashuhui</p>
                  <p className="text-white/70">simashuhui.cn</p>
                </div>
              </div>
              <p className="text-base leading-7 text-white/80">
                数据智能、AI营销与虚拟体验实验室。我们用快速迭代的方式探索企业增长的下一步。
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://simashuhui.cn"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-zinc-900 shadow-lg shadow-emerald-400/30 transition hover:-translate-y-0.5"
                >
                  官网入口
                  <span aria-hidden>↗</span>
                </a>
                <a
                  href="https://github.com/SmartDataLab"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  GitHub
                  <span aria-hidden>↗</span>
                </a>
              </div>
            </div>
          </div>
        </header>

        <div className="space-y-16">
          {groupedProjects.map(({ category, description, projects }) => (
            <section key={category} className="space-y-6">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
                  Category
                </p>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <h2 className="text-3xl font-semibold text-zinc-900">
                    {category}
                  </h2>
                  <p className="max-w-2xl text-sm leading-6 text-zinc-600">
                    {description}
                  </p>
                </div>
              </div>

              <div className="grid gap-8 md:grid-cols-2">
                {projects.map((project) => (
                  <article
                    key={project.slug}
                    className="flex flex-col gap-5 rounded-3xl border border-zinc-100 bg-white/90 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-sm"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
                          Project
                        </p>
                        <h3 className="text-2xl font-semibold text-zinc-900">
                          {project.title}
                        </h3>
                      </div>
                      <div className="flex flex-wrap items-center justify-end gap-3">
                        <span className="rounded-full bg-zinc-900/5 px-3 py-1 text-xs font-medium text-zinc-700">
                          {project.slug}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleTogglePreview(project.slug)}
                          className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium transition ${
                            previewEnabled[project.slug]
                              ? "border-emerald-200 bg-emerald-50 text-emerald-600"
                              : "border-zinc-200 bg-white text-zinc-500 hover:border-zinc-300"
                          }`}
                          aria-pressed={previewEnabled[project.slug]}
                        >
                          实时预览
                          <span
                            className={`relative h-4 w-7 rounded-full transition ${
                              previewEnabled[project.slug]
                                ? "bg-emerald-500/70"
                                : "bg-zinc-200"
                            }`}
                          >
                            <span
                              className={`absolute top-0.5 h-3 w-3 rounded-full bg-white shadow transition ${
                                previewEnabled[project.slug]
                                  ? "left-3"
                                  : "left-0.5"
                              }`}
                            />
                          </span>
                        </button>
                      </div>
                    </div>

                    <p className="text-sm leading-6 text-zinc-600">
                      {project.description}
                    </p>

                    {previewEnabled[project.slug] ? (
                      <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-950/80">
                        <iframe
                          src={project.url}
                          title={`${project.title} 预览`}
                          loading="lazy"
                          referrerPolicy="no-referrer"
                          className="h-64 w-full"
                        />
                      </div>
                    ) : (
                      <div className="rounded-2xl border border-dashed border-zinc-200 bg-zinc-50 px-4 py-6 text-sm text-zinc-500">
                        点击上方「实时预览」拨钮即可载入此项目的最新在线画面。
                      </div>
                    )}

                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={`${project.slug}-${tag}`}
                            className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-700"
                      >
                        访问项目
                        <span aria-hidden>↗</span>
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}
