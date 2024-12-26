import Dropdown from "./Dropdown";
import { Doughnut } from "react-chartjs-2";
import ReactSpeedometer from "react-d3-speedometer";
import ProgressBarWithScale from "./ProgressBarWithScale";
import { Chart as ChartJS, ArcElement } from "chart.js";

import {
  tableHealthData,
  testResultsData,
  monitoredTablesData,
} from "./PieChartsData";

ChartJS.register(ArcElement);

const MainContent = () => {
  const progressValue = 65;

  return (
    <div className="flex-1 flex flex-col ml-28">
      <div className="flex flex-row gap-4 p-6">
        <div className="w-1/2 bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-3xl font-bold text-black">Databot</h1>
            <Dropdown />
          </div>
          <header className="mb-2">
            <h1 className="text-2xl font-bold text-blue-600 text-center">
              AI Conversational Data Analyst
            </h1>
            <p className="text-gray-600 text-sm">
              Your personal AI data assistant. Seamlessly integrate your
              database for rapid, informed decision-making. Get instant analysis
              and answers, optimizing growth metrics daily. Ask anything, get
              analyst-grade responses.
            </p>
          </header>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <button className="p-4 bg-gray-100 rounded-md shadow-sm text-left">
              Give me the summary of the data Source.
            </button>
            <button className="p-4 bg-gray-100 rounded-md shadow-sm text-left">
              User duration engagement change vs last week?
            </button>
            <button className="p-4 bg-gray-100 rounded-md shadow-sm text-left">
              Provide an overview of this week’s IAP Revenue performance.
            </button>
            <button className="p-4 bg-gray-100 rounded-md shadow-sm text-left">
              What are the factors of drop in our Sales Revenue this week?
            </button>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg shadow-inner h-60 overflow-y-scroll">
            <h2 className="font-semibold text-lg mb-2">Summary</h2>
            <p className="text-sm text-gray-600">
              Supplier references refer to information provided by a supplier
              that can be used to verify their capabilities and experience. This
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
            </p>
          </div>
          <div className="m-3 p-4 bg-gray-100 shadow rounded-lg flex items-center space-x-4 mb-4">
            <input
              type="text"
              placeholder="Ask your AI for data summary......."
              className="flex-1 p-2 border rounded-lg"
            />
            <button className="p-2 bg-black text-white rounded-lg">
              Search
            </button>
          </div>
        </div>

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
                    <p className="text-sm text-blue-800">
                      Total Number of Rows
                    </p>
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

              <div className="p-2 bg-gray-50 rounded-md shadow-md">
                <p className="text-sm font-semibold text-blue-800">Metadata</p>
                <ul className="mt-2 text-sm space-y-1">
                  <li className="flex justify-between">
                    <span className="text-gray-500">Name</span>
                    <span className="text-sm text-gray-900">Samples</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-500">Created at</span>
                    <span className="text-sm text-gray-900">
                      20 Jul 2022
                    </span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-500">Relates to</span>
                    <span className="text-sm text-gray-900">dim_books</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-gray-500">Connection</span>
                    <span className="text-sm text-gray-900">
                      PostgreSQL
                    </span>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-white rounded-lg shadow-md">
                {/* SLA Section */}
                <div className="flex justify-between items-center mb-3">
                  <p className="font-semibold text-blue-800 text-sm">SLA</p>
                  <span className="font-semibold text-gray-500 text-sm">
                    5/5
                  </span>
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
          <section>
            <h2 className="font-semibold text-lg mb-2">Data Quality</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-100 rounded-lg p-4">
                <h3 className="font-semibold text-center mb-2">
                  Data Quality Score
                </h3>
                <div style={{ height: "150px" }}>
                  <ReactSpeedometer
                    value={65}
                    width={200}
                    height={200}
                    maxValue={100}
                    ringWidth={30}
                    needleHeightRatio={0.5}
                    currentValueText="${value}%"
                    textColor="#000000" // Set label color to black
                    segments={3}
                    segmentSpacing={2}
                  />
                </div>
              </div>

              <div className="bg-gray-100 rounded-lg p-4">
                <h3 className="font-semibold text-center mb-2">
                  Rules Against Target
                </h3>
                <div className="mt-2">Validity</div>
                <ProgressBarWithScale
                  value={progressValue}
                  max={8}
                  fgColor="#4CAF50"
                  bgColor="#FFFFFF"
                />

                <ul className="mt-2 list-none space-y-1 flex">
                  <li className="text-xs flex items-center">
                    <span className="w-2 h-2 rounded-full bg-green-600 inline-block mx-2 my-10"></span>
                    Good
                  </li>
                  <li className="text-xs flex items-center">
                    <span className="w-2 h-2 rounded-full bg-yellow-600 inline-block mx-2 my-4"></span>
                    Acceptable
                  </li>
                  <li className="text-xs flex items-center">
                    <span className="w-2 h-2 rounded-full bg-red-600 inline-block mx-2 my-4"></span>
                    Not Acceptable
                  </li>
                </ul>
              </div>
            </div>
            <section>
              <h2 className="font-semibold text-lg mb-4">Data Quality</h2>
              <div className="grid grid-cols-3 gap-4">
                {/* Table Health */}
                <div className="bg-gray-100 rounded-lg p-4">
                  <h3 className="font-semibold text-center mb-4">
                    Table Health
                  </h3>
                  <Doughnut
                    data={tableHealthData}
                    options={{ cutout: "70%" }}
                  />
                  <div className="text-center mt-4">
                    <div className="flex justify-center flex-wrap gap-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-green-600"></div>
                        <span className="text-sm text-gray-800">Success</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-[#FFC107]"></div>
                        <span className="text-sm text-gray-800">Broken</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-[#2196F3]"></div>
                        <span className="text-sm text-gray-800">Skipped</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Test Results Breakdown */}
                <div className="bg-gray-100 rounded-lg p-4">
                  <h3 className="font-semibold text-center mb-4">
                    Test Results Breakdown
                  </h3>
                  <Doughnut
                    data={testResultsData}
                    options={{ cutout: "70%" }}
                  />
                  <div className="text-center mt-4">
                    <div className="flex justify-center flex-wrap gap-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-[#4CAF50]"></div>
                        <span className="text-sm text-gray-800">Success</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-[#F44336]"></div>
                        <span className="text-sm text-gray-800">Failed</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-[#9C27B0]"></div>
                        <span className="text-sm text-gray-800">Aborted</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Monitored Tables */}
                <div className="bg-gray-100 rounded-lg p-4">
                  <h3 className="font-semibold text-center mb-4">
                    Monitored Tables
                  </h3>
                  <Doughnut
                    data={monitoredTablesData}
                    options={{ cutout: "70%" }}
                  />
                  <div className="text-center mt-4">
                    <div className="flex justify-center flex-wrap gap-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-[#4CAF50]"></div>
                        <span className="text-sm text-gray-800">Monitored</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 rounded-full bg-[#000000]"></div>
                        <span className="text-sm text-gray-800">
                          Unmonitored
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
