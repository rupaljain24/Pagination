const paginate=(followers)=>{
   const itemPerPage=12
   const page=Math.ceil(followers.length/itemPerPage);
//    console.log(page)
    let newFollowers=[]
    for (let i = 0; i < followers.length; i+=itemPerPage) {
        newFollowers.push(followers.slice(i,itemPerPage+i))   
    }
    // console.log(newFollowers)
    
    return newFollowers;
}
export default paginate;