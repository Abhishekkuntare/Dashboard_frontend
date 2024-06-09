import React, { useEffect, useState } from "react";
import {
  fetchEndYears,
  fetchTopics,
  fetchIntensities,
  fetchSectors,
  fetchRegions,
  fetchPestle
} from "../../utility/api";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  Card,
  CardContent,
  TextField,
} from "@mui/material";

const DataComponent = () => {
  const [endYears, setEndYears] = useState([]);
  const [topics, setTopics] = useState([]);
  const [intensities, setIntensities] = useState([]);
  const [sectors, setSectors] = useState([]);
  const [regions, setRegions] = useState([]);
  const [pestle, setPestle] = useState([]);

  const [filteredEndYears, setFilteredEndYears] = useState([]);
  const [filteredTopics, setFilteredTopics] = useState([]);
  const [filteredIntensities, setFilteredIntensities] = useState([]);
  const [filteredSectors, setFilteredSectors] = useState([]);
  const [filteredRegions, setFilteredRegions] = useState([]);
  const [filteredPestle, setFilteredPestle] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const endYearsData = await fetchEndYears();
      const topicsData = await fetchTopics();
      const intensitiesData = await fetchIntensities();
      const sectorsData = await fetchSectors();
      const regionsData = await fetchRegions();
      const pestleData = await fetchPestle();

      setEndYears(endYearsData);
      setTopics(topicsData);
      setIntensities(intensitiesData);
      setSectors(sectorsData);
      setRegions(regionsData);
      setPestle(pestleData);

      setFilteredEndYears(endYearsData);
      setFilteredTopics(topicsData);
      setFilteredIntensities(intensitiesData);
      setFilteredSectors(sectorsData);
      setFilteredRegions(regionsData);
      setFilteredPestle(pestleData);
    };

    fetchData();
  }, []);

  const handleFilterChange = (event, setData, data) => {
    const value = event.target.value.toLowerCase();
    setData(data.filter((item) => item.toLowerCase().includes(value)));
  };

  const renderTable = (title, data) => (
    <Card
      sx={{ margin: "20px", minWidth: 200 }}
      style={{ background: "#141b2d" }}
    >
      <CardContent style={{ background: "#1f2a40" }}>
 
        <TextField
          label={`Filter ${title}`}
          variant="outlined"
          size="small"
          fullWidth
          onChange={(event) =>
            handleFilterChange(
              event,
              title === "End Years"
                ? setFilteredEndYears
                : title === "Topics"
                ? setFilteredTopics
                : title === "Intensities"
                ? setFilteredIntensities
                : title === "Sectors"
                ? setFilteredSectors
                : title === "Regions"
                ? setFilteredRegions
                : setFilteredPestle,
              title === "End Years"
                ? endYears
                : title === "Topics"
                ? topics
                : title === "Intensities"
                ? intensities
                : title === "Sectors"
                ? sectors
                : title === "Regions"
                ? regions
                : pestle
            )
          }
          style={{ marginBottom: "10px" }}
        />
        <TableContainer
          className="TableContainer"
          component={Paper}
          style={{ maxHeight: 300, background: "#1f2a40", overflowY: "scroll" }}
        >
          <Table stickyHeader aria-label={`${title.toLowerCase()} table`}>
            <TableHead>
              <TableRow>
                <TableCell>{title}</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );

  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Data from Backend
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {renderTable("End Years", filteredEndYears)}
        {renderTable("Topics", filteredTopics)}
        {renderTable("Intensities", filteredIntensities)}
        {renderTable("Sectors", filteredSectors)}
        {renderTable("Regions", filteredRegions)}
        {renderTable("Pestle", filteredPestle)}
      </Box>
    </Box>
  );
};

export default DataComponent;
    