import { Button, Col, Divider, Popover, Row } from 'antd';
import React, { useState } from 'react';
import FloatingElement from './layout/FloatingElement';
import styled from 'styled-components';
import {
  useBalances,
  useMarket,
  useSelectedBaseCurrencyAccount,
  useSelectedOpenOrdersAccount,
  useSelectedQuoteCurrencyAccount,
  useTokenAccounts,
} from '../utils/markets';
import DepositDialog from './DepositDialog';
import { useWallet } from '../utils/wallet';
import Link from './Link';
import { settleFunds } from '../utils/send';
import { useSendConnection } from '../utils/connection';
import { notify } from '../utils/notifications';
import { Balances } from '../utils/types';
import StandaloneTokenAccountsSelect from './StandaloneTokenAccountSelect';
import LinkAddress from './LinkAddress';
import { InfoCircleOutlined } from '@ant-design/icons';
import { useInterval } from '../utils/useInterval';
import { useLocalStorageState } from '../utils/utils';
import { AUTO_SETTLE_DISABLED_OVERRIDE } from '../utils/preferences';
import { useReferrer } from '../utils/referrer';
import Oneinch from '../assets/logos/1inch.png';
import Aave from '../assets/logos/Aave.png';
import Aart from '../assets/logos/Aart.png';
import Abr from '../assets/logos/Abr.png';
import Acm from '../assets/logos/Acm.png';
import Ageur from '../assets/logos/agEur.png';
import Akro from '../assets/logos/Akro.png';
import Aleph from '../assets/logos/Aleph.png';
import Alm from '../assets/logos/Alm.png';
import Apt from '../assets/logos/Apt.png';
import Atlas from '../assets/logos/Atlas.png';
import Ats from '../assets/logos/Ats.png';
import Aury from '../assets/logos/Aury.png';
import Avax from '../assets/logos/Avax.png';
import Axs from '../assets/logos/Axs.png';
import Basis from '../assets/logos/Basis.png';
import Bmbo from '../assets/logos/Bmbo.png';
import Blt from '../assets/logos/Blt.png';
import Block from '../assets/logos/Block.png';
import Bnb from '../assets/logos/Bnb.png';
import Bop from '../assets/logos/Bop.png';
import Bot from '../assets/logos/Bot.png';
import Boku from '../assets/logos/Boku.png';
import Btc from '../assets/logos/Btc.png';
import Cato from '../assets/logos/Cato.png';
import Cave from '../assets/logos/Cave.png';
import Cel from '../assets/logos/Cel.png';
import Cheems from '../assets/logos/Cheems.png';
import Chicks from '../assets/logos/Chicks.png';
import Cmfi from '../assets/logos/Cmfi.png';
import Comp from '../assets/logos/Comp.png';
import Cope from '../assets/logos/Cope.png';
import Cream from '../assets/logos/Cream.png';
import Crp from '../assets/logos/Crp.png';
import Crwny from '../assets/logos/Crwny.png';
import Cwar from '../assets/logos/Cwar.png';
import Cwm from '../assets/logos/Cwm.png';
import Cys from '../assets/logos/Cys.png';
import Dape from '../assets/logos/Dape.png';
import Dateicon from '../assets/logos/Date.png';
import Dfl from '../assets/logos/Dfl.png';
import Dio from '../assets/logos/Dio.png';
import Dogo from '../assets/logos/Dogo.png';
import Dxl from '../assets/logos/Dxl.png';
import Dydx from '../assets/logos/Dydx.png';
import Eth from '../assets/logos/Eth.png';
import Fab from '../assets/logos/Fab.png';
import Fcon from '../assets/logos/Fcon.png';
import Fida from '../assets/logos/Fida.png';
import Floof from '../assets/logos/Floof.png';
import Flwr from '../assets/logos/Flwr.png';
import Fries from '../assets/logos/Fries.png';
import Frkt from '../assets/logos/Frkt.png';
import Front from '../assets/logos/Front.png';
import Ftr from '../assets/logos/Ftr.png';
import Ftt from '../assets/logos/Ftt.png';
import Gari from '../assets/logos/Gari.png';
import Gene from '../assets/logos/Gene.png';
import Ggsg from '../assets/logos/Ggsg.png';
import Gofx from '../assets/logos/Gofx.png';
import God from '../assets/logos/God.png';
import Grape from '../assets/logos/Grape.png';
import Grt from '../assets/logos/Grt.png';
import Hget from '../assets/logos/Hget.png';
import Hnt from '../assets/logos/Hnt.png';
import Holy from '../assets/logos/Holy.png';
import Hxro from '../assets/logos/Hxro.png';
import Inicon from '../assets/logos/In.png';
import Isola from '../assets/logos/Isola.png';
import Ivn from '../assets/logos/Ivn.png';
import Jet from '../assets/logos/Jet.png';
import Jsol from '../assets/logos/Jsol.png';
import Keep from '../assets/logos/Keep.png';
import Kin from '../assets/logos/Kin.png';
import Kko from '../assets/logos/Kko.png';
import Kuro from '../assets/logos/Kuro.png';
import Larix from '../assets/logos/Larix.png';
import Ldo from '../assets/logos/Ldo.png';
import Lien from '../assets/logos/Lien.png';
import Like from '../assets/logos/Like.png';
import Linkicon from '../assets/logos/Link.png';
import Liq from '../assets/logos/Liq.png';
import Lqid from '../assets/logos/Lqid.png';
import Lua from '../assets/logos/Lua.png';
import Mana from '../assets/logos/Mana.png';
import Maps from '../assets/logos/Maps.png';
import Mapspool from '../assets/logos/Mapspool.png';
import Matic from '../assets/logos/Matic.png';
import Math from '../assets/logos/Math.png';
import Mbs from '../assets/logos/Mbs.png';
import Media from '../assets/logos/Media.png';
import Mer from '../assets/logos/Mer.png';
import Merpool from '../assets/logos/Merpool.png';
import Mix from '../assets/logos/Mix.png';
import Mnde from '../assets/logos/Mnde.png';
import Mngo from '../assets/logos/Mngo.png';
import Mola from '../assets/logos/Mola.png';
import Msol from '../assets/logos/Msol.png';
import Nfd from '../assets/logos/Nfd.png';
import Nos from '../assets/logos/Nos.png';
import Oogi from '../assets/logos/Oogi.png';
import Orca from '../assets/logos/Orca.png';
import Oxs from '../assets/logos/Oxs.png';
import Oxy from '../assets/logos/Oxy.png';
import Oxypool from '../assets/logos/Oxypool.png';
import Paxg from '../assets/logos/Paxg.png';
import Perp from '../assets/logos/Perp.png';
import People from '../assets/logos/People.png';
import Polis from '../assets/logos/Polis.png';
import Port from '../assets/logos/Port.png';
import Prism from '../assets/logos/Prism.png';
import Prms from '../assets/logos/Prms.png';
import Prt from '../assets/logos/Prt.png';
import Psk from '../assets/logos/Psk.png';
import Psy from '../assets/logos/Psy.png';
import Ray from '../assets/logos/Ray.png';
import Raypool from '../assets/logos/Raypool.png';
import Real from '../assets/logos/Real.png';
import Renbch from '../assets/logos/Renbch.png';
import Renbtc from '../assets/logos/Renbtc.png';
import Rendoge from '../assets/logos/Rendoge.png';
import Renfil from '../assets/logos/Renfil.png';
import Renluna from '../assets/logos/Renluna.png';
import Renzec from '../assets/logos/Renzec.png';
import Rin from '../assets/logos/Rin.png';
import Roll from '../assets/logos/Roll.png';
import Rope from '../assets/logos/Rope.png';
import Rsr from '../assets/logos/Rsr.png';
import Runicon from '../assets/logos/Run.png';
import Sail from '../assets/logos/Sail.png';
import Samo from '../assets/logos/Samo.png';
import Sand from '../assets/logos/Sand.png';
import Sbr from '../assets/logos/Sbr.png';
import Scy from '../assets/logos/Scy.png';
import Seco from '../assets/logos/Seco.png';
import Shdw from '../assets/logos/Shdw.png';
import Shib from '../assets/logos/Shib.png';
import Shill from '../assets/logos/Shill.png';
import Slc from '../assets/logos/Slc.png';
import Slim from '../assets/logos/Slim.png';
import Slnd from '../assets/logos/Slnd.png';
import Slrs from '../assets/logos/Slrs.png';
import Slx from '../assets/logos/Slx.png';
import Smbd from '../assets/logos/Smbd.png';
import Sny from '../assets/logos/Sny.png';
import Snypool from '../assets/logos/Snypool.png';
import Sol from '../assets/logos/Sol.png';
import Solc from '../assets/logos/Solc.png';
import Solape from '../assets/logos/Solape.png';
import Solar from '../assets/logos/Solar.png';
import Soldoge from '../assets/logos/Soldoge.png';
import Solpad from '../assets/logos/Solpad.png';
import Solx from '../assets/logos/Solx.png';
import Sonar from '../assets/logos/Sonar.png';
import Srm from '../assets/logos/Srm.png';
import Ssu from '../assets/logos/Ssu.png';
import Stars from '../assets/logos/Stars.png';
import Step from '../assets/logos/Step.png';
import Str from '../assets/logos/Str.png';
import Stsol from '../assets/logos/Stsol.png';
import Sunny from '../assets/logos/Sunny.png';
import Sushi from '../assets/logos/Sushi.png';
import Svt from '../assets/logos/Svt.png';
import Swoledoge from '../assets/logos/Swoledoge.png';
import Sxp from '../assets/logos/Sxp.png';
import Syp from '../assets/logos/Syp.png';
import Tiny from '../assets/logos/Tiny.png';
import Tomo from '../assets/logos/Tomo.png';
import Tox from '../assets/logos/Trollbox.png';
import Ttt from '../assets/logos/Ttt.png';
import Tulip from '../assets/logos/Tulip.png';
import Ubxt from '../assets/logos/Ubxt.png';
import Uni from '../assets/logos/Uni.png';
import Ups from '../assets/logos/Ups.png';
import Usdc from '../assets/logos/Usdc.png';
import Usdt from '../assets/logos/Usdt.png';
import Ust from '../assets/logos/Ust.png';
import Uxp from '../assets/logos/Uxp.png';
import Vi from '../assets/logos/Vi.png';
import Wag from '../assets/logos/Wag.png';
import Woo from '../assets/logos/Woo.png';
import Woof from '../assets/logos/Woof.png';
import Xtag from '../assets/logos/Xtag.png';
import Xvc from '../assets/logos/Xvc.png';
import Yfi from '../assets/logos/Yfi.png';


