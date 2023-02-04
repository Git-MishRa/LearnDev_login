import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Loginform";
import Navbar from "./components/Navbar";

function App() {
  return (
    // <Wrapper>
      <div className="App">
        {/* <Navbar /> */}
        <Login />
      </div>
    // </Wrapper>
  );
}

// const Wrapper = styled.div`
//   .App {
//     height: 100vh;
//   }
// `;

export default App;
