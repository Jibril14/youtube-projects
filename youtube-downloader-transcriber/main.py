import os
import yt_dlp
import whisper

url = "https://www.youtube.com/shorts/GQkkHtBD1BM"

def download_youtube_video(url: str) -> str:

    output_folder = "video_storage"
    os.makedirs(output_folder, exist_ok=True)

    video_opts = {
        "format": (
            "bestvideo[height<=1080][vcodec^=avc1]+"
            "bestaudio[acodec^=mp4]/"
            "best[height<=1080]"
        ),
        "merge_output_format": "mp4",

        "outtmpl": os.path.join(
            output_folder,
            "%(title)s.%(ext)s"
        ),

        "quiet": False
    }

    audio_opts = {
        "format": "bestaudio",
        "outtmpl": os.path.join(
            output_folder,
            "%(title)s.%(ext)s"
        )
    }

    with yt_dlp.YoutubeDL(audio_opts) as ydl:
        info = ydl.extract_info(url, download=False)
        # video_title = info.get("title", "Unknown Title")
        # file_path = os.path.join(output_folder, f"{video_title}.mp4")
        audio_title = info.get("title", "Unknown Title")
        audio_ext = info.get("ext")
        file_path = os.path.join(output_folder, f"{audio_title}.{audio_ext}")
        ydl.download([url])

    print("Video Path", file_path)
    return file_path


file_path = download_youtube_video(url)


def transcribe_audio_to_srt(file_path, model_size="base"):
    if not os.path.exists(file_path):
        print(f"Error: File {file_path} not found")
        return None

    model = whisper.load_model(model_size)
    result = model.transcribe(file_path, task="transcribe", fp16=False)

    output_file = os.path.splitext(file_path)[0] + "_transcript.srt"
    with open(output_file, "w", encoding="utf-8") as srt:
        for i, segment in enumerate(result["segments"], start=1):
            start = segment["start"]
            end = segment["end"]
            text = segment["text"].strip()

            def format_time(seconds):
                hours = int(seconds // 3600)
                minutes = int((seconds % 3600) // 60)
                secs = int(seconds % 60)
                milliseconds = int((seconds % 1) * 1000)
                return f"{hours:02d}:{minutes:02d}:{secs:02d},{milliseconds:03d}"

            start_time = format_time(start)
            end_time = format_time(end)

            srt.write(f"{i}\n{start_time} --> {end_time}\n{text}\n\n")

    return output_file


transcribe_audio_to_srt(file_path, model_size="base")