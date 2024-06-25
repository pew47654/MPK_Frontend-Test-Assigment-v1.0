import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Card,
  Box,
  Typography,
  Button,
  CardContent,
  CardMedia,
  Avatar,
  Grid,
} from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import CircleIcon from "@mui/icons-material/Circle";

function PlaceDetail() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { place } = state;

  const handleBackButtonClick = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <Box
      sx={{
        ml: { md: "120px" },
        mt: 3,
      }}
    >
      <Button
        variant="contained"
        sx={{ borderRadius: "20px", bgcolor: "#134B8A", mb: 2 }}
        onClick={handleBackButtonClick}
      >
        <KeyboardArrowLeftIcon />
        Back
      </Button>
      <Box
        sx={{
          border: "1px solid #ccc",
          borderRadius: "10px",
          bgcolor: "#C4D3E9",
          padding: "20px",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Card sx={{ maxWidth: 650 }}>
              <CardMedia
                component="img"
                height="300"
                image={place.profile_image_url}
                alt={place.name}
              />
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  sx={{ fontWeight: "bold" }}
                >
                  {place.name}
                  <CircleIcon
                    sx={{ width: 10, height: 10, ml: 50, color: "#134B8A" }}
                  />{" "}
                  {place.rating}
                </Typography>
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    <strong>Address:</strong> {place.address}
                  </Typography>
                  {place.operation_time.length > 0 && (
                    <>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mt: 2 }}
                      >
                        <strong>Opening hours:</strong>
                      </Typography>
                      {place.operation_time.map((time, index) => (
                        <Typography
                          key={index}
                          variant="body2"
                          color="text.secondary"
                        >
                          {time.day}: {time.time_open} AM - {time.time_close} PM
                        </Typography>
                      ))}
                    </>
                  )}
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ maxWidth: 600, p: 2 }}>
              <CardContent>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  sx={{ fontWeight: "bold" }}
                >
                  Images
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  {place.images.map((img, index) => (
                    <Avatar
                      key={index}
                      src={img}
                      alt={`img-${index}`}
                      sx={{ width: 500, height: 500 }}
                      variant="rounded"
                    />
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default PlaceDetail;
