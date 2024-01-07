import { Pressable, Text, View } from 'react-native';

const ExpenseItem = () => {
    return (
        <Pressable>
            <View>
                <View>
                    <Text>DESCRIPTION</Text>
                    <Text>DATE</Text>
                </View>
                <View>
                    <Text>AMOUNT</Text>
                </View>
            </View>
        </Pressable>
    );
};

export default ExpenseItem;
