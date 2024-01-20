'use client'

const Submitted = () => {
  return (
    <div>
      <div className='bg-green-500 text-center py-2 text-white'>Case Filed Successfully</div>
      <iframe
        src="/file.pdf"
        width="100%"
        height="600px"
        style={{ border: 'none' }}
      >
        This browser does not support PDFs. Please download the PDF to view it: <a href="/file.pdf">Download PDF</a>.
      </iframe>
    </div>
  );
};

export default Submitted;