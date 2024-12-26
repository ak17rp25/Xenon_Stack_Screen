export const tableHealthData = {
  labels: ["Success", "Broken", "Skipped"],
  datasets: [
    {
      data: [50, 25, 25],
      backgroundColor: ["#4CAF50", "#FFC107", "#2196F3"], // Green, Yellow, Blue
    },
  ],
};

export const testResultsData = {
  labels: ["Success", "Failed", "Aborted"],
  datasets: [
    {
      data: [50, 30, 20],
      backgroundColor: ["#4CAF50", "#F44336", "#9C27B0"], // Green, Red, Purple
    },
  ],
};

export const monitoredTablesData = {
  labels: ["Monitored", "Unmonitored"],
  datasets: [
    {
      data: [60, 40],
      backgroundColor: ["#4CAF50", "#000000"], // Green, Black
    },
  ],
};
