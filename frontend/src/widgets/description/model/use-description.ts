import { categoriesService } from '@/shared/api/services/categories.service'
import { CarouselResponse } from '@/shared/api/types/categories.types'
import { useQuery } from '@tanstack/react-query'

export function useGetCarousel() {
	const { data, isPending } = useQuery<CarouselResponse>({
		queryKey: ['get-carousel'],
		queryFn: () => categoriesService.getCarousel(),
		select: data => {
			const web_url = process.env.NEST_WEB_URL
			return data.map(carouselItem => ({
				...carouselItem,
				product: carouselItem.product.map(product => ({
					...product,
					image: `${web_url}${product.image.replace('//', '/')}`,
				})),
			}))
		},
	})

	return { data, isPending }
}
