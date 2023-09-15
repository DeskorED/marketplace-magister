export const Routes = {
    Main: "/marketplace-magister/",
    CurrentCategory(categoryId) {
        return `/marketplace-magister/${categoryId}/all`
    },
    CurrentProduct(categoryId, productId) {
        return `/marketplace-magister/${categoryId}/${productId}`
    }
}