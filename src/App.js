import { GlobalStyle } from "./globalStyles";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/Home"));
const Header = lazy(() => import("./components/Header/Header"));
const Footer = lazy(() => import("./components/Footer/Footer"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop/ScrollToTop"));

export default function MyApp() {
  return (
    <>
      
      <Suspense fallback={null}>
        <GlobalStyle />
        {/* <h1>Hello World</h1> */}
        <Header />
        <Home />
        <Footer />
        <ScrollToTop />
      </Suspense>
    </>
  );
}
