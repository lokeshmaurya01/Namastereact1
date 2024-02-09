import React from "react";
import ReactDOM from "react-dom";
// const Heading= function(){
//     return(
//         <div>  //  SIMPLE FUNCTIONAL WAY but WE WILL USE ARROW FUNCTIONS
//         <Title/>
//         <h1 id="heading"> Namaste Javascript </h1>
//         </div>
//     );  
// };
const  para=(
    <div>
        <p>Hey in this session we are learning about JSX and Functional Componensts</p>
    </div>
);
const Title=()=>(
    <h1 id="head"> Namaste Javascript is Essential for react{para}</h1>
);
let number=5;
const Heading= ()=>(
        <div>  
            {number}
        <h1 id="heading"> Namaste Javascript </h1>
        <Title/>
        </div>
);  
const  para2=(
    <div>
        <h1>This Course is best in the Market</h1>
        <Heading/>
    </div>
);

const jsxheading=<h1 id="heading">Namaste React by Akshay Saini.</h1>

const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(para2);   // here heading is converted into html element and then rendered inside root/attached

//  SIMPLE FUNCTIONAL WAY but WE WILL USE ARROW FUNCTIONS