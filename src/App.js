import React,{useState,useEffect} from 'react';
import Follower from './Follower';
import './Pagination.css';
import { useFetch } from './useFetch';

function App() {
  const [page, setPage] = useState(0)
  const [followers, setFollowers] = useState([]) //set somedata according to page
  const {loading,data}=useFetch(); //data conatine the wholelist
   console.log("====================",data[page])

  useEffect(() => {
    if(loading) return 
    setFollowers(data[page])
  }, [loading,page])


  const handlePageChange=(index)=>{
    console.log(setPage(index))
    // setPage(index)
  }
  const handlePrevChange=()=>{
    let prev=handlePageChange(page-1)
    if(prev<0){
      prev=data.length-1
    }
    return prev;
  }
  const handleNextChange=()=>{
   setPage((oldpage)=>{
    let nextpage=oldpage+1
     if(nextpage>data.length-1){
       nextpage=0;
     }
     return nextpage;
   })
  }

  return (
    <main >
    <div className='section-title'>
    <h1>{loading?"Loading.." : "Pagination"}</h1>
    <div className='underline'></div>
    </div>
    <section className='followers'>
    <div className='container'>
      {
        followers?.map((follower)=>{
          return <Follower key={follower.id} {...follower}/>
        })
      }
    </div>
    {
      !loading &&  <div className='btn-container'>
      <button className='prev-btn' onClick={handlePrevChange}>
      prev
      </button>
      {
        data.map((item,index)=>{
          return <button key={index} onClick={()=>handlePageChange(index)} className='page-btn'>{index+1}</button>
        })
      }

      <button className='next-btn' onClick={handleNextChange}>
      next
      </button>
    </div>
    }
   
    </section>
    </main>
  );
}

export default App;
