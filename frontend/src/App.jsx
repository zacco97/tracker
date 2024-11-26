import Header from "./components/Header";
import Footer from "./components/Footer";
import ToggleTheme from "./components/ToggleTheme";
import Menu from "./components/Menu";
import Main from "./components/Main";
function App() {
  return (
    <>
      <div>
        <Header></Header>
        <ToggleTheme></ToggleTheme>
      </div>
      <Menu></Menu>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
