// import React, { useState } from "react";
// import ReactDOM from "react-dom";
 

// const dogs = [{ name: "fido", age: 66 }, { name: "aill", age: 50 }];
// function Application() {
//   const [dogList, setDogList] = useState(dogs);
//   const sortByAge = () => {
//     const sorted = dogList.sort((a, b) => {
//       return b.age - a.age;
//     });
//     setDogList(sorted);
//   };
//   return (
//     <div>
//       {dogList.map((dog, i) => {
//         return <p key={i}>{dog.name}</p>;
//       })}
//       <button onClick={sortByAge}>sort by age</button>
//     </div>
//   );
// }

// ReactDOM.render(<Application />, document.getElementById('root'));
// export default Application;

function sortarray(){

let objArr = [
    {name: "Elon", money: 80},
    {name: "Jeff", money: 100},
    {name: "Bill", money: 10}
  ];
   objArr.sort((a,b) => parseInt(b.money) - parseInt(a.money))
  
 const listItems = objArr.map((objArr) =>
 <li>{objArr.name}</li>
  );
return (
 <ul>{listItems}</ul>
);
}
 export default sortarray;
  
  //setObjectdata(objArr);