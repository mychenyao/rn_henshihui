import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from '../view/home'

const Store = createStackNavigator({
    Home: { screen: Home },
});
export default Store
