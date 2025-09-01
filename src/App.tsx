import './App.css';

import ThemeProvider from './minimals/theme';
import Dashboard from '@/pages/dashboard/one';
import Login from '@/pages/auth/jwt/login';

function App() {
    return (
        <ThemeProvider>
            <>
                {/* <Login /> */}
                <Dashboard />
            </>
        </ThemeProvider>
    );
}

export default App;
