
const heading=React.createElement("h1",{id:"heading"},"Hello world from Lokesh Maurya");// creating element in react
// console.log(heading) --> It will retutn a React Element=> Javascript object

const root=ReactDOM.createRoot(document.getElementById('root'));
    //creating a root element ehich help in rendering the heading element

// Rendering below structure using react
// <div id="root">
//     <div id="parent">
//         <div id="child">
//             <h1>I am H1 tag</h1>
//             <h2> I am h2 Tag</h2>
//         </div>
//     </div>
// </div>
// ReactElement(Object) => HTML(Browser undertand){Converted during render()}

const parent=React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"I am H1 tag"),
        React.createElement("h2",{},"I am H2 tag"),
    ]
        
    )
)
root.render(parent);   // here heading is converted into html element and then rendered inside root/attached
