
import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Carousel, CarouselResponsiveOption } from 'primereact/carousel';
import { Tag } from 'primereact/tag';
// import { ProductService } from './service/ProductService';

interface Product {
  id: string,
  img: string,
  name: string,
}

export default function ProjetosComponets({name,img,id}: Product) {
    const [products, setProducts] = useState<Product[]>([]);
    const responsiveOptions: CarouselResponsiveOption[] = [
        {
            breakpoint: '1400px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '1199px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    // const getSeverity = (product: Product) => {
    //     switch (product.inventoryStatus) {
    //         case 'INSTOCK':
    //             return 'success';

    //         case 'LOWSTOCK':
    //             return 'warning';

    //         case 'OUTOFSTOCK':
    //             return 'danger';

    //         default:
    //             return null;
    //     }
    // };
    
    // useEffect(() => {
    //     ProductService.getProductsSmall().then((data) => setProducts(data.slice(0, 9)));
    // }, []);

    const productTemplate = (product: Product) => {
        return (
            <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
                <div className="mb-3">
                    <img src={`https://primefaces.org/cdn/primereact/images/product/${product.img}`} alt={product.name} className="w-6 shadow-2" />
                </div>
                <div>
                    <h4 className="mb-1">{product.name}</h4>
                    {/* <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag> */}
                    <div className="mt-5 flex flex-wrap gap-2 justify-content-center">
                        <Button icon="pi pi-search" rounded />
                        <Button icon="pi pi-star-fill" rounded severity="success" />
                    </div>
                </div>
            </div>
        );
    };
    
    return (
        <div className="card">
            <Carousel value={products} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} />
        </div>
    )
}
        