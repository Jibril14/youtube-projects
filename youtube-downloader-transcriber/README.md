# YouTube Video Downloader & Transcriber

A simple Python project that allows you to **download a YouTube video and transcribe its audio into subtitles/transcript format**.

This project was created as a practical Python tutorial, where we build the application step by step and explore how different Python libraries work together.

## 🎥 Tutorial

This project is explained step by step in the YouTube tutorial.

**Watch the tutorial:**
[▶️ YouTube Video — ](YOUR_TUTORIAL_VIDEO_URL)

**YouTube Channel:**
[TechWithAbdulwasiu](https://www.youtube.com/@TechWithAbdulwasiu)

---

## What This Project Does

The basic workflow is:

```text
YouTube URL
     ↓
Download Video
     ↓
Extract Audio
     ↓
Transcribe Audio
     ↓
Generate Transcript / SRT
```

The project uses Python together with libraries such as `yt-dlp`, `moviepy`, and OpenAI Whisper.

---

# 🚀 Getting Started

## 1. Clone the Repository

Clone this repository to your computer:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Then move into the project directory:

```bash
cd youtube-downloader-transcriber
```

---

## 2. Create a Virtual Environment

It is recommended to use a Python virtual environment so that the packages installed for this project don't interfere with other Python projects.

### Windows

```powershell
python -m venv .venv
```

### macOS / Linux

```bash
python3 -m venv .venv
```

---

## 3. Activate the Virtual Environment

### Windows PowerShell

```powershell
.venv\Scripts\Activate.ps1
```

### Windows Command Prompt

```cmd
.venv\Scripts\activate
```

### macOS / Linux

```bash
source .venv/bin/activate
```

Once activated, you should see something similar to this in your terminal:

```text
(.venv) C:\your-project>
```

---

# 📦 Install the Required Packages

With the virtual environment activated, install the dependencies from `requirements.txt`:

```bash
pip install -r requirements.txt
```

---

# 🍫 Install Chocolatey on Windows

This project may require **FFmpeg** for processing audio and video.

If you're following the Windows setup from the tutorial, you can install Chocolatey using **Windows PowerShell**.

Open PowerShell **as Administrator** and run:

```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force; `
[System.Net.ServicePointManager]::SecurityProtocol = `
[System.Net.ServicePointManager]::SecurityProtocol -bor 3072; `
iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```

After Chocolatey has been installed, you can use it to install FFmpeg:

```powershell
choco install ffmpeg -y
```

You can verify that FFmpeg was installed correctly with:

```powershell
ffmpeg -version
```

> **Note:** Only run installation commands from sources you trust. For the latest Chocolatey installation instructions, refer to the official Chocolatey documentation.

---

For Mac and Linux install FFmpeg program from https://ffmpeg.org/download.html

# ▶️ Run the Project

Make sure your virtual environment is activated, then run:

```bash
python main.py
```

Follow the instructions provided by the script.

---

# 🛠️ Requirements

Before running the project, make sure you have:

- Python 3.x
- FFmpeg
- An active internet connection
- The Python packages listed in `requirements.txt`

---

# 📚 Libraries Used

Some of the main libraries used in this project include:

- **yt-dlp** — Downloads videos and audio from supported websites.
- **OpenAI Whisper** — Converts speech from audio into text.

The exact dependencies used by the project are listed in:

```text
requirements.txt
```

---

## 📄 License

This project is provided for **educational purposes**. Please make sure you have the necessary rights or permissions to download and process any content you use.

---

## ⭐ Support the Channel

If you found this project useful, consider **subscribing to my YouTube channel** for more Python, WordPress, web development, and programming tutorials.

👉 [TechWithAbdulwasiu](https://www.youtube.com/@TechWithAbdulwasiu)

If this project helped you, you can also ⭐ **star this repository** on GitHub.
