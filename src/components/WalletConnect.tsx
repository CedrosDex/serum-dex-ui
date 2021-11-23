import React from 'react';
import { useWallet } from '../utils/wallet';
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  buttonContainer: {
    background: "linear-gradient(180deg, #FFE200 50%, #EE03A8 100%)",
    borderRadius: 25,
    width: 150,
    marginTop: 15
  },
  button: {
    background: "#0D1017",
    margin: 1,
    borderRadius: 20,
    width: 148,
    "&:hover": {
      background:
        "#252D41",
    },
  },
  coloredText: {
    textTransform: "capitalize",
    fontWeight: 400,
    backgroundImage: "linear-gradient(180deg, #1B98E0 60%, #EE03A8 100%)",
    backgroundClip: "text",
    color: "#60C0CB",
    "-webkit-background-clip": "text",
    "-moz-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    "-moz-text-fill-color": "transparent",
  },
});



export default function WalletConnect({ width }: { width?: number }) {
  const { connected, wallet, select, connect, disconnect } = useWallet();
  const publicKey = (connected && wallet?.publicKey?.toBase58()) || '';
  const classes = useStyles();

  const language = (localStorage.getItem('language')? localStorage.getItem('language'): 'es');


  return (
    <div
        className={classes.buttonContainer}
        style={{ width: width ? width : undefined, display: "flex",
        justifyContent: "space-around" }}
      >
        <Button
          disableRipple
          onClick={connected ? disconnect : connect}
          className={classes.button}
          style={{ width: width ? width - 2 : undefined }}
        >
          {!connected ? (
            <Typography className={classes.coloredText}>
              {language === 'en' ? 'Connect wallet' : 'Conectar billetera'}
            </Typography>
          ) : (
            <Typography className={classes.coloredText}>
              {language === 'en' ? 'Disconnect' : 'Desconectar'}
            </Typography>
          )}
        </Button>
    </div>
  );
}
