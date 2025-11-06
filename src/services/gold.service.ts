import { API_KEY, BASE_URL, PATH_GOLD } from "@/config";
import { GoldBrand, GoldType } from "@/enums";
import { GoldTypeMapping } from "@/mappings/goldType.mapping";
import { GoldPrice, SJCPrice } from "@/types/gold.interface";

interface IResponse {
    results: SJCPrice[];
}

interface IProps{
    type:GoldBrand
}

export async function fetchGoldPrice({type}:IProps): Promise<{date:string, data:GoldPrice[]}> {
    const response = await fetch(`${BASE_URL}/${PATH_GOLD}/${type}`, {
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
