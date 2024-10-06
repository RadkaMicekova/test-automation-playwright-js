import { test } from "@playwright/test";

test("testovanie stranky", async ({ page }) => {
    await page.goto("https://team8-2022brno.herokuapp.com/registrace");
    console.log(await page.title());
    await page.screenshot ({path: "screenshot.png"})
});


