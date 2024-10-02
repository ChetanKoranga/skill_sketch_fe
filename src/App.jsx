import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "default");
  }, []);

  return <h2>App</h2>;
}

export default App;
