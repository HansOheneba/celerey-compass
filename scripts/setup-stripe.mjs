// scripts/setup-stripe.mjs
// Run once to create the Compass product & price in Stripe.
// Usage: node scripts/setup-stripe.mjs

import Stripe from "stripe";
import { readFileSync, writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const envPath = resolve(__dirname, "../.env.local");

// Pull the secret key straight from .env.local so we don't need dotenv
const envRaw = readFileSync(envPath, "utf-8");
const secretKeyMatch = envRaw.match(/STRIPE_SECRET_KEY\s*=\s*(.+)/);
if (!secretKeyMatch) {
  console.error("STRIPE_SECRET_KEY not found in .env.local");
  process.exit(1);
}
const secretKey = secretKeyMatch[1].trim();

const stripe = new Stripe(secretKey);

async function main() {
  console.log("Creating Stripe product...");

  const product = await stripe.products.create({
    name: "Compass Programme 2026",
    description:
      "Five-week career discovery programme for high school students. July 6 – Aug 7, 2026.",
  });
  console.log("✓ Product created:", product.id);

  const price = await stripe.prices.create({
    product: product.id,
    unit_amount: 50000, // USD 500.00 in cents
    currency: "usd",
    nickname: "Early bird — 2026",
  });
  console.log("✓ Price created:", price.id);

  // Patch STRIPE_PRICE_ID in .env.local
  const updated = envRaw.replace(
    /STRIPE_PRICE_ID=.*/,
    `STRIPE_PRICE_ID=${price.id}`,
  );
  writeFileSync(envPath, updated, "utf-8");
  console.log(`\n✓ .env.local updated → STRIPE_PRICE_ID=${price.id}`);
  console.log("\nDone! Restart your dev server to pick up the new price ID.");
}

main().catch((err) => {
  console.error("Error:", err.message);
  process.exit(1);
});
