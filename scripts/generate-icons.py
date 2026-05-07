"""Generate PWA icons + favicon + apple-touch-icon for VELDR Barber."""
from PIL import Image, ImageDraw, ImageFont
import os

BG = (2, 4, 10)
GOLD = (201, 168, 76)
WHITE = (240, 236, 228)
WIN_FONTS = "C:/Windows/Fonts/"


def load(paths, size):
    for p in paths:
        if os.path.exists(p):
            try:
                return ImageFont.truetype(p, size)
            except Exception:
                pass
    return ImageFont.load_default()


def make_icon(side):
    img = Image.new("RGB", (side, side), BG)
    draw = ImageDraw.Draw(img)
    # Gold border ring
    margin = side // 14
    draw.ellipse((margin, margin, side - margin, side - margin), outline=GOLD, width=max(2, side // 90))
    # "V" mark
    f = load([WIN_FONTS + "arialbd.ttf", WIN_FONTS + "ARIALBD.TTF"], int(side * 0.55))
    txt = "V"
    bbox = draw.textbbox((0, 0), txt, font=f)
    w = bbox[2] - bbox[0]
    h = bbox[3] - bbox[1]
    draw.text(((side - w) / 2 - bbox[0], (side - h) / 2 - bbox[1] - side // 30), txt, fill=GOLD, font=f)
    return img


out_dir = os.path.dirname(os.path.abspath(__file__)) + "/../public"
os.makedirs(out_dir, exist_ok=True)

# PWA manifest icons
for size, name in [(192, "icon.png"), (512, "icon-512.png"), (180, "apple-touch-icon.png")]:
    img = make_icon(size)
    img.save(os.path.join(out_dir, name), "PNG", optimize=True)
    print(f"Wrote {name}: {size}x{size} ({os.path.getsize(os.path.join(out_dir, name))} bytes)")

# Favicon - multi-size ICO
sizes = [(16, 16), (32, 32), (48, 48)]
ico_imgs = []
for s in sizes:
    img = make_icon(s[0])
    ico_imgs.append(img)
ico_imgs[0].save(os.path.join(out_dir, "favicon.ico"), format="ICO", sizes=sizes)
print(f"Wrote favicon.ico: {os.path.getsize(os.path.join(out_dir, 'favicon.ico'))} bytes")
