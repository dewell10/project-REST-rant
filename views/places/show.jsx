const React = require('react')
const Def = require('../default')

function show(data) {
    return (
      <Def>
        <main>
          <h1>{data.place.name}</h1>
          <img src={data.place.pic}/>
          <h2>{data.place.city}</h2>
          <h2>{data.place.state}</h2>
          <h2>{data.place.cuisines}</h2>
          <a href={`/places/${data.id}/edit`} className='btn btn-warning'>
            Edit
          </a>
         
          <form method='POST' action={`/places/${data.id}?_method=DELETE`}>
            <button type='submit' className='btn btn-danger'>
              Delete
            </button>
          </form>
  
        </main>
      </Def>
    );
  }

module.exports = show