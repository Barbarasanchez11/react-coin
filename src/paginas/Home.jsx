import {Link} from 'react-router-dom'
import {useState, useEffect} from 'react'


function Home(){
const [coins,setCoins] = useState([])

useEffect(() => {
    const getCoin = async () => {
        try {
            const response = await fetch("https://api.coincap.io/v2/assets/")

            const data = await response.json()
            console.log(data.data)
            
            setCoins(data.data)
           

        } catch (error) {
            console.log('Ha ocurido un error',error)
        }
    }
    getCoin()
},[coins])


    return(
        <>
        <div>
          <h1>Listado de monedas</h1>
          <ul>
            {coins.map(coin => {
                <li key={coin.id}>
                    <Link to={`/coin/${coin.id}`}>{coin.name}</Link>
                </li>
            })}
          </ul>
          </div>
        </>
    )
}

export default Home