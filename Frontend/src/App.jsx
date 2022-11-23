import styles from "./App.module.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import { BookDetails } from "./pages/BookDetails";
import { LandingPage } from "./pages/LandingPage";
import logo from '../public/icon2.png';

function App() {
  return (
    <Router>
      <header>
        <Link to="/">
          <img src={logo} className={styles.logo} />
        </Link>
      </header>
      <main>
        <Routes>
          <Route path="/books/:bookId" element={<BookDetails />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App