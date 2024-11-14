import { productsRemoveProduct } from '@/shared/api/apiSlice'
import { useMutation, useQueryClient } from '@tanstack/react-query'

const blockListKey = ['block-list'] as unknown[]

export function useRemoveProductMutation() {
	const queyrClient = useQueryClient()
	return useMutation({
		mutationFn: productsRemoveProduct,
		async onSettled() {
			await queyrClient.invalidateQueries({ queryKey: blockListKey })
		},
	})
}
