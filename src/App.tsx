import { useEffect } from "react";
import { supabase } from "./lib/supabase";
import HomePage from "./pages/HomePage";

function App() {

  useEffect(() => {

    async function testConnection() {
      const { data, error } =
        await supabase
          .from("destinations")
          .select("*");

      console.log(data);
      console.log(error);
    }

    testConnection();

  }, []);

  return (
    <>
       <HomePage />
    </>
  );
}

export default App;