import * as React from "react";
import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function MaterialUIPickers({ name, label, value, setValue }) {
  const handleChange = (newValue) => {
    console.log(newValue.$d)
    setValue(newValue.$d);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <DatePicker
          sx={{ width: 200 }}
          label={label}
          inputFormat="MM/DD/YYYY"
          value={value[name]}
          onChange={handleChange}
          size="small"
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  );
}
