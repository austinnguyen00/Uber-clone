# Uber-clone

A simple React Native Uber clone app is written in Typescript.  
The code is based on the video tutorial at https://www.youtube.com/live/bvn_HYpix6s?feature=share

## API
The application uses Google Map APIs for location searching auto complete, map direction, and map distance. Those APIs are:
- Directions API
- Distance Matrix API
- Places API

## Local Demo
To run the app locally
1. Create a new project in Google Console
2. Enable Google billing for the project
3. Enables 3 APIs mentioned above in APIs - Google Maps Platform (Google Console)
4. Put your API key into the newly created `.env` file as `GOOGLE_MAPS_APIKEY = YOUR_KEY`
