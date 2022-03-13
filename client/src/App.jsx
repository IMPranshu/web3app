import { Navbar, Welcome, Footer, Services, Transactions } from './components';

const App = () => {
  return (
    <div classname="min-h-screen">
      <div classname="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />

    </div>
  );
}

export default App;
