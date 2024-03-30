import axios from 'axios';
import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom';
import { Card } from 'antd';

const CharacterDetail = () => {
    let { id } = useParams();
    const [character, setCharacter] = useState({})

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => {
            setCharacter(response.data)
        })
    }, [id]);
    
    const content = (<>
        <div className="flex flex-col items-center">
            <img src={character.image} alt={character.name} className='w-1/4 h-1/4 rounded-full'/>
            <h1 className='text-2xl font-bold'>CharacterName : {character.name}</h1>
            <h1 className='text-2xl font-bold'>Status : {character.status}</h1>
            <h1 className='text-2xl font-bold'>Species : {character.species}</h1>
            <h1 className='text-2xl font-bold'>Gener : {character.gender }</h1>
        </div>
    </>)

  return (
    <div>
        <Card title="Character Detail"  style={{ width: 1000 }} className='bg-gray-200'>
            {content}
        </Card>
    </div>
    )
}

export default CharacterDetail