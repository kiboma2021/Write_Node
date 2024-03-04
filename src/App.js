import './App.css';
import { Footer, Header } from './components';
import { AllRoutes } from './routes/AllRoutes';

function App() {
  return (
    <main>
      <Header />
      <AllRoutes />
      <Footer />
    </main>
  );
}

export default App;
