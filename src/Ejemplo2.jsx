import './App.css';
import {fetchData} from './fetchData'
import { Suspense } from 'react';

const apiData = fetchData('https://jsonplaceholder.typicode.com/users')


function Ejemplo2() {
    const data = apiData.read();
 


  return (

      <div className="App">
        <h1>
          Fetch API PRO
        </h1>
        <Suspense fallback={<div>Loading...</div>}>
            <ul className='card'>
                {data?.map((user)=> (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </Suspense>
      </div> 

  )
}

export default Ejemplo2
