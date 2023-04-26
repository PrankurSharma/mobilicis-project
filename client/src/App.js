import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { MainProvider } from './mainContext';
import Main from './Main';

function App() {
    return (
        <MainProvider>
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Main />} />
                </Routes>
            </BrowserRouter>
        </MainProvider>
    );
}

export default App;
