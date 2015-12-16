if exist "%~dp0PublicNarrationKey.ini" (
	for /f "delims=|" %%f in ('dir /b /s %~dp0Narration\Public\*.encrypted') do openssl aes-256-cbc -salt -a -d -in "%%f" -out "%%~pf%%~nf" -pass file:"%~dp0PublicNarrationKey.ini"
) else (
	echo "%~dp0PublicNarrationKey.ini" file missing. As spoiler protection for players the narrations require a key to unlock by a GM.
	pause
)

if exist "%~dp0NormalGMNarrationKey.ini" for /f "delims=|" %%f in ('dir /b /s %~dp0Narration\Normal\*.encrypted') do openssl aes-256-cbc -salt -a -d -in "%%f" -out "%%~pf%%~nf" -pass file:"%~dp0NormalGMNarrationKey.ini"
if exist "%~dp0FinaleNarrationKey.ini" for /f "delims=|" %%f in ('dir /b /s %~dp0Narration\Finale\*.encrypted') do openssl aes-256-cbc -salt -a -d -in "%%f" -out "%%~pf%%~nf" -pass file:"%~dp0FinaleNarrationKey.ini"