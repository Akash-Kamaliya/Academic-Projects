import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function GitaChapterDetail() {
  const {id} = useParams();
  const apiKey = process.env.REACT_APP_GITAKEY;
  const apiChapterUrl = "https://bhagavad-gita3.p.rapidapi.com/v2/chapters/"+id+"/";
  const [data,setData] = useState({});

  const apiVersesUrl = "https://bhagavad-gita3.p.rapidapi.com/v2/chapters/"+id+"/verses/";
  const [verses,setVerses] = useState([]);

  useEffect(()=>{
      fetch(apiChapterUrl,{
        headers:{
          "x-rapidapi-host": "bhagavad-gita3.p.rapidapi.com",
          "x-rapidapi-key": apiKey
        }
      }).then(res=>res.json()).then(res=>setData(res));

      fetch(apiVersesUrl,{
        headers:{
          "x-rapidapi-host": "bhagavad-gita3.p.rapidapi.com",
          "x-rapidapi-key": apiKey
        }
      }).then(res=>res.json()).then(res=>setVerses(res));
    },[]);
    
  return (
    <>
      <div>GitaChapterDetail</div>
      <h1>Chapter Name: {data.name}</h1>
      <h1>Translated Chapter Name: {data.name_transliterated}</h1>
      <p>{data.chapter_summary}</p>
      <div className='container'>
        {
          verses?.map((d,verseID)=>(
            <div className='row m-2 p-2'>
              <div class="card col-12 border border-primary">
                <div class="card-body">
                  <h5 class="card-title">{verseID+1} - {d.text}</h5>
                  <ul>
                  {
                    d.translations?.map((t,translationID)=>(
                      <li>{translationID+1} -{t.description}</li>
                    ))
                  }
                  </ul>
                
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default GitaChapterDetail