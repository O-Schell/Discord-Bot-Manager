#!/bin/bash

cd /home/pi/git/Discord-Bot-Manager/Backend
npm install package.json
nodemon --inspect=9234 local_script.js

