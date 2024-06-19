import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import SlideItems from './components/slideItems';
import ImageBanner from './components/imageBanner';
function App() {
  return (
    <div className="App">
      <Header />
      <ImageBanner />
      <Footer />
    </div>
  );
}

export default App;
