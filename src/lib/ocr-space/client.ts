/**
 * OCR.space API client for extracting text from resume PDFs
 * Uses the OCR.space API to perform OCR on uploaded PDF files
 */

const OCR_SPACE_API_URL = 'https://api.ocr.space/parse/image';

interface OcrSpaceResponse {
    ParsedResults: {
        ParsedText: string;
        ErrorMessage?: string;
        FileParseExitCode: number;
    }[];
    OCRExitCode: number;
    IsErroredOnProcessing: boolean;
    ErrorMessage?: string[];
}

/**
 * Extract text from a PDF file using OCR.space API
 * @param pdfBuffer - The PDF file as a Buffer
 * @param filename - The original filename
 * @returns The extracted text from the PDF
 */
export async function extractTextWithOcrSpace(
    pdfBuffer: Buffer,
    filename: string = 'resume.pdf'
): Promise<string> {
    const apiKey = process.env.OCR_SPACE_API_KEY;

    if (!apiKey) {
        throw new Error('OCR_SPACE_API_KEY environment variable is not set');
    }

    // Create form data for the API request
    const formData = new FormData();

    // Convert buffer to base64
    const base64File = pdfBuffer.toString('base64');
    const base64Data = `data:application/pdf;base64,${base64File}`;

    formData.append('base64Image', base64Data);
    formData.append('apikey', apiKey);
    formData.append('language', 'eng');
    formData.append('isOverlayRequired', 'false');
    formData.append('filetype', 'PDF');
    formData.append('detectOrientation', 'true');
    formData.append('scale', 'true');
    formData.append('OCREngine', '2'); // Engine 2 is better for documents

    console.log('📤 Sending PDF to OCR.space API...');

    try {
        const response = await fetch(OCR_SPACE_API_URL, {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            throw new Error(`OCR.space API error: ${response.status} ${response.statusText}`);
        }

        const result: OcrSpaceResponse = await response.json();

        console.log('📥 OCR.space response received, exit code:', result.OCRExitCode);

        if (result.IsErroredOnProcessing) {
            const errorMsg = result.ErrorMessage?.join(', ') || 'Unknown error during processing';
            throw new Error(`OCR.space processing error: ${errorMsg}`);
        }

        if (result.OCRExitCode !== 1) {
            throw new Error(`OCR.space exit code ${result.OCRExitCode}: Processing failed`);
        }

        if (!result.ParsedResults || result.ParsedResults.length === 0) {
            throw new Error('No text could be extracted from the PDF');
        }

        // Combine text from all parsed pages
        const extractedText = result.ParsedResults
            .map(page => {
                if (page.FileParseExitCode !== 1 && page.ErrorMessage) {
                    console.warn(`⚠️ Page parsing warning: ${page.ErrorMessage}`);
                }
                return page.ParsedText || '';
            })
            .join('\n\n');

        if (!extractedText || extractedText.trim().length < 50) {
            throw new Error('Extracted text is too short or empty');
        }

        console.log('✅ OCR.space extraction successful, text length:', extractedText.length);

        return extractedText;
    } catch (error) {
        if (error instanceof Error) {
            console.error('❌ OCR.space error:', error.message);
            throw error;
        }
        throw new Error('Failed to extract text using OCR.space');
    }
}