const RowBox = styled(Row)`
  padding-bottom: 20px;
`;

const Tip = styled.p`
  font-size: 12px;
  padding-top: 6px;
`;

const ActionButton = styled(Button)`
  color: #2abdd2;
  background-color: #212734;
  border-width: 1px;
  border-radius: 5%;
`;

export default function StandaloneBalancesDisplay() {
  const { baseCurrency, quoteCurrency, market } = useMarket();
  const balances = useBalances();
  const openOrdersAccount = useSelectedOpenOrdersAccount(true);
  const connection = useSendConnection();
  const { providerUrl, providerName, wallet, connected } = useWallet();
  const [baseOrQuote, setBaseOrQuote] = useState('');
  const baseCurrencyAccount = useSelectedBaseCurrencyAccount();
  const quoteCurrencyAccount = useSelectedQuoteCurrencyAccount();
  const [tokenAccounts] = useTokenAccounts();
  const baseCurrencyBalances =
    balances && balances.find((b) => b.coin === baseCurrency);
  const quoteCurrencyBalances =
    balances && balances.find((b) => b.coin === quoteCurrency);
  const [autoSettleEnabled] = useLocalStorageState('autoSettleEnabled', true);
  const [lastSettledAt, setLastSettledAt] = useState<number>(0);
  const { usdcRef, usdtRef } = useReferrer();
  const language = (localStorage.getItem('language')? localStorage.getItem('language'): 'es')
  async function onSettleFunds() {
    if (!wallet) {
      notify({
        message: language === 'en' ? 'Wallet not connected': 'Billetera sin conectar',
        description: language === 'en' ? 'wallet is undefined' : 'billetera indefinida',
        type: 'error',
      });
      return;
    }

    if (!market) {
      notify({
        message: language === 'en' ? 'Error settling funds': 'Error al liquidar fondos',
        description: language === 'en' ? 'market is undefined' : 'mercado indefinido',
        type: 'error',
      });
      return;
    }
    if (!openOrdersAccount) {
      notify({
        message: language === 'en' ? 'Error settling funds': 'Error al liquidar fondos',
        description: language === 'en' ? 'Open orders account is undefined': 'La cuenta de pedidos abiertos no está definida',
        type: 'error',
      });
      return;
    }
    if (!baseCurrencyAccount) {
      notify({
        message: language === 'en' ? 'Error settling funds': 'Error al liquidar fondos',
        description: language === 'en' ? 'Open orders account is undefined': 'La cuenta de pedidos abiertos no está definida',
        type: 'error',
      });
      return;
    }
    if (!quoteCurrencyAccount) {
      notify({
        message: language === 'en' ? 'Error settling funds': 'Error al liquidar fondos',
        description: language === 'en' ? 'Open orders account is undefined': 'La cuenta de pedidos abiertos no está definida',
        type: 'error',
      });
      return;
    }

    try {
      await settleFunds({
        market,
        openOrders: openOrdersAccount,
        connection,
        wallet,
        baseCurrencyAccount,
        quoteCurrencyAccount,
        usdcRef,
        usdtRef,
      });
    } catch (e) {
      notify({
        message: language === 'en' ? 'Error settling funds': 'Error al liquidar fondos',
        description: e.message,
        type: 'error',
      });
    }
  }

  useInterval(() => {
    const autoSettle = async () => {
      if (
        AUTO_SETTLE_DISABLED_OVERRIDE ||
        !wallet ||
        !market ||
        !openOrdersAccount ||
        !baseCurrencyAccount ||
        !quoteCurrencyAccount ||
        !autoSettleEnabled
      ) {
        return;
      }
      if (
        !baseCurrencyBalances?.unsettled &&
        !quoteCurrencyBalances?.unsettled
      ) {
        return;
      }
      if (Date.now() - lastSettledAt < 15000) {
        return;
      }
      try {
        console.log('Settling funds...');
        setLastSettledAt(Date.now());
        await settleFunds({
          market,
          openOrders: openOrdersAccount,
          connection,
          wallet,
          baseCurrencyAccount,
          quoteCurrencyAccount,
          usdcRef,
          usdtRef,
        });
      } catch (e) {
        console.log('Error auto settling funds: ' + e.message);
        return;
      }
      console.log('Finished settling funds.');
    };
    connected && wallet?.autoApprove && autoSettleEnabled && autoSettle();
  }, 1000);

  const formattedBalances: [
    string | undefined,
    Balances | undefined,
    string,
    string | undefined,
  ][] = [
    [
      baseCurrency,
      baseCurrencyBalances,
      'base',
      market?.baseMintAddress.toBase58(),
    ],
    [
      quoteCurrency,
      quoteCurrencyBalances,
      'quote',
      market?.quoteMintAddress.toBase58(),
    ],
  ];

  const Logos = {
    '1INCH' : Oneinch,
    'AAVE' : Aave,
    'AART' : Aart,
    'ABR' : Abr,
    'ACM' : Acm,
    'agEur' : Ageur,
    'AKRO' : Akro,
    'ALEPH' : Aleph,
    'ALM' : Alm,
    'APT' : Apt, 
    'ATLAS' : Atlas,
    'ATS' : Ats,
    'AURY' : Aury,
    'AVAX' : Avax,
    'AXS' : Axs, 
    'BASIS' : Basis,
    'BLT' : Blt,
    'BLOCK' : Block,
    'BOP' : Bop,
    'BOT' : Bot,
    'BMBO' : Bmbo,
    'BNB' : Bnb,
    'BOKU' : Boku,  
    'BTC' : Btc,
    'CATO' : Cato,
    'CAVE' : Cave,
    'CEL' : Cel,
    'CHEEMS' : Cheems,
    'CHICKS' : Chicks,
    'CMFI' : Cmfi,
    'COMP' : Comp,
    'COPE' : Cope,
    'CREAM' : Cream,
    'CRP' : Crp,
    'CRWNY' : Crwny,
    'CWAR' : Cwar,
    'CWM' : Cwm,
    'CYS' : Cys,
    'DAPE' : Dape,
    'DATE' : Dateicon,
    'DFL' : Dfl,
    'DIO' : Dio,
    'DOGO' : Dogo,
    'DXL' : Dxl,
    'DYDX' : Dydx,
    'ETH' : Eth,
    'FAB' : Fab,
    'FCON' : Fcon,
    'FIDA' : Fida,
    'FLOOF' : Floof,
    'FLWR' : Flwr,
    'FRIES' : Fries,
    'FRKT' : Frkt,
    'FRONT' : Front,
    'FTR' : Ftr,
    'FTT' : Ftt,
    'GARI' : Gari,
    'GENE' : Gene,
    'GGSG' : Ggsg, 
    'GOFX' : Gofx,
    'GOD' : God,
    'GRAPE' : Grape,
    'GRT' : Grt,
    'HGET' : Hget,
    'HNT' : Hnt,
    'HOLY' : Holy,
    'HXRO' : Hxro,
    'IN' : Inicon,
    'ISOLA' : Isola,
    'IVN' : Ivn,
    'JET' : Jet,
    'JSOL' : Jsol,
    'KEEP' : Keep,
    'KIN' : Kin,
    'KKO' : Kko, 
    'KURO' : Kuro,
    'LARIX' : Larix,
    'LDO' : Ldo,
    'LIEN' : Lien,
    'LIKE' : Like,
    'LINK' : Linkicon,
    'LIQ' : Liq,
    'LQID' : Lqid,
    'LUA' : Lua,
    'MANA' : Mana,
    'MAPS' : Maps,
    'MAPSPOOL' : Mapspool,
    'MATH' : Math,
    'MATIC' : Matic,
    'MBS' : Mbs,
    'MEDIA' : Media,
    'MER' : Mer,
    'MERPOOL' : Merpool,
    'MIX' : Mix,
    'MNDE' : Mnde,
    'MNGO' : Mngo,
    'MOLA' : Mola,
    'mSOL' : Msol,
    'NFD' : Nfd,
    'NOS': Nos,
    'OOGI' : Oogi,
    'ORCA' : Orca,
    'OXS' : Oxs,
    'OXY' : Oxy,
    'OXYPOOL' : Oxypool,
    'PAXG' : Paxg,
    'PERP' : Perp,
    'PEOPLE' : People, 
    'POLIS' : Polis,
    'PORT' : Port,
    'PRISM' : Prism,
    'PRMS' : Prms,
    'PRT' : Prt,
    'PSK' : Psk,
    'PSY' : Psy,
    'RAY' : Ray,
    'RAYPOOL' : Raypool,
    'REAL' : Real,
    'RIN' : Rin,
    'ROLL' : Roll,
    'ROPE' : Rope,
    'RSR' : Rsr,
    'RUN' : Runicon,
    'SAIL' : Sail,
    'SAMO' : Samo,
    'SAND' : Sand,
    'SBR' : Sbr,
    'SCY' : Scy,
    'SECO' : Seco,
    'SHDW' : Shdw,
    'SHIB' : Shib, 
    'SHILL' : Shill,
    'SLC' : Slc, 
    'SLIM' : Slim,
    'SLND' : Slnd,
    'SLRS' : Slrs,
    'SLX' : Slx,
    'SMBD' : Smbd,
    'SNY' : Sny,
    'SNYPOOL' : Snypool,
    'SOL' : Sol,
    'SOLC' : Solc,
    'SOLAPE' : Solape,
    'SOLAR' : Solar,
    'SOLDOGE' : Soldoge,
    'SOLPAD' : Solpad,
    'SOLX' : Solx, 
    'SONAR' : Sonar,
    'SRM' : Srm,
    'SSU' : Ssu,
    'STARS' : Stars,
    'STEP' : Step,
    'STR' : Str,
    'stSOL' : Stsol,
    'SVT' : Svt,
    'SUNNY' : Sunny,
    'SUSHI' : Sushi,
    'SWOLEDOGE' : Swoledoge,
    'SXP' : Sxp,
    'SYP' : Syp,
    'TINY' : Tiny,
    'TOMO' : Tomo,
    'TOX' : Tox,
    'TTT' : Ttt,
    'TULIP' : Tulip,
    'UBXT' : Ubxt,
    'UNI' : Uni,
    'UPS' : Ups, 
    'USDT' : Usdt,
    'USDC' : Usdc,
    'UST' : Ust,
    'UXP' : Uxp,
    'VI' : Vi, 
    'WAG' : Wag,
    'WOO' : Woo,
    'WOOF' : Woof,
    'XTAG' : Xtag,
    'XVC' : Xvc,
    'YFI' : Yfi,
    'renBCH' : Renbch,
    'renBTC' : Renbtc,
    'renDOGE' : Rendoge,
    'renFIL' : Renfil,
    'renLUNA' : Renluna,
    'renZEC' : Renzec,
  }

  return (
    <FloatingElement style={{ flex: 1, paddingTop: 10 }}>
      {formattedBalances.map(
        ([currency, balances, baseOrQuote, mint], index) => (
          <React.Fragment key={index}>
            <Divider style={{ borderColor: 'white' }}>
            {currency}{' '} <img src={Logos[currency?.toString() || ""]} width="50px"/>
              {mint && (
                <Popover
                  content={<LinkAddress address={mint} />}
                  placement="bottomRight"
                  title="Token mint"
                  trigger="hover"
                >
                  <InfoCircleOutlined style={{ color: '#2abdd2', paddingLeft:8 }} />
                </Popover>
              )}
            </Divider>
            {connected && (
              <RowBox align="middle" style={{ paddingBottom: 10 }}>
                <StandaloneTokenAccountsSelect
                  accounts={tokenAccounts?.filter(
                    (account) => account.effectiveMint.toBase58() === mint,
                  )}
                  mint={mint}
                  label
                />
              </RowBox>
            )}
            <RowBox
              align="middle"
              justify="space-between"
              style={{ paddingBottom: 12 }}
            >
              <Col style={{fontWeight: 500}}>{(language === 'en')?"Wallet balance:" : "Saldo:"}</Col>
              <Col>{balances && balances.wallet}</Col>
            </RowBox>
            <RowBox
              align="middle"
              justify="space-between"
              style={{ paddingBottom: 12 }}
            >
              <Col style={{fontWeight: 500}}>{(language === 'en')?"Unsettled balance:" : "Saldo sin liquidar:"}</Col>
              <Col>{balances && balances.unsettled}</Col>
            </RowBox>
            <RowBox align="middle" justify="space-around">
              <Col style={{ width: 150 }}>
                <ActionButton
                  block
                  size="large"
                  onClick={() => setBaseOrQuote(baseOrQuote)}
                >
                  <div style={{fontWeight: 600}}>{(language === 'en')?"Deposit" : "Depositar"}</div>
                </ActionButton>
              </Col>
              <Col style={{ width: 150 }}>
                <ActionButton block size="large" onClick={onSettleFunds}>
                  <div style={{fontWeight: 600}}>{(language === 'en')?"Settle" : "Liquidar"}</div>
                </ActionButton>
              </Col>
            </RowBox>
            <Tip>
            {(language === 'en')?"All deposits go to your " : "Todos los depósitos irán a su billetera "}
              <Link external to={providerUrl}>
                {providerName}
              </Link>{' '}
              {(language === 'en')?"wallet" : ""}
            </Tip>
          </React.Fragment>
        ),
      )}
      <DepositDialog
        baseOrQuote={baseOrQuote}
        onClose={() => setBaseOrQuote('')}
      />
    </FloatingElement>
  );
}
