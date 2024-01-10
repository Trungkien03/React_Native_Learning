import { FC } from 'react';
import {
    StyleSheet,
    Text,
    TextInput,
    TextInputProps,
    View,
    StyleProp,
    TextStyle
} from 'react-native';
import { GlobalStyles } from '../../constants/CommonConstant';

interface InputProps {
    label: string;
    style?: StyleProp<TextStyle>;
    textInputConfig?: TextInputProps;
}
const Input: FC<InputProps> = ({ label, textInputConfig, style }) => {
    const inputStyle: [StyleProp<TextStyle>] = [styles.input];

    if (textInputConfig && textInputConfig.multiline) {
        inputStyle.push(styles.inputMultiline);
    }

    return (
        <View style={[styles.inputContainer, style]}>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={inputStyle} {...textInputConfig} />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        marginHorizontal: 4,
        marginVertical: 8
    },
    label: {
        fontSize: 12,
        color: GlobalStyles.colors.primary100,
        marginBottom: 4
    },
    input: {
        backgroundColor: GlobalStyles.colors.primary100,
        color: GlobalStyles.colors.primary700,
        padding: 6,
        borderRadius: 6,
        fontSize: 18
    },
    inputMultiline: {
        minHeight: 100,
        textAlignVertical: 'top'
    }
});

export default Input;
