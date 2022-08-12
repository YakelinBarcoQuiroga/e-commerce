import React from 'react';
import "../css/search.css"
import "../css/ListProducts.css"
import "../css/filter.css"
import { useEffect } from 'react';
import { filterNameProductThunk, getProductsThunk } from '../store/slices/products.slice';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate} from "react-router-dom"
import { useState } from 'react';
const Home = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState("");

    const products = useSelector(state => state.products)

    useEffect(() => {
        dispatch(getProductsThunk());
    }, [])

    return (
        <div className='container-home'>
            <div className="input-group">
                <input type="text" className="input" 
                    placeholder="What are you looking for?" 
                    onChange={(e) => setSearchValue(e.target.value)}
                    value={searchValue}
                />
                <button className="button--submit" onClick={() => dispatch(filterNameProductThunk(searchValue))}>Buscar</button>
            </div>
            <div className='container-button-filter'>
                <button className="button-filter" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class="fa-solid fa-filter"></i> Filters</button>
            </div>
            
            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasRightLabel">Filters</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div class="accordion accordion-flush" id="accordionFlushExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingOne">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                <b>Price</b>
                            </button>
                            </h2>
                            <div id="flush-collapseOne" class="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <form action="" className='form-filter-price'>
                                    <label htmlFor="">From </label>
                                    <input type="number" className='input-filter-price'/>
                                    <br /> <br />
                                    <label htmlFor="">To </label>
                                    <input type="number" className='input-filter-price'/>
                                    <br /><br />
                                    <div className='button-filter-price'>
                                        <button>Filter price</button>
                                    </div>
                                </form>
                            </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="flush-headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                <b>Category</b>
                            </button>
                            </h2>
                            <div id="flush-collapseTwo" class="accordion-collapse collapse show" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <div className='category-container'>
                                    <p>Smart TV</p>
                                    <p>Computers</p>
                                    <p>Smartphones</p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="main-products">
                <div className="continer-filter-xl" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasRightLabel">Filters</h5>
                    </div>
                    <div className="offcanvas-body">
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingOne">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    <b>Price</b>
                                </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    <form action="" className='form-filter-price'>
                                        <label htmlFor="">From </label>
                                        <input type="number" className='input-filter-price'/>
                                        <br /> <br />
                                        <label htmlFor="">To </label>
                                        <input type="number" className='input-filter-price'/>
                                        <br /><br />
                                        <div className='button-filter-price'>
                                            <button>Filter price</button>
                                        </div>
                                    </form>
                                </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                    <b>Category</b>
                                </button>
                                </h2>
                                <div id="flush-collapseTwo" class="accordion-collapse collapse show" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">
                                    <div className='category-container'>
                                        <p>Smart TV</p>
                                        <p>Computers</p>
                                        <p>Smartphones</p>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='container-card-product'>
                    
                    {
                        products.map(product => (
                            <div class="card-product" key={product.id} onClick={() => navigate(`/product/${product.id}`)}>
                                <div class="image-card">
                                    <img src={product.productImgs[0]} alt="" />
                                    <span>
                                        <img src={product.productImgs[1]} alt="" />
                                    </span>
                                </div>
                                <div class="card-info">
                                    <p class="text-title">{product.title} </p>
                                </div>
                                <div class="card-footer">
                                    <span class="text-title">$ {product.price}</span>
                                    <div class="card-button">
                                        <svg class="svg-icon" viewBox="0 0 20 20">
                                        <path d="M17.72,5.011H8.026c-0.271,0-0.49,0.219-0.49,0.489c0,0.271,0.219,0.489,0.49,0.489h8.962l-1.979,4.773H6.763L4.935,5.343C4.926,5.316,4.897,5.309,4.884,5.286c-0.011-0.024,0-0.051-0.017-0.074C4.833,5.166,4.025,4.081,2.33,3.908C2.068,3.883,1.822,4.075,1.795,4.344C1.767,4.612,1.962,4.853,2.231,4.88c1.143,0.118,1.703,0.738,1.808,0.866l1.91,5.661c0.066,0.199,0.252,0.333,0.463,0.333h8.924c0.116,0,0.22-0.053,0.308-0.128c0.027-0.023,0.042-0.048,0.063-0.076c0.026-0.034,0.063-0.058,0.08-0.099l2.384-5.75c0.062-0.151,0.046-0.323-0.045-0.458C18.036,5.092,17.883,5.011,17.72,5.011z"></path>
                                        <path d="M8.251,12.386c-1.023,0-1.856,0.834-1.856,1.856s0.833,1.853,1.856,1.853c1.021,0,1.853-0.83,1.853-1.853S9.273,12.386,8.251,12.386z M8.251,15.116c-0.484,0-0.877-0.393-0.877-0.874c0-0.484,0.394-0.878,0.877-0.878c0.482,0,0.875,0.394,0.875,0.878C9.126,14.724,8.733,15.116,8.251,15.116z"></path>
                                        <path d="M13.972,12.386c-1.022,0-1.855,0.834-1.855,1.856s0.833,1.853,1.855,1.853s1.854-0.83,1.854-1.853S14.994,12.386,13.972,12.386z M13.972,15.116c-0.484,0-0.878-0.393-0.878-0.874c0-0.484,0.394-0.878,0.878-0.878c0.482,0,0.875,0.394,0.875,0.878C14.847,14.724,14.454,15.116,13.972,15.116z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;