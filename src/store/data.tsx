import {makeAutoObservable, toJS} from "mobx";
import axios from "axios";

interface IData {
    ID:string
    Name: string,
    value: number
}

class data {
    state: number = 1;
    course:any[] = []
    currentCurrency:string = 'RUB';
    needCurrency:string = 'USD';
    haveMoney:number = 0;
    needMoney:number = 0;


    constructor() {
        makeAutoObservable(this);
    }

    swapData() {
        [this.currentCurrency, this.needCurrency] = [this.needCurrency, this.currentCurrency];
        [this.haveMoney, this.needMoney] = [this.needMoney, this.haveMoney];
    }

    setCourse = async () => {
        const response = await axios.get('https://www.cbr-xml-daily.ru/daily_json.js');
        this.course = Object.values(response.data.Valute);
        this.course.push({ //centralbankapi doesn't have RUB in json.
            "ID": "R23723",
            "NumCode": "8226",
            "CharCode": "RUB",
            "Nominal": 1,
            "Name": "Рубль Российской Федерации",
            "Value": 1,
            "Previous": 1
        });
    }
    setStateCode(code: number) {
        this.state=code;
    }
    getCourse() {
        return this.course
    }
    setCurrentCurrency(currency:string) {
        this.currentCurrency=currency;
    }
    setNeedCurrency(currency: string){
        this.needCurrency = currency;
    }

    currentNum(current:string, need:string):number {
        if(!toJS(this.course).length) return 0;
        if(current === 'RUB') return toJS(this.course).filter(e => e.CharCode===need)[0].Value;
        return toJS(this.course).filter(e => e.CharCode===need)[0].Value/toJS(this.course).filter(e => e.CharCode===current)[0].Value;
    }
    calculateMoneyNeed() {
        this.onChangeNeedMoney(this.haveMoney * this.currentNum(this.needCurrency, this.currentCurrency))
    }
    calculateMoneyHave() {
        this.onChangeCurrentMoney(this.needMoney * this.currentNum(this.currentCurrency, this.needCurrency));
    }
    onChangeCurrentMoney(fl: number) {
        this.haveMoney = parseFloat(Number.parseFloat(String(fl)).toFixed(4));
    }
    onChangeNeedMoney(fl : number) {
        this.needMoney = parseFloat(Number.parseFloat(String(fl)).toFixed(4))

    }
}

export default new data();