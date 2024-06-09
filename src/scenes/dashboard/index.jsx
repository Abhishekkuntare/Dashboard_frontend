import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PublicIcon from '@mui/icons-material/Public';
import AlignVerticalTopIcon from '@mui/icons-material/AlignVerticalTop';
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import axios from "axios";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [totals, setTotals] = useState({});

  useEffect(() => {
    axios
      .get("https://dashboard-ebon-theta-67.vercel.app/api/likelihood")
      .then((res) => {
        setTotals((prevState) => ({
          ...prevState,
          totalLikelihood: res.data.totalLikelihood,
        }));
      })
      .catch((err) => console.error("Error fetching total likelihood:", err));

    axios
      .get("https://dashboard-ebon-theta-67.vercel.app/api/countries")
      .then((res) => {
        setTotals((prevState) => ({
          ...prevState,
          totalCountries: res.data.totalCountries,
        }));
      })
      .catch((err) => console.error("Error fetching total countries:", err));

    axios
      .get("https://dashboard-ebon-theta-67.vercel.app/api/sectors")
      .then((res) => {
        setTotals((prevState) => ({
          ...prevState,
          totalSectors: res.data.totalSectors,
        }));
      })
      .catch((err) => console.error("Error fetching total sectors:", err));

    axios
      .get("https://dashboard-ebon-theta-67.vercel.app/api/topics")
      .then((res) => {
        setTotals((prevState) => ({
          ...prevState,
          totalTopics: res.data.totalTopics,
        }));
      })
      .catch((err) => console.error("Error fetching total topics:", err));
  }, []);

  const [insights, setInsights] = useState([]);

  useEffect(() => {
    axios
      .get("https://dashboard-ebon-theta-67.vercel.app/api/insights")
      .then((res) => {
        setInsights(res.data.insights);
      })
      .catch((err) => console.error("Error fetching insights:", err));
  }, []);

  const [totalRelevance, setTotalRelevance] = useState(0);

  useEffect(() => {
    axios
      .get("https://dashboard-ebon-theta-67.vercel.app/api/relevance")
      .then((res) => {
        setTotalRelevance(res.data.totalRelevance);
      })
      .catch((err) => console.error("Error fetching total relevance:", err));
  }, []);
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Data
          </Button>
        </Box>
      </Box>

      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={totals.totalTopics}
            subtitle="Total Topics"
            progress="0.15"
            increase="+14%"
            icon={
              <EmojiObjectsIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={totals.totalLikelihood}
            subtitle="Total Likelihood"
            progress="0.20"
            increase="+21%"
            icon={
              <FavoriteIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={totals.totalCountries}
            subtitle="Total Countries"
            progress="0.30"
            increase="+5%"
            icon={
              <PublicIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title={totals.totalSectors}
            subtitle="Total Sectors"
            progress="0.80"
            increase="+43%"
            icon={
              <AlignVerticalTopIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>

        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
              Statistics
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              All Insights
            </Typography>
          </Box>
          {insights.map((insight, i) => (
            <Box
              key={`${insight}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  {insight}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Relevances
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              {totalRelevance} Total Relevance
            </Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
        Bars
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
      
      </Box>
    </Box>
  );
};

export default Dashboard;
