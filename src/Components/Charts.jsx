import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from "recharts";

// #region Sample data
// const data = [
//   {
//     name: "Page A",
//     uv: 590,
//     pv: 800,
//     amt: 1400,
//     cnt: 490,
//   },
//   {
//     name: "Page B",
//     uv: 868,
//     pv: 967,
//     amt: 1506,
//     cnt: 590,
//   },
//   {
//     name: "Page C",
//     uv: 1397,
//     pv: 1098,
//     amt: 989,
//     cnt: 350,
//   },
//   {
//     name: "Page D",
//     uv: 1480,
//     pv: 1200,
//     amt: 1228,
//     cnt: 480,
//   },
//   {
//     name: "Page E",
//     uv: 1520,
//     pv: 1108,
//     amt: 1100,
//     cnt: 460,
//   },
//   {
//     name: "Page F",
//     uv: 1400,
//     pv: 680,
//     amt: 1700,
//     cnt: 380,
//   },
// ];

// #endregion
const Charts = ({ ratings }) => {
  console.log(ratings);
  return (
    <div className="my-10 container  h-[400px]">
      <h1 className="text-2xl font-bold mb-5">Ratings</h1>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
          layout="vertical"
          data={ratings}
          margin={{ top: 20, right: 40, bottom: 20, left: 60 }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis type="number" dataKey='count' />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Legend />
          <Bar
            dataKey="count"
            barSize={25}
            fill="#3f07c7"
            name="Total Ratings"
          />
          {/* Optional line to show trend */}
          <Line dataKey="count" stroke="#ff7300" name="count" />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Charts;
