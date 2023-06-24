##Weather Activity Recommender
This project is a simple React Native application that recommends activities based on the current and forecasted weather. The application utilizes the OpenWeatherMap API to fetch weather data.

#Project Structure
- App.js: The root component of the application which includes the main navigator for the app.
- src/AppNavigator.js: This file contains the configuration for the stack navigator used in the app. It defines the navigation between the HomeScreen and the ForecastScreen.
- src/screens/HomeScreen.js: This is the home screen of the application. It fetches and displays the current weather data.
- src/screens/ForecastScreen.js: This screen fetches and displays a 5-day forecast of the weather.

#Installation
Before starting the installation process, make sure you have Node.js and npm installed on your computer. Node.js is the environment where your JavaScript code will run, and npm is the package manager for Node.js, which will allow you to install additional packages for your projects.
If you haven't already installed Node.js, you can download it from (https://nodejs.org/en/download/).
Once Node.js and npm are installed, you can install the Expo CLI globally on your system using the following command in your terminal:

npm install -g expo-cli

Now, clone the repository to your local machine:
git clone https://github.com/YourUsername/WeatherActivityRecommender.git

Navigate to your project directory and install the dependencies:
cd WeatherActivityRecommender
npm install

#Usage
To start the Expo developer tools, run:
expo start

A new browser window will open up with the Expo developer tools. You can then choose to run the app on an iOS simulator, Android emulator, or your own mobile device using the Expo app.

#API Key
This app uses the OpenWeatherMap API, which requires an API key. You can obtain a key by creating a free account on the OpenWeatherMap website. Replace YOUR_API_KEY in the HomeScreen.js and ForecastScreen.js with your actual API key.

#Future Enhancements
- Allow users to input their own location
- Better formatting and styling for the weather data
- Enhanced error handling and loading states
- Expand activity recommendations based on weather

#Contribution
Feel free to fork this repository and make enhancements.

#License
This project is licensed under the MIT License.
