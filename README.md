# Weather-App-with-Server

## Downloading
```bash
$ git clone https://github.com/mahathiamencherla15/Weather-App-with-Server
```
## Pre-requisities
> Some key things to set up to use this app:

- **[NodeJS v13](https://nodejs.org/en/)**
- **[npm](https://www.npmjs.com/)**
- **[Weatherstack API](https://weatherstack.com/)**
- **[Mapbox API](https://www.mapbox.com/)**

## Important

To run this code successfully, navigate to geocode.js and forecast.js in utils. 

Here, looks for the url variable and insert your API access keys to the url string and save the files. 

## Setup locally

1. Go to your terminal

2. Navigate to the weather-app folder in your system

3. run this command to download all dependencies
```bash
$ npm install
```
4. install nodemon globally 
```bash
$ npm install -g nodemon@latest
```
5. run the code
```bash
$ nodemon src/app.js -e js,hbs
```