import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import resume from "./NolanLeyCustodioResume.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const Resume = () => {
    
    return(
        <Document file={{resume}} >
            <Page pageNumber={1}/>
        </Document>
    )
}

export default Resume;