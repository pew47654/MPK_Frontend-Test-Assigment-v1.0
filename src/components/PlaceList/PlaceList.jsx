import React, { useEffect, useState } from "react";
import axios from "axios";
import PlaceCard from "../PlaceCard/PlaceCard";
import {
  Box,
  Typography,
  InputBase,
  FormControl,
  Select,
  MenuItem,
  Grid,
  Pagination,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";

const Search = styled("div")(({ theme }) => ({
  position: "relative",

  borderRadius: 50,
  border: `2px solid #134B8A`,
  marginLeft: theme.spacing(2),
  width: "100%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  position: "absolute",
  right: 0,
  top: "50%",
  transform: "translateY(-50%)",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1.8, 1.8, 1.8, 3),
    width: "100%",
  },
}));

export default function PlaceList() {
  const [places, setPlaces] = useState([]);
  const [filteredPlaces, setFilteredPlaces] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // Maximum 9 cards per page

  useEffect(() => {
    axios
      .get("/MPK_example_data.json")
      .then((response) => {
        setPlaces(response.data);
        setFilteredPlaces(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearch(value);
    filterPlaces(value, category);
  };

  const handleCategoryChange = (event) => {
    const value = event.target.value;
    setCategory(value);
    filterPlaces(search, value);
  };

  const filterPlaces = (search, category) => {
    let filtered = places;

    if (search) {
      filtered = filtered.filter((place) =>
        place.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category) {
      filtered = filtered.filter((place) =>
        place.categories.includes(category)
      );
    }

    setFilteredPlaces(filtered);
    setCurrentPage(1); // Reset to first page after filtering
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredPlaces.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        p: { xs: 1, sm: 2, md: 3 },
        ml: { md: "120px" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: { xs: "flex-start", md: "space-between" },
          mb: 2,
        }}
      >
        <Typography sx={{ fontWeight: "bold", fontSize: { xs: 20, md: 24 } }}>
          PlaceList
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: { xs: "flex-start", md: "flex-end" },
            width: "100%",
            maxWidth: { xs: "100%", md: "auto" },
            mt: { xs: 2, md: 0 },
          }}
        >
          <FormControl
            sx={{ m: 1, minWidth: 240, width: { xs: "100%", md: "auto" } }}
          >
            <Select
              value={category}
              onChange={handleCategoryChange}
              style={{ borderRadius: "50px", width: "100%" }}
              displayEmpty
            >
              <MenuItem value="">
                <em>All Categories</em>
              </MenuItem>
              <MenuItem value="restaurant">Restaurant</MenuItem>
              <MenuItem value="bakery">Bakery</MenuItem>
              <MenuItem value="cafe">Cafe</MenuItem>
            </Select>
          </FormControl>
          <Search
            sx={{ width: { xs: "100%", md: "auto" }, m: 1, minWidth: 400 }}
          >
            <StyledInputBase
              placeholder="Search name…"
              inputProps={{ "aria-label": "search" }}
              value={search}
              onChange={handleSearch}
            />
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
          </Search>
        </Box>
      </Box>

      <Grid container spacing={2}>
        {currentItems.map((place, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                boxShadow: "0px 7px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: 3,
                overflow: "hidden",
              }}
            >
              <PlaceCard place={place} />
            </Box>
          </Grid>
        ))}
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Pagination
          count={Math.ceil(filteredPlaces.length / itemsPerPage)}
          page={currentPage}
          onChange={(event, value) => setCurrentPage(value)}
          color="primary"
        />
      </Box>
    </Box>
  );
}
