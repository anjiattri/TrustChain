import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';

export default function FormDetails() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="programName"
            name="programName"
            label="Program Name"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address"
            name="address"
            label="Address"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="duration"
            name="duration"
            label="Duration"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="listAllCredentials"
            name="listAllCredentials"
            label="List all Credentials"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="skillSet"
            name="skillSet"
            label="Skill Set"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="schema"
            name="schema"
            label="Schema"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="slotsAvailable"
            name="slotsAvailable"
            label="Slots available"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="currentLocation"
            name="currentLocation"
            label="Current Location"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="stastatusOfProgramte"
            name="statusOfProgram"
            label="status Of Program"
            fullWidth
            variant="standard"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

