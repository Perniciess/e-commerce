import { productService } from '@/entities/product/api/api'
import { IProductResponse, ProductListResponse } from '@/entities/product/api/types'
import { useQuery } from '@tanstack/react-query'

export function useGetProductList() {
	const { data } = useQuery<ProductListResponse>({
		queryKey: ['get-product-list'],
		queryFn: () => productService.getProductList(),
		select: (data: IProductResponse[]) => {
			const web_url = process.env.NEST_WEB_URL
			return data.map((product: IProductResponse) => ({
				...product,
				image: `${web_url}${product.image.replace('//', '/')}`,
			}))
		},
	})
	return { data }
}
