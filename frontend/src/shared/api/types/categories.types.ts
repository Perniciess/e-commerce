import { IProductResponse } from '../../../entities/product/api/types'

export type CarouselResponse = {
	id: string
	product: IProductResponse[]
}[]
