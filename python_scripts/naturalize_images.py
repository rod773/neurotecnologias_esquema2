"""Enhance product images to look more natural: corrects color cast,
balances exposure, and applies subtle contrast/sharpness adjustments.

Each image is analyzed first so adjustments adapt to its content.
"""

import sys
from pathlib import Path
from PIL import Image, ImageEnhance, ImageOps, ImageStat


def _histogram_coverage(img: Image.Image) -> float:
    """Fraction (0-1) of the 0-255 range actually used across all channels."""
    stat = ImageStat.Stat(img)
    coverage = 0.0
    for ext in stat.extrema:
        lo, hi = ext
        coverage = max(coverage, (hi - lo) / 255.0)
    return coverage


def naturalize(img: Image.Image, strength: float = 0.5) -> Image.Image:
    """Apply adaptive enhancements for a more natural look.

    strength (0-1): 0 = no change, 1 = full effect.
    Images that already have good dynamic range get gentler treatment.
    """
    img = img.convert("RGB")

    cov = _histogram_coverage(img)

    # --- 1. Gentle auto contrast (only if histogram is compressed) ---
    if cov < 0.90:
        img = ImageOps.autocontrast(img, cutoff=2)

    # --- 2. Slightly boost contrast ---
    contrast = ImageEnhance.Contrast(img)
    img = contrast.enhance(1.0 + 0.10 * strength)

    # --- 3. Gentle color correction (reduces casts) ---
    color = ImageEnhance.Color(img)
    img = color.enhance(1.0 + 0.08 * strength)

    # --- 4. Subtle sharpening (very mild to avoid artifacting) ---
    sharpness = ImageEnhance.Sharpness(img)
    img = sharpness.enhance(1.0 + 0.05 * strength)

    # --- 5. Lift shadows slightly ---
    brightness = ImageEnhance.Brightness(img)
    img = brightness.enhance(1.0 + 0.03 * strength)

    return img


def main():
    if len(sys.argv) < 2:
        print("Usage: python naturalize_images.py <input_dir> [output_dir] [strength]")
        print("  strength: 0.0 (no change) to 1.0 (max effect), default 0.5")
        sys.exit(1)

    input_dir = Path(sys.argv[1])
    output_dir = Path(sys.argv[2]) if len(sys.argv) > 2 else input_dir
    strength = float(sys.argv[3]) if len(sys.argv) > 3 else 0.5
    strength = max(0.0, min(1.0, strength))

    output_dir.mkdir(parents=True, exist_ok=True)

    extensions = {".jpg", ".jpeg", ".png", ".webp", ".avif"}
    images = sorted([f for f in input_dir.iterdir() if f.suffix.lower() in extensions])

    if not images:
        print(f"No images found in {input_dir}")
        sys.exit(0)

    print(f"Processing {len(images)} images (strength={strength})...")
    for img_path in images:
        img = Image.open(img_path)
        w, h = img.size
        out = naturalize(img, strength)
        out_path = output_dir / img_path.name
        out.save(out_path, quality=95)
        cov = _histogram_coverage(img)
        print(f"  {img_path.name}: {w}x{h} (coverage={cov:.0%}) -> saved")

    print("Done.")


if __name__ == "__main__":
    main()
