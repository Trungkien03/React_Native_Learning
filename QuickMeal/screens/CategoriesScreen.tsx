import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import CategoryGridTitle from '../components/CategoryGridTitle';
import { CATEGORIES } from '../data/dummy-data';
import Category from '../models/category';

const CategoriesScreen = () => {
    const [numColumns, setNumColumns] = useState(2);

    const renderCategoryItem = (itemData: { item: Category }) => {
        return (
            <CategoryGridTitle
                title={itemData.item.title}
                color={itemData.item.color}
                id={itemData.item.id}
            />
        );
    };

    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={numColumns}
            extraData={numColumns} // Add extraData to force a re-render when numColumns changes
        />
    );
};

export default CategoriesScreen;
