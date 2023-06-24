import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import ForecastScreen from './screens/ForecastScreen';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Forecast: ForecastScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(AppNavigator);
