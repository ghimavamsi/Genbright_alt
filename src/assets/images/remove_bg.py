from PIL import Image
import glob
import os

def remove_bg(filepath):
    print(f"Processing {filepath}...")
    img = Image.open(filepath).convert('RGBA')
    data = img.getdata()
    nd = []
    
    bg_r, bg_g, bg_b = img.getpixel((0,0))[:3]
    
    for r, g, b, a in data:
        # Distance to corner color
        dist = ((r - bg_r)**2 + (g - bg_g)**2 + (b - bg_b)**2)**0.5
        
        # Pure brightness
        brightness = (r + g + b) / 3
        
        # Stricter thresholds for complete transparency
        if dist < 45 or brightness > 230:
            nd.append((r, g, b, 0))
        elif dist < 80 or brightness > 210:
            # Soft shadow transition
            alpha_dist = 255 * (dist - 45) / 35
            alpha_bright = 255 * (230 - brightness) / 20
            alpha = int(min(alpha_dist, alpha_bright))
            alpha = max(0, min(255, alpha))
            nd.append((r, g, b, alpha))
        else:
            nd.append((r, g, b, 255))
            
    img.putdata(nd)
    img.save(filepath)
    print(f"Saved {filepath}")

for f in glob.glob('c:/Users/sunseaz/Desktop/genbright_alt/src/assets/images/*.png'):
    if any(n in os.path.basename(f) for n in ['think.png', 'feel.png', 'move.png', 'pause.png']):
        remove_bg(f)
