import React, { useState } from 'react';
import { Button, FlatList, Image, Modal, StyleSheet, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
    const [enterText, setEnterText] = useState('');
    const [goalList, setGoalList] = useState<string[]>([]);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const goalInputHandler = (value: string) => {
        setEnterText(value);
    };

    const startAddGoalHandler = () => {
        setIsModalVisible(!isModalVisible);
    };

    const addGoalHandler = () => {
        if (enterText) {
            setGoalList((currentGoals) => [...currentGoals, enterText]);
            setEnterText('');
        }
    };

    const deleteGoalHandler = (index: number) => {
        setGoalList((currentGoals) =>
            currentGoals.filter((_, currentIndex) => currentIndex !== index)
        );
    };

    return (
        <View style={styles.appContainer}>
            <Button
                title="Add New Goal"
                color="#5e0acc"
                onPress={startAddGoalHandler}
            />
            <Image
                source={{
                    uri: 'https://www.globalsafetysolutions.com.br/imagens/icones/icon_target.png'
                }}
                style={styles.image}
            />
            {isModalVisible && (
                <Modal visible={isModalVisible} animationType="slide">
                    <GoalInput
                        addGoalHandler={addGoalHandler}
                        enterText={enterText}
                        goalInputHandler={goalInputHandler}
                        isModalVisible={isModalVisible}
                        setIsModalVisible={setIsModalVisible}
                    />
                    <View style={styles.goalContainer}>
                        <FlatList
                            data={goalList}
                            renderItem={({ item, index }) => (
                                <GoalItem
                                    goal={item}
                                    onDeleteGoal={() =>
                                        deleteGoalHandler(index)
                                    }
                                />
                            )}
                            keyExtractor={(item, index) => `${item}-${index}`}
                            alwaysBounceVertical={false}
                        />
                    </View>
                </Modal>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        marginTop: 100,
        paddingHorizontal: 16
    },
    image: {
        width: 350, // Set a specific width for the image
        height: 650, // Set a specific height for the image
        resizeMode: 'contain' // Adjust the resizeMode as needed
    },
    goalContainer: {}
});
