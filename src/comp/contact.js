import React, { useState } from 'react' // Importation des modules React et useState pour gérer l'état local
import './contact.css' // Importation du fichier CSS pour styliser le composant

const Contact = () => {

    // Initialisation de l'état local avec un objet pour stocker les valeurs du formulaire
    const [user, setUser] = useState({
        Name: '', email: '', subject: '', Message: ''
    })

    let values, names

    // Fonction pour mettre à jour l'état local à chaque changement dans le formulaire
    const data = (e) => {
        values = e.target.value // Obtention de la valeur de l'input modifié
        names = e.target.name // Obtention du nom de l'input modifié
        setUser({ ...user, [names]: values }) // Mise à jour de l'état avec la nouvelle valeur pour l'input correspondant
    }

    // Fonction asynchrone pour envoyer les données du formulaire à un serveur
    const send = async (e) => {
        const { Name, email, subject, Message } = user // Déstructuration de l'état local pour extraire les valeurs du formulaire
        e.preventDefault() // Empêche le rechargement de la page lors de la soumission du formulaire

        // Configuration de la requête POST pour envoyer les données à l'API
        const option = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Spécifie que les données envoyées sont au format JSON
            },
            body: JSON.stringify({
                Name, email, subject, Message // Conversion des données du formulaire en chaîne JSON
            })
        }

        // Envoi de la requête POST à l'API
        const send = await fetch(
            'https://react-ecommerce-contact-default-rtdb.firebaseio.com/Message.json', option
        )

        // Vérification de la réponse et affichage d'une alerte en fonction du résultat
        if (send) {
            alert("Message envoyé") // Si la requête réussit, afficher un message de confirmation
        } else {
            alert("Une erreur s'est produite, l'envoi du message a échoué") // Si la requête échoue, afficher un message d'erreur
        }
    }

    return (
        <>
        <div className='contact'>
            <div className='container'>
                <div className='form'>
                    <h2>#contactez-nous</h2> {/* Titre du formulaire de contact */}

                    {/* Formulaire avec plusieurs champs d'entrée pour capturer les informations de l'utilisateur */}
                    <form method='POST'>
                        <div className='box'>
                            <div className='lable'>
                                <h4>Nom</h4> {/* Étiquette pour le champ "Nom" */}
                            </div>
                            <div className='input'>
                                <input 
                                    type='text' 
                                    placeholder='Nom' 
                                    value={user.Name} 
                                    name='Name' 
                                    onChange={data} 
                                /> {/* Champ pour entrer le nom */}
                            </div>
                        </div>

                        <div className='box'>
                            <div className='lable'>
                                <h4>E-mail</h4> {/* Étiquette pour le champ "E-mail" */}
                            </div>
                            <div className='input'>
                                <input 
                                    type='email' 
                                    placeholder='E-mail' 
                                    value={user.email} 
                                    name='email' 
                                    onChange={data} 
                                /> {/* Champ pour entrer l'e-mail */}
                            </div>
                        </div>

                        <div className='box'>
                            <div className='lable'>
                                <h4>Sujet</h4> {/* Étiquette pour le champ "Sujet" */}
                            </div>
                            <div className='input'>
                                <input 
                                    type='text' 
                                    placeholder='Sujet' 
                                    value={user.subject} 
                                    name='subject' 
                                    onChange={data} 
                                /> {/* Champ pour entrer le sujet */}
                            </div>
                        </div>

                        <div className='box'>
                            <div className='lable'>
                                <h4>Message</h4> {/* Étiquette pour le champ "Message" */}
                            </div>
                            <div className='input'>
                                <textarea 
                                    placeholder='Message !' 
                                    value={user.Message} 
                                    name='Message' 
                                    onChange={data} 
                                /> {/* Champ pour entrer le message */}
                            </div>
                        </div>

                        {/* Bouton pour envoyer le formulaire */}
                        <button 
                            type='submit' 
                            onClick={send}>
                            Envoyer
                        </button> {/* "Send" devient "Envoyer" */}
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contact // Exportation du composant pour être utilisé dans d'autres parties de l'application
