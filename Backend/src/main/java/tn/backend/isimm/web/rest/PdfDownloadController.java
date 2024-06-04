package tn.backend.isimm.web.rest;

import java.io.FileNotFoundException;
import java.io.IOException;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import tn.backend.isimm.BackendApp;

@RestController
@RequestMapping("/api")
public class PdfDownloadController {

    private static final Logger log = LoggerFactory.getLogger(BackendApp.class);

    @GetMapping("/download-pdf") // Replace with your specific URL
    public ResponseEntity<byte[]> downloadPdf() throws IOException {
        ClassPathResource pdfResource = new ClassPathResource("my-pdf.pdf"); // Path to your PDF

        if (!pdfResource.exists()) {
            throw new FileNotFoundException("PDF file not found in assets/my-pdf.pdf");
        }

        byte[] pdfContent = pdfResource.getContentAsByteArray();

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_PDF);
        headers.setContentDisposition(ContentDisposition.attachment().filename("my_pdf_file.pdf").build());

        return new ResponseEntity<>(pdfContent, headers, HttpStatus.OK);
    }
}
