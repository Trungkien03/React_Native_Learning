import { StyleSheet, Text, View } from 'react-native';

type GoalItemProps = {
    goal: string;
};

const GoalItem = ({ goal }: GoalItemProps) => {
    return (
        <View key={`${goal} + ${Math.random()}`} style={GoalItemStyle.goalItem}>
            <Text style={GoalItemStyle.goalText}>{goal}</Text>
        </View>
    );
};

const GoalItemStyle = StyleSheet.create({
    goalItem: {
        margin: 8,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc'
    },

    goalText: {
        color: 'white'
    }
});

export default GoalItem;
