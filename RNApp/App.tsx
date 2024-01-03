import { useState } from 'react';
import {
    Button,
    FlatList,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View
} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
    const [enterText, setEnterText] = useState('');
    const [goalList, setGoalList] = useState<string[]>([]);
    const goalInputHandler = (value: string) => {
        setEnterText(value);
    };

    const addGoalHandler = () => {
        if (enterText) {
            setGoalList((currentText) => [...currentText, enterText]);
            setEnterText('');
        }
    };
    return (
        <View style={styles.appContainer}>
            <GoalInput
                addGoalHandler={addGoalHandler}
                enterText={enterText}
                goalInputHandler={goalInputHandler}
            />
            <View style={styles.goalContainer}>
                <FlatList
                    data={goalList}
                    renderItem={(item) => <GoalItem goal={item.item} />}
                    keyExtractor={(item, index) => `${item}-${index}`}
                    alwaysBounceVertical={false}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    appContainer: {
        marginTop: 50,
        paddingHorizontal: 16
    },

    goalContainer: {}
});
