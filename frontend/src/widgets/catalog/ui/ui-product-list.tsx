import Image from 'next/image'
import { useGetProductList } from '../model/use-product-list'

export function UiProductsList({ title }: { title: string }) {
	const { data: products } = useGetProductList()

	return (
		<div className='container mx-auto'>
			<h1 className='text-2xl font-bold mb-4'>{title}</h1>
			<ul className='flex flex-wrap justify-center gap-4'>
				{products &&
					products.map(product => (
						<li key={product.product_id} className='w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2'>
							<div className='flex flex-col h-full bg-white rounded-lg shadow-md'>
								<div className='flex-shrink-0'>
									{product.image ? (
										<Image
											src={product.image}
											alt=''
											layout='responsive'
											objectFit='contain'
											width={500}
											height={400}
											className='rounded-t-lg'
										/>
									) : (
										<div className='w-full h-48 bg-gray-200 rounded-t-lg flex items-center justify-center'>
											<span className='text-gray-500'>No Image</span>
										</div>
									)}
								</div>
								<div className='flex-grow flex flex-col justify-between p-4 bg-[#17171BFF] text-white rounded-b-lg'>
									<div>
										<h2 className='text-xl font-semibold mb-2'>
											{product.brand.brand_name} {product.name}
										</h2>
									</div>
									<p className='text-lg mt-4'>{product.price} ₽</p>
								</div>
							</div>
						</li>
					))}
			</ul>
		</div>
	)
}
