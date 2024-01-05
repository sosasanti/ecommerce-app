'use client';
import Image from "next/image";


import { Rating } from "@mui/material";

interface ProductDetailsProps {
    product: any;
}

const HorizontalLine = () => {
    return <hr className="w-[30% my-2]"/>
};

const ProductDetails:React.FC<ProductDetailsProps> = ({product}
    ) => {

    const ProductRating = product.reviews.reduce((acc:number, item:any) => item.rating + acc, 0) / product.reviews.length

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="aspect-square overflow-hidden relative w-full">
                <Image
                    fill
                    src={product.images[0].image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                />
            </div>
            <div className="flex flex-col gap-1 text-slate-500 text-sm">
                <h2 className="text-3xl font-medium text-slate-700">{product.name}</h2>
                <div className="flex items-center gap-2">
                    <Rating value={ProductRating} readOnly/>
                    <div>{product.reviews.length} reviews</div>
                </div>
                <HorizontalLine/>
                <div>
                    <div className="text-justify">{product.description}</div>
                </div>
                <HorizontalLine/>
            </div>
        </div>
    )
}

export default ProductDetails;