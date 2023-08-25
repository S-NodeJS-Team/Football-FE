import { TextField, InputAdornment } from "@mui/material";
import * as React from "react";
import SearchIcon from "@mui/icons-material/Search";

interface ISearchBoxProps {
  placeHolder: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBox: React.FunctionComponent<ISearchBoxProps> = ({
  placeHolder,
  value,
  setValue,
}) => {
  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <TextField
      fullWidth
      value={value}
      onChange={handleChangeValue}
      id="standard-basic"
      variant="standard"
      placeholder={placeHolder}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBox;
