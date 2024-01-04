import { FC, ReactNode } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Colors } from '../../constants/Colors';

type TitleProps = {
    children: ReactNode;
};

const Title: FC<TitleProps> = ({ children }) => {
    return <Text style={TitleStyles.title}>{children}</Text>;
};

const TitleStyles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.Yellow,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: Colors.Yellow,
        padding: 12,
        marginTop: 10
    }
});

export default Title;
