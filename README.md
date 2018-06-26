# Webdriver.io simple example

This example is from http://webdriver.io/guide.html

## Start a selenium server with Docker

`sudo docker run -d -p 4444:4444 -v /dev/shm:/dev/shm selenium/standalone-chrome:3.12.0-cobalt`

## Install the project

`npm install`

## Run the tests

`npm test` |ou| `./node_modules/.bin/wdio wdio.conf.js/`