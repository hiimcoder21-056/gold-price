import { GoldBrand, GoldType } from "@/enums";
import { GoldTypeMapping } from "@/mappings/goldType.mapping";
import { GoldPrice, SJCPrice } from "@/types/gold.interface";


const API_URL = "https://vapi.vnappmob.com/api/v2/gold";
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NjE5MjIwNjcsImlhdCI6MTc2MDYyNjA2Nywic2NvcGUiOiJnb2xkIiwicGVybWlzc2lvbiI6MH0.b8sPNog6p9XymEuvch699bi-3E8XKl3I4tV8_1Y-ZWc";

interface IResponse {
    results: SJCPrice[];
}

interface IProps{
    type:GoldBrand
}

export async function fetchGoldPrice({type}:IProps): Promise<{date:string, data:GoldPrice[]}> {
    const response = await fetch(`${API_URL}/${type}`, {
        headers: {
            Authorization: `Bearer ${API_KEY}`
        }
    });
    const responseJson: IResponse = await response.json();

    const sjcPrice: SJCPrice = responseJson.results[0];

    console.log('sjcPrice: ', sjcPrice)

    const goldTypeList = Object.values(GoldType);
    const result: GoldPrice[] = goldTypeList.map(goldType => {
        console.log('buy_${goldType}: ', `buy_${goldType}`)
        return {
            type: GoldTypeMapping[goldType].name,
            buyPrice: sjcPrice[`buy_${goldType}` as keyof SJCPrice],
            sellPrice: sjcPrice[`sell_${goldType}` as keyof SJCPrice],
            unit: '1 lượng'
        }
    })

    return {
        date:sjcPrice.datetime,
        data:result
    };
}
