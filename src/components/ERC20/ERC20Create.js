import React, {useState} from 'react'
import { Typography, Button, TextField, Grid, CircularProgress, Alert } from '@mui/material'

const { applyDecimals } = require('../../utils/ethereumAPI');

const ERC20Create = () => {
    const defaultDecimals = "18"
    const defaultInitialSupply = "1000000000000000000"
    const [tokenName, setTokenName] = useState("");
    const [tokenSymbol, setTokenSymbol] = useState("");
    const [tokenInitialSupply, setTokenInitialSupply] = useState(defaultInitialSupply);
    // const [tokenDecimals, setTokenDecimals] = useState(defaultDecimals)
    const [loading, setLoading] = useState(false);

    const onClickAction = async () => {

    }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h6" noWrap component="div" sx={{ m: 1 }}>
          Create Token
        </Typography>
      </Grid>
      <Grid item sx={12}>
        <TextField
          label="Name"
          sx={{ m: 1, width: "25ch" }}
          placeholder="GOLD"
          onChange={(e) => setTokenName(e.target.value)}
        />

        <TextField
          label="Symbol"
          sx={{ m: 1, width: "25ch" }}
          placeholder="GLD"
          onChange={(e) => setTokenSymbol(e.target.value)}
        />
      </Grid>
      <Grid item sx={12}>
        <TextField
          label="Initial supply (raw)"
          sx={{ m: 1, width: "30ch" }}
          placeholder={defaultInitialSupply}
          type="number"
          value={tokenInitialSupply}
          onChange={(e) => setTokenInitialSupply(e.target.value)}
        />
        <TextField
          label="Initial supply (adjusted)"
          sx={{ m: 1, width: "30ch" }}
          placeholder="1"
          value={applyDecimals(tokenInitialSupply, defaultDecimals)}
          variant="filled"
        />
        <TextField
          label="Decimals"
          sx={{ m: 1, width: "10ch" }}
          value={defaultDecimals}
          type="number"
          variant="filled"
        />
      </Grid>
      <Grid item sx={12}>
        <Button
          variant="contained"
          sx={{ m: 1 }}
          onClick={() => onClickAction()}
          disabled={loading}
        >
          Create
        </Button>
      </Grid>
    </Grid>
  );
}

export default ERC20Create