'use client';

import Image from "next/image";
import { Rating } from "@mui/material";
import { formatPrice } from "@/utils/formatPrice";
import { useCallback, useState } from "react";
import SetColor from "@/app/components/products/SetColor";


interface ProductDetailsProps {
    product: any;
}

export type CartProductType = {
    id:string,
    name:string,
    description:string,
    category:string,
    brand:string,
    selectedImg:selectedImgType,
    quantity:number,
    price:number
}

export type selectedImgType = {
    color:string,
    colorCode:string,
    image:string
}

const HorizontalLine = () => {
    return <hr className="w-[30%] my-2"/>
};

const ProductDetails:React.FC<ProductDetailsProps> = ({product}) => {

    const [cartProduct, setCartProduct] = useState<CartProductType>({
        id:product.id,
        name:product.name,
        description:product.description,
        category:product.category,
        brand:product.brand,
        selectedImg:{...product.images[0]},
        quantity:1,
        price:product.price
    });

    console.log('cartProduct',cartProduct)

    const ProductRating = product.reviews.reduce((acc:number, item:any) => item.rating + acc, 0) / product.reviews.length

    const handleColorSelect = useCallback((value:selectedImgType) => 
    {setCartProduct((prev)=> {
        return {...prev, selectedImg:value}
    })},[cartProduct.selectedImg]);
        
    

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
                <div className="text-2xl font-medium text-slate-700">{formatPrice(product.price)}</div>

                <div className="flex items-center gap-2">
                    <Rating value={ProductRating} readOnly/>
                    <div>{product.reviews.length} reviews</div>
                </div>
                <HorizontalLine/>
                <div>
                    <div className="text-justify">{product.description}</div>
                </div>
                <HorizontalLine/>
                <div>
                    <span className="font-semibold ">CATEGORY: </span>{product.category}
                </div>
                <div>
                    <span className="font-semibold ">BRAND: </span>{product.brand}
                </div>
                <div className={product.inStock ? 'text-teal-400':'text-rose-400'}>{product.inStock?'In stock' : 'Out of stock'}</div>
                <HorizontalLine/>
                <SetColor
                    cartProduct={cartProduct} images={product.images} handleColorSelect={handleColorSelect}
                /> 
                <HorizontalLine/> 
                <div>Quantity</div>
                <HorizontalLine/>
                <div>Add to cart button</div>
            </div>
        </div>
    )
};

export default ProductDetails;