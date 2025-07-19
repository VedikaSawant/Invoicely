import { useState } from 'react';
import { Dialog, DialogActions, DialogContent, TextField, Button } from "@mui/material";
import axios from 'axios';

// Define the backend API URL for Spring Boot
const API_URL = 'http://localhost:8080'; 

const EditInvoice = ({ invoice, onClose, onSave }) => {
    const [updatedInvoice, setUpdatedInvoice] = useState(invoice);

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Validation for text fields
        if ((name === "vendor" || name === "product") && /[^a-zA-Z\s]/.test(value)) {
            alert("Please enter only text for vendor and product fields.");
            return;
        }

        // Validation for amount field
        if (name === "amount" && (isNaN(value) || Number(value) < 0)) {
            alert("Please enter a valid amount greater than 0.");
            return;
        }

        setUpdatedInvoice({ ...updatedInvoice, [name]: value });
    };

    const handleSave = async () => {
        try {
            const response = await axios.put(`${API_URL}/invoice/${invoice.id}`, updatedInvoice);

            onClose();
            window.location.reload();

            onSave(response.data);
        } catch (error) {
            console.error("Error updating invoice:", error);
        }
    };

    return (
        <Dialog open onClose={onClose}>
            <DialogContent>
                <TextField
                    name="vendor"
                    label="Vendor"
                    value={updatedInvoice.vendor}
                    onChange={handleChange}
                />
                <TextField
                    name="product"
                    label="Product"
                    value={updatedInvoice.product}
                    onChange={handleChange}
                />
                <TextField
                    name="amount"
                    label="Amount"
                    value={updatedInvoice.amount}
                    onChange={handleChange}
                    type="number"
                />
                <TextField
                    name="date"
                    label="Date"
                    value={updatedInvoice.date}
                    onChange={handleChange}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={handleSave} color="primary">Save</Button>
            </DialogActions>
        </Dialog>
    );
};

export default EditInvoice;
