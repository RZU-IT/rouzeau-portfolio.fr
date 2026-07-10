@echo off
cd /d "%~dp0"
start "" "http://127.0.0.1:8014/"
python -m http.server 8014 --bind 127.0.0.1

