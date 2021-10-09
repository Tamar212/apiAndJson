 
import dataEmp from '../data/data.json'
// פונקציה שמציגה JSON
function newdata(){
    const listItems = dataEmp.map((dataEmp) =>
    <li>{dataEmp.first_name}</li>
     );
  return (
    <ul>{listItems}</ul>
  );
      
}

export default newdata;