import { ApiConnect } from "./ApiConnect"

export const sendRequest = (setResponse) => {
    ApiConnect?.sendRequest()?.then(
        (response) => setResponse(response?.response)
    );
}