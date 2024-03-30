import React , {useEffect, useState} from 'react'
import { Card } from 'antd';
import axios from 'axios';

const Favorites = () => {
    const [favorites, setFavorites] = useState(localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : []);
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character")
        .then(response => {
            console.log(response.data.results)
            setData(response.data.results.filter(character => {
                return favorites.map(favorite => favorite.id).includes(character.id)
            }))
        })
    }
    , [favorites]);

  return (
    <div className='flex flex-row flex-wrap'>
        {data.map(character => {
            return (
                <Card key={character.id} title={character.name} style={{ width: 300 }} className='m-4'>
                    <img src={character.image} alt={character.name} style={{width: '100%'}}/>
                </Card>
            )
        })}
    </div>
    )
}
        

export default Favorites