package org.example.mdmprojectserver.model;

import jakarta.persistence.Id;
import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "invoices")
public class Invoice {
    @Id
    public String id;
}
