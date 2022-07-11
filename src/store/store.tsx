import { makeAutoObservable } from "mobx";
import axios from "axios";
import { ValutesAPI } from "../API/api";


class Store {
    state: number = 1;
    course: any[] = [];
    currentCurrency: string = "RUB";
    needCurrency: string = "USD";
    haveMoney: number = 0;
    needMoney: number = 0;


    constructor() {
        makeAutoObservable(this);
    }

    swapData(): void {
        [this.currentCurrency, this.needCurrency] = [this.needCurrency, this.currentCurrency];
        [this.haveMoney, this.needMoney] = [this.needMoney, this.haveMoney];
        console.log("swap");
    }

    setCourse(course: any[], date: string): void {
        this.course = course;
        this.course.push({ //centralbankapi doesn't have RUB in json.
            "ID": "R23723",
            "NumCode": "8226",
            "CharCode": "RUB",
            "Nominal": 1,
            "Name": "Рубль Российской Федерации",
            "Value": 1,
            "Previous": 1,
        });

    }

    fetchCourse = async () => {
        const response = await axios.get(ValutesAPI);

        this.setCourse(Object.values(response.data.Valute), response.data.Date);
    };

    getFavourites(local: object): any[] {
        let array = Object.keys(local).sort();
        let favourites = this.course.filter(e => {
                return array.indexOf(e.CharCode) !== -1;
            },
        );
        let notFavourites = this.course.filter(e => array.indexOf(e.CharCode) === -1).sort();

        return [...favourites, ...notFavourites];

    }

    setStateCode(code: number): void {
        this.state = code;
    }

    getCourse(): any[] {
        return this.course;
    }

    setCurrentCurrency(currency: string): void {
        this.currentCurrency = currency;
    }

    setNeedCurrency(currency: string): void {
        this.needCurrency = currency;
    }

    currentNum(current: string, need: string): number {
        if (!this.course.length) return 0;
        if (current === "RUB") return this.course.filter(e => e.CharCode === need)[0].Value;
        return this.course.filter(e => e.CharCode === need)[0].Value / this.course.filter(e => e.CharCode === current)[0].Value;
    }

    calculateMoneyNeed(): void {
        this.onChangeNeedMoney(this.haveMoney * this.currentNum(this.needCurrency, this.currentCurrency));
    }

    calculateMoneyHave(): void {
        this.onChangeCurrentMoney(this.needMoney * this.currentNum(this.currentCurrency, this.needCurrency));
    }

    onChangeCurrentMoney(fl: number): void {
        console.log("111");
        this.haveMoney = parseFloat(Number.parseFloat(String(fl)).toFixed(4));
        console.log(this.haveMoney);
    }

    onChangeNeedMoney(fl: number): void {
        this.needMoney = parseFloat(Number.parseFloat(String(fl)).toFixed(4));

    }
}

export default Store;