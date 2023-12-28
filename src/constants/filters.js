import { categories } from "./categories";

export const filters = {};

categories.forEach(category => {
    const categoryFilters = {};
    const prices = category.items.map(item => item.price.value);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);

    categoryFilters.status = true;
    categoryFilters.name = category.name;
    categoryFilters.price = {
        from:minPrice,
        to:maxPrice,
        min: minPrice,
        max: maxPrice,
    };

    const stats = {};

    category.items.forEach(item => {
        if (item.stats) {
            Object.keys(item.stats).forEach(stat => {
                if (!stats[stat]) {
                    stats[stat] = {
                        name: stat,
                        values:new Set()
                    };
                }
                stats[stat].values.add(item.stats[stat]);
            });
        }
    });

    categoryFilters.stats = Object.keys(stats).map(stat => {
        return {
            name: stats[stat].name,
            values:  Array.from(stats[stat].values).map(
                value => {
                    return {
                        value: value,
                        status:true
                    }
                }

            )
        }

    })

    filters[category.name.en] = categoryFilters;
});