export const setRightResult = (categories, filters) => {
    const resultCategories = JSON.parse(JSON.stringify(categories));

    const checkFilters = (item, filters) => {
        if (!item || !item.price) {
            return false;
        }

        const price = item.price.value;
        const minPrice = filters.price.min;
        const maxPrice = filters.price.max;

        if (filters.stats && item.stats) {
            const itemStats = item.stats;
            const filterStats = filters.stats;

            for (const filterStat of filterStats) {
                const matchingStat = itemStats[filterStat.name];

                if (!matchingStat || !filterStat.values.find(value => value.value === matchingStat.value)) {
                    return false;
                }
            }
        }

        return price >= minPrice && price <= maxPrice;
    };

    resultCategories.forEach(category => {

        const filteredItems = [];

        category.items.forEach(item => {

            const passesFilters = checkFilters(item, filters[category.id]);

            if (passesFilters) {
                filteredItems.push(item);
            }
        });

        category.items = filteredItems;
    });

    return resultCategories;
};
