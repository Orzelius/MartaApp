import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from '../components/Home/Home';
import ListConvert from '../components/ListConvert/ListConvert';
import Converter from '../components/Converter/Converter';
import About from '../components/About/About';

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      headerShown: false
    }
  },
  ListConvert: {
    screen: ListConvert,
    navigationOptions: {
      headerShown: false
    }
  },
  Converter: {
    screen: Converter,
    navigationOptions: {
      headerShown: false
    }
  },
  About: {
    screen: About,
    navigationOptions: {
      headerShown: false
    }
  }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);