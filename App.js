import './App.css';
import Header from "./Components/Header";
import { Portal } from "./Components/Portal";
import { Footer } from "./Components/Footer";
function App() {
  return (
    
    <>
      <Header title="PG-Portal" searchBar={true} />
      <Portal />
      <Footer/>
    </>
    
  );
}

export default App;
