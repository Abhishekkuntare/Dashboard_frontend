import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Container,
  Paper,
  TextField,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const DataComponent = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const publishedResponse = await axios.get(
          "https://dashboard-ebon-theta-67.vercel.app/api/published"
        );
        const titlesResponse = await axios.get(
          "https://dashboard-ebon-theta-67.vercel.app/api/titles"
        );

        const combinedData = publishedResponse.data.map((item, index) => ({
          ...item,
          title: titlesResponse.data[index]?.title,
        }));

        setData(combinedData);
        setFilteredData(combinedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const lowercasedQuery = searchQuery.toLowerCase();
    const filtered = data.filter((item) =>
      item.title?.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredData(filtered);

    const suggestionList = data
      .filter((item) => item.title?.toLowerCase().includes(lowercasedQuery))
      .map((item) => item.title);
    setSuggestions(suggestionList);
  }, [searchQuery, data]);

  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Published Data and Titles
        </Typography>

        <Box
          sx={{
            mb: 4,
            position: "relative",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <TextField
            variant="outlined"
            placeholder="Search Title"
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            fullWidth
            sx={{ maxWidth: 600 }}
            style={{ border: "1px solid white", borderRadius: "10px" }}
          />
          {searchQuery && (
            <Paper
              style={{
                position: "absolute",
                top: "100%",
                left: 0,
                right: 0,
                zIndex: 1,
                maxHeight: 200,
                overflowY: "auto",
              }}
            >
              <List>
                {suggestions.map((suggestion, index) => (
                  <ListItem
                    button
                    key={index}
                    onClick={() => {
                      setSearchQuery(suggestion);
                      setSuggestions([]);
                    }}
                  >
                    <ListItemText primary={suggestion} />
                  </ListItem>
                ))}
              </List>
            </Paper>
          )}
        </Box>

        <Paper style={{ maxHeight: 600, overflowY: "auto", padding: "16px" }}>
          <Grid container spacing={4} style={{ backgroundColor: "#141b2d" }}>
            {filteredData.map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card style={{ background: "#1f2a40" }}>
                  <CardContent>
                    <Typography variant="h6" style={{ fontWeight: "900" }}>
                      Title
                    </Typography>
                    <Typography
                      variant="body1"
                      color="textPrimary"
                      gutterBottom
                    >
                      {item.title || "No Title"}
                    </Typography>
                    <Typography variant="h6" style={{ fontWeight: "900" }}>
                      Published Date
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {item.published}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Box>
    </Container>
  );
};

export default DataComponent;
