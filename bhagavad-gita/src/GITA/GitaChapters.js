import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function GitaChapters() {
  const apiKey = process.env.REACT_APP_GITAKEY;
  const apiUrl = "https://bhagavad-gita3.p.rapidapi.com/v2/chapters/?skip=0&limit=18";
  const [data,setData] = useState([]);
  useEffect(()=>{
    fetch(apiUrl,{
      headers:{
        "x-rapidapi-host": "bhagavad-gita3.p.rapidapi.com",
        "x-rapidapi-key": apiKey
      }
    }).then(res=>res.json()).then(res=>setData(res));
  },[])

  return (
    <>
      <div>GitaChapters</div>
      <div className='row'>
        {
          data?.map((d)=>(
            <div class="card col-3">
              <div class="card-body">
                <h5 class="card-title">{d.name}</h5>
                <h5 class="card-title">{d.name_transliterated}</h5>

                <p class="card-text">
                  <h4>Verses Count: {d.verses_count}</h4>
                  {d.chapter_summary}
                </p>
                <Link to={"/gita/chapter/"+d.id} class="btn btn-primary">Explore Chapter</Link>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default GitaChapters