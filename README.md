<!-- EVENT FINDR APPLICATION -->

INTRODUCTION

Welcome to the Event Findr Web App! This application allows users to input their location and discover events happening within their location. The app uses the Google Geolocation API to obtain latitude and longitude coordinates for the user's chosen location. Events are then retrieved using a mock API based on these coordinates. Users can filter events by date, location, and event type.

FEATURES

-Location Input Modal: Users can input their location by clicking either the "Get started" button on the homepage or the "Find events" button on the navbar.
-Google Geolocation API Integration: This converts user-provided location into precise latitude and longitude coordinates.
-Event Retrieval: Utilizing a mock API to fetch events based on the user's geographical coordinates(for now, the mock API is not directly linked with the user coordinates and is infact just dummy AI generated data fetched from an endpoint). Reference:https://www.mockaroo.com
-Event Display: Events are presented in boxes for easy viewing and interaction which are well paginated.
-Filtering Capabilities:

1. Date: Users can filter events by date.
2. Location: Events can be sorted by specific event addresses.
3. Event Type: Users can narrow down events by type.

USAGE

1. Getting Started:
   - git clone https://github.com/Dahnie/event-finder.git
   - cd Event-Finder-App
2. Installation:
   - npm install
3. Set Up Environment Variables:
   Create a .env file in the root directory of the project and add your Google Geolocation API key:
   - VITE_API_API_KEY=your_api_key_here
     NB: Make sure places API is enabled on your google console account
4. Start the Application:
   - npm start
5. Open the Application:
   - Navigate to http://127.0.0.1:5173/ in your web browser.

TECHNOLOGIES USED

-React
-Typescript
-CSS Modules
-React Router
-Google Geolocation API
-Mock API
-Redux
-Context API
