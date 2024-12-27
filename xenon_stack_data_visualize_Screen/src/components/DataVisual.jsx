
import MetaData from "./MetaData";
import DataQuality from "./DataQuality";

const DataVisual = () => {
  const progressValue = 65;
  return (
    <>
      <div className="w-1/2 bg-white rounded-lg shadow-lg p-6">
        <header className="mb-4">
          <h1 className="text-2xl font-bold text-gray-800">Data Visual</h1>
        </header>
        <section className="mb-4">
          <h2 className="font-semibold text-lg mb-2">Data Overview</h2>
          <div className="grid grid-cols-3 gap-x-5">
            <div className="flex flex-col space-y-4 bg-gray-100 rounded-lg shadow-lg">
              <div className="flex items-center bg-gray-100 rounded-lg p-2 shadow-sm">
                <div className="w-10 h-10 flex items-center justify-center bg-gray-300 rounded-2xl shadow-2xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-6 h-6 text-blue-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm text-blue-800">Total Number of Rows</p>
                  <h3 className="text-xl font-bold">34.1M</h3>
                </div>
              </div>

              <div className="flex items-center bg-gray-100 rounded-lg p-2 shadow-sm">
                <div className="w-10 h-10 flex items-center justify-center bg-blue-100 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-6 h-6 text-blue-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 4v16M12 4v16M18 4v16"
                    />
                  </svg>
                </div>
                <div className="ml-4">
                  <p className="text-sm font-semibold text-blue-800">
                    Total No of Columns
                  </p>
                  <h3 className="text-xl font-bold">2</h3>
                </div>
              </div>
            </div>

            <MetaData></MetaData>

            <div className="p-4 bg-white rounded-lg shadow-md">
              {/* SLA Section */}
              <div className="flex justify-between items-center mb-3">
                <p className="font-semibold text-blue-800 text-sm">SLA</p>
                <span className="font-semibold text-gray-500 text-sm">5/5</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-4">
                <div
                  className="h-full bg-green-500"
                  style={{ width: "100%" }}
                ></div>
              </div>

              {/* Test Report Section */}
              <div className="flex justify-between items-center mb-2">
                <p className="font-semibold text-blue-800 text-sm">
                  Test report
                </p>
                <a
                  href="#"
                  className="text-sm font-semibold text-blue-500 hover:underline"
                >
                  See all
                </a>
              </div>
              <div className="flex justify-between items-center mb-2">
                <p className="font-semibold text-gray-900 text-sm">
                  100% Score
                </p>
                <p className="font-semibold text-gray-500 text-sm">5 Tests</p>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-green-500"
                  style={{ width: "100%" }}
                ></div>
              </div>
            </div>
          </div>
        </section>
        <DataQuality progressValue={progressValue}></DataQuality>
      </div>
    </>
  );
};
export default DataVisual;
