import dataEmp from '../data/data.json'

function btn(){

    dataEmp.sort((a,b) => parseFloat(a.id) - parseInt(b.id))   
     const listItems = dataEmp.map((dataEmp) =>
     <li>{dataEmp.id}</li>
      );
    return (
        <>
     <div>|||||||||||||||||||||||||||||||||</div>
     <ul>{listItems}</ul>
     <div>|||||||||||||||||||||||||||||||||</div>
     </>
    );
    }
      

export default btn;