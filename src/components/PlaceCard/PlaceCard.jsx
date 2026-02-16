import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, Box, Avatar, Typography } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CircleIcon from "@mui/icons-material/Circle";

function PlaceCard({ place }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/details/${place.id}`, { state: { place } });
  };

  return (
    <Card onClick={handleClick} sx={{ cursor: "pointer" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          borderRadius: 1,
          p: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            height: 100,
          }}
        >
          <Avatar
            sx={{ width: 70, height: 70 }}
            variant="rounded"
            src={place.profile_image_url}
            alt={place.name}
          />
          <Box
            sx={{
              ml: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Typography
              variant="h7"
              component="div"
              sx={{ fontWeight: "bold" }}
            >
              {place.name}
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", mt: 1.5 }}>
              <CalendarMonthIcon sx={{ mr: 0.5 }} />
              {place.operation_time.length > 0 && (
                <>
                  <Typography variant="body2" component="span">
                    {place.operation_time[0].time_open} AM -{" "}
                    {place.operation_time[0].time_close} PM
                  </Typography>
                  <CircleIcon
                    sx={{ width: 10, height: 10, ml: 15, color: "#134B8A" }}
                  />
                  <Typography
                    variant="body2"
                    component="span"
                    sx={{ color: "#134B8A", ml: 0.5, fontWeight: "bold" }}
                  >
                    {place.rating}
                  </Typography>
                </>
              )}
            </Box>
          </Box>
        </Box>
        <Box sx={{ mt: 1, display: "flex", overflowX: "auto" }}>
          {place.images.map((img, index) => (
            <Avatar
              key={index}
              src={img}
              alt={`img-${index}`}
              sx={{
                width: "140px",
                height: "120px",
                flex: "0 0 auto",
              }}
              variant="rounded"
            />
          ))}
        </Box>
      </Box>
      <Typography>Hello</Typography>
    </Card>
  );
}

export default PlaceCard;
