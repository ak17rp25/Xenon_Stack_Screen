const SummarySection = () => {
  return (
    <>
      <div className="bg-gray-100 p-4 rounded-lg shadow-inner h-60 overflow-y-scroll">
        <h2 className="font-semibold text-lg mb-2">Summary</h2>
        <div className="text-sm text-gray-400">
          Supplier references refer to information provided by a supplier that
          can be used to verify their capabilities and experience. This
          information is typically used during the procurement process to
          evaluate potential vendors. <br /> <br />
          <strong>Basic Reference:</strong>
          <ul className="list-disc ml-5">
            <li>Supplier Name: Acme Corporation</li>
            <li>Contact Name: John Smith, Sales Manager</li>
            <li>Phone Number: (555) 555-5555</li>
            <li>Email Address: [email removed]</li>
          </ul>
          <br />
          <strong>Detailed Reference:</strong>
          <ul className="list-disc ml-5">
            <li>Supplier Name: Global Tech Solutions</li>
            <li>Contact Name: Jane Doe, Account Manager</li>
            <li>Phone Number: (555) 555-1234</li>
            <li>Email Address: [email removed]</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SummarySection;
