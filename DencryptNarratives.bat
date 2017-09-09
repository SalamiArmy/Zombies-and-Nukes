if exist "%~dp0PublicNarrationKey.ini" (
	if exist "%~dp0Narration\Public\*.encrypted" (
		for /f "delims=|" %%f in ('dir /b /s %~dp0Narration\Public\*.encrypted') do "%~dp0openssl-0.9.8h-1-bin\openssl.exe" aes-256-cbc -salt -a -d -in "%%f" -out "%%~pf%%~nf" -pass file:"%~dp0PublicNarrationKey.ini"
	) else (
		echo "%~dp0Narration\Public\*.encrypted" file missing.
		pause
	)
) else (
	echo "%~dp0PublicNarrationKey.ini" file missing. As spoiler protection for players the narrations require a key to unlock by a GM.
	pause
)

if exist "%~dp0NormalGMNarrationKey.ini" if exist "%~dp0Narration\Normal\*.encrypted" for /f "delims=|" %%f in ('dir /b /s %~dp0Narration\Normal\*.encrypted') do "%~dp0openssl-0.9.8h-1-bin\openssl.exe" aes-256-cbc -salt -a -d -in "%%f" -out "%%~pf%%~nf" -pass file:"%~dp0NormalGMNarrationKey.ini"
if exist "%~dp0FinaleNarrationKey.ini" if exist "%~dp0Narration\Finale\*.encrypted" for /f "delims=|" %%f in ('dir /b /s %~dp0Narration\Finale\*.encrypted') do "%~dp0openssl-0.9.8h-1-bin\openssl.exe" aes-256-cbc -salt -a -d -in "%%f" -out "%%~pf%%~nf" -pass file:"%~dp0FinaleNarrationKey.ini"