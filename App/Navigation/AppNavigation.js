import { createStackNavigator, createAppContainer } from 'react-navigation'
import MainScreen from '../Containers/MainScreen'
import styles from './Styles/NavigationStyles'


const AppNavigator = createStackNavigator({
  MainScreen: { screen: MainScreen},
},
 {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'MainScreen',
})

const AppContainer = createAppContainer(AppNavigator);


export default AppContainer;
