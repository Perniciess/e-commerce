import Image from 'next/image'
import { useGetProductList } from '../api/use-product-list'

export function UiProductsList({ title }: { title: string }) {
    const { data: products } = useGetProductList()

    return (
        <div className="container mx-auto">
            <h1 className="mb-4 text-2xl font-bold">{title}</h1>
            <ul className="flex flex-wrap justify-center gap-4">
                {products
                && products.map(product => (
                    <li key={product.product_id} className="w-full p-2 sm:w-1/2 md:w-1/3 lg:w-1/4">
                        <div className="flex h-full flex-col rounded-lg bg-white shadow-md">
                            <div className="shrink-0">
                                {product.image
                                    ? (
                                            <Image
                                                src={product.image}
                                                alt=""
                                                layout="responsive"
                                                objectFit="contain"
                                                width={500}
                                                height={400}
                                                className="rounded-t-lg"
                                            />
                                        )
                                    : (
                                            <div className="flex h-48 w-full items-center justify-center rounded-t-lg bg-gray-200">
                                                <span className="text-gray-500">No Image</span>
                                            </div>
                                        )}
                            </div>
                            <div className="flex grow flex-col justify-between rounded-b-lg bg-[#17171BFF] p-4 text-white">
                                <div>
                                    <h2 className="mb-2 text-xl font-semibold">
                                        {product.brand.brand_name}
                                        {' '}
                                        {product.name}
                                    </h2>
                                </div>
                                <p className="mt-4 text-lg">
                                    {product.price}
                                    {' '}
                                    ₽
                                </p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
