import React, { useState } from "react";
import Modal from "./Modal";
import { useLocalStorageState, apiGet, useSmallScreen } from "../utils/utils";
import Emoji from "./Emoji";
import { Typography, Button, Checkbox, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useAsyncData } from "../utils/fetch-loop";
import Link from "./Link";

const useStyles = makeStyles({
  h2: {
    fontSize: "max(3vw, 40px)",
    color: "white",
    fontWeight: 600,
  },
  text: {
    fontSize: 16,
    color: "white",
    marginTop: 10,
    marginBottom: 10,
  },
  root: {
    maxWidth: "70vw",
    overflow: "auto",
  },
  button: {
    color: "white",
    fontWeight: 600,
    background: "linear-gradient(180deg, #1B98E0 30%, #EE03A8 100%)",
    borderRadius: 15,
    height: "50px",
    fontSize: 30,
    fontColor: "#FFE200",
    padding: 30,
  },
  checkbox: {
    color: "red",
  },
  link: {
    color: "white",
  },
  important: {
    textDecoration: "underline",
    fontWeight: 600,
  },
});

export const DISALLOWED_COUNTRIES = [
  "AF", // Afghanistan
  "CI", // Ivory Coast
  "CU", // Cuba
  "IQ", // Iraq
  "IR", // Iran
  "LR", // Liberia
  "KP", // North Korea
  "SY", // Syria
  "SD", // Sudan
  "SS", // South Sudan
  "ZW", // Zimbabwe
  "AG", // Antigua
  "US", // United States
  "AS", // American Samoa
  "GU", // Guam
  "MP", // Northern Mariana Islands
  "PR", // Puerto Rico
  "UM", // United States Minor Outlying Islands
  "VI", // US Virgin Islands
  "UA", // Ukraine
  "BY", // Belarus,
  "AL", // Albania
  "BU", // Burma
  "CF", // Central African Republic
  "CD", // Democratic Republic of Congo
  "LY", // Lybia
  "SO", // Somalia
  "YD", // Yemen
  "GB", // United Kingdom
  "TH", // Thailand
];

const useCountryCode = () => {
  const fn = async () => {
    const URL = "https://countrycode.bonfida.workers.dev/";
    const result = await apiGet(URL);
    console.log("Country Code", result?.countryCode);
    return result?.countryCode;
  };
  return useAsyncData(fn, "useCountryCode", { refreshInterval: 60 * 1_000 });
};

const REDIRECT_LINK = "https://ftx.com/profile#a=Cedros";

export const Forbidden = () => {
  const [countryCode] = useCountryCode();
  const classes = useStyles();
  if (!DISALLOWED_COUNTRIES.includes(countryCode)) {
    return null;
  }
  return (
    <Modal openModal={true} disableBackdropClick setOpen={() => undefined}>
      <div className={classes.root}>
        <Typography align="center" variant="h2" className={classes.h2}>
          Acceso denegado <Emoji emoji="⚠️" />
        </Typography>
        <Typography align="center" variant="body1" className={classes.text}>
          CEDROS DEX no está disponible para los residentes de{" "}
          <strong>
            Bielorrusia, la República Centroafricana, la República Democrática del Congo, la República 
            Popular Democrática de Corea, la región de Crimea de Ucrania, Cuba, Irán, Libia, Somalia, Sudán, 
            Sudán del Sur, Siria, EE. UU., Yemen y Zimbabwe, 
          </strong>{" "}
          en donde está prohibido acceder a este sitio.
        </Typography>
      </div>
      <Grid container justify="center">
        <Button
          style={{ margin: 10 }}
          className={classes.button}
          href={REDIRECT_LINK}
        >
          Abandonar
        </Button>
      </Grid>
    </Modal>
  );
};

const URL_RULES = "https://docs.cedros.io/aviso-legal/reglas";
const URL_RISKS = "https://docs.cedros.io/aviso-legal/riesgos";

const Warning = () => {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  const [visible, setVisible] = useLocalStorageState("warning-visible", 0);
  const now = new Date().getTime();
  const openModal = now - visible > 14 * 24 * 60 * 60 * 1_000;
  const smallScreen = useSmallScreen();
  return (
    <Modal openModal={openModal} setOpen={() => undefined} disableBackdropClick>
      <Typography align="center" variant="h2" className={classes.h2}>
        Advertencia <Emoji emoji="⚠️" />
      </Typography>
      <div
        className={classes.root}
        style={{
          height: smallScreen ? 200 : undefined,
        }}
      >
        <Typography variant="body1" className={classes.text}>
          CEDROS DEX es un intercambio de activos digitales totalmente descentralizado. No se hace ninguna 
          representación o garantía con respecto a ningún aspecto de CEDROS DEX, incluida su idoneidad, 
          calidad, disponibilidad, accesibilidad, precisión o seguridad. Como se explica con más detalle en 
          las{" "}
          <span className={classes.important}>reglas</span> (disponibles{" "}
          <Link className={classes.link} external to={URL_RULES}>
            aquí
          </Link>
          ) y la <span className={classes.important}>declaración de reisgo</span>{" "}
          (disponible{" "}
          <Link className={classes.link} external to={URL_RISKS}>
            aquí
          </Link>
          ), su acceso y uso de CEDROS DEX es completamente bajo su propio riesgo y podría ocasionar pérdidas 
          sustanciales. Usted asume toda la responsabilidad por el uso de CEDROS DEX y reconoce que lo usa 
          sobre la base de su propia consulta, sin solicitud o incentivo por parte de los Colaboradores 
          (como se define en las Reglas).

        </Typography>
        <Typography variant="body1" className={classes.text}>
          Cedros DEX no está disponible para los residentes de {" "}
          <strong>
            Bielorrusia, la República Centroafricana, la República Democrática del Congo, la República 
            Popular Democrática de Corea, la región de Crimea de Ucrania, Cuba, Irán, Libia, Somalia, 
            Sudán, Sudán del Sur, Siria, EE. UU., Yemen y Zimbabwe o cualquier otra jurisdicción en la 
            que esté prohibido acceder o utilizar CEDROS DEX ("Jurisdicciones prohibidas")
          </strong>
          . Al usar CEDROS DEX, usted confirma que no está ubicado, incorporado o establecido de otra 
          manera, ni es ciudadano o residente de una Jurisdicción Prohibida.
        </Typography>
        <Typography variant="body1" className={classes.text}>
          Si usted tiene la intención de realizar cualquier transacción que involucre derivados, 
          también confirma que no está ubicado, incorporado o establecido de otra manera, o ciudadano o 
          residente de, una Jurisdicción restringida de derivados (como se define en las{" "}
          <Link className={classes.link} external to={URL_RULES}>
            Reglas
          </Link>
          ).
        </Typography>
      </div>
      <Grid container alignItems="center" justify="center">
        <Grid item>
          <Checkbox
            className={classes.checkbox}
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          />
        </Grid>
        <Grid item>
          <Typography variant="body1" className={classes.text}>
            Confirmo que he leído, entiendo y acepto las{" "}
            <Link className={classes.link} external to={URL_RULES}>
              Reglas
            </Link>{" "}
            y la{" "}
            <Link className={classes.link} external to={URL_RISKS}>
              Declaración de Riesgo
            </Link>
          </Typography>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Button
          className={classes.button}
          disabled={!checked}
          onClick={() => setVisible(now)}
        >
        Continuar
        </Button>
      </Grid>
    </Modal>
  );
};

export default Warning;
