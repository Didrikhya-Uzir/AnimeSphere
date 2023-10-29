import { Route, Routes, BrowserRouter} from "react-router-dom";
import AnimeItem from "./components/AnimeItem";
import Gallery from "./components/Gallery";
import Homepage from "./components/Homepage";

function App() {
  console.log(global);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/anime/:id" element={<AnimeItem/>} />
        <Route path="/character/:id" element={<Gallery/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
