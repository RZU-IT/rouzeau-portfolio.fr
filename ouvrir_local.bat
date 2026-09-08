@echo off
cd /d "%~dp0"
start "" "http://127.0.0.1:9505/"
python -m http.server 9505 --bind 127.0.0.1

REM Copyright RZU Informatique
