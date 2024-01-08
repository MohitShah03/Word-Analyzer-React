import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';

function App() {
  return (
    <>

      <Navbar title="Text Utilities" />
      <div className="container my-3">
        <TextForm heading="Word Analyzer"/>
      </div>
    </>
  );
}

export default App;
