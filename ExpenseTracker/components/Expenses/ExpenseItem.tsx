import { Pressable, StyleSheet, Text, View } from 'react-native';
import { FC } from 'react';
import { GlobalStyles } from '../../constants/CommonConstant';
import { getFormattedDate } from '../utils/Date';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { IExpense, RootStackParamList } from '../../types/CommonTypes';

interface ExpensesItemProps {
    expense: IExpense;
}

const ExpenseItem: FC<ExpensesItemProps> = ({ expense }) => {
    const { description, amount, date, id } = expense;
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const expensePressHandler = () => {
        navigation.navigate('ManageExpenses', { expenseId: id });
    };
    return (
        <Pressable
            onPress={expensePressHandler}
            style={({ pressed }) => pressed && styles.pressed}
            android_ripple={{}}
        >
            <View style={styles.expenseItem}>
                <View>
                    <Text style={[styles.textBase, styles.description]}>
                        {description}
                    </Text>
                    <Text style={styles.textBase}>
                        {getFormattedDate(date)}
                    </Text>
                </View>
                <View style={styles.amountContainer}>
                    <Text style={styles.amount}>{amount.toFixed(2)}</Text>
                </View>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    pressed: { opacity: 0.5 },
    expenseItem: {
        padding: 12,
        marginVertical: 8,
        backgroundColor: GlobalStyles.colors.primary500,
        flexDirection: 'row',
        borderRadius: 6,
        elevation: 3,
        shadowColor: GlobalStyles.colors.gray500,
        shadowRadius: 4,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.4,
        justifyContent: 'space-between'
    },
    textBase: {
        color: GlobalStyles.colors.primary50
    },
    description: {
        fontSize: 16,
        marginBottom: 4,
        fontWeight: 'bold'
    },
    amountContainer: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        width: '30%'
    },
    amount: {
        color: GlobalStyles.colors.primary500,
        fontWeight: 'bold'
    }
});

export default ExpenseItem;
