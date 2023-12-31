export const routes = {
    Main: "/marketplace-magister/",
    CurrentCategory(categoryName) {
        return `/marketplace-magister/${categoryName}/all`
    },
    CurrentProduct(categoryName, productName) {
        return `/marketplace-magister/${categoryName}/${productName}`
    }
}