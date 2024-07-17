let fetchData=new Promise()

fetchData.then((resp)=>
{
    console.log(resp)
}).catch((err)=>
{
throw err;
}).finally(()=>{
console.log("Request Finished")
})

const myComp=()=>
{
    return(
        <div>

        </div>
    )
}
<button onClick={()=>{
    console.log("button")
}}>

</button>