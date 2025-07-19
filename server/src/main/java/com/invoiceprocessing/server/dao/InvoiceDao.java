package com.invoiceprocessing.server.dao;

import com.invoiceprocessing.server.model.Invoice;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InvoiceDao extends JpaRepository<Invoice, Long> {

    @Query("SELECT i FROM Invoice i WHERE (:vendor IS NULL OR i.vendor = :vendor) " +
            "AND (:status IS NULL OR i.status = :status) " +
            "AND (:minAmount IS NULL OR i.amount >= :minAmount) " +
            "AND (:maxAmount IS NULL OR i.amount <= :maxAmount)")
    List<Invoice> findByFilters(String vendor, String status, Integer minAmount, Integer maxAmount);
}

