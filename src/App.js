import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookDetailsPage from './pages/BookDetailsPage';
import MyLibraryPage from './pages/MyLibraryPage';
import { MyLibraryProvider } from './context/MyLibraryContext';
import './styles.css';

function App() {
  return (
    <MyLibraryProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book/:id" element={<BookDetailsPage />} />
          <Route path="/mylibrary" element={<MyLibraryPage />} />
        </Routes>
      </Router>
    </MyLibraryProvider>
  );
}

export default App;


