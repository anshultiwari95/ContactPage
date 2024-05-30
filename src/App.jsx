import Navbar from "./Components/Navbar/Navbar";
import ContactHeader from "./Components/ContactHeader/ContactHeader";
import "./App.css";
import Form from "./Components/Form/Form";

function App() {
  return (
    <div>
      <Navbar />
      <main className="main_container">
        <ContactHeader />
        <Form />
      </main>
    </div>
  );
}

export default App;
