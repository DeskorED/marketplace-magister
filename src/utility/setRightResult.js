export const setRightResult = (categories, filters) => {
    const resultCategories = categories;

    const checkFilters = (item, filters) => {
        if (!item || !item.price) {
            return false;
        }

        const price = item?.price;
        const minPrice = filters?.price?.from;
        const maxPrice = filters?.price?.to;

        if (filters?.stats && item?.stats) {
            const filterStats = filters?.stats;

            for (const filterStat of filterStats) {
                const itemName = filterStat?.name;
                if (itemName in item.stats) {
                    const itemValue = item?.stats[itemName];

                    if (!itemValue || !filterStat?.values?.find(
                        value => {
                            if (value?.value === itemValue) {
                                return value?.status
                            }
                            return false
                        }
                    )
                    ) {
                        return false;
                    }
                }
            }
        }

        return price >= minPrice && price <= maxPrice;
    };


    resultCategories?.forEach(category => {

        if (!category.originalItems) {
            category.originalItems = [...category.items];
        }

        const filteredItems = [];

        if (filters[category?.name]?.status) {
            category.originalItems?.forEach(item => {
                const passesFilters = checkFilters(item, filters[category?.name]);
                if (passesFilters) {
                    filteredItems?.push(item);
                }
            });

            if (!category.filters) {
                category.filters = {};
            }

            const stats = {};
            filteredItems?.forEach(item => {
                if (item.stats) {
                    Object.keys(item.stats).forEach(stat => {
                        if (!stats[stat]) {
                            stats[stat] = {
                                name: stat,
                                values: new Set(),
                            };
                        }

                        stats[stat].values.add(item.stats[stat]);
                    });
                }
            });

            category.items = filteredItems;

            category.filters.stats = Object.keys(stats).map(stat => ({
                name: stats[stat].name,
                values: Array.from(stats[stat].values).map(value => ({
                    value,
                    status: true,
                })),
            }));
        } else {
            category.items = [...category.originalItems];
            delete category.filters;
        }
    });

    return resultCategories;
};