import React, { useState } from "react";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Button from "@mui/material/Button";
import dayjs from "dayjs";
import Autocomplete from "@mui/material/Autocomplete";
import { Link } from "react-router-dom";

import { region } from "../../store/region.json";

const minDate = dayjs("2019-01-01T00:00:00.000");
const maxDate = dayjs("2022-01-01T00:00:00.000");

const SearchForm = () => {
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);
  const [subject, setSubject] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.StartDate = start.toJSON();
    data.EndDate = end.toJSON();
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto p-12 flex flex-col gap-6 rounded-lg shadow-lg bg-base-white"
    >
      <h3 className="text-center text-xl font-semibold">Поиск</h3>
      <Autocomplete
        disablePortal
        id="District"
        options={region}
        onChange={(event, value) => {
          const sub = region.find((el) => el.value === value.value);
          setSubject(sub);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Федеральный округ"
            {...register("District", {})}
          />
        )}
      />
      {subject && (
        <Autocomplete
          disablePortal
          id="Region"
          options={subject.subject}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Субъект"
              {...register("Region", {})}
            />
          )}
        />
      )}

      <div className="flex gap-6">
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            minDate={minDate}
            maxDate={maxDate}
            label="Начало"
            value={start}
            onChange={(newValue) => {
              setStart(newValue);
            }}
            renderInput={(params) => (
              <TextField {...params} {...register("StartDate", {})} />
            )}
          />
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            minDate={minDate}
            maxDate={maxDate}
            label="Конец"
            value={end}
            onChange={(newValue) => {
              setEnd(newValue);
            }}
            renderInput={(params) => (
              <TextField {...params} {...register("EndDate", {})} />
            )}
          />
        </LocalizationProvider>
      </div>
      <Button variant="contained" type="submit">
        <Link className="text-center" to="/comparison/volume">
          Показать результаты
        </Link>
      </Button>
    </form>
  );
};

export default SearchForm;
