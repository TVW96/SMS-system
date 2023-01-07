#!/bin/bash

ngrok=$(ngrok http 3000)
osascript -e "display dialog \"$ngrok\""


