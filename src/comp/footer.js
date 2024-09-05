import React from 'react'
import './footer.css'
import { FaPiggyBank, FaShippingFast, FaHeadphonesAlt, FaWallet } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <div className='footer'>
        <div className='container'>
          <div className='left-box'>
            <div className='box'>
              <div className='icon_box'>
                <FaPiggyBank />
              </div>
              <div className='detail'>
                <h3>Économies importantes</h3> {/* "Great Saving" devient "Économies importantes" */}
                <p>Lorem ipsum dolor sit amet,</p>
              </div>
            </div>
            <div className='box'>
              <div className='icon_box'>
                <FaShippingFast />
              </div>
              <div className='detail'>
                <h3>Livraison gratuite</h3> {/* "free delivery" devient "Livraison gratuite" */}
                <p>Lorem ipsum dolor sit amet,</p>
              </div>
            </div>
            <div className='box'>
              <div className='icon_box'>
                <FaHeadphonesAlt />
              </div>
              <div className='detail'>
                <h3>Assistance 24h/24 et 7j/7</h3> {/* "24X7 support" devient "Assistance 24h/24 et 7j/7" */}
                <p>Lorem ipsum dolor sit amet,</p>
              </div>
            </div>
            <div className='box'>
              <div className='icon_box'>
                <FaWallet />
              </div>
              <div className='detail'>
                <h3>Garantie de remboursement</h3> {/* "money back" devient "Garantie de remboursement" */}
                <p>Lorem ipsum dolor sit amet,</p>
              </div>
            </div>
          </div>
          <div className='right_box'>
            <div className='header'>
              <img src='image/logo.webp' alt='' />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus ipsum id sem consequat.</p>
            </div>
            <div className='bottom'>
              <div className='box'>
                <h3>Votre compte</h3> {/* "Your Account" devient "Votre compte" */}
                <ul>
                  <li>À propos de nous</li> {/* "About us" devient "À propos de nous" */}
                  <li>Compte</li> {/* "Account" devient "Compte" */}
                  <li>Paiement</li> {/* "Payment" devient "Paiement" */}
                  <li>Ventes</li> {/* "sales" devient "Ventes" */}
                </ul>
              </div>
              <div className='box'>
                <h3>Produits</h3> {/* "products" devient "Produits" */}
                <ul>
                  <li>Livraison</li> {/* "Delivery" devient "Livraison" */}
                  <li>Suivi de commande</li> {/* "Track Order" devient "Suivi de commande" */}
                  <li>Nouveau produit</li> {/* "New product" devient "Nouveau produit" */}
                  <li>Ancien produit</li> {/* "old product" devient "Ancien produit" */}
                </ul>
              </div>
              <div className='box'>
                <h3>Contactez-nous</h3> {/* "contact us" devient "Contactez-nous" */}
                <ul>
                  <li>4005, Silver Business Point, Inde</li> {/* "India" devient "Inde" */}
                  <li>+(012) 99999999</li>
                  <li>info@gmail.com</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
