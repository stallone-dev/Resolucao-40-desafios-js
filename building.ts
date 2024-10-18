/*
    This code has the purpose of minify and converting TypeScript to JSM to run in the browser
*/

import { build, stop } from "@deps";

await build({
    entryPoints: ["./challenges/**/*.ts"],
    bundle: true,
    platform: "browser",
    minify: true,
    treeShaking: true,
    format: "esm",
    outbase: "./challenges",
    outdir: "./build",
    outExtension: { ".js": ".mjs" },
});

await stop();
