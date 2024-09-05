import React, { useState } from 'react'
import './shop.css'
import { AiFillHeart, AiFillEye, AiOutlineClose } from 'react-icons/ai';

const Shop = ({ shop, Filter, allcatefilter, addtocart }) => {
    // État pour afficher ou masquer les détails du produit
    const [showDetail, setShowDetail] = useState(false);
    // État pour stocker les détails du produit actuellement sélectionné
    const [detail, setDetail] = useState([]);

    // Fonction pour afficher les détails du produit sélectionné
    const detailpage = (product) => {
        // On stocke les détails du produit sélectionné
        const detaildata = ([{ product }]);
        const productdetail = detaildata[0]['product'];
        setDetail(productdetail);
        setShowDetail(true);
    };

    // Fonction pour fermer la fenêtre des détails du produit
    const closedetail = () => {
        setShowDetail(false);
    };

    return (
        <>
            {
                showDetail ?
                <>
                    {/* Affichage des détails du produit lorsque showDetail est vrai */}
                    <div className='product_detail'>
                        <button className='close_btn' onClick={closedetail}>
                            <AiOutlineClose />
                        </button>
                        <div className='container'>
                            <div className='img_box'>
                                <img src={detail.image} alt='Détail du produit' />
                            </div>
                            <div className='info'>
                                <h4># {detail.cat}</h4>
                                <h2>{detail.Name}</h2>
                                <p>Description du produit : {detail.description || 'A Searchcreen Everyone Will Love: Whether your family is streaming or video chatting with friends tablet A8...'}</p>
                                <h3>€{detail.price}</h3>
                                <button onClick={() => addtocart(detail)}>Ajouter au panier</button>
                            </div>
                        </div>
                    </div>
                </>
                : null
            }
            <div className='shop'>
                <h2># Boutique</h2>
                <p>Accueil . boutique</p>
                <div className='container'>
                    <div className='left_box'>
                        <div className='category'>
                            <div className='header'>
                                <h3>Toutes les catégories</h3>
                            </div>
                            <div className='box'>
                                <ul>
                                    <li onClick={() => allcatefilter()}># Tous</li>
                                    <li onClick={() => Filter("tv")}># TV</li>
                                    <li onClick={() => Filter("laptop")}># Ordinateur portable</li>
                                    <li onClick={() => Filter("watch")}># Montre</li>
                                    <li onClick={() => Filter("speaker")}># Enceinte</li>
                                    <li onClick={() => Filter("electronics")}># Électronique</li>
                                    <li onClick={() => Filter("headphone")}># Casque</li>
                                    <li onClick={() => Filter("phone")}># Téléphone</li>
                                </ul>
                            </div>
                        </div>
                        <div className='banner'>
                            <div className='img_box'>
                                <img src='image/shop_left.avif' alt='Bannière de la boutique' />
                            </div>
                        </div>
                    </div>
                    <div className='right_box'>
                        <div className='banner'>
                            <div className='img_box'>
                                <img src='image/shop_top.webp' alt='Bannière supérieure' />
                            </div>
                        </div>
                        <div className='product_box'>
                            <h2>Produits de la boutique</h2>
                            <div className='product_container'>
                                {
                                    shop.map((curElm) => {
                                        return (
                                            <>
                                                <div className='box' key={curElm.id}>
                                                    <div className='img_box'>
                                                        <img src={curElm.image} alt={curElm.Name} />
                                                        <div className='icon'>
                                                            <li><AiFillHeart /></li>
                                                            <li onClick={() => detailpage(curElm)}><AiFillEye /></li>
                                                        </div>
                                                    </div>
                                                    <div className='detail'>
                                                        <h3>{curElm.Name}</h3>
                                                        <p>€{curElm.price}</p>
                                                        <button onClick={() => addtocart(curElm)}>Ajouter au panier</button>
                                                    </div>
                                                </div>
                                            </>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Shop;
