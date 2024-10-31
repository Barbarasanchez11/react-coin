import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Favorites.css'

function Favorites() {
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const getFavorites = () => {
            const savedFavorites = localStorage.getItem('favorites');
            if (savedFavorites) {
                setFavorites(JSON.parse(savedFavorites));
            }
        };
        getFavorites();
    }, []);

    if (favorites.length === 0) {
        return <p>No hay Cryptos favoritas</p>;
    }

    return (
        <div>
            <h2>Cryptos favoritas</h2>
            <ul>
                {favorites.map(favorite => (
                    <li key={favorite.id}>
                        <Link to={`/coin/${favorite.id}`}>{favorite.name}</Link>
                    </li>
                ))}
            </ul>
            <div className="back-button">
                <Link to="/">Volver</Link>
            </div>
        </div>
    );
}

export default Favorites;