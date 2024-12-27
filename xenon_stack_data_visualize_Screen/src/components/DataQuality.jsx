import ReactSpeedometer from "react-d3-speedometer";
import ProgressBarWithScale from "./ProgressBarWithScale";
import { Doughnut } from "react-chartjs-2";
import {
  tableHealthData,
  testResultsData,
  monitoredTablesData,
} from "./PieChartsData";

const DataQuality = ({ progressValue }) => {
  return (
    <>
      <section>
        <h2 className="font-semibold text-lg mb-2">Data Quality</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-100 rounded-lg p-4">
            <h3 className="font-semibold text-center mb-2">
              Data Quality Score
            </h3>
            <div style={{ height: "150px" }}>
              <ReactSpeedometer
                value={65} // Example value
                width={200}
                height={200}
                maxValue={100}
                ringWidth={40} // Increase the segment size
                needleHeightRatio={0.5}
                currentValueText="${value}%"
                textColor="#000000" // Set label color to black
                segments={3}
                needleColor="#000000" // Set needle color to black
              />
            </div>

            {/* Dynamic Label */}
            <div className="text-center">
              {progressValue >= 60 ? ( // Good
                <span className="text-sm font-bold text-green-600">Good</span>
              ) : progressValue >= 40 ? ( // Average
                <span className="text-sm font-bold text-yellow-600">
                  Average
                </span>
              ) : (
                // Poor
                <span className="text-sm font-bold text-red-600">Poor</span>
              )}
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
        <section className="mt-4 w-full">
          <div className="grid grid-cols-3 gap-4 mb-4">
            {/* Table Health */}
            <div className="bg-gray-100 rounded-lg p-4 w-full">
              <h3 className="font-semibold text-center mb-4">Table Health</h3>
              <Doughnut data={tableHealthData} options={{ cutout: "50%" }} />
              <div className="text-center mt-4">
                <div className="flex justify-center flex-wrap gap-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-green-600"></div>
                    <span className="text-sm text-gray-800">Success</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-[#FFC107]"></div>
                    <span className="text-sm text-gray-800">Broken</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-[#2196F3]"></div>
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
              <Doughnut data={testResultsData} options={{ cutout: "50%" }} />
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
                options={{ cutout: "50%" }}
              />
              <div className="text-center mt-4">
                <div className="flex justify-center flex-wrap gap-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-[#4CAF50]"></div>
                    <span className="text-sm text-gray-800">Monitored</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-[#000000]"></div>
                    <span className="text-sm text-gray-800">Unmonitored</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default DataQuality;
