import {
    NavigationProp,
    RouteProp,
    useNavigation
} from '@react-navigation/native';
import { FC, useContext, useLayoutEffect } from 'react';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import IconButton from '../components/IconButton';
import MealDetail from '../components/MealDetail';
import ListItem from '../components/mealDetails/ListItem';
import Subtitle from '../components/mealDetails/Subtitle';
import { MEALS } from '../data/dummy-data';
import Meal from '../models/meal';
import { ActionTypes } from '../store/types/ContextType';
import { RootStackParamList } from '../types/app.types';
import { FavoritesContext } from '../store/context/FavoritesContext';

type MealDetailScreenProps = {
    route: RouteProp<RootStackParamList, 'MealDetail'>;
};

const MealDetailScreen: FC<MealDetailScreenProps> = ({ route }) => {
    const mealId = route.params.mealId;
    const { state, dispatch } = useContext(FavoritesContext);

    const mealIsFavorite = state.ids.includes(mealId);

    const navigation =
        useNavigation<NavigationProp<RootStackParamList, 'MealDetail'>>();
    const selectedMeal = MEALS.find((item) => item.id === mealId);

    const changeFavoriteMealHandler = () => {
        if (mealIsFavorite) {
            dispatch({
                type: ActionTypes.REMOVE_FAVORITE,
                payload: mealId
            });
        } else {
            dispatch({
                type: ActionTypes.ADD_FAVORITE,
                payload: mealId
            });
        }
    };

    useLayoutEffect(() => {
        navigation.setOptions({
            title: selectedMeal?.title,
            headerRight: () => (
                <IconButton
                    iconName={mealIsFavorite ? 'star' : 'star-outline'}
                    color="white"
                    onTap={changeFavoriteMealHandler}
                />
            )
        });
    }, [state.ids]);

    return (
        <View>
            <ScrollView style={styles.rootContainer}>
                <Image
                    source={{ uri: selectedMeal?.imageUrl }}
                    resizeMode="cover"
                    style={styles.image}
                />
                <Text style={styles.title}>{selectedMeal?.title}</Text>
                <View>
                    <MealDetail
                        meal={selectedMeal || ({} as Meal)}
                        textStyle={styles.textStyle}
                    />
                </View>
                <View style={styles.listOuterContainer}>
                    <View style={styles.listInnerContainer}>
                        <Subtitle title="Ingredients" />
                        <ListItem items={selectedMeal?.ingredients} />
                        <Subtitle title="Steps" />
                        <ListItem items={selectedMeal?.steps} />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 20
    },
    image: {
        width: '100%',
        height: 250,
        borderRadius: 8
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
        textAlign: 'center',
        margin: 8
    },
    textStyle: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold'
    },
    listInnerContainer: {
        maxWidth: '80%'
    },
    listOuterContainer: {
        alignItems: 'center'
    }
});

export default MealDetailScreen;
