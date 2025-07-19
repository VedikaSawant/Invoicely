package com.invoiceprocessing.server.services;

import com.invoiceprocessing.server.dao.InvoiceDao;
import com.invoiceprocessing.server.model.Invoice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InvoiceServiceImpl implements InvoiceService {

    @Autowired
    InvoiceDao invoiceDao;

    @Override
    public Invoice addInvoice(Invoice invoice) {
        return invoiceDao.save(invoice);
    }

    @Override
    public List<Invoice> getInvoices() {
        return invoiceDao.findAll();
    }

    @Override
    public Invoice deleteInvoice(long id) {
        Invoice invoice = invoiceDao.findById(id).orElse(null);
        if (invoice != null) {
            invoiceDao.delete(invoice);
        }
        return invoice;
    }

    public List<Invoice> getInvoicesByFilters(String vendor, String status, Integer minAmount, Integer maxAmount) {
        return invoiceDao.findByFilters(vendor, status, minAmount, maxAmount);
    }

    @Override
    public Invoice updateInvoice(long id, Invoice updatedInvoice) {
        Invoice existingInvoice = invoiceDao.findById(id).orElseThrow();
        existingInvoice.setVendor(updatedInvoice.getVendor());
        existingInvoice.setProduct(updatedInvoice.getProduct());
        existingInvoice.setAmount(updatedInvoice.getAmount());
        existingInvoice.setDate(updatedInvoice.getDate());
        existingInvoice.setStatus(updatedInvoice.getStatus());
        return invoiceDao.save(existingInvoice);
    }

}
