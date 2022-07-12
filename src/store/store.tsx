import { action, makeObservable, observable } from "mobx";
import { RateAPI, LocationAPI } from "../API/api";
import { RubbleState } from "../consts/consts";


class Store {
    @observable course: any[] = [];
    @observable currentLocationCode: string = "";
    @observable currentCurrency: string = "";
    @observable needCurrency: string = "";
    @observable haveMoney: number = 0;
    @observable needMoney: number = 0;


    constructor() {
        makeObservable(this);
    }

    @action
    swapData(): void {
        [this.currentCurrency, this.needCurrency] = [this.needCurrency, this.currentCurrency];
        [this.haveMoney, this.needMoney] = [this.needMoney, this.haveMoney];
    }

    @action
    setCourse(course: any[], date: string): void {
        this.course = course;
        this.course.push(RubbleState);

    }

    setCurrentLocation(location: string): void {
        this.currentLocationCode = location;
    }

    setDefaultRate(location: string):void {
        if(location==="RU") {
            this.currentCurrency = "RUB";
            this.needCurrency = "USD";
        }
        else if(location==="US") {
            this.currentCurrency = "USD";
            this.needCurrency = "RUB";
        }
        else {
            const match = this.course.filter(e => e.includes(location));
            if(!match.length) {
                this.currentCurrency = "RUB"; this.needCurrency = "USD";
            }
            else {
                this.currentCurrency = match[0]; this.needCurrency = "USD";
            }
        }
    }

    @action
    fetchCourse = () => {
        RateAPI.getRate().then(response => {
            this.setCourse(Object.values(response.data.Valute), response.data.Date);
        });
        if(localStorage.location !== undefined) {
            this.setCurrentLocation(localStorage.location);
            this.setDefaultRate(localStorage.location);
        }
        else {
            LocationAPI.getLocation().then(response => {
                if(response.status === 200) {
                    this.setCurrentLocation(response.data.country);
                    localStorage.setItem("location", response.data.country);
                    this.setDefaultRate(localStorage.location);
                }
            })
        }
    };

    @action
    getFavourites(local: object): any[] {
        let array = Object.keys(local).sort();
        let favourites = this.course.filter(e => {
                return array.indexOf(e.CharCode) !== -1;
            },
        );
        let notFavourites = this.course.filter(e => array.indexOf(e.CharCode) === -1).sort();

        return [...favourites, ...notFavourites];

    }

    @action
    getCourse(): any[] {
        return this.course;
    }

    @action
    refreshValue(): void {
        this.needMoney = 0;
        this.haveMoney = 0;
    }

    @action
    setCurrentCurrency(currency: string): void {
        this.currentCurrency = currency;
        this.refreshValue();
    }

    @action
    setNeedCurrency(currency: string): void {
        this.needCurrency = currency;
        this.refreshValue();
    }

    @action
    currentNum(current: string, need: string): number {
        if (!this.course.length) return 0;
        if (current === "RUB") return this.course.filter(e => e.CharCode === need)[0].Value;
        return this.course.filter(e => e.CharCode === need)[0].Value / this.course.filter(e => e.CharCode === current)[0].Value;
    }

    @action
    calculateMoneyNeed(): void {
        this.onChangeNeedMoney(this.haveMoney * this.currentNum(this.needCurrency, this.currentCurrency));
    }

    @action
    calculateMoneyHave(): void {
        this.onChangeCurrentMoney(this.needMoney * this.currentNum(this.currentCurrency, this.needCurrency));
    }

    @action
    onChangeCurrentMoney(fl: number): void {
        this.haveMoney = parseFloat(Number.parseFloat(String(fl)).toFixed(4));
    }

    @action
    onChangeNeedMoney(fl: number): void {
        this.needMoney = parseFloat(Number.parseFloat(String(fl)).toFixed(4));
    }
}

export default Store;