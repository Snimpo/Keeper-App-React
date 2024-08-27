import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import "./App.css";
function App() {
  return (
    <>
      <div className="wrapper">

        <header className="page-header"> 
          <Header />
        </header>
        <div className="page-body">           
          <Note />
        </div>
        
        <footer className="page-footer">          
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
