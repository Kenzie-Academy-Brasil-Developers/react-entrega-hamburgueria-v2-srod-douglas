import { DashboardProvider } from './contexts/Dashboard';
import { AllRoutes } from './routes';

function App() {
  return (
    <DashboardProvider>
      <AllRoutes/>
    </DashboardProvider>
  );
}

export default App;
