import axios from "axios";
import { IPAPI_token } from "../consts/consts";

const ValutesAPI = "https://www.cbr-xml-daily.ru/daily_json.js";
const LocationAPI_token = "https://ipinfo.io/json?token=" + IPAPI_token;

export const RateAPI = {
    async getRate() {
        const response = await axios.get(ValutesAPI);
        return response;
    },
};

export const LocationAPI = {
    async getLocation() {
        const response = await axios.get(LocationAPI_token);
        return response;
    },
};