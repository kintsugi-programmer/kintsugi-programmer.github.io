import sharp from "sharp";
import { readFileSync, existsSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const W = 1200, H = 630;

const profilePath = resolve(root, "public/profile.webp");

async function main() {
  if (!existsSync(profilePath)) {
    console.log("profile.webp not found, skipping OG image generation");
    return;
  }

  const profile = await sharp(profilePath).resize(220, 220).toBuffer();

  const circle = Buffer.from(
    `<svg width="220" height="220"><circle cx="110" cy="110" r="110" fill="white"/></svg>`,
  );

  const avatar = await sharp(profile)
    .composite([{ input: circle, blend: "dest-in" }])
    .png()
    .toBuffer();

  const borderCircle = Buffer.from(
    `<svg width="228" height="228"><circle cx="114" cy="114" r="113" fill="none" stroke="#e8e4df" stroke-width="3"/></svg>`,
  );

  const svg = Buffer.from(`
    <svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${W}" height="${H}" fill="#fafaf7"/>
      <text x="80" y="165" font-family="sans-serif" font-size="13" fill="#999994" letter-spacing="1.04" text-transform="uppercase">
        Chief Product Engineer @ Metagates Innovation
      </text>
      <text x="80" y="275" font-family="serif" font-size="72" fill="#1a1a1a" letter-spacing="-1.44">
        Siddhant Bali
      </text>
      <rect x="80" y="300" width="80" height="3" fill="#7c9a8a"/>
      <text x="80" y="365" font-family="sans-serif" font-size="22" fill="#555550">
        <tspan x="80" dy="0">chief product engineer · polymath developer</tspan>
        <tspan x="80" dy="34">building HealthTech SaaS</tspan>
      </text>
      <text x="80" y="470" font-family="sans-serif" font-size="16" fill="#999994">
        <tspan x="80" dy="0">2x Award-winning · IIIT Delhi CSD'26 · Dean's List</tspan>
        <tspan x="80" dy="26">github.com/kintsugi-programmer · sbali.tech</tspan>
      </text>
    </svg>
  `);

  await sharp({
    create: { width: W, height: H, channels: 4, background: { r: 250, g: 250, b: 247, alpha: 1 } },
  })
    .composite([
      { input: svg, top: 0, left: 0 },
      { input: borderCircle, top: 197, left: 876 },
      { input: avatar, top: 200, left: 880 },
    ])
    .png()
    .toFile(resolve(root, "public/og-image.png"));

  console.log("✅ Generated public/og-image.png (1200x630)");
}

main().catch((err) => {
  console.error("OG generation failed:", err);
  process.exit(1);
});
