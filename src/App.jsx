import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

import Signin from './components/ui/Signin';
import Signup from './components/ui/Signup';

const queryClient = new QueryClient();

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <>
                
                <Router>
                    <Routes>
                        {/* Public routes */}
                        <Route path="*" element={<Signin />} />
                        <Route path="/" element={<Signin />} />
                        <Route path="/login" element={<Signin/>} />
                        <Route path="/signup" element={<Signup />} />  
                    </Routes>
                </Router>
            </>
        </QueryClientProvider>
    );
}

