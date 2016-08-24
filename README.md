# Zombies-and-Nukes
Narration Decrypt Requires [OpenSSL](https://wiki.openssl.org/index.php/Binaries).

1. Copy app.yaml.template and rename the copy to to app.yaml.
2. Update {GOOGLE APP ENGINE PROJECT ID} in app.yaml.
3. Copy keys.ini.template and rename the copy to keys.ini.
4. Update {Your Telegram Bot ID here} in keys.ini 
5. git clone (url for your thorin fork) ~/bot
6. cd ~/bot
7. PIP install -t lib google-api-python-client
(On windows replace PIP with (PATH TO PYTHON27 INSTALL)\scripts\pip.exe)
8. PYTHON (PATH TO GOOGLE APP ENGINE LAUNCHER INSTALL)appcfg.py -A {GOOGLE APP ENGINE PROJECT ID} update .
9. Finally go to https://project-id.appspot.com/set_webhook?url=https://project-id.appspot.com/webhook (replace both project-ids with the Google App Engine Project ID) to tell Telegram where to send web hooks.
