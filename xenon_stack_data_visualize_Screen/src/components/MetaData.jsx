const MetaData = () => {
  return (
    <>
      <div className="p-2 bg-gray-50 rounded-md shadow-md">
        <p className="text-sm font-semibold text-blue-800">Metadata</p>
        <ul className="mt-2 text-sm space-y-1">
          <li className="flex justify-between">
            <span className="text-gray-500">Name</span>
            <span className="text-sm text-gray-900">Samples</span>
          </li>
          <li className="flex justify-between">
            <span className="text-gray-500">Created at</span>
            <span className="text-sm text-gray-900">20 Jul 2022</span>
          </li>
          <li className="flex justify-between">
            <span className="text-gray-500">Relates to</span>
            <span className="text-sm text-gray-900">dim_books</span>
          </li>
          <li className="flex justify-between">
            <span className="text-gray-500">Connection</span>
            <span className="text-sm text-gray-900">PostgreSQL</span>
          </li>
        </ul>
      </div>
    </>
  );
};
export default MetaData;
