let newArr = [];
let array = [2, 5, 7, 5, 12, 9, 7, 5, 4, 3, 5, 2, 4, 15];

newArr = array.reduce((acc, curr) => {
  if (acc.indexOf(curr) === -1) {
    acc.push(curr);
  }
  return acc;
}, []);
console.log(newArr);

let obj1 = [
  { Sno: 1, score: 20 },
  { Sno: 2, score: 30 },
  { Sno: 1, score: 50 },
];

// const colors = [
//   { id: 1, name: "Red", hexCode: "#FF0000" },
//   { id: 2, name: "Green", hexCode: "#00FF00" },
//   { id: 3, name: "Blue", hexCode: "#0000FF" },
//   { id: 1, name: "White", hexCode: "#000000" },
//   { id: 1, name: "Red", hexCode: "#FF0000" },
//   { id: 3, name: "Blue", hexCode: "#0000FF" },
// ];
// const mapFromColors = new Map(colors.map((c) => [c.id, c]));

// const uniqueColors = [...mapFromColors.values()];
// console.log(uniqueColors);

// const filterArr=new Map(obj1.map((s)=>[s.Sno,s]))
// const arrList=[...filterArr.values()];
// console.log(arrList);

const filterArr=new Map(obj1.map((s)=>[s.Sno,s]))

const arrList = [...filterArr.values()];
console.log(arrList);


const exampleArr=new Map(obj1.map((s)=>[s.Sno,s]));

const example2Arr = [...exampleArr.values()];

console.log(example2Arr);

const obj = [
  { apple: 2, orange: 1, grapes: 1 },
  { apple: 2 , orange: 1, grapes: 1 },
  { apple: 2, orange: 1, grapes: 1 },
];


const a = obj.map((i)=>i.apple).reduce((acc,curr)=>acc+curr,0)
const b = obj.map((i) => i.orange).reduce((acc, curr) => acc + curr, 0);
const c = obj.map((i) => i.grapes).reduce((acc, curr) => acc + curr, 0);
const newFruits=[]
newFruits.push( a, b, c);
console.log(newFruits)


const data={name:"Seema",address:{road:'abc',city:'xyz'},designation:{position:"developer",salary:"100000",hobbies:{drink:"tea",food:{
    continental:"chinese",mainCourse:{food:"biryani"}}}}}
let newData={};

function flatArr(list){

    for(const i in list)
    {

        if(typeof list[i]==="object")
        {

            flatArr(list[i])
        }
        else{

            newData[i]=list[i]
        }
    }

}

flatArr(data);
console.log(newData);