package tn.pi.spring.services;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.util.List;
import java.util.stream.Stream;

import org.springframework.stereotype.Service;

import com.itextpdf.text.BaseColor;
import com.itextpdf.text.Chunk;
import com.itextpdf.text.Document;
import com.itextpdf.text.DocumentException;
import com.itextpdf.text.Element;
import com.itextpdf.text.FontFactory;
import com.itextpdf.text.Paragraph;
import com.itextpdf.text.Phrase;
import com.itextpdf.text.pdf.PdfPCell;
import com.itextpdf.text.pdf.PdfPTable;
import com.itextpdf.text.pdf.PdfTextArray;
import com.itextpdf.text.pdf.PdfWriter;

import tn.pi.spring.entities.Subscribe;
@Service
public class ExportSubscribeService {
	public static ByteArrayInputStream subscribePDFReport(List<Subscribe> subscribes)
	{
		Document document = new Document();
		ByteArrayOutputStream out = new ByteArrayOutputStream();
		try {
			PdfWriter.getInstance(document, out);
			document.open();
			//bech najouti 7aja fel pdf kima text mithhel
			//na3tih size lktiba w couler ( w jw athaka)
		 	com.itextpdf.text.Font font = FontFactory.getFont(FontFactory.COURIER,14, BaseColor.BLACK);
		 	Paragraph para = new Paragraph("Subscribes List", font);
		 	para.setAlignment(Element.ALIGN_CENTER);
		 	document.add(para);
		 	document.add(Chunk.NEWLINE);
		 	PdfPTable table = new PdfPTable(2);
		 	
		 	//bech nrilg l contenue tw
		 	Stream.of("FirstName","LastName").forEach(headerTitle ->{
		 		PdfPCell header = new PdfPCell();
			 	com.itextpdf.text.Font headfont = FontFactory.getFont(FontFactory.HELVETICA_BOLD);
			 	header.setBackgroundColor(BaseColor.LIGHT_GRAY);
			 	header.setHorizontalAlignment(Element.ALIGN_CENTER);
			 	header.setBorderWidth(1);
			 	header.setPhrase(new Phrase(headerTitle, headfont));
			 	table.addCell(header);
		 	});
		 	for (Subscribe sub:subscribes)
		 	{
		 		PdfPCell fnameCell = new PdfPCell( new Phrase(sub.getFname()));
		 		fnameCell.setPaddingLeft(1);
		 		fnameCell.setVerticalAlignment(Element.ALIGN_MIDDLE);
		 		fnameCell.setHorizontalAlignment(Element.ALIGN_LEFT);
		 		table.addCell(fnameCell);
		 		
		 		
		 		PdfPCell lnameCell = new PdfPCell( new Phrase(sub.getLname()));
		 		lnameCell.setPaddingLeft(1);
		 		lnameCell.setVerticalAlignment(Element.ALIGN_MIDDLE);
		 		lnameCell.setHorizontalAlignment(Element.ALIGN_LEFT);
		 		table.addCell(lnameCell);
		 		
		 		/*
		 		PdfPCell ageCell = new PdfPCell( new Phrase(sub.getAge()));
		 		ageCell.setPaddingLeft(1);
		 		ageCell.setVerticalAlignment(Element.ALIGN_MIDDLE);
		 		ageCell.setHorizontalAlignment(Element.ALIGN_LEFT);
		 		table.addCell(ageCell);
		 		*/
		 	}
		 	document.add(table);
		 	document.close();
			
		} catch (DocumentException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		 return new ByteArrayInputStream(out.toByteArray());
		
		
		
		
		
		
		
		
		
	}

}
