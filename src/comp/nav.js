import React from 'react'
import { MdLocalShipping } from 'react-icons/md';
import { AiOutlineSearch } from 'react-icons/ai';
import { FiLogIn } from 'react-icons/fi';
import { CiLogout, CiUser } from 'react-icons/ci';
import { useAuth0 } from "@auth0/auth0-react"
import { Link } from 'react-router-dom';
import './nav.css'

const Nav = ({ search, setSearch, searchproduct }) => {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  return (
    <>
      <div className='header'>
        {/* En-tête supérieur avec des informations sur la livraison gratuite */}
        <div className='top_header'>
          <div className='icon'>
            <MdLocalShipping />
          </div>
          <div className='info'>
            <p>Livraison gratuite pour les achats jusqu'à 1000 €</p>
          </div>
        </div>
        <div className='mid_header'>
          {/* Logo de la boutique */}
          <div className='logo'>
            <img src='image/Brand-Logo-6.png' alt='logo' />
          </div>
          {/* Barre de recherche */}
          <div className='search_box'>
            <input 
              type='text' 
              value={search} 
              placeholder='Recherche' 
              onChange={(e) => setSearch(e.target.value)} 
            />
            <button onClick={searchproduct}>
              <AiOutlineSearch />
            </button>
          </div>
          {/* Affichage du bouton de connexion/déconnexion selon l'état d'authentification */}
          {
            isAuthenticated ?
            <div className='user'>
              <div className='icon'>
                <CiLogout />
              </div>
              <div className='btn'>
                <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Déconnexion</button>
              </div>
            </div>
            :
            <div className='user'>
              <div className='icon'>
                <FiLogIn />
              </div>
              <div className='btn'>
                <button onClick={() => loginWithRedirect()}>Connexion</button>

              </div>
            </div>
          }
        </div>

        <a href="inscription.html"><button>Connexion</button> </a>

        <div className='last_header'>
          {/* Profil utilisateur avec des informations affichées si connecté */}
          <div className='user_profile'>
            {
              isAuthenticated ?
              <>
                <div className='icon'>
                  <CiUser />
                </div>
                <div className='info'>
                  <h2>{user.name}</h2>
                  <p>{user.email}</p>
                </div>
              </>
              :
              <>
                <div className='icon'>
                  <CiUser />
                </div>
                <div className='info'>
                  <p>Veuillez vous connecter</p>
                </div>
              </>
            }
          </div>
          {/* Menu de navigation */}
          <div className='nav'>
            <ul>
              <li><Link to='/' className='link'>Accueil</Link></li>
              <li><Link to='/shop' className='link'>Boutique</Link></li>
              <li><Link to='/cart' className='link'>Panier</Link></li>
              <li><Link to='/about' className='link'>À propos</Link></li>
              <li><Link to='/contact' className='link'>Contact</Link></li>
            </ul>
          </div>
          {/* Offre spéciale affichée dans l'en-tête */}
          <div className='offer'>
            <p>10% de réduction sur tous les iPhones</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Nav
