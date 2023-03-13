import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const UseEffectHook = () => {

    const [resourceType, setResourceType] = useState('users');
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(response => response.json())
            .then(json => setItems(json))
    }, [resourceType])
    

  return (
    <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>
        <h2>{resourceType}</h2>
        {items.map(item => {
          return <pre>{JSON.stringify(item)}</pre>
        })}
    </div>
  )
}

export default UseEffectHook