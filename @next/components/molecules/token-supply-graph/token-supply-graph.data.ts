export const tokenSupplyOptions = {
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
      cubicInterpolationMode: "monotone",
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
      max: 50,
      ticks: {
        stepSize: 10,
        callback: function (value: any) {
          return value % 10 === 0 ? `${value}M` : "";
        },
      },
    },
  },
};

const labels = [
  "Apr",
  "june",
  "Aug",
  "Oct",
  "Dec",
  "2025",
  "Feb",
  "Apr",
  "June",
  "Aug",
  "Sept",
];
const publicAirdropData = [null, 8, 15, 12, 18, 17, 25, 24, 30, 44, 50];
const teamAirdropData = [null, 8, 26, 21, 28, 26, 40, 38, 46, 48, 50];
const investorAirdropData = [null, 8, 21, 16, 22, 22, 32, 30, 35, 46, 50];
const iloData = [10, 8, 0];

export const tokenSupplyData = {
  labels,
  datasets: [
    {
      fill: {
        target: "origin",
        above: "rgba(168, 101, 253, 0.3)",
      },
      label: "Public Airdrop",
      data: publicAirdropData,
      borderColor: "#A865FD",
      backgroundColor: "#A865FD",
      pointRadius: 0,
      pointHoverRadius: 0,
    },
    {
      fill: {
        target: "origin",
        above: "rgba(101, 171, 253, 0.3)",
      },
      label: "Team Airdrop",
      data: teamAirdropData,
      borderColor: "#65ABFD",
      backgroundColor: "#65ABFD",
      pointRadius: 0,
      pointHoverRadius: 0,
    },
    {
      fill: {
        target: "origin",
        above: "rgba(44, 225, 171, 0.3)",
      },
      label: "Investor Airdrop",
      data: investorAirdropData,
      borderColor: "#2CE1AB",
      backgroundColor: "#2CE1AB",
      pointRadius: 0,
      pointHoverRadius: 0,
    },
    {
      fill: {
        target: "origin",
        above: "rgba(255, 139, 96, 0.3)",
      },
      label: "ILO",
      data: iloData,
      borderColor: "#FF8B60",
      backgroundColor: "#FF8B60",
      pointRadius: 0,
      pointHoverRadius: 0,
    },
  ],
};
