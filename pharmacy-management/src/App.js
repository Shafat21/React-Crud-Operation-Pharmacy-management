import React from 'react';
import MedicationManager from './components/MedicationManager';
import { CssBaseline, Container } from '@mui/material';

function App() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="lg">
                <h1>Pharmacy Management System</h1>
                <MedicationManager />
            </Container>
        </React.Fragment>
    );
}

export default App;
