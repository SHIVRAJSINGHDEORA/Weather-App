import {
  FormControl,
  OutlinedInput,
  InputAdornment,
  Divider,
  IconButton,
} from "@mui/material";
import {
  RoomOutlined,
  TravelExploreOutlined,
  Clear,
} from "@mui/icons-material";
import { useState } from "react";
export default function SearchBox({ getCity }) {
  const [city, setCity] = useState("");
  const [clear, setClear] = useState(false);

  let handdleCity = (event) => {
    setCity(event.target.value);
    if (event.target.value == "") {
      setClear(false);
    } else {
      setClear(true);
    }
  };

  let clearTab = () => {
    setCity("");
    setClear(false);
  };

  let handdleSubmit = async () => {
    getCity(city);
    setCity("");
    setClear(false);
  };

  return (
    <div className="search-container">
      <form onSubmit={handdleSubmit}>
        <FormControl
          fullWidth
          sx={{ m: 1, width: 400 }}
          className="search-form-control"
        >
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={
              <InputAdornment position="start">
                <RoomOutlined sx={{ color: "blue" }} />
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment
                position="end"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  justifyContent: "center",
                }}
              >
                <IconButton onClick={clearTab} size="small">
                  <Clear sx={clear ? {} : { display: "none" }} />
                </IconButton>
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{
                    width: "2px",
                    height: 28,
                    borderColor: "rgba(0,0,0,0.4)",
                    alignSelf: "center",
                  }}
                />
                <IconButton onClick={handdleSubmit}>
                  <TravelExploreOutlined sx={{ color: "blue" }} />
                </IconButton>
              </InputAdornment>
            }
            sx={{
              borderRadius: "28px 28px 28px 28px",
              bgcolor: "#d9dffb",
              fontWeight: "900",
              "& .MuiOutlinedInput-notchedOutline": {
                borderWidth: "3px",
                borderColor: "orange",
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderWidth: "5px",
                borderColor: "orange",
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderWidth: "5px",
                borderColor: "orange",
              },
              "&::placeholder": {
                fontStyle: "italic",
              },
            }}
            placeholder="City Name"
            value={city}
            onChange={handdleCity}
          />
        </FormControl>
      </form>
    </div>
  );
}
