import { StyleSheet, Text, View } from 'react-native';
import Meal from '../models/meal';
import { FC } from 'react';

type MealDetailProps = {
    meal: Meal;
    textStyle?: {};
};

const MealDetail: FC<MealDetailProps> = ({ meal, textStyle }) => {
    const { duration, complexity, affordability } = meal;
    return (
        <View style={styles.details}>
            <Text style={[styles.detailsItem, textStyle]}>{duration}m</Text>
            <Text style={[styles.detailsItem, textStyle]}>
                {complexity.toUpperCase()}
            </Text>
            <Text style={[styles.detailsItem, textStyle]}>
                {affordability.toUpperCase()}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    details: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8
    },
    detailsItem: {
        marginHorizontal: 5,
        fontSize: 12
    }
});

export default MealDetail;
