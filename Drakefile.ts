import { desc, run, task, sh } from "https://deno.land/x/drake@v1.6.0/mod.ts";

desc("Minimal Drake task");
task("permissions", [], async function () {
    console.log("Allow permissions!");
    await sh("deno run --allow-env permission.ts");
});

run();