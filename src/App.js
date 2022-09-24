import "./App.css";
import Todos from "./components/Todos/Todos";

function App() {
  return (
    <div className="App">
      <Todos></Todos>
    </div>
  );
}

// function Blog(props) {
//   const [love, setLove] = useState(0);

//   const giveLove = () => setLove(love + 1);
//   const removeLove = () => {
//     if (love > 0) {
//       setLove(love - 1);
//     }
//   };

//   return (
//     <div className="blog">
//       <h2 className="title" style={headerStyle}>
//         {props.title}
//       </h2>
//       <p>{props.news}</p>
//       <p>💘 : {love}</p>
//       <div
//         className="button-group"
//         style={{ display: "flex", justifyContent: "space-around" }}
//       >
//         <button onMouseMove={giveLove}>Send Love💘</button>
//         <button onMouseMove={removeLove}>Remove Love💘</button>
//       </div>
//     </div>
//   );
// }

export default App;
