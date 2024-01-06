import { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type SubtitleProps = {
    title: string;
};

const Subtitle: FC<SubtitleProps> = ({ title }) => {
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    subtitle: {
        color: '#e2b497',
        fontSize: 16,
        fontWeight: 'bold',
        margin: 8,
        textAlign: 'center'
    },
    subtitleContainer: {
        marginHorizontal: 20,
        borderColor: '#e2b497',
        borderBottomWidth: 2
    }
});

export default Subtitle;
