// import './App.css';

// function App() {
//   return(
//     <body>
//       <div className='app'>
//         <div>
        
//       {/* <center>

//           <div  style={{color:"green"}}>lists</div><hr></hr>
//           <h2 style={{color:"red"}}>social media</h2>
//           </center>
//         <div className="d">
//         <ul>
//           <li>home</li>
//           <li>go </li>
//           <li>come</li>
//           <li>back</li>
//         </ul>
//         </div>
//         <div> */}
//         <ol className="e">
//         <li>home</li>
//           <li>go </li>
//           <li>come</li>
//           <li>back</li>
//         </ol>
//         </div>
//         {/* <h1>forms</h1>
//         <form>
//           <div className="b">
//             <div>
//           <lable>enter your name</lable>
//           <input  className="a" type="text" placeholder="enter your name"></input>
//           </div>
//             <div>
//           <lable>enter your name</lable>
//           <input  className="a" type="text" placeholder="enter your name"></input>
//           </div>
//             <div>
//           <lable>enter your name</lable>
//           <input  className="a" type="text" placeholder="enter your name"></input>
//           </div>
//             <div>
//           <lable>enter your name</lable>
//           <input  className="a" type="text" placeholder="enter your name"></input>
//           </div>
//           </div>
//         </form> */}
//       </div>
//     </body>
//   //   <body style={{background:"green"}}>
//   // <div className='app' style={{background:"red"}}>
//   //   <h1>hello Digi coders</h1>
//   //   <p classNamep2>this is a paragraph its very importent</p>
//   //   <p className="p1">this is a paragraph its very importent</p>
//   //   <p className="p3">this is a paragraph its very importent</p>
//   //   <button className="b1" type='button'>submit</button>
//   //   <input className="b2" type="text" placeholder="enter name"></input>
//   // </div>
//   // </body>
//   );
// }

// export default App;
import './App.css';


function components() {
  return (
    <div  style={{height:"400px", width:"1000px", background:"green",borderRadius:"10px"}}>
      <div className='card1' style={{height:"200px", width:"200px", background:"white", position:'absolute', top:"40px", left:"20px",borderRadius:"10px",boxShadow:"10px",cursor:"pointer",}}></div>
      <div className='card1' style={{height:"200px", width:"200px", background:"white", position:'absolute', top:"40px", left:"270px",borderRadius:"10px",cursor:"pointer"}}></div>
      <div className='card1' style={{height:"200px", width:"200px", background:"white", position:'absolute', top:"40px", left:"520px",borderRadius:"10px",cursor:"pointer"}}></div>
      <div className='card1' style={{height:"200px", width:"200px", background:"white", position:'absolute', top:"40px", left:"760px",borderRadius:"10px",cursor:"pointer"}}></div>
    </div>
  )
}

export default components

