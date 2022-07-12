import axios from "axios"

export const ValutesAPI = "https://www.cbr-xml-daily.ru/daily_json.js";

export const RateAPI = {
    async getRate() {
        const response = await axios.get(ValutesAPI);
        return response;
    }
}