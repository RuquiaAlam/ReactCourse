const obj=[{apple:2,orange:1,grapes:1},
      {apple:2,orange:1,grapes:1},
       {apple:2,orange:1,grapes:1}]
let arr=[];
// myArray.map((i) => i.myProperty).reduce((a, b) => a + b);

const a=obj.map((i)=>i.apple).reduce((acc,curr)=>acc+curr,0)


const b=obj.map((i)=>i.orange).reduce((acc,curr)=>acc+curr,0);



const c=obj.map((i)=>i.grapes).reduce((acc,curr)=>acc+curr,0);
arr.push({ apple: a, orange: b, grapes: c });

console.log(arr);




// const res = obj.reduce((acc, curr) => {

   


// }, 0);
       
//         console.log(res);

       
  

