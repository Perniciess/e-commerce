import Image from "next/image";



export function UiProductsList({ title }: { title: string }) {
    const products = [
        {
            id: 1,
            image: "/balance530.jpg",
            name: "Product",
            price: 100,
            type: "Кроссовки",
            brand: "New Balance",
        },
        {
            id: 2,
            image: "/balance530.jpg",
            name: "Product",
            price: 200,
            type: "Кроссовки",
            brand: "New Balance",
        },
        {
            id: 3,
            image: "/balance530.jpg",
            name: "Product",
            price: 300,
            type: "Кроссовки",
            brand: "New Balance",
        },

        {
            id: 4,
            image: "/balance530.jpg",
            name: "530",
            price: 300,
            type: "Кроссовки",
            brand: "New Balance",
        },
    ];

    return (
        <div className="container mx-auto">
            <h1 className="text-2xl font-bold">{title}</h1>
            <ul className="flex flex-wrap">
                {products.map((product) => (
                    <li
                        key={product.id}
                        className="w-full p-2 sm:w-1/2 md:w-1/3 lg:w-1/4"
                    >
                        <div className="">
                            <Image
                                src={product.image}
                                alt={product.name}
                                width={500}
                                height={400}
                                className="rounded-t-lg border-l border-r border-t p-4 shadow-2xl"
                            />
                            <div className="rounded-b-lg bg-[#17171BFF] p-4 text-white">
                                <h2 className="text-xl font-semibold">
                                    {product.brand} {product.name}
                                </h2>
                                <p className="text-gray-600">{product.type}</p>

                                <p className="text-lg">{product.price} ₽</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
