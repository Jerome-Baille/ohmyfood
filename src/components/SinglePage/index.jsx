import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasHeart, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import { useState } from "react";

import Dialog from "@mui/material/Dialog";
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

import data from '../../assets/data.json'

const SinglePage = () => {
    const { id } = useParams();

    // Open a modal to display success message
    const [open, setOpen] = useState(false);

    const handleClickToOpen = () => {
    setOpen(true);
    };
    
    const handleToClose = () => {
    setOpen(false);
    };

    const addToOrder = (item) => {
        var order = JSON.parse(localStorage.getItem('order'));
        const selectedItem = document.getElementById(item.id);

        if (order) {
            const resultFind = order.find((el) => el.id === item.id);
                if (resultFind) {
                    for( var i = 0; i < order.length; i++){ 
                        if ( order[i] === resultFind) { 
                            order.splice(i, 1); 
                            localStorage.setItem('order', JSON.stringify(order));
                            selectedItem.classList.remove('selected');

                            if(order.length === 0){
                                localStorage.removeItem('order');
                            }
                        }
                    }
                } else {
                    order.push(item);
                    localStorage.setItem("order", JSON.stringify(order));
                    selectedItem.classList.add('selected');
            }
        } else {
            localStorage.setItem('order', JSON.stringify([item]));
            selectedItem.classList.add('selected');
        }
    }

    const getTotal = () => {
        var order = JSON.parse(localStorage.getItem('order'));
        var total = 0;
        if (order) {
            order.forEach(item => {
                total += parseInt(item.price);
            });
        }
        return total;
    }

    const handleToggle = (key) => {
        localStorage.getItem(key)? localStorage.removeItem(key) : localStorage.setItem(key, 'true');
        const btn = document.getElementById(key);
        localStorage.getItem(key)? btn.classList.add('btn__heart--clicked') : btn.classList.remove('btn__heart--clicked');
    };

    if (data) {
        return (
            <main>
                <div className="menu__img">
                    <img className="menu__img__content menu__img__content--small" src={data[id].imgSmall} alt={'Illustration du restaurant "'+ data[id].name+'"'} />
                    <img className="menu__img__content menu__img__content--large" src={data[id].imgLarge} alt={'Illustration du restaurant "'+ data[id].name+'"'} />
                </div>
    
                <section className="menu main-container">
                    <header className="menu__header">
                        <h2>{data[id].name}</h2>
                        <button className={(localStorage.getItem(id))? "btn__heart btn__heart--clicked" : "btn__heart"} id={id} onClick = {() => handleToggle(id)}>
                            <FontAwesomeIcon icon={farHeart} className="far"/>
                            <FontAwesomeIcon icon={fasHeart} />
                        </button>
                    </header>
                    
                    <div className="grid-container">
                        <div id="starters" className="menu__course">
                            <h3 className="menu__course__subtitle">
                                Entrées
                            </h3>
                            {data[id].starters.map((starter, index) => (
                                <div 
                                    key={index} 
                                    id={starter.id} 
                                    className={localStorage.getItem('order')&&(JSON.parse(localStorage.getItem('order')).find((el) => el.id === starter.id))? "card card__caption selected" : "card card__caption"}
                                    onClick={() => addToOrder(starter)}
                                >
                                    <div className="card__caption__text">
                                        <h3>{starter.name}</h3>
                                        <div>
                                            <p>{starter.description}</p>
                                            <span>{starter.price}€</span>
                                        </div>
                                        <div className="check-box">
                                            <FontAwesomeIcon icon={faCircleCheck} className="fas fa-check-circle" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
    
                        <div id="mainCourse" className="menu__course">
                            <h3 className="menu__course__subtitle">Plats</h3>
    
                            {data[id].mains.map((main, index) => (
                                <div 
                                    key={index} 
                                    id={main.id}
                                    className={localStorage.getItem('order')&&(JSON.parse(localStorage.getItem('order')).find((el) => el.id === main.id))? "card card__caption selected" : "card card__caption"}
                                    onClick={() => addToOrder(main)}
                                >
                                    <div className="card__caption__text">
                                        <h3>{main.name}</h3>
                                        <div>
                                            <p>{main.description}</p>
                                            <span>{main.price}€</span>
                                        </div>
                                    </div>
                                    <div className="check-box">
                                        <FontAwesomeIcon icon={faCircleCheck} className="fas fa-check-circle" />
                                    </div>
                                </div>
                            ))}
    
    
                        </div>
    
                        <div id="dessert" className="menu__course">
                            <h3 className="menu__course__subtitle">Desserts</h3>
                            
                            {data[id].desserts.map((dessert, index) => (
                                <div 
                                    key={index} 
                                    id={dessert.id}
                                    className={localStorage.getItem('order')&&(JSON.parse(localStorage.getItem('order')).find((el) => el.id === dessert.id))? "card card__caption selected" : "card card__caption"}
                                    onClick={() => addToOrder(dessert)}
                                >
                                    <div className="card__caption__text">
                                        <h3>{dessert.name}</h3>
                                        <div>
                                            <p>{dessert.description}</p>
                                            <span>{dessert.price}€</span>
                                        </div>
                                    </div>
                                    <div className="check-box">
                                        <FontAwesomeIcon icon={faCircleCheck} className="fas fa-check-circle" />
                                    </div>
                                </div>
                            ))}
    
                        </div>
                    </div>
    
                    <div className="main-container">
                        <button className="btn" onClick={handleClickToOpen}>
                            Commander
                        </button>
                    </div>


                    <Dialog open={open} onClose={handleToClose}>
                        <DialogTitle textAlign="center">{localStorage.getItem('order')? "Commande réalisée avec succès !" : "Votre panier est vide !"}</DialogTitle>
                        <DialogContent>
                            {localStorage.getItem('order')?
                            <table>
                                {JSON.parse(localStorage.getItem('order')).find((el) => el.category === 'starters')? 
                                    <thead>
                                        <tr>
                                            <th colSpan='3'>Entrées</th>
                                        </tr>
                                    </thead>
                                : null
                                }

                                <tbody>
                                    {localStorage.getItem('order')? 
                                    JSON.parse(localStorage.getItem('order')).filter((el) => el.category === 'starters').map((el, index) => (
                                        <tr key={index}>
                                                <td colSpan={2}>
                                                    {`${el.name} ${el.description.toLowerCase()}`}
                                                </td>
                                                <td>{el.price}€</td>
                                        </tr>
                                    )) : null}
                                </tbody>

                                {JSON.parse(localStorage.getItem('order')).find((el) => el.category === 'mains')? 
                                    <thead>
                                        <tr>
                                            <th colSpan='3'>Plats</th>
                                        </tr>
                                    </thead>
                                : null
                                }
                                <tbody>
                                    {localStorage.getItem('order')? 
                                    JSON.parse(localStorage.getItem('order')).filter((el) => el.category === 'mains').map((el, index) => (
                                        <tr key={index}>
                                                <td colSpan={2}>
                                                    {`${el.name} ${el.description.toLowerCase()}`}
                                                </td>
                                                <td>{el.price}€</td>
                                        </tr>
                                    )) : null}
                                </tbody>

                                {JSON.parse(localStorage.getItem('order')).find((el) => el.category === 'desserts')? 
                                    <thead>
                                        <tr>
                                            <th colSpan='3'>Desserts</th>
                                        </tr>
                                    </thead>
                                : null
                                }
                                <tbody>
                                    {localStorage.getItem('order')? 
                                    JSON.parse(localStorage.getItem('order')).filter((el) => el.category === 'desserts').map((el, index) => (
                                        <tr key={index}>
                                                <td colSpan={2}>
                                                    {`${el.name} ${el.description.toLowerCase()}`}
                                                </td>
                                                <td>{el.price}€</td>
                                        </tr>
                                    )) : null}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th colSpan={2}>Total</th>
                                        <th>{getTotal().toLocaleString()} €
                                        </th>
                                    </tr>
                                </tfoot>
                            </table>
                            : <p>Aucune commande enregistrée</p>}
                        </DialogContent>
                        <DialogActions>
                        <Button onClick={handleToClose} 
                                color="primary" autoFocus>
                            Fermer
                        </Button>
                        </DialogActions>
                    </Dialog>
                    
                </section>
            </main>
        );
    }

}
export default SinglePage