export type ProductVariant = {
    id: number;
    product_id: number;
    title: string;
    price: string;
    sku: string;
    position: number;
    inventory_policy: string;
    compare_at_price?: string;
    fulfillment_service: string;
    inventory_management: string;
    option1?: string;
    option2?: string;
    option3?: string;
    taxable: boolean;
    barcode: string;
    grams: number;
    image_id: number;
    weight: number;
    weight_unit: string;
    inventory_item_id: number;
    inventory_quantity: number;
    old_inventory_quantity: number;
    requires_shipping: boolean;
};