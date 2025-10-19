export interface SJCPrice {
    "buy_1c": string,
    "buy_1l": string,
    "buy_5c": string,
    "buy_nhan1c": string,
    "buy_nutrang_75": string,
    "buy_nutrang_99": string,
    "buy_nutrang_9999": string,
    "datetime": string,
    "sell_1c": string,
    "sell_1l": string,
    "sell_5c": string,
    "sell_nhan1c": string,
    "sell_nutrang_75": string,
    "sell_nutrang_99": string,
    "sell_nutrang_9999": string
}

export interface DOJIPrice {
    "buy_ct": string,
    "buy_dn": string,
    "buy_hcm": string,
    "buy_hn": string,
    "datetime": string,
    "sell_ct": string,
    "sell_dn": string,
    "sell_hcm": string,
    "sell_hn": string
}

export interface GoldPrice {
    type: string;
    buyPrice: string;
    sellPrice: string;
    unit: string;
}

