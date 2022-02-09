import logo from "./logo.svg";
import "./App.css";
import { Sidebar } from "./components/sidebar/sidebar";
import { Footer } from "./components/footer/footer";
import { Headers } from "./components/header/header";
import { Logo } from "./components/logo/logo";
import { Portfolio } from "./components/portfolio/portfolio";
import { Article } from "./components/article/article";
import { Background } from "./components/background/background";
import "./styles/variables.css";

function App() {
  return (
    <div>
      <Background />
      <div className="main">
        <Sidebar />
        <Headers />
        <Portfolio />
        {/* <Article /> */}
        <Footer />
      </div>
    </div>
  );
}

export default App;
