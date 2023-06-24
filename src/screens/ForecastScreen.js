import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

const ForecastScreen = () => {
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    const fetchForecastData = async () => {
      try {
        const response = await axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=London&appid=YOUR_API_KEY`);
        setForecastData(response.data.list);
      } catch (error) {
        console.error(error);
      }
    };

    fetchForecastData();
  }, []);

  return (
    <View>
      {forecastData && forecastData.map((forecast, index) => (
        <View key={index}>
          <Text>Date: {forecast.dt_txt}</Text>
          <Text>Temperature: {forecast.main.temp}</Text>
        </View>
      ))}
    </View>
  );
};

export default ForecastScreen;
