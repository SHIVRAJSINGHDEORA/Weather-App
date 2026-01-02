import "./App.css";
import { lazy, Suspense } from "react";

const WeatherApp = lazy(() => import("./Components/WeatherApp/WeatherApp"));

function App() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <WeatherApp />
      </Suspense>
    </div>
  );
}

export default App;
