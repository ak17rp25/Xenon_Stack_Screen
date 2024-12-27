import Dropdown from "./Dropdown";
import { Chart as ChartJS, ArcElement } from "chart.js";
import SummarySection from "./SummarySection";
import DataVisual from "./DataVisual";

ChartJS.register(ArcElement);

const MainContent = () => {
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
          <div className="grid grid-cols-2 gap-2 mt-8 m-4">
            <div className="p-2 bg-white rounded-lg shadow-lg text-left border-gray-400 text-sm">
              Give me the summary of the data Source.
            </div>
            <div className="p-2 bg-white rounded-lg shadow-lg text-left border-gray-400 text-sm">
              User duration engagement change vs last week?
            </div>
            <div className="p-2 bg-white rounded-lg shadow-lg text-left border-gray-400 text-sm">
              Provide an overview of this week’s IAP Revenue performance.
            </div>
            <div className="p-2 bg-white rounded-lg shadow-lg text-left border-gray-400 text-sm">
              What are the factors of drop in our Sales Revenue this week?
            </div>
          </div>
          <SummarySection></SummarySection>
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
        <DataVisual></DataVisual>
      </div>
    </div>
  );
};

export default MainContent;
