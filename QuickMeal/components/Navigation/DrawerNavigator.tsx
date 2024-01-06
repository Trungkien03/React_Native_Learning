import { createDrawerNavigator } from '@react-navigation/drawer';
import { RootDrawerParamList } from '../../types/app.types';
import HomeScreen from '../../screens/HomeScreen';
import CategoriesScreen from '../../screens/CategoriesScreen';
import IconButton from '../IconButton';
import { MaterialIcons } from '@expo/vector-icons';
import FavoritesScreen from '../../screens/FavoritesScreen';

const Drawer = createDrawerNavigator<RootDrawerParamList>();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            initialRouteName="HomeScreen"
            screenOptions={{
                headerStyle: { backgroundColor: '#553737' },
                headerTintColor: 'white',
                sceneContainerStyle: { backgroundColor: '#434343' }
            }}
        >
            <Drawer.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    title: 'Home',
                    drawerLabelStyle: {
                        color: '#553737'
                    },
                    drawerIcon: () => (
                        <IconButton iconName="home" color="#553737" />
                    )
                }}
            />
            <Drawer.Screen
                name="MealsCategories"
                component={CategoriesScreen}
                options={{
                    title: 'Meals Categories',
                    drawerLabelStyle: {
                        color: '#553737'
                    },
                    drawerIcon: () => (
                        <MaterialIcons
                            name="category"
                            size={24}
                            color="#553737"
                        />
                    )
                }}
            />
            <Drawer.Screen
                name="MealFavorites"
                component={FavoritesScreen}
                options={{
                    title: 'Favorites',
                    drawerLabelStyle: {
                        color: '#553737'
                    },
                    drawerIcon: () => (
                        <MaterialIcons
                            name="favorite"
                            size={24}
                            color="#553737"
                        />
                    )
                }}
            />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
