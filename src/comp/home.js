import React, { useEffect, useState } from 'react'
import './home.css'
import { Link } from 'react-router-dom'
import Homeproduct from './home_product'
import { AiFillEye, AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagram, BiLogoYoutube } from "react-icons/bi";

const Home = ({ addtocart }) => {
  const [newProduct, setNewProduct] = useState([])
  const [featuredProduct, setFeaturdProduct] = useState([])
  const [topProduct, setTopProduct] = useState([])
  const [trendingProduct, setTrendingProduct] = useState(Homeproduct)

  const filtercate = (x) => {
    const filterproduct = Homeproduct.filter((curElm) => {
      return curElm.type === x
    })
    setTrendingProduct(filterproduct)
  }

  const allTrendingProduct = () => {
    setTrendingProduct(Homeproduct)
  }

  useEffect(() => {
    productcategory()
  })

  const productcategory = () => {
    const newcategory = Homeproduct.filter((x) => {
      return x.type === 'new'
    })
    setNewProduct(newcategory)

    const featuredcategory = Homeproduct.filter((x) => {
      return x.type === 'featured'
    })
    setFeaturdProduct(featuredcategory)

    const topcategory = Homeproduct.filter((x) => {
      return x.type === 'top'
    })
    setTopProduct(topcategory)
  }

  return (
    <>
      <div className='home'>
        <div className='top_banner'>
          <div className='contant'>
            <h3>Aluminium argent</h3>
            <h2>Apple Watch</h2>
            <p>30% de réduction sur votre première commande</p>
            <Link to='/shop' className='link'>Achetez maintenant</Link>
          </div>
        </div>
        <div className='trending'>
          <div className='container'>
            <div className='left_box'>
              <div className='header'>
                <div className='heading'>
                  <h2 onClick={() => allTrendingProduct()}>Produits tendance</h2>
                </div>
                <div className='cate'>
                  <h3 onClick={() => filtercate('new')}>Nouveaux</h3>
                  <h3 onClick={() => filtercate('featured')}>En vedette</h3>
                  <h3 onClick={() => filtercate('top')}>Meilleures ventes</h3>
                </div>
              </div>
              <div className='products'>
                <div className='container'>
                  {
                    trendingProduct.map((curElm) => {
                      return (
                        <>
                          <div className='box'>
                            <div className='img_box'>
                              <img src={curElm.image} alt='' />
                              <div className='icon'>
                                <div className='icon_box'>
                                  <AiFillEye />
                                </div>
                                <div className='icon_box'>
                                  <AiFillHeart />
                                </div>
                              </div>
                            </div>
                            <div className='info'>
                              <h3>{curElm.Name}</h3>
                              <p>€{curElm.price}</p>
                              <button className='btn' onClick={() => addtocart(curElm)}>Ajouter au panier</button>
                            </div>
                          </div>
                        </>
                      )
                    })
                  }
                </div>
                <button>Voir plus</button>
              </div>
            </div>
            <div className='right_box'>
              <div className='right_container'>
                <div className='testimonial'>
                  <div className='head'>
                    <h3>Notre témoignage</h3>
                  </div>
                  <div className='detail'>
                    <div className='img_box'>
                      <img src='image/T1.avif' alt='témoignage' />
                    </div>
                    <div className='info'>
                      <h3>Stephan Robot</h3>
                      <h4>Designer Web</h4>
                      <p>Duis faucibus enim vitae nunc molestie, nec facilisis arcu pulvinar nullam mattis.</p>
                    </div>
                  </div>
                </div>
                <div className='newsletter'>
                  <div className='head'>
                    <h3>Newsletter</h3>
                  </div>
                  <div className='form'>
                    <p>Rejoignez notre liste de diffusion</p>
                    <input type='email' placeholder='E-mail' autoComplete='off' />
                    <button>Abonnez-vous</button>
                    <div className='icon_box'>
                      <div className='icon'>
                        <BiLogoFacebook />
                      </div>
                      <div className='icon'>
                        <BiLogoTwitter />
                      </div>
                      <div className='icon'>
                        <BiLogoInstagram />
                      </div>
                      <div className='icon'>
                        <BiLogoYoutube />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='banners'>
          <div className='container'>
            <div className='left_box'>
              <div className='box'>
                <img src='image/Multi-Banner-1.avif' alt='bannière' />
              </div>
              <div className='box'>
                <img src='image/Multi-Banner-2.avif' alt='bannière' />
              </div>
            </div>
            <div className='right_box'>
              <div className='top'>
                <img src='image/Multi-Banner-3.webp' alt='' />
                <img src='image/Multi-Banner-4.avif' alt='' />
              </div>
              <div className='bottom'>
                <img src='image/Multi-Banner-5.webp' alt='' />
              </div>
            </div>
          </div>
        </div>
        <div className='product_type'>
          <div className='container'>
            <div className='box'>
              <div className='header'>
                <h2>Nouvelle Collection</h2>
              </div>
              {
                newProduct.map((curElm) => {
                  return (
                    <>
                      <div className='productbox'>
                        <div className='img-box'>
                          <img src={curElm.image} alt='' />
                        </div>
                        <div className='detail'>
                          <h3>{curElm.Name}</h3>
                          <p>€{curElm.price}</p>
                          <div className='icon'>
                            <button><AiFillEye /></button>
                            <button><AiFillHeart /></button>
                            <button onClick={() => addtocart(curElm)}><AiOutlineShoppingCart /></button>
                          </div>
                        </div>
                      </div>
                    </>
                  )
                })
              }
            </div>
            <div className='box'>
              <div className='header'>
                <h2>Produits en vedette</h2>
              </div>
              {
                featuredProduct.map((curElm) => {
                  return (
                    <>
                      <div className='productbox'>
                        <div className='img-box'>
                          <img src={curElm.image} alt='' />
                        </div>
                        <div className='detail'>
                          <h3>{curElm.Name}</h3>
                          <p>€{curElm.price}</p>
                          <div className='icon'>
                            <button><AiFillEye /></button>
                            <button><AiFillHeart /></button>
                            <button onClick={() => addtocart(curElm)}><AiOutlineShoppingCart /></button>
                          </div>
                        </div>
                      </div>
                    </>
                  )
                })
              }
            </div>
            <div className='box'>
              <div className='header'>
                <h2>Meilleures ventes</h2>
              </div>
              {
                topProduct.map((curElm) => {
                  return (
                    <>
                      <div className='productbox'>
                        <div className='img-box'>
                          <img src={curElm.image} alt='' />
                        </div>
                        <div className='detail'>
                          <h3>{curElm.Name}</h3>
                          <p>€{curElm.price}</p>
                          <div className='icon'>
                            <button><AiFillEye /></button>
                            <button><AiFillHeart /></button>
                            <button onClick={() => addtocart(curElm)}><AiOutlineShoppingCart /></button>
                          </div>
                        </div>
                      </div>
                    </>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home

