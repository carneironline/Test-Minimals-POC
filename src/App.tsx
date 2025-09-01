import './App.css';

import ThemeProvider from './minimals/theme';
import Dashboard from '@/pages/dashboard/one';

function App() {
    return (
        <ThemeProvider>
            <>
                <Dashboard />
            </>
        </ThemeProvider>
    );
}

export default App;
