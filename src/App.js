import { RoutesComponent } from "./routes";
import { UserProvider } from "./contexts/UserContext";
import { TechProvider } from "./contexts/TechContext";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <TechProvider>
          <RoutesComponent />
        </TechProvider>
      </UserProvider>
    </div>
  );
}

export default App;
