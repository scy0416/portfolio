import type { Route } from "./+types/home";

import { Github } from "lucide-react";
import { useTranslation } from "react-i18next";

import { Button } from "~/core/components/ui/button";
import i18next from "~/core/lib/i18next.server";

export const meta: Route.MetaFunction = ({ data }) => {
  return [
    { title: data?.title },
    { name: "description", content: data?.subtitle },
  ];
};

export async function loader({ request }: Route.LoaderArgs) {
  const t = await i18next.getFixedT(request);
  return {
    title: t("home.title"),
    subtitle: t("home.subtitle"),
  };
}

export default function Home() {
  const { t } = useTranslation();
  const languages = t("skill.language.items", {
    returnObjects: true,
  }) as string[];
  const frameworks = t("skill.frameworks.items", {
    returnObjects: true,
  }) as string[];
  const databases = t("skill.databases.items", {
    returnObjects: true,
  }) as string[];
  const devOpsInfra = t("skill.DevOps/Infra.items", {
    returnObjects: true,
  }) as string[];
  const licenses = t("etc.license.items", {
    returnObjects: true,
  }) as string[];
  const projects = t("project.items", {
    returnObjects: true,
  }) as {
    title: string;
    description: string;
    image: string;
    tags: string[];
    github: string;
  }[];
  return (
    <main className="mx-auto h-full w-full max-w-screen-2xl px-4 py-12 sm:px-5 sm:py-16 md:py-24">
      <section className="flex flex-col items-center justify-center text-center">
        <h1 className="from-primary bg-gradient-to-r via-fuchsia-500 to-violet-500 bg-clip-text text-4xl font-semibold tracking-tight text-transparent md:text-6xl">
          {t("home.title")}
        </h1>
        <p className="text-muted-foreground mt-4 max-w-2xl text-sm text-balance md:text-base">
          {t("home.subtitle")}
        </p>
        <p className="text-accent-foreground mt-2 text-xs md:text-sm">
          {t("home.targetJob")}
        </p>
      </section>

      <div className="bg-border mx-auto my-10 h-px w-16 md:my-14 md:w-20" />

      <section className="grid gap-6 md:grid-cols-2">
        <div className="border-border/50 bg-card/40 hover:shadow-primary/10 rounded-2xl border p-5 shadow-sm transition-shadow hover:shadow-md sm:p-6 md:p-8">
          <h2 className="mb-3 text-lg font-semibold md:text-xl">
            {t("skill.title")}
          </h2>
          <div className="mb-4">
            <h3 className="text-muted-foreground mb-2 text-xs font-medium">
              {t("skill.language.title")}
            </h3>
            <div className="flex flex-wrap gap-2">
              {languages.map((item, idx) => (
                <span
                  key={`${item}-${idx}`}
                  className="border-border/60 text-foreground/80 rounded-full border bg-transparent px-3 py-1 text-xs"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="mb-4">
            <h3 className="text-muted-foreground mb-2 text-xs font-medium">
              {t("skill.frameworks.title")}
            </h3>
            <div className="flex flex-wrap gap-2">
              {frameworks.map((item, idx) => (
                <span
                  key={`${item}-${idx}`}
                  className="border-border/60 text-foreground/80 rounded-full border bg-transparent px-3 py-1 text-xs"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="mb-2">
            <h3 className="text-muted-foreground mb-2 text-xs font-medium">
              {t("skill.databases.title")}
            </h3>
            <div className="flex flex-wrap gap-2">
              {databases.map((item, idx) => (
                <span
                  key={`${item}-${idx}`}
                  className="border-border/60 text-foreground/80 rounded-full border bg-transparent px-3 py-1 text-xs"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-muted-foreground mb-2 text-xs font-medium">
              {t("skill.DevOps/Infra.title")}
            </h3>
            <div className="flex flex-wrap gap-2">
              {devOpsInfra.map((item, idx) => (
                <span
                  key={`${item}-${idx}`}
                  className="border-border/60 text-foreground/80 rounded-full border bg-transparent px-3 py-1 text-xs"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="border-border/50 bg-card/40 hover:shadow-primary/10 rounded-2xl border p-5 shadow-sm transition-shadow hover:shadow-md sm:p-6 md:p-8">
          <h2 className="mb-3 text-lg font-semibold md:text-xl">
            {t("experience.title")}
          </h2>
          <p className="text-muted-foreground text-sm">
            {t("experience.content")}
          </p>
          <p className="text-muted-foreground text-sm">
            {t("experience.content2")}
          </p>
          <div className="mt-6">
            <h3 className="text-muted-foreground mb-2 text-xs font-medium">
              {t("etc.license.title")}
            </h3>
            <div className="flex flex-wrap gap-2">
              {licenses.map((item: string, idx: number) => (
                <span
                  key={`${item}-${idx}`}
                  className="border-border/60 text-foreground/80 rounded-full border bg-transparent px-3 py-1 text-xs"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="grid gap-6">
        <div className="border-border/50 bg-card/40 rounded-2xl border p-5 shadow-sm sm:p-6 md:p-8">
          <h2 className="mb-3 text-lg font-semibold md:text-xl">
            {t("project.title")}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((item) => (
              <div
                key={item.title}
                className="group border-border/60 bg-card/30 hover:border-border/80 hover:shadow-primary/10 flex transform-gpu flex-col gap-3 rounded-xl border p-3 shadow-sm transition-[colors,shadow,transform] hover:-translate-y-0.5 hover:shadow-md motion-reduce:hover:translate-y-0 sm:p-4"
              >
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    loading="lazy"
                    decoding="async"
                    className="aspect-[16/9] w-full object-cover transition-transform duration-300 group-hover:scale-[1.02] motion-reduce:transition-none"
                  />
                </div>
                <div className="mt-1">
                  <h3 className="text-foreground text-sm font-medium">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mt-1 text-sm break-words">
                    {item.description}
                  </p>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={`${tag}-${idx}`}
                      className="border-border/60 text-foreground/80 rounded-full border px-2.5 py-0.5 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-3">
                  <Button variant="ghost" size="sm" asChild>
                    <a
                      href={item.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${item.title} github`}
                      className="inline-flex items-center gap-1.5"
                    >
                      <Github className="size-4" /> Github
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
