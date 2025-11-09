import GoldPriceTable from '@/components/GoldPriceTable';
import { fetchGoldPrice } from '@/services/gold.service';
import { GoldPrice } from '@/types/gold.interface';
import { Card, Typography } from 'antd';
import { useEffect, useState } from 'react';

import { GoldBrand } from '@/enums';
import dayjs from "dayjs";
import { requestNewApiKey } from '@/services/apikey.service';

const { Title } = Typography;

export default function HomePage() {
    const [data, setData] = useState<GoldPrice[]>([]);
    const [updatedTime, setUpdatedTime] = useState<string>();
    const [loading, setLoading] = useState<boolean>(true);

    const loadData = async () => {
        setLoading(true);
        const result = await fetchGoldPrice({ type: GoldBrand.SJC });
        setData(result.data);
        setUpdatedTime(result.date)
        setLoading(false);
    };

    // useEffect(() => {
    //     loadData();
    //     const interval = setInterval(loadData, 60000);
    //     return () => clearInterval(interval);
    // }, []);

    useEffect(() => {
        loadData();
        requestNewApiKey();
        console.log("BASE_URL =", process.env.REACT_APP_BASE_URL);
    }, []);

    return (
        <Card>
            <Title level={4}>Bảng giá vàng SJC - Cập nhật: {dayjs(Number(updatedTime)*1000).format('DD/MM/YYYY - HH:mm:ss')} </Title>
            <GoldPriceTable data={data} loading={loading} />
        </Card>
    );
}
