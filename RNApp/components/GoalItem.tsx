import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Pressable,
    GestureResponderEvent
} from 'react-native';

type GoalItemProps = {
    goal: string;
    onDeleteGoal: (event: GestureResponderEvent) => void;
};

const GoalItem = ({ goal, onDeleteGoal }: GoalItemProps) => {
    return (
        <View style={GoalItemStyle.goalItem}>
            <Pressable
                android_ripple={{ color: '#7613d3ddd' }}
                onPress={onDeleteGoal}
                style={({ pressed }) => pressed && GoalItemStyle.pressedItem}
            >
                <Text style={GoalItemStyle.goalText}>{goal}</Text>
            </Pressable>
        </View>
    );
};

const GoalItemStyle = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc'
    },
    pressedItem: {
        opacity: 0.5
    },
    goalText: {
        color: 'white',
        padding: 8
    }
});

export default GoalItem;
