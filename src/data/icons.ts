import {
  siTypescript, siJavascript, siPython, siOpenjdk, siReact, siNextdotjs, siAstro,
  siTailwindcss, siHtml5, siCss, siNodedotjs, siFastapi, siPostgresql, siMongodb,
  siMysql, siDocker, siGit, siGithub, siLinux, siFigma,
} from "simple-icons";

export const icons = {
  typescript: siTypescript, javascript: siJavascript, python: siPython, java: siOpenjdk,
  react: siReact, nextjs: siNextdotjs, astro: siAstro, tailwind: siTailwindcss,
  html: siHtml5, css: siCss, nodejs: siNodedotjs, fastapi: siFastapi,
  postgresql: siPostgresql, mongodb: siMongodb, mysql: siMysql, docker: siDocker,
  git: siGit, github: siGithub, linux: siLinux, figma: siFigma,
};

export type IconName = keyof typeof icons;

export const iconLabel = (name: string) =>
  name === "java" ? "Java" : icons[name as IconName]?.title ?? name;
