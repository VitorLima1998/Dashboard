const labels = ["Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun"];

const data = {
  labels: labels,
  datasets: [
    {
      label: "Last 6 months",
      radius: 0.5,
      backgroundColor: "rgb(74, 77, 230)",
      borderColor: "rgb(74, 77, 230)",
      data: [25, 33, 23, 43, 23, 30, 28],
      tension: 0.5,
    },

    {
      label: "Previous",
      backgroundColor: "rgb(246, 232, 163)",
      borderColor: "rgb(246, 232, 163)",
      data: [23, 25, 27, 24, 32, 26, 35],
      tension: 0.5,
    },
  ],
};

const config = {
  type: "line",
  data: data,
  options: {},
};
