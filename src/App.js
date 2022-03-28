import { GlobalStyle } from "./globalStyles";
import { Fragment, lazy, Suspense } from "react";
//import { Header } from "./components/Header/Header"

//Suspense and React.lazy to lazy load content of portfolio.  
// const Home = lazy(() => import("./pages/Home"));
// const Header = lazy(() => import("./components/Header/Header"));
// const Footer = lazy(() => import("./components/Footer/Footer"));
// const ScrollToTop = lazy(() => import("./components/ScrollToTop/ScrollToTop"));

export default function MyApp() {
  return (
    <Fragment>
      <h1>Hello World</h1>
      {/* <Suspense fallback={null}>
        <GlobalStyle />
        <h1>Hello World</h1>
        <Header />
        <Home />
        <Footer />
        <ScrollToTop />
      </Suspense> */}
    </Fragment>
  );
}
