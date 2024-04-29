// MedicationManager.jsx
import React, { useEffect, useState } from 'react';
import { Button, Table, TableBody, TableCell, TableHead, TableRow, TextField } from '@mui/material';

const MedicationManager = () => {
    const [medications, setMedications] = useState([]);
    const [newMedication, setNewMedication] = useState({ name: '', quantity: '', price: '' });
    const [selectedMedicationId, setSelectedMedicationId] = useState('');

    useEffect(() => {
        fetchMedications();
    }, []);

    const fetchMedications = async () => {
        const response = await fetch('/api/medications');
        const data = await response.json();
        setMedications(data);
    };

    const handleInputChange = (e) => {
        setNewMedication({ ...newMedication, [e.target.name]: e.target.value });
    };

    const addMedication = async () => {
        await fetch('/api/medications', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newMedication),
        });
        fetchMedications();
    };

    const updateMedication = async () => {
        await fetch(`/api/medications/${selectedMedicationId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newMedication),
        });
        fetchMedications();
        setSelectedMedicationId('');
    };

    const deleteMedication = async (id) => {
        await fetch(`/api/medications/${id}`, { method: 'DELETE' });
        fetchMedications();
    };

    const handleEditClick = (medication) => {
        setNewMedication({ name: medication.name, quantity: medication.quantity, price: medication.price });
        setSelectedMedicationId(medication.id);
    };

    return (
        <div>
            <h2>Manage Medications</h2>
            <TextField label="Name" name="name" value={newMedication.name} onChange={handleInputChange} />
            <TextField label="Quantity" name="quantity" type="number" value={newMedication.quantity} onChange={handleInputChange} />
            <TextField label="Price" name="price" type="number" value={newMedication.price} onChange={handleInputChange} />
            {selectedMedicationId ? (
                <Button onClick={updateMedication} variant="contained" color="primary">
                    Update Medication
                </Button>
            ) : (
                <Button onClick={addMedication} variant="contained" color="primary">
                    Add Medication
                </Button>
            )}

            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Quantity</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {medications.map((med) => (
                        <TableRow key={med.id}>
                            <TableCell>{med.name}</TableCell>
                            <TableCell>{med.quantity}</TableCell>
                            <TableCell>{med.price}</TableCell>
                            <TableCell>
                                <Button onClick={() => handleEditClick(med)}>Edit</Button>
                                <Button onClick={() => deleteMedication(med.id)} color="secondary">
                                    Delete
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default MedicationManager;
