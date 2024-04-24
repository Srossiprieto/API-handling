
import './App.css';
import { useFetch } from './useFetch';



function Ejemplo1() {
  const  {data, loading, error, handleCancelRequest}=useFetch('https://jsonplaceholder.typicode.com/users'); 


  return (
    <>
      <div className="App">
        <h1>
          Fetch API PRO
        </h1>
        <button onClick={handleCancelRequest}>CANCEL REQUEST</button>
        <div className='card'>
          <ul>
            {
              error && <li>Error:{error}</li>
            }
            {
              loading && <li>Loading...</li>
            }
            {data ?.map((user) => (
              <li key={user.id}>{user.name}</li>
            )) }
          </ul>
        </div>
      </div> 
    </>
  )
}

export default Ejemplo1
