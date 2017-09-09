if exist "%~dp0PublicNarrationKey.ini" (
	if exist "%~dp0Narration\Public\*.txt" (
		for /f "delims=|" %%f in ('dir /b /s %~dp0Narration\Public\*.txt') do "%~dp0openssl-0.9.8h-1-bin\openssl.exe" aes-256-cbc -salt -a -e -in "%%f" -out "%%f.encrypted" -pass file:%~dp0PublicNarrationKey.ini
	) else (
		echo "%~dp0Narration\Public\*.txt" file missing.
		pause
	)
) else (
	echo "%~dp0PublicNarrationKey.ini" file missing. As spoiler protection for players the narrations require a key to unlock by a GM.
	pause
)

if exist "%~dp0NormalGMNarrationKey.ini" if exist "%~dp0Narration\Normal\*.txt" for /f "delims=|" %%f in ('dir /b /s %~dp0Narration\Normal\*.txt') do "%~dp0openssl-0.9.8h-1-bin\openssl.exe" aes-256-cbc -salt -a -e -in "%%f" -out "%%f.encrypted" -pass file:"%~dp0NormalGMNarrationKey.ini"
if exist "%~dp0FinaleNarrationKey.ini" if exist "%~dp0Narration\Finale\*.txt" for /f "delims=|" %%f in ('dir /b /s %~dp0Narration\Finale\*.txt') do "%~dp0openssl-0.9.8h-1-bin\openssl.exe" aes-256-cbc -salt -a -e -in "%%f" -out "%%f.encrypted" -pass file:"%~dp0FinaleNarrationKey.ini"