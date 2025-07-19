package com.invoiceprocessing.server.controller;

import com.invoiceprocessing.server.model.Invoice;
import com.invoiceprocessing.server.services.InvoiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class InvoiceController {

    @Autowired
    InvoiceService invoiceService;

    @PostMapping("/invoice")
    public Invoice addInvoice(@RequestBody Invoice invoice) {
        return this.invoiceService.addInvoice(invoice);
    }

    @GetMapping("/invoice")
    public List<Invoice> getInvoices() {
        return this.invoiceService.getInvoices();
    }

    @GetMapping("/invoice/filter")
    public List<Invoice> getInvoicesByFilters(
            @RequestParam(required = false) String vendor,
            @RequestParam(required = false) String status,
            @RequestParam(required = false) Integer minAmount,
            @RequestParam(required = false) Integer maxAmount) {
        return this.invoiceService.getInvoicesByFilters(vendor, status, minAmount, maxAmount);
    }

    @DeleteMapping("/invoice/{invoiceId}")
    public Invoice deleteInvoice(@PathVariable String invoiceId) {
        return this.invoiceService.deleteInvoice(Long.parseLong(invoiceId));
    }

    @PutMapping("/invoice/{invoiceId}")
    public Invoice updateInvoice(@PathVariable long invoiceId, @RequestBody Invoice updatedInvoice) {
        return invoiceService.updateInvoice(invoiceId, updatedInvoice);
    }

}
