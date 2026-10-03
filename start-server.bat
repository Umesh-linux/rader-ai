@echo off
title Rader AI Localhost Server
echo =======================================================
echo          RADER AI - LOCALHOST SERVER LAUNCHER
echo =======================================================
echo.
echo Starting local server on http://localhost:5000 ...
echo Opening your browser automatically...
echo.
timeout /t 1 >nul
start http://localhost:5000
node backend/server.js
pause
