import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import ToggleTheme from "./components/ToggleTheme.jsx";
import Menu from "./components/Menu/Menu.jsx";
import Main from "./components/Main/Main.jsx";

function App() {
  return (
    <>
      <ToggleTheme></ToggleTheme>
      <Header></Header>
      <Menu></Menu>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
