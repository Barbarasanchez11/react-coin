import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const Coin = () => {
  const { id } = useParams()
  const path = id.split(':').join('');
  const [coin, setCoin] = useState(null)
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    const coinData = async () => {
      try {
        const response = await fetch(`https://api.coincap.io/v2/assets/${path}`)
        const data = await response.json()
        setCoin(data.data)
      } catch (error) {
        console.log('No se han podido obtener resultados', error);
      }
    }

    coinData();
    const favCoin = JSON.parse(localStorage.getItem('favorites')) || []
    const coinFav = favCoin.filter(fav => fav.id === id) 
    setFavorite(coinFav.length > 0) 

  }, []);

  const handleFavorite = () => {
    const favCoin = JSON.parse(localStorage.getItem('favorites')) || []
    if (favorite) {
      const updatedFavorites = favCoin.filter(fav => fav.id !== id)
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } else {
      favCoin.push(coin);
      localStorage.setItem('favorites', JSON.stringify(favCoin))
     
    }
    setFavorite(!favorite)
  };

  return (
    <>
      {coin ? (
        <>
          <h2>{coin.name}</h2>
          <p>{coin.symbol}</p>
          <p>RanKing: {coin.rank}</p>
          <p>Supply: {coin.supply}</p>
          <p>Max Supply: {coin.maxSupply}</p>
          <p>Market Cap: {coin.marketCapUsd}</p>
          <p>Volume 24Hr: {coin.volumeUsd24Hr}</p>
          <p>Price: {coin.priceUsd}</p>
          <p>Change % 24Hr: {coin.changePercent24Hr}</p>
          <p>V wap 24Hr: {coin.vwap24Hr}</p>
          <p>Website: {coin.explorer}</p>
          <button onClick={handleFavorite}> 
            {favorite ? 'Eliminar de Favoritos' : 'Agregar a Favoritos'}
          </button>
        </>
      ) : (
        <p>Cargando</p>
      )}
      <Link to="/">Volver</Link>
    </>
  );
};

export default Coin
