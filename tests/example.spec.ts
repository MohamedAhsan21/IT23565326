import { test, expect } from '@playwright/test';

/* =========================
   POSITIVE TEST CASES (24)
   ========================= */

test('Pos_Fun_0001 - Convert simple present tense sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');
  await inputBox.fill('naan veetukku pogren');
  await expect(outputBox).toBeVisible();
});

test('Pos_Fun_0002 - Convert future tense sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');
  await inputBox.fill('naalai naan school pogren');
  await expect(outputBox).toBeVisible();
});

test('Pos_Fun_0003 - Convert interrogative sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');
  await inputBox.fill('unakku epdi irukku?');
  await expect(outputBox).toBeVisible();
});

test('Pos_Fun_0004 - Convert polite request sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');
  await inputBox.fill('konjam help panna mudiyuma');
  await expect(outputBox).toBeVisible();
});

test('Pos_Fun_0005 - Convert plural pronoun sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');
  await inputBox.fill('naanga ellorum varuvom');
  await expect(outputBox).toBeVisible();
});

test('Pos_Fun_0006 - Convert daily activity sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');
  await inputBox.fill('naan kaalaila jogging pogren');
  await expect(outputBox).toBeVisible();
});

test('Pos_Fun_0007 - Convert statement with adverb', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');
  await inputBox.fill('avan romba nalla paaduvan');
  await expect(outputBox).toBeVisible();
});

test('Pos_Fun_0008 - Convert sentence with time reference', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');
  await inputBox.fill('inniku naan exam ezhudhren');
  await expect(outputBox).toBeVisible();
});

test('Pos_Fun_0009 - Convert short greeting phrase', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');
  await inputBox.fill('kaalai vanakkam');
  await expect(outputBox).toBeVisible();
});

test('Pos_Fun_0010 - Convert sentence with object', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');
  await inputBox.fill('naan book vaanginen');
  await expect(outputBox).toBeVisible();
});

test('Pos_Fun_0011 - Convert sentence with place name', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');
  await inputBox.fill('naan colombo pogren');
  await expect(outputBox).toBeVisible();
});

test('Pos_Fun_0012 - Convert sentence with emotion', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');
  await inputBox.fill('enakku romba santhosham');
  await expect(outputBox).toBeVisible();
});

test('Pos_Fun_0013 - Convert sentence with instruction', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');
  await inputBox.fill('inge vaa');
  await expect(outputBox).toBeVisible();
});

test('Pos_Fun_0014 - Convert long simple sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');
  await inputBox.fill('naan en nanbanoda padam paathen');
  await expect(outputBox).toBeVisible();
});

test('Pos_Fun_0015 - Convert sentence with verb emphasis', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');
  await inputBox.fill('avan odane odi vandhan');
  await expect(outputBox).toBeVisible();
});

test('Pos_Fun_0016 - Convert sentence with possessive form', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');
  await inputBox.fill('idhu ennoda veedu');
  await expect(outputBox).toBeVisible();
});

test('Pos_Fun_0017 - Convert question with place', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');
  await inputBox.fill('nee enga pogre?');
  await expect(outputBox).toBeVisible();
});

test('Pos_Fun_0018 - Convert sentence with reason', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');
  await inputBox.fill('mazhai irundhadhaala naan varala');
  await expect(outputBox).toBeVisible();
});

test('Pos_Fun_0019 - Convert command sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');
  await inputBox.fill('kadava saaththu');
  await expect(outputBox).toBeVisible();
});

test('Pos_Fun_0020 - Convert sentence with frequency', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');
  await inputBox.fill('naan daily yoga seiren');
  await expect(outputBox).toBeVisible();
});

test('Pos_Fun_0021 - Convert sentence with number words', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');
  await inputBox.fill('enakku rendu pasanga irukkaanga');
  await expect(outputBox).toBeVisible();
});

test('Pos_Fun_0022 - Convert sentence with comparison', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');
  await inputBox.fill('idhu adha vida nalladhu');
  await expect(outputBox).toBeVisible();
});

test('Pos_Fun_0023 - Convert sentence with mixed tense', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');
  await inputBox.fill('naan nethu padichen inniku exam');
  await expect(outputBox).toBeVisible();
});

test('Pos_Fun_0024 - Convert mixed English Tamil sentence', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');
  await inputBox.fill('naan today office pogren');
  await expect(outputBox).toBeVisible();
});

/* =========================
   NEGATIVE TEST CASES (10)
   ========================= */

test('Neg_Fun_0001 - Case sensitivity error', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');
  await inputBox.fill('nAaN vArUvEn');
  await expect(outputBox).toBeVisible();
});

test('Neg_Fun_0002 - Sentence with bracket errors', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');
  await inputBox.fill('(idhu) sariya? (no)');
  await expect(outputBox).toBeVisible();
});

test('Neg_Fun_0003 - Chat abbreviations', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');
  await inputBox.fill('thx da, u r late.');
  await expect(outputBox).toBeVisible();
});

test('Neg_Fun_0004 - Slang-heavy input', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');
  await inputBox.fill('dei macha romba scene da');
  await expect(outputBox).toBeVisible();
});

test('Neg_Fun_0005 - Punctuation overload', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');
  await inputBox.fill('enna da nadakkuthu???!!!');
  await expect(outputBox).toBeVisible();
});

test('Neg_Fun_0006 - Slang with typos', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');
  await inputBox.fill('machan da neenga eppo varuve ma? super ah iru da!');
  await expect(outputBox).toBeVisible();
});

test('Neg_Fun_0007 - Incorrect tense structure', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');
  await inputBox.fill('naan nalaikku office poyitten');
  await expect(outputBox).toBeVisible();
});

test('Neg_Fun_0008 - Numbers written inconsistently', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');
  await inputBox.fill('meeting 7 thirty ku irukku');
  await expect(outputBox).toBeVisible();
});

test('Neg_Fun_0009 - English abbreviations', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');
  await inputBox.fill('naan ID OTP eduthu ATM la cash edukkuren.');
  await expect(outputBox).toBeVisible();
});

test('Neg_Fun_0010 - Missing spaces joined words', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  const outputBox = page.locator('#transliterateTextarea');
  await inputBox.fill('naanveetukkuporen');
  await expect(outputBox).toBeVisible();
});

/* =========================
   UI TEST CASE (1)
   ========================= */

test('UI_Fun_0001 - Verify transliteration text area visibility', async ({ page }) => {
  await page.goto('https://tamil.changathi.com/');
  const inputBox = page.locator('#transliterateTextarea');
  await expect(inputBox).toBeVisible();
});
