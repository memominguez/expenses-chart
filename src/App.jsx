import ChartDisplay from "./components/ChartDisplay";
import ChartFooter from "./components/ChartFooter";
import MainHeader from "./components/MainHeader";
import "./App.css";

function App() {
  return (
    <div className="main-container">
      <header>
        <MainHeader />
      </header>
      <main>
        <section>
          <ChartDisplay />
        <div className="div-line"><hr /></div>
        </section>
        <section>
          <ChartFooter />
        </section>
      </main>
    </div>
  );
}

export default App;
