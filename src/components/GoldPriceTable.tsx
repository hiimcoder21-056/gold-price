import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { GoldPrice } from '@/types/gold.interface';
import { formatCurrency } from '@/utils/fortmat.utils';

interface Props {
    data: GoldPrice[];
    loading: boolean;
}


export default function GoldPriceTable({ data, loading }: Props) {
    const columns: ColumnsType<GoldPrice> = [
        {
            title: 'Loại vàng',
            dataIndex: 'type',
            key: 'type',
        },
        {
            title: 'Giá mua',
            dataIndex: 'buyPrice',
            key: 'buyPrice',
            render: (text) => <strong style={{ color: '#52c41a' }}>{formatCurrency(text)}</strong>,
        },
        {
            title: 'Giá bán',
            dataIndex: 'sellPrice',
            key: 'sellPrice',
            render: (text) => <strong style={{ color: '#f5222d' }}>{formatCurrency(text)}</strong>,
        },
        {
            title: 'Đơn vị',
            dataIndex: 'unit',
            key: 'unit',
        },
    ];
    return (
        <Table
            columns={columns}
            dataSource={data}
            rowKey="name"
            loading={loading}
            pagination={false}
        />
    );
}
