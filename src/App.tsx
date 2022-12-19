import { CartProvider } from './contexts/CartContext';
import { DashboardProvider } from './contexts/Dashboard';
import { UserProvider } from './contexts/User';
import { AllRoutes } from './routes';

function App() {

  return (
      <UserProvider>
        <DashboardProvider>
          <CartProvider>
            <AllRoutes/>
          </CartProvider>
        </DashboardProvider>
      </UserProvider>
  );
}

export default App;
