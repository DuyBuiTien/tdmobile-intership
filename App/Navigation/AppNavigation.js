import { createStackNavigator, createAppContainer } from 'react-navigation'
import MainScreen from '../Containers/MainScreen'
import styles from './Styles/NavigationStyles'
import ChiTietPhanAnh from'../Components/ChiTietPhanAnh'
import TaoPhanAnh from '../Components/TaoPhanAnh'
import PhanAnhKienNghi from '../Components/PhanAnhKienNghi'


const AppNavigator = createStackNavigator({
  MainScreen: { screen: MainScreen},
  ChiTietPhanAnh: {screen: ChiTietPhanAnh},
  TaoPhanAnh: {screen: TaoPhanAnh},
  PhanAnhKienNghi: {screen: PhanAnhKienNghi}
},
 {
  // Default config for all screens
  // headerMode: 'none',
  initialRouteName: 'MainScreen',
})

const AppContainer = createAppContainer(AppNavigator);


export default AppContainer;
