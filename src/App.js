import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
    <h1 className="title red">Your name here</h1>
    <br />
    <img src="/imageInSrc.jpg" />
    <br />
    <img src="/imageInPublic.jpg" />
  </div>
  <video width={320} height={240} controls>
    <source src="myVideo.mp4" type="video/mp4" />
  </video>

      </header>
    </div>
  );
}

export default App;
