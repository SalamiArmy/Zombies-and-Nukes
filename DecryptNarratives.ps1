function Decrypt-File($FileInfo, [string]$PasswordFilePath) {
    $InputFilePath = $FileInfo.FullName
    $OutputFilePath = $FileInfo.FullName.Replace($FileInfo.Extension, "")
    ."$PSSCriptRoot\openssl-0.9.8h-1-bin\openssl.exe" aes-256-cbc -salt -a -d -in "$InputFilePath" -out "$OutputFilePath" -pass file:"$PasswordFilePath"
}

if (Test-Path "$PSSCriptRoot\PublicNarrationKey.ini") {
	if (Test-Path "$PSSCriptRoot\Narration\Public\*.encrypted") {
		$PublicEcryptedNarratives = Get-ChildItem "$PSSCriptRoot\Narration\Public\*.encrypted" -File -Recurse
        foreach ($NarrativeFile in $PublicEcryptedNarratives) {
            Decrypt-File $NarrativeFile "$PSSCriptRoot\PublicNarrationKey.ini"
        }
	} else {
		Write-Error "`"$PSSCriptRoot\Narration\Public\*.encrypted`" file missing."
		pause
	}
} else {
	Write-Error "`"$PSSCriptRoot\PublicNarrationKey.ini`" file missing. As spoiler protection for players the narrations require a key to unlock by a GM."
	pause
}

if ((Test-Path "$PSSCriptRoot\NormalGMNarrationKey.ini") -and (Test-Path "$PSSCriptRoot\Narration\Normal\*.encrypted")) {
    $NormalEcryptedNarratives = Get-ChildItem "$PSSCriptRoot\Narration\Normal\*.encrypted" -File -Recurse
    foreach ($NarrativeFile in $NormalEcryptedNarratives) {
        Decrypt-File $NarrativeFile "$PSSCriptRoot\NormalGMNarrationKey.ini"
    }
}
if ((Test-Path "$PSSCriptRoot\FinaleNarrationKey.ini") -and (Test-Path "$PSSCriptRoot\Narration\Finale\*.encrypted")) {
	$FinaleEcryptedNarratives = Get-ChildItem "$PSSCriptRoot\Narration\Finale\*.encrypted" -File -Recurse
    foreach ($NarrativeFile in $FinaleEcryptedNarratives) {
        Decrypt-File $NarrativeFile "$PSSCriptRoot\FinaleNarrationKey.ini"
    }
}