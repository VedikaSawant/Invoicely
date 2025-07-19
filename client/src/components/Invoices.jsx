import jsPDF from 'jspdf';
import { Table, TableBody, TableCell, TableHead, TableRow, Button, styled, Typography } from "@mui/material";
import { useState } from "react";
import EditInvoice from './EditInvoice';

const StyledTable = styled(Table) ({
    width : "80%",
    margin : 20,
    marginTop : 40,
    '& > thead > tr > th' : {
        background : '#000',
        color : '#FFFFFF',
        fontSize : 18,
        textAlign: 'center',
    },

    '& > tbody > tr > td': {
        fontSize : 16,
        textAlign: 'center',
    },

    '& > tbody > tr > td:last-child > button': {
        marginRight: 10,
    },

    '& > tbody > p': {
        fontSize : 18,
        marginTop : 15
    }
});

const downloadInvoicePDF = (invoice) => {
    const doc = new jsPDF();

    doc.setFontSize(12);
    doc.text('Invoice', 10, 10);
    doc.text(`Vendor: ${invoice.vendor}`, 10, 20);
    doc.text(`Product: ${invoice.product}`, 10, 30);
    doc.text(`Amount: Rs ${invoice.amount}`, 10, 40);
    doc.text(`Date: ${invoice.date}`, 10, 50);

    doc.save(`invoice_${invoice.id}.pdf`);
};

const Invoices = ({ invoices, removeInvoice, fetchInvoices }) => {
    const [editingInvoice, setEditingInvoice] = useState(null); // State to manage which invoice is being edited

    return (
        <>
            <StyledTable>
                <TableHead>
                    <TableRow>
                        <TableCell>Vendor</TableCell>
                        <TableCell>Product</TableCell>
                        <TableCell>Amount</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Download Invoice</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        invoices && Array.isArray(invoices) && invoices.length > 0 ?
                            invoices.map(invoice => {
                                return (
                                    <TableRow key={invoice.id}>
                                        <TableCell>{invoice.vendor}</TableCell>
                                        <TableCell>{invoice.product}</TableCell>
                                        <TableCell>{invoice.amount}</TableCell>
                                        <TableCell>{invoice.date}</TableCell>
                                        <TableCell>pending</TableCell>

                                        <TableCell>
                                            <Button
                                                variant="contained"
                                                onClick={() => downloadInvoicePDF(invoice)}
                                            >
                                                Download PDF
                                            </Button>
                                        </TableCell>

                                        <TableCell>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                onClick={() => setEditingInvoice(invoice)} // Set the invoice to edit
                                            >Edit</Button>

                                            <Button 
                                                variant="contained" 
                                                color="success"
                                                onClick={() => removeInvoice(invoice.id)}
                                            >
                                                Mark Done
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                );
                            })
                            :
                            <Typography>No pending invoices</Typography>
                    }
                </TableBody>
            </StyledTable>

            {editingInvoice && (
                <EditInvoice
                    invoice={editingInvoice}
                    onClose={() => setEditingInvoice(null)} // Close the edit dialog
                    onSave={() => fetchInvoices()} // Fetch updated invoices list after saving
                />
            )}
        </>
    );
};

export default Invoices;