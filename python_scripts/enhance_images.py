"""Enhance image quality: Lanczos upscale 2x with sharpening."""

import sys
from pathlib import Path
import cv2
import numpy as np


def main():
    if len(sys.argv) < 2:
        print("Usage: python enhance_images.py <input_dir> [output_dir]")
        sys.exit(1)

    input_dir = Path(sys.argv[1])
    output_dir = Path(sys.argv[2]) if len(sys.argv) > 2 else input_dir
    output_dir.mkdir(parents=True, exist_ok=True)

    extensions = {".jpg", ".jpeg", ".png", ".webp", ".avif"}
    images = sorted([f for f in input_dir.iterdir() if f.suffix.lower() in extensions])

    if not images:
        print(f"No images found in {input_dir}")
        sys.exit(0)

    sharpen = np.array([[-1, -1, -1], [-1, 9, -1], [-1, -1, -1]], dtype=np.float32)

    print(f"Enhancing {len(images)} images from {input_dir}...")
    for img_path in images:
        print(f"  {img_path.name}...", end=" ", flush=True)
        img = cv2.imread(str(img_path), cv2.IMREAD_COLOR)
        if img is None:
            print("FAILED")
            continue
        h, w = img.shape[:2]
        upscaled = cv2.resize(img, (w * 2, h * 2), interpolation=cv2.INTER_LANCZOS4)
        enhanced = cv2.filter2D(upscaled, -1, sharpen)
        cv2.imwrite(str(output_dir / img_path.name), enhanced, [cv2.IMWRITE_JPEG_QUALITY, 95])
        print(f"{w}x{h} -> {w*2}x{h*2}")

    print("Done.")


if __name__ == "__main__":
    main()
