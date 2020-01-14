import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import AppTwoScreen from './AppTwo';
import AppThreeScreen from './AppThree';

const MainNavigator = createStackNavigator({
  AppTwo: {screen: AppTwoScreen},
  AppThree: {screen: AppThreeScreen},
});

const App = createAppContainer(MainNavigator);

export default App;
