const ApiURL = "http://localhost:8080/categories?projection=full";

export class ApiConnect {

    static async sendRequest() {
        try {
            let startTime = new Date();
            const proxyResponse = await fetch(ApiURL);
            const unwrappedResponse = await proxyResponse.json();
            return {
                response: unwrappedResponse['_embedded'],
                requestTime: new Date() - startTime,
            };
        } catch (error) {
            console.error("Error during fetch:", error);
            throw error;
        }
    }
}