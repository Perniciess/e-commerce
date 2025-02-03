import { BackIcon } from '@/shared/ui/icons/ui-back-icon'
import { NextIcon } from '@/shared/ui/icons/ui-next-icon'
import { UiButton } from '@/shared/ui/ui-button'
import { UiLink } from '@/shared/ui/ui-link'
import Image from 'next/image'
import { useState } from 'react'
import { useGetCarousel } from '../model/use-description'

export function UiDescription() {
	const [activeImage, setActiveImage] = useState(0)
	const { data: carousel, isPending } = useGetCarousel()

	if (isPending) {
		return <div>Loading...</div>
	}

	if (!carousel || carousel.length === 0 || !carousel[0]?.product) {
		return <div>No carousel data found.</div>
	}

	const clickNext = () => {
		const productCount = carousel[0]?.product?.length ?? 0
		if (productCount > 0) {
			setActiveImage((activeImage + 1) % productCount)
		}
	}

	const clickPrev = () => {
		const productCount = carousel[0]?.product?.length ?? 0
		if (productCount > 0) {
			setActiveImage((activeImage - 1 + productCount) % productCount)
		}
	}

	const product = carousel[0].product[activeImage]

	return (
		<>
			<div className='place-items-center grid grid-cols-2 xs:grid-cols-1 xxs:grid-cols-1 shadow-2xl mx-auto mt-20 mb-8 rounded-3xl w-full max-w-5xl'>
				<div className='relative flex justify-center items-center rounded-2xl w-full h-[30vh] overflow-hidden'>
					<div className='block w-full h-full absolute top-0 left-0'>
						<Image
							src={product.image}
							alt=''
							layout='fill'
							objectFit='contain'
							className='rounded-tl-3xl rounded-bl-3xl'
						/>
					</div>
				</div>

				<div className='place-items-start grid bg-[#17171BFF] p-4 md:rounded-tr-3xl md:rounded-br-3xl w-full'>
					<div className='block w-full h-[60vh] px-10 text-left relative'>
						<div className='flex flex-col py-8 text-white'>
							<div className='font-extrabold text-4xl'>
								{product.brand.brand_name} {product.name}
							</div>
							<div className='top-40 absolute price-container'>
								<div className='font-medium text-lg italic tracking-wide'>{product.price} ₽</div>
							</div>
						</div>
						<div className='right-4 bottom-2 left-4 absolute flex justify-between items-center'>
							<UiLink variant='none' href={`/products/id?id=${product.product_id}`}>
								<UiButton variant='white' className='uppercase'>
									Заказать
								</UiButton>
							</UiLink>
							<div className='flex items-center'>
								<div className='cursor-pointer' onClick={clickNext}>
									<NextIcon color='white' className='w-12 h-12' />
								</div>
								<div className='mr-2 cursor-pointer' onClick={clickPrev}>
									<BackIcon color='white' className='w-12 h-12' />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
