import { Box, Typography, TextField, Button, styled } from "@mui/material";
import { useState } from "react";
import { saveInvoice } from "../services/api";

const Component = styled(Box)({
    marginTop: 20,
    '& > p': {
        fontSize: 26,
        marginBottom: 10
    },
    '& > div > div': {
        marginRight: 20,
        minWidth: 200
    }
});

const defaultObj = {
    vendor: '',
    product: '',
    amount: 0,
    date: '',
    action: 'pending'
};

const AddInvoice = ({ setAddInvoice }) => {
    const [invoice, setInvoice] = useState(defaultObj);

    const onValueChange = (e) => {
        const { name, value } = e.target;

        // Validation for text fields (vendor, product): only allow letters
        if ((name === 'vendor' || name === 'product') && /[^a-zA-Z\s]/.test(value)) {
            alert("Please enter only text without numbers or special characters.");
            return;
        }

        // Validation for amount: only allow numbers
        if (name === 'amount' && /[^0-9.]/.test(value)) {
            alert("Please enter a valid number.");
            return;
        }

        setInvoice({ ...invoice, [name]: value });
    };

    const addNewInvoice = async () => {
        // Check if any field is empty
        if (!invoice.vendor || !invoice.product || !invoice.amount || !invoice.date) {
            alert("Please fill out all the fields before adding the invoice.");
            return;
        }

      

        await saveInvoice({ ...invoice, amount: Number(invoice['amount']) });
        setAddInvoice(false);
    };

    return (
        <Component>
            <Typography>Add Invoice</Typography>
            <Box>
                <TextField 
                    variant="standard"
                    placeholder='Enter vendor name'
                    onChange={(e) => onValueChange(e)}
                    name="vendor"
                    autoComplete='off'
                />
                <TextField 
                    variant="standard"
                    placeholder='Enter product name'
                    onChange={(e) => onValueChange(e)}
                    name="product"
                    autoComplete='off'
                />
                <TextField
                    variant="standard"
                    placeholder="Enter amount (in Rs)"
                    type="number"
                    slotProps={{
                        input: {
                            min: 1,  // Ensures input is not less than 0
                        },
                    }}
                    onChange={(e) => {
                        // Parse the input value and ensure it is not negative
                        const value = parseFloat(e.target.value);
                        if (value >= 1 || e.target.value === '') {
                            onValueChange(e);  // Call your change handler with valid input
                        } else {
                            e.target.value = 1;  // Reset the input to 0 if it's negative
                        }
                    }}
                    name="amount"
                    autoComplete="off"
                />
                <TextField 
                    variant="standard"
                    placeholder='Enter date'
                    type="date"
                    onChange={(e) => onValueChange(e)}
                    name="date"
                    autoComplete='off'
                    defaultValue={new Date().toISOString().split('T')[0]}
                />
                <Button 
                    variant="contained"
                    onClick={() => addNewInvoice()}
                >
                    Add Invoice
                </Button>
            </Box>
        </Component>
    );
};

export default AddInvoice;
