import { Toaster } from "react-hot-toast";
import AppRouter from "./AppRouter";
import "./index.css";

function App() {
  return (
    <div className="App">
      <AppRouter />
      <Toaster />
    </div>
  );
}

export default App;
