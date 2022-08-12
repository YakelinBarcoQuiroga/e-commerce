import React from 'react';
import "../css/detailProduct.css"
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import {useParams} from "react-router-dom"
import { useEffect } from 'react';
import { getProductsThunk } from '../store/slices/products.slice';

const ProductDetail = () => {

    const allProducts = useSelector(state => state.products);
    const [productDetail, setProductDetail] = useState({});

    const {id} = useParams();
    const dispatch = useDispatch();
    console.log(allProducts)
    console.log(id)

    useEffect(() => {
        const product = allProducts.find(productItem => Number(productItem.id) === Number(id));
        console.log(product)
        setProductDetail(product);
    }, [allProducts])

    useEffect(() =>{
        dispatch(getProductsThunk());
    },[])

  

    

    console.log(productDetail)

    return (
        <div className='container-detailProdutc'>
            <div className='exit-detailProduct'>
                <a href='/#/'>Home</a>
                <i class="fa-solid fa-circle"></i>
                <p>Nombre del producto</p>
            </div>
            <div className='container-detailProduct'>
                <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={productDetail?.productImgs} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={productDetail?.productImgs} class="d-block w-100" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={productDetail?.productImgs} class="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>

                <div className='detail-product-info'>
                    <h2 className='detail-product-title'>{productDetail?.title}</h2>
                    <p className='detail-product-description'>{productDetail?.description}</p>
                    <div className='detail-product-price'>
                        <div>
                            <p>Precio</p>
                            <h4>$ {productDetail?.price}</h4>
                        </div>
                        <div className='amount-product'>
                            <div className='change-amount'>+</div>
                            <div>1</div>
                            <div className='change-amount'>-</div>
                        </div>
                    </div>
                    <button className='detail-product-add'>Add to cart <i class="fa-solid fa-cart-plus"></i></button>
                </div>
            </div>

            <h5 className='similar-products'>Discover similar items</h5>

            <div className='container-card-product-detail'>
                <div class="card-product">
                    <div class="image-card">
                        <img src='' alt="" />
                        <span>
                            <img src='' alt="" />
                        </span>
                    </div>
                    <div class="card-info">
                        <p class="text-title">Nombre del producto </p>
                    </div>
                    <div class="card-footer">
                        <span class="text-title">$ precio</span>
                        <div class="card-button">
                            <svg class="svg-icon" viewBox="0 0 20 20">
                            <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
                            <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
                            <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;