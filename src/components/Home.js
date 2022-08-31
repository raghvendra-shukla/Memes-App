import React, { useEffect, useState } from 'react'
import Memes from './Memes';

function Home() {
  const [memes, setMemes] = useState([]);
  const MemesGenerate=async()=>{
    let url=`https://api.imgflip.com/get_memes`;
    let data= await fetch(url);
    let parsedData=await data.json();
    setMemes(parsedData.data.memes);
  }

  useEffect(() => {
    MemesGenerate();
  },)
  

  return (
    <>
    <div className="row text-center m-3">
      {memes.map((element)=>{
        return(
          <div className="col-md-3" key={element.id}>
            <Memes desc={element.name} img={element.url}/>
          </div>
        )
      })}
    </div>
    </>
  )
}

export default Home