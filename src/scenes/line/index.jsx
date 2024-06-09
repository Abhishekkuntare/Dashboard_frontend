import { Box } from "@mui/material";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";

const Line = () => {
  return (
    <Box m="20px">
      <Header
        title="Line Chart"
        subtitle="Line chart showing end_year,
intensity,
sector,
insight,
region,
start_year,
impact,
added,
bicycle,
published,
relevance,
source accroding to the country"
      />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Line;
