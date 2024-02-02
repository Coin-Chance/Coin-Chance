export const tokenReleaseOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        usePointStyle: true,
        boxWidth: 10,
        padding: 20,
        fontFamily: "Inter, sans-serif",
        fontSize: 14,
        fontWeight: "700",
        fontColor: "#000",
      },
    },
    filler: {
      propagate: false,
    },
  },
  elements: {
    line: {
      borderWidth: 2,
      cubicInterpolationMode: "monotone", // Set to "monotone" for curved lines
    },
  },
  layout: {
    padding: {
      left: 10,
      right: 10,
      top: 10,
      bottom: 10,
    },
  },
  interaction: {
    intersect: false,
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      min: 0,
      max: 100,
      ticks: {
        stepSize: 25,
        callback: function (value: any) {
          return value % 25 === 0 ? `${value}M` : "";
        },
      },
    },
  },
};

const labels = [
  "Apr",
  "May",
  "june",
  "july",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
  "2025",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "june",
  "july",
  "Aug",
];

const publicAirdropData = [
  100, 80, 90, 80, 90, 80, 85, 70, 70, 65, 60, 65, 60, 55, 60, 55, 50,
];
const teamAirdropData = [
  15, 8, 18, 22, 18, 17, 25, 24, 30, 35, 35, 42, 40, 35, 45, 40, 50,
];
export const tokenReleaseData = {
  labels,
  datasets: [
    {
      fill: {
        target: "origin",
        above: "rgba(168, 101, 253, 0.3)",
      },
      label: "Circulation Supply",
      data: publicAirdropData,
      borderColor: "#A865FD",
      backgroundColor: "#A865FD",
      pointRadius: 0,
      pointHoverRadius: 0,
    },
    {
      fill: {
        target: "origin",
        above: "rgba(255, 139, 96, 0.3)",
      },
      label: "Total Supply",
      data: teamAirdropData,
      borderColor: "#FF8B60",
      backgroundColor: "#FF8B60",
      pointRadius: 0,
      pointHoverRadius: 0,
    },
  ],
};
