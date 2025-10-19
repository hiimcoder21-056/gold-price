import { GoldType } from "@/enums";

interface IProps {
    code: string;
    name: string;
}

export const GoldTypeMapping: Record<GoldType, IProps> = {
    [GoldType.NHAN_TRON]: { code: GoldType.NHAN_TRON, name: "Nhẫn trơn" },
    [GoldType.NU_TRANG_75]: { code: GoldType.NHAN_TRON, name: "Nữ trang 18k" },
    [GoldType.NU_TRANG_99]: { code: GoldType.NHAN_TRON, name: "Nữ trang 24k" },
    [GoldType.NU_TRANG_9999]: { code: GoldType.NHAN_TRON, name: "Nữ trang 9999" },
};