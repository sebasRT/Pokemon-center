import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Formulario from "./components/Formulario/Formulario";
import "./App.css";
import { QueryClient,QueryClientProvider } from "@tanstack/react-query";


const queryClient = new QueryClient(); 

function App() {

  return (

    <div className="App">
<QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/formularioIngreso" element={<Formulario />} />
      </Routes>
</QueryClientProvider>
    </div>
  );
}

export default App;
