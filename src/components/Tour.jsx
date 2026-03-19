import React, {useState} from 'react'

function Tour(data) {

    const {id, name , info, image, price, removeTour } = data;
    const [readMore, setReadMore] = useState(true);

//  useEffect( () =>{console.log(data)})

  return (
    // <>
    //   <h2>Tour component</h2>
    //   <h4>{name}</h4>
    // </>
    <div  className='tour'>
      {/* <h3>Tour component</h3> */}
      <img src={image} alt={name}  width="300px" />
      <h5>{price}</h5>
      <div className='small'>
      <h4>{name}</h4>
      </div>
      <p>
        {/* An alternative to, 'array.substrin(0,200)' <=> 'array.slice(0, 200)', to show some of the contents of the paragraph */}
        {/* {readMore ? info.slice(0, 200) : info} */}
        {readMore ? `${info.substring(0, 200)}...` : info}
        <button onClick={()=>{setReadMore(!readMore)}}>
          {readMore ? 'Read More' : 'Show less'}
        </button>
      </p>
      {/* <p>{info}<button> <span>...</span>Read more</button></p> */}
      <small>
        <button className="not-interested" onClick={()=> removeTour(id)}  >Not interested</button>
      </small>
    </div>
  )
}

export default Tour