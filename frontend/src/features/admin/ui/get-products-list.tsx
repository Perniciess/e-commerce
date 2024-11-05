import { UiTable } from "@/shared/ui/ui-table";
import { useGetProducts } from "../model/use-get-products";
import { products_headers } from "./config";


export function ProductsList() {
    const { data: products } = useGetProducts();
    if (!products) return <div>Loading...</div>;

    const tableData = products.map((product) => [
        product.name,
        product.price,
        product.categories[0]?.parent?.name || '', // category
        product.categories[0]?.name || '', // subcategory
        product.brand.brand_name,
        product.size,
        product.color
      ]);

    return (
        <div>
            <div className="rounded-lg overflow-x-auto">
                <UiTable headers={products_headers} data={tableData} />
            </div>
        </div>
    );
}
