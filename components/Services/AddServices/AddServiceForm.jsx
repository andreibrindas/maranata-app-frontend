import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Stack } from "@mui/material";
import { useMembers } from "../../../ContextProviders/MembersContext";
import { useEffect } from "react";

function AddServiceForm() {
  const { members } = useMembers();
  console.log("Members from service form", members);

  let teamMembers = [];

  useEffect(() => {
    if (members) {
      Object.keys(members).forEach((key) => {
        //   console.log(key, members[key].name);
        let newMember = {
          label: members[key].name,
        };
        teamMembers.push(newMember);
      });
      console.log(teamMembers);
    }
  }, [members]);

  return (
    <Stack>
      <Autocomplete
        disablePortal
        id="membru-autocomplete-video"
        options={teamMembers}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Mixer Video" />}
      />
      <Autocomplete
        disablePortal
        id="membru-autocomplete-proiectie"
        options={teamMembers}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Proiecție" />}
      />
      <Autocomplete
        disablePortal
        id="membru-autocomplete-camera-1"
        options={teamMembers}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Cameră" />}
      />
      <Autocomplete
        disablePortal
        id="membru-autocomplete-camera-2"
        options={teamMembers}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Cameră" />}
      />
      <Autocomplete
        disablePortal
        id="membru-autocomplete-camera-3"
        options={teamMembers}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Cameră" />}
      />
      <Autocomplete
        disablePortal
        id="membru-autocomplete-sunet"
        options={teamMembers}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Sunet" />}
      />
    </Stack>
  );
}

// const teamMembers = [
//   { label: "Andrei" },
//   { label: "Filip" },
//   { label: "Mihai" },
//   { label: "Luca" },
// ];

// // Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
// const top100Films = [
//   { label: "The Shawshank Redemption", year: 1994 },
//   { label: "The Godfather", year: 1972 },
//   { label: "The Godfather: Part II", year: 1974 },
//   { label: "The Dark Knight", year: 2008 },
// ];

export default AddServiceForm;
