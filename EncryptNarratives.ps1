if (Test-Path "$PSSCriptRoot\PublicNarrationKey.ini") {
	if (Test-Path "$PSSCriptRoot\Narration\Public\*.txt") {
		$PublicEcryptedNarratives = (Get-ChildItem "$PSSCriptRoot\Narration\Public\*.txt" -File -Recurse).FullName
        foreach ($InputFilePath in $PublicEcryptedNarratives) {
            ."$PSSCriptRoot\openssl-0.9.8h-1-bin\openssl.exe" aes-256-cbc -salt -a -e -in "$InputFilePath" -out "$InputFilePath.encrypted" -pass file:"$PSSCriptRoot\PublicNarrationKey.ini"
        }
	} else {
		echo "$PSSCriptRoot\Narration\Public\*.encrypted" file missing.
		pause
	}
} else {
	Write-Error "`"$PSSCriptRoot\PublicNarrationKey.ini`" file missing. As spoiler protection for players the narrations require a key to unlock by a GM."
	pause
}

if ((Test-Path "$PSSCriptRoot\NormalGMNarrationKey.ini") -and (Test-Path "$PSSCriptRoot\Narration\Normal\*.txt")) {
    $NormalEcryptedNarratives = (Get-ChildItem "$PSSCriptRoot\Narration\Normal\*.txt" -File -Recurse).FullName
    foreach ($InputFilePath in $NormalEcryptedNarratives) {
        ."$PSSCriptRoot\openssl-0.9.8h-1-bin\openssl.exe" aes-256-cbc -salt -a -e -in "$InputFilePath" -out "$InputFilePath.encrypted" -pass file:"$PSSCriptRoot\NormalGMNarrationKey.ini"
    }
}
if ((Test-Path "$PSSCriptRoot\FinaleNarrationKey.ini") -and (Test-Path "$PSSCriptRoot\Narration\Finale\*.txt")) {
	$FinaleEcryptedNarratives = (Get-ChildItem "$PSSCriptRoot\Narration\Finale\*.txt" -File -Recurse).FullName
    foreach ($InputFilePath in $FinaleEcryptedNarratives) {
        ."$PSSCriptRoot\openssl-0.9.8h-1-bin\openssl.exe" aes-256-cbc -salt -a -e -in "$InputFilePath" -out "$InputFilePath.encrypted" -pass file:"$PSSCriptRoot\FinaleNarrationKey.ini"
    }
}