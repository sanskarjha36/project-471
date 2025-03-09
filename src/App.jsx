import Navbar from "./Navbar/Navbar";
import SlideShow from "./SlideShow/SlideShow";
import Header from "./Header/Header";
import "./App.css";
import Suggest from "./Suggest/Suggest";

const App = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="header">
        <Header />
      </div>
      <div>
        <SlideShow />
      </div>
      <div className="Suggested">Suggested Services</div>
      <div>
        <Suggest />
      </div>
    </>
  );
};

export default App;
