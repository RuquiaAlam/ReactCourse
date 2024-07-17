import "./App.css";
import useToggle from "./useToggle";
import  useGetCat from "../../episode5/src/components/useGetCat";


function App() {

  const [isVisible, toggle] = useToggle();
  const [isVisible2, toggle2] = useToggle();
  const { data, isCatLoading, refetchData } = useGetCat();

  return (
  
      <div className="App">
       
        <button onClick={toggle}>{isVisible ? "Hide" : "Show"}</button>
        {isVisible && <h1>Hidden Text</h1>}
        <button onClick={toggle2}>{isVisible2 ? "no" : "peep"}</button>
        {isVisible2 && <h1>Hello</h1>}
        {isCatLoading ? <h1>Loading...</h1> : ""}

        <button onClick={refetchData}> Refetch</button>
        <h1>{data?.fact}</h1>
        
      </div>

  );
}

export default App;
