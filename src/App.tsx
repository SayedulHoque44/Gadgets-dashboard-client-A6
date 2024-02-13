import MainLayouts from "./components/Layouts/MainLayouts";
import ProtectedRoute from "./components/Layouts/ProtectedRoute";

function App() {
  return (
    <ProtectedRoute>
      <MainLayouts />
    </ProtectedRoute>
  );
}

export default App;
