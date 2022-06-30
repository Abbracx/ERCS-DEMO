import React, {useState} from 'react';
import { Typography, Button, TextField, Grid, CircularProgress, Alert } from '@mui/material';
const Web3 = require('web3');

const web3 = new Web3(window.ethereum)

const ERC20Token =  require("./ERC20Token");

const { applyDecimals } = require('../../utils/ethereumAPI');

const web3Token = new web3.eth.Contract(ERC20Token.abi);
console.log(web3Token.eth)

const ERC20Create = () => {
    const defaultDecimals = "18"
    const defaultInitialSupply = "1000000000000000000"
    const [tokenName, setTokenName] = useState("");
    const [tokenSymbol, setTokenSymbol] = useState("");
    const [tokenInitialSupply, setTokenInitialSupply] = useState(defaultInitialSupply);
    // const [tokenDecimals, setTokenDecimals] = useState(defaultDecimals)
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("")
    const [successMessage, setSuccessMessage] = useState("")

    
    const onClickAction = async () => {

      setLoading(true)
      setErrorMessage("")
      setSuccessMessage("")

      const accounts = await web3.eth.getAccounts();

      try{

          const result = await web3Token.deploy({ 
              data: ERC20Token.bytecode,
              arguments: [tokenName, tokenSymbol, tokenInitialSupply]
          }).send({ from: accounts[0] });

          setSuccessMessage(`Token successfully deployed ${result._address}`)

      }catch(error){
        setErrorMessage(error.message);
        console.log(`ERROR: ${error}`)
      }

      setLoading(false)
    }

  return (

    <Grid container spacing={2}>

      <Grid item sx={12}>
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

        {successMessage && <Alert severity="success">{successMessage}</Alert>}
        {errorMessage && <Alert severity="error">{errorMessage}</Alert>}

        <Button variant="contained" sx={{ m: 1 }} onClick={() => onClickAction()} disabled={loading}>
          { loading ? <CircularProgress size={25} /> : "Create" }
        </Button>

      </Grid>
    </Grid>
  );
}

export default ERC20Create