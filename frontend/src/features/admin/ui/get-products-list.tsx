import { UiTable } from "@/shared/ui/ui-table";
import { useGetProducts } from "../model/use-get-products";
import { products_headers } from "./config";
import { useRemoveProductMutation } from "../model/use-remove-product";
import { useQueryClient } from "@tanstack/react-query";

export function ProductsList() {
    const { data: products } = useGetProducts();

    const removeProductMutation = useRemoveProductMutation();
    const queryClient = useQueryClient();
    
    const handleRemove = (productId: string) => {
        removeProductMutation.mutate(productId, {
            onSuccess: () => {
                queryClient.invalidateQueries({queryKey: ["products"]});
            }
        });
    }

    if (!products) return <div>Loading...</div>;

    const tableData = products.map((product) => [
        product.name,
        product.price,
        product.categories[0]?.parent?.name || '', // category
        product.categories[0]?.name || '', // subcategory
        product.brand.brand_name,
        product.size,
        product.color,
        <button disabled={removeProductMutation.isPending}
        onClick={() => handleRemove(product.product_id)}>Удалить</button>
      ]);
    

    return (
        <div>
            <div className="rounded-lg overflow-x-auto">
                <UiTable headers={products_headers} data={tableData} />
            </div>
        </div>
    );
}
