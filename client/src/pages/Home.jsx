import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from '@mui/material';
import AddInvoice from "../components/AddInvoice";
import Header from "../components/Header";
import Invoices from '../components/Invoices';
import { getAllInvoice, deleteInvoice } from "../services/api";
import EditInvoice from '../components/EditInvoice';

const Home = () => {
    const [addInvoice, setAddInvoice] = useState(false);
    const [invoices, setInvoices] = useState([]);
    const [editInvoiceDialogOpen, setEditInvoiceDialogOpen] = useState(false);
    const [invoiceToEdit, setInvoiceToEdit] = useState(null);

    useEffect(() => {
        const getData = async () => {
            const response = await getAllInvoice();
            setInvoices(response.data);
        }
        getData();
    }, [addInvoice])

    const toggleInvoice = () => {
        setAddInvoice(true);
    }

    const removeInvoice = async (id) => {
        await deleteInvoice(id);

        const updatedInvoice = invoices.filter(invoice => invoice.id != id);
        setInvoices(updatedInvoice);
    }

    useEffect(() => {
        const getData = async () => {
            const response = await getAllInvoice();
            setInvoices(response.data);
        };
        getData();
    }, []);

    const handleEditInvoice = (invoice) => {
        setInvoiceToEdit(invoice);
        setEditInvoiceDialogOpen(true);
    };

    const handleSaveUpdatedInvoice = (updatedInvoice) => {
        setInvoices((prevInvoices) =>
            prevInvoices.map((invoice) =>
                invoice.id === updatedInvoice.id ? updatedInvoice : invoice
            )
        );
    };

    const handleCloseEditDialog = () => {
        setEditInvoiceDialogOpen(false);
    };

    return (
        <>
            <Header />
            <Box style={{ margin: 20 }}>
                <Typography variant="h4">Pending Invoices</Typography>
               { !addInvoice && <Button
                        variant="contained" 
                        style={{marginTop: 15 }}
                        onClick={() => toggleInvoice()}
                    >Add Invoice</Button>
               }
               { addInvoice &&  <AddInvoice setAddInvoice={setAddInvoice} /> }
                <Box>
                    <Invoices
                        invoices={invoices}
                        removeInvoice={removeInvoice}
                        onEdit={handleEditInvoice}
                    />
                </Box>

                {editInvoiceDialogOpen && (
                    <EditInvoice
                        invoice={invoiceToEdit}
                        onClose={handleCloseEditDialog}
                        onSave={handleSaveUpdatedInvoice}
                    />
                )}
            </Box>
        </>
    );
};

export default Home;