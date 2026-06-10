"""Upscale images 2x using high-quality Lanczos resampling."""

import sys
from pathlib import Path
from PIL import Image


def main():
    if len(sys.argv) < 2:
        print("Usage: python upscale_images.py <input_dir> [output_dir]")
        sys.exit(1)

    input_dir = Path(sys.argv[1])
    output_dir = Path(sys.argv[2]) if len(sys.argv) > 2 else input_dir
    output_dir.mkdir(parents=True, exist_ok=True)

    extensions = {".jpg", ".jpeg", ".png", ".webp", ".avif"}
    images = sorted([f for f in input_dir.iterdir() if f.suffix.lower() in extensions])

    if not images:
        print(f"No images found in {input_dir}")
        sys.exit(0)

    print(f"Upscaling {len(images)} images from {input_dir}...")
    for img_path in images:
        img = Image.open(img_path)
        w, h = img.size
        img_out = img.resize((w * 2, h * 2), Image.LANCZOS)
        output_path = output_dir / img_path.name
        img_out.save(output_path, quality=95)
        print(f"  {img_path.name}: {w}x{h} -> {w*2}x{h*2}")

    print("Done.")


if __name__ == "__main__":
    main()
