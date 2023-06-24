import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

const HomeScreen = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=6a1eab9f0fb5202f6de1077770c83e8f`);
        setWeatherData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWeatherData();
  }, []);

  return (
    <View>
      {weatherData && (
        <Text>Current Temperature: {weatherData.main.temp}</Text>
      )}
    </View>
  );
};

export default HomeScreen;
