
import './App.css'
import Container from './Components/Container'
import Footer from './Components/Footer'
import Header from './Components/Header'

function App() {

  return (
    <div className="font-sans font-medium min-h-screen w-screen flex flex-col bg-slate-400">
      <Header />
      <Container />
      <Footer />
    </div>
  );
}

export default App
