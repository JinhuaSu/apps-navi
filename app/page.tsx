'use client';

import { useState } from "react";

type Project = {
  slug: string;
  title: string;
  description: string;
  url: string;
  tags: string[];
  defaultEmbed?: boolean;
};

const projects: Project[] = [
  {
    slug: "video-translate",
    title: "Video Translate",
    description: "为长视频自动生成多语字幕与翻译，下发到全球渠道。",
    url: "https://video-translate.simashuhui.cn",
    tags: ["AI", "字幕"],
    defaultEmbed: true,
  },
  {
    slug: "auto-sync",
    title: "Auto Sync",
    description: "多平台自动同步内容，保持不同业务线一致的上线节奏。",
    url: "https://autosync.simashuhui.cn",
    tags: ["自动化", "多平台"],
    defaultEmbed: true,
  },
  {
    slug: "promote-link",
    title: "Promote Link",
    description: "一键生成活动推广链接，支持渠道追踪与投放反馈。",
    url: "https://promote-link.simashuhui.cn/",
    tags: ["营销", "追踪"],
  },
  {
    slug: "vr-gallery",
    title: "VR Gallery",
    description: "沉浸式VR作品展厅，展示创意内容与交互案例。",
    url: "https://vr-gallery.simashuhui.cn",
    tags: ["VR", "交互"],
  },
  {
    slug: "bricks",
    title: "Bricks",
    description: "低代码积木化平台，自由组合业务体验与组件。",
    url: "https://bricks.simashuhui.cn",
    tags: ["低代码", "组件库"],
  },
  {
    slug: "ad-helper",
    title: "Ad Helper",
    description: "智能广告投放助手，给出预算与素材的最佳策略。",
    url: "https://ad-helper.simashuhui.cn",
    tags: ["广告", "分析"],
  },
  {
    slug: "engine",
    title: "Engine",
    description: "统一数据引擎，负责接入、建模与实时指标。",
    url: "https://engine.simashuhui.cn",
    tags: ["数据", "实时"],
  },
  {
    slug: "offeruc",
    title: "Offer UC",
    description: "Offer与候选人互动中心，自动化沟通每一次更新。",
    url: "https://offeruc.simashuhui.cn",
    tags: ["人效", "沟通"],
  },
];

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
                汇总我在 simashuhui.cn 旗下正在运行的工具与实验项目。每个卡片都可快速访问，方便在一个页面内感受不同产品的气质。
              </p>
            </div>
            <div className="flex flex-wrap gap-3 text-sm text-zinc-500">
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 font-medium text-zinc-600 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                实时运行中
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-zinc-900/5 px-3 py-1 font-medium text-zinc-600">
                {projects.length} 组产品实验
              </span>
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
                数据工程、AI 产品与实时交互实验室。我们用快速迭代的方式探索企业增长的下一步。
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

        <section className="grid gap-8 md:grid-cols-2">
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
                  <h2 className="text-2xl font-semibold text-zinc-900">
                    {project.title}
                  </h2>
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
        </section>
      </main>
    </div>
  );
}
