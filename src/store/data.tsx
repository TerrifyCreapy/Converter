import { makeAutoObservable,  toJS} from "mobx";
import axios from "axios";

class data {
    state: number = 1;
    course:any[] = []
    currentCurrency:string = 'RUB';
    needCurrency:string = 'USD';
    haveMoney:number = 0;
    needMoney:number = 0;


    constructor() {
        makeAutoObservable(this)
    }

    swapData() : void {
        [this.currentCurrency, this.needCurrency] = [this.needCurrency, this.currentCurrency];
        [this.haveMoney, this.needMoney] = [this.needMoney, this.haveMoney];
    }

    setCourse(course: any[]): void
    {
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
        const response = await axios.get('https://www.cbr-xml-daily.ru/daily_json.js');

        this.setCourse(Object.values(response.data.Valute));
    }

    getFavourites(local: object): any[] {
        let array = Object.keys(local).sort();
        let favourites = this.course.filter(e =>
            array.indexOf(e.CharCode) !== -1
        )
        let notFavourites = this.course.filter(e => array.indexOf(e.CharCode)===-1);

        return [...favourites, ...notFavourites];

    }

    setStateCode(code: number): void {
        this.state=code;
    }
    getCourse(): any[] {
        return this.course
    }
    setCurrentCurrency(currency:string):void {
        this.currentCurrency=currency;
    }
    setNeedCurrency(currency: string):void{
        this.needCurrency = currency;
    }

    currentNum(current:string, need:string):number {
        if(!toJS(this.course).length) return 0;
        if(current === 'RUB') return toJS(this.course).filter(e => e.CharCode===need)[0].Value;
        return toJS(this.course).filter(e => e.CharCode===need)[0].Value/toJS(this.course).filter(e => e.CharCode===current)[0].Value;
    }
    calculateMoneyNeed():void {
        this.onChangeNeedMoney(this.haveMoney * this.currentNum(this.needCurrency, this.currentCurrency))
    }
    calculateMoneyHave():void {
        this.onChangeCurrentMoney(this.needMoney * this.currentNum(this.currentCurrency, this.needCurrency));
    }
    onChangeCurrentMoney(fl: number):void {
        this.haveMoney = parseFloat(Number.parseFloat(String(fl)).toFixed(4));
    }
    onChangeNeedMoney(fl : number):void {
        this.needMoney = parseFloat(Number.parseFloat(String(fl)).toFixed(4))

    }
}

export default new data();