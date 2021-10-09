
import dataEmp from '../data/data.json'
function Salery(){
    const listItems = dataEmp.map((dataEmp) =>
    <li>{dataEmp.id}</li>
     );
    
     if (listItems[11]==="12") {
        return <div>yes</div>;
    } else {
        // If user is logged out

        return <div> 
            no
            <div>{listItems[11]}</div>
            </div>;
    }
//   return (
//     //   if(dataEmp.first_name=="Bear")
//     <ul>{listItems}</ul>
//   );
}
export default Salery;