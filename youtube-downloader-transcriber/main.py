import yt_dlp

url = "https://www.youtube.com/shorts/GQkkHtBD1BM"

ydl_opts = {
    "output": "%(title)s.%(ext)s"
}

with yt_dlp.YoutubeDL(ydl_opts) as ydl:
    ydl.download([url])
