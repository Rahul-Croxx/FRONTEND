import urllib.request
import re

html = urllib.request.urlopen('https://croxx-fertilizer.de/').read().decode('utf-8')
videos = re.findall(r'[^"\'<>]+(?:mp4|webm|m4v)', html)
for v in videos:
    print(v)
