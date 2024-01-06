import { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';

type ListItemProps = {
    items?: string[];
};

const ListItem: FC<ListItemProps> = ({ items = [] }) => {
    return (
        <>
            {items.map((item, index) => (
                <View key={index} style={styles.listItems}>
                    <Text style={styles.itemText} key={index}>
                        {item}
                    </Text>
                </View>
            ))}
        </>
    );
};

const styles = StyleSheet.create({
    listItems: {
        borderRadius: 6,
        paddingHorizontal: 8,
        paddingVertical: 4,
        marginVertical: 4,
        marginHorizontal: 8,
        backgroundColor: '#e2b497'
    },
    itemText: {
        color: '#351401',
        textAlign: 'center'
    }
});

export default ListItem;
