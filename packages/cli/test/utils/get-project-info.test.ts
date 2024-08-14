import path from "path"
import { describe, expect, test } from "vitest"

import { getProjectInfo } from "../../src/utils/get-project-info"

describe("get project info", async () => {
  test.each([
    {
      name: "next-app",
      type: {
        framework: "next-app",
        isSrcDir: false,
        isRSC: true,
        isTsx: true,
        tailwindConfigFile: "tailwind.config.ts",
        tailwindCssFile: "app/globals.css",
        aliasPrefix: "@",
      },
    },
    {
      name: "next-app-src",
      type: {
        framework: "next-app",
        isSrcDir: true,
        isRSC: true,
        isTsx: true,
        tailwindConfigFile: "tailwind.config.ts",
        tailwindCssFile: "src/app/styles.css",
        aliasPrefix: "#",
      },
    },
    {
      name: "next-pages",
      type: {
        framework: "next-pages",
        isSrcDir: false,
        isRSC: false,
        isTsx: true,
        tailwindConfigFile: "tailwind.config.ts",
        tailwindCssFile: "styles/globals.css",
        aliasPrefix: "~",
      },
    },
    {
      name: "next-pages-src",
      type: {
        framework: "next-pages",
        isSrcDir: true,
        isRSC: false,
        isTsx: true,
        tailwindConfigFile: "tailwind.config.ts",
        tailwindCssFile: "src/styles/globals.css",
        aliasPrefix: "@",
      },
    },
    {
      name: "t3-app",
      type: {
        framework: "next-app",
        isSrcDir: true,
        isRSC: true,
        isTsx: true,
        tailwindConfigFile: "tailwind.config.ts",
        tailwindCssFile: "src/styles/globals.css",
        aliasPrefix: "~",
      },
    },
    {
      name: "t3-pages",
      type: {
        framework: "next-pages",
        isSrcDir: true,
        isRSC: false,
        isTsx: true,
        tailwindConfigFile: "tailwind.config.ts",
        tailwindCssFile: "src/styles/globals.css",
        aliasPrefix: "~",
      },
    },
    {
      name: "remix",
      type: {
        framework: "remix",
        isSrcDir: false,
        isRSC: false,
        isTsx: true,
        tailwindConfigFile: "tailwind.config.ts",
        tailwindCssFile: "app/tailwind.css",
        aliasPrefix: "~",
      },
    },
    {
      name: "vite",
      type: {
        framework: "vite",
        isSrcDir: true,
        isRSC: false,
        isTsx: true,
        tailwindConfigFile: "tailwind.config.js",
        tailwindCssFile: "src/index.css",
        aliasPrefix: null,
      },
    },
  ])(`getProjectType($name) -> $type`, async ({ name, type }) => {
    expect(
      await getProjectInfo(
        path.resolve(__dirname, `../fixtures/frameworks/${name}`)
      )
    ).toStrictEqual(type)
  })
})
