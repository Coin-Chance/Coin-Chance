export const doughnutData = {
  labels: ["Public Airdrop", "Team Airdrop", "Investor Airdrop", "ILO"],
  datasets: [
    {
      label: "# of Votes",
      data: [80, 5, 5, 10],
      backgroundColor: ["#A865FD", "#65ABFD", "#2CE1AB", "#FF8B60"],
      borderColor: ["#A865FD", "#65ABFD", "#2CE1AB", "#FF8B60"],
      borderWidth: 0,
    },
  ],
};
export const doughnutOptions = {
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        usePointStyle: true,
        boxWidth: 10,
        padding: 20,
        fontFamily: "Inter, sans-serif",
        fontSize: "14px",
        fontWeight: "700",
        fontColor: "#000",
      },
    },
  },
};
