from PIL import Image, ImageDraw, ImageFilter
import os

W, H = 1200, 630
BG = (2, 4, 10)          # #02040a
GOLD = (201, 168, 76)    # #c9a84c
GOLD_DIM = (180, 145, 55)
WHITE = (240, 236, 228)  # text-primary
DIM = (138, 150, 165)    # text-secondary

img = Image.new("RGB", (W, H), BG)
draw = ImageDraw.Draw(img)

# Radial gradient overlay (top-center golden glow)
glow = Image.new("RGB", (W, H), BG)
gd = ImageDraw.Draw(glow)
for r in range(420, 0, -8):
    a = int(40 * (r / 420))
    gd.ellipse((W // 2 - r, -r // 2, W // 2 + r, r), fill=(20 + a // 4, 18 + a // 5, 30, ))
glow = glow.filter(ImageFilter.GaussianBlur(50))
img = Image.blend(img, glow, 0.5)
draw = ImageDraw.Draw(img)

# Gold horizontal line accents
draw.rectangle((100, 290, 200, 293), fill=GOLD)
draw.rectangle((1000, 337, 1100, 340), fill=GOLD)

# Try fonts
def load(font_paths, size):
    for p in font_paths:
        if os.path.exists(p):
            try:
                from PIL import ImageFont
                return ImageFont.truetype(p, size)
            except Exception:
                pass
    from PIL import ImageFont
    return ImageFont.load_default()

WIN_FONTS = "C:/Windows/Fonts/"
heavy = load([WIN_FONTS + "arialbd.ttf", WIN_FONTS + "ARIALBD.TTF"], 130)
medium = load([WIN_FONTS + "arial.ttf", WIN_FONTS + "ARIAL.TTF"], 36)
small = load([WIN_FONTS + "arial.ttf"], 22)

# Eyebrow
draw.text((100, 220), "PORTFOLIO  -  DEMO", fill=GOLD, font=small, spacing=8)

# Main title — VELDR (white) BARBER (gold)
draw.text((100, 270), "VELDR", fill=WHITE, font=heavy)
draw.text((100, 410), "BARBER", fill=GOLD, font=heavy)

# Tagline
draw.text((100, 555), "Gde forma srece preciznost", fill=DIM, font=medium)

# Bottom-right credit
draw.text((W - 320, H - 50), "svilenkovic.com", fill=GOLD_DIM, font=small)

out_dir = os.path.dirname(os.path.abspath(__file__)) + "/../public"
os.makedirs(out_dir, exist_ok=True)
img.save(out_dir + "/og.png", "PNG", optimize=True)
print("Wrote", out_dir + "/og.png", os.path.getsize(out_dir + "/og.png"), "bytes")
