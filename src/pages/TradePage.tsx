import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Button, Col, Popover, Row, Select, Typography } from 'antd';
import styled from 'styled-components';
import Orderbook from '../components/Orderbook';
import UserInfoTable from '../components/UserInfoTable';
import StandaloneBalancesDisplay from '../components/StandaloneBalancesDisplay';
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

import {
  getMarketInfos,
  getTradePageUrl,
  MarketProvider,
  useMarket,
  useMarketsList,
  useUnmigratedDeprecatedMarkets,
} from '../utils/markets';
import TradeForm from '../components/TradeForm';
import TradesTable from '../components/TradesTable';
import LinkAddress from '../components/LinkAddress';
import DeprecatedMarketsInstructions from '../components/DeprecatedMarketsInstructions';
import {
  DeleteOutlined,
  InfoCircleOutlined,
  PlusCircleOutlined,
} from '@ant-design/icons';
import CustomMarketDialog from '../components/CustomMarketDialog';
import { notify } from '../utils/notifications';
import { useHistory, useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';

import { TVChartContainer } from '../components/TradingView';
// Use following stub for quick setup without the TradingView private dependency
// function TVChartContainer() {
//   return <></>
// }

const { Option, OptGroup } = Select;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px 16px;
  .borderNone .ant-select-selector {
    border: none !important;
  }
`;

export default function TradePage() {
  const { marketAddress } = useParams();
  useEffect(() => {
    if (marketAddress) {
      localStorage.setItem('marketAddress', JSON.stringify(marketAddress));
    }
  }, [marketAddress]);
  const history = useHistory();
  function setMarketAddress(address) {
    history.push(getTradePageUrl(address));
  }

  return (
    <MarketProvider
      marketAddress={marketAddress}
      setMarketAddress={setMarketAddress}
    >
      <TradePageInner />
    </MarketProvider>
  );
}

function TradePageInner() {
  const {
    market,
    marketName,
    customMarkets,
    setCustomMarkets,
    setMarketAddress,
  } = useMarket();
  const markets = useMarketsList();
  const [handleDeprecated, setHandleDeprecated] = useState(false);
  const [addMarketVisible, setAddMarketVisible] = useState(false);
  const deprecatedMarkets = useUnmigratedDeprecatedMarkets();
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  
  useEffect(() => {
    document.title = marketName ? `${marketName} — Cedros` : 'Cedros';
  }, [marketName]);

  const changeOrderRef = useRef<
    ({ size, price }: { size?: number; price?: number }) => void
  >();

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const width = dimensions?.width;
  const componentProps = {
    onChangeOrderRef: (ref) => (changeOrderRef.current = ref),
    onPrice: useCallback(
      (price) => changeOrderRef.current && changeOrderRef.current({ price }),
      [],
    ),
    onSize: useCallback(
      (size) => changeOrderRef.current && changeOrderRef.current({ size }),
      [],
    ),
  };
  const component = (() => {
    if (handleDeprecated) {
      return (
        <DeprecatedMarketsPage
          switchToLiveMarkets={() => setHandleDeprecated(false)}
        />
      );
    } else if (width < 1000) {
      return <RenderSmaller {...componentProps} />;
    } else if (width < 1450) {
      return <RenderSmall {...componentProps} />;
    } else {
      return <RenderNormal {...componentProps} />;
    }
  })();

  const onAddCustomMarket = (customMarket) => {
    const marketInfo = getMarketInfos(customMarkets).some(
      (m) => m.address.toBase58() === customMarket.address,
    );
    if (marketInfo) {
      notify({
        message: `A market with the given ID already exists`,
        type: 'error',
      });
      return;
    }
    const newCustomMarkets = [...customMarkets, customMarket];
    setCustomMarkets(newCustomMarkets);
    setMarketAddress(customMarket.address);
  };

  const onDeleteCustomMarket = (address) => {
    const newCustomMarkets = customMarkets.filter((m) => m.address !== address);
    setCustomMarkets(newCustomMarkets);
  };

  return (
    <>
      <CustomMarketDialog
        visible={addMarketVisible}
        onClose={() => setAddMarketVisible(false)}
        onAddCustomMarket={onAddCustomMarket}
      />
      <Wrapper>
        <Row
          align="middle"
          style={{ paddingLeft: 5, paddingRight: 5, paddingBottom: 10,}}
          gutter={16}
        >
          <Col>
            <MarketSelector
              markets={markets}
              setHandleDeprecated={setHandleDeprecated}
              placeholder={'Select market'}
              customMarkets={customMarkets}
              onDeleteCustomMarket={onDeleteCustomMarket}
            />
          </Col>
          {market ? (
            <Col>
              <Popover
                content={<LinkAddress address={market.publicKey.toBase58()} />}
                placement="bottomRight"
                title="Market address"
                trigger="click"
              >
                <InfoCircleOutlined style={{ color: '#2abdd2' }} />
              </Popover>
            </Col>
          ) : null}
          <Col>
            <PlusCircleOutlined
              style={{ color: '#2abdd2' }}
              onClick={() => setAddMarketVisible(true)}
            />
          </Col>
          {deprecatedMarkets && deprecatedMarkets.length > 0 && (
            <React.Fragment>
              <Col>
                <Typography>
                  You have unsettled funds on old markets! Please go through
                  them to claim your funds.
                </Typography>
              </Col>
              <Col>
                <Button onClick={() => setHandleDeprecated(!handleDeprecated)}>
                  {handleDeprecated ? 'View new markets' : 'Handle old markets'}
                </Button>
              </Col>
            </React.Fragment>
          )}
        </Row>
        {component}
      </Wrapper>
    </>
  );
}

function MarketSelector({
  markets,
  placeholder,
  setHandleDeprecated,
  customMarkets,
  onDeleteCustomMarket,
}) {
  const { market, setMarketAddress } = useMarket();

  const Logos = {
    '1INCH/USDC' : Oneinch,
    'AAVE/USDC' : Aave,
    'AART/USDC' : Aart,
    'ABR/USDC' : Abr,
    'ACM/USDC' : Acm,
    'agEUR/USDC' : Ageur,
    'AKRO/USDC' : Akro,
    'ALEPH/USDC' : Aleph,
    'ALM/USDC' : Alm,
    'APT/USDC' : Apt,
    'ATLAS/USDC' : Atlas,
    'ATS/USDC' : Ats,
    'AURY/USDC' : Aury,
    'AVAX/USDC' : Avax,
    'AXS/USDC' : Axs,
    'BASIS/USDC' : Basis,
    'BLOCK/USDC' : Block,
    'BLT/USDC' : Blt,
    'BMBO/USDC' : Bmbo,
    'BNB/USDC' : Bnb,
    'BOT/USDC' : Bot,
    'BOKU/USDC' : Boku,
    'BOP/USDC' : Bop,
    'BTC/USDT' : Btc,
    'BTC/USDC' : Btc,
    'BTC/UST' : Btc,
    'CATO/USDC' : Cato,
    'CAVE/USDC' : Cave,
    'CEL/USDC' : Cel,
    'CHEEMS/USDC' : Cheems,
    'CHICKS/USDC' : Chicks,
    'CMFI/USDC' : Cmfi,
    'COMP/USDC' : Comp,
    'COPE/USDC' : Cope,
    'CREAM/USDC' : Cream,
    'CRP/USDC' : Crp,
    'CRWNY/USDC' : Crwny,
    'CWAR/USDC' : Cwar,
    'CWM/USDC' : Cwm,
    'CYS/USDC' : Cys,
    'DAPE/USDC' : Dape,
    'DATE/USDC' : Dateicon,
    'DIO/USDT' : Dio,
    'DOGO/USDC' : Dogo,
    'DFL/USDC' : Dfl,
    'DXL/USDC' : Dxl,
    'DYDX/USDC' : Dydx,
    'ETH/USDT' : Eth,
    'ETH/USDC' : Eth,
    'FAB/USDC' : Fab,
    'FCON/USDC' : Fcon,
    'FIDA/USDC' : Fida,
    'FLOOF/USDC' : Floof,
    'FLWR/USDC' : Flwr,
    'FRIES/USDC' : Fries,
    'FRKT/USDC' : Frkt,
    'FRONT/USDC' : Front,
    'FTR/USDC' : Ftr,
    'FTT/USDC' : Ftt,
    'GARI/USDC' : Gari,
    'GENE/USDC' : Gene,
    'GGSG/USDC' : Ggsg,
    'GOD/MIX' : God,
    'GOFX/USDC' : Gofx,
    'GRAPE/USDC' : Grape,
    'GRT/USDC' : Grt,
    'HGET/USDC' : Hget,
    'HNT/USDC' : Hnt,
    'HOLY/USDC' : Holy,
    'HXRO/USDC' : Hxro,
    'IN/USDC' : Inicon,
    'ISOLA/USDT' : Isola,
    'IVN/USDC' : Ivn,
    'JET/USDC' : Jet,
    'JSOL/USDC' : Jsol,
    'KKO/USDC' : Kko,
    'KEEP/USDC' : Keep,
    'KIN/USDC' : Kin,
    'KURO/USDC' : Kuro,
    'LARIX/USDC' : Larix,
    'LDO/USDC' : Ldo,
    'LIEN/USDC' : Lien,
    'LIKE/USDC' : Like,
    'LINK/USDC' : Linkicon,
    'LIQ/USDC' : Liq,
    'LQID/USDC' : Lqid,
    'LUA/USDC' : Lua,
    'MANA/USDC' : Mana,
    'MAPS/USDC' : Maps,
    'MAPSPOOL/USDC' : Mapspool,
    'MNDE/mSOL' : Mnde,
    'MATIC/USDC' : Matic,
    'MATH/USDC' : Math,
    'MBS/USDC' : Mbs,
    'MEDIA/USDC' : Media,
    'MER/USDC' : Mer,
    'MERPOOL/USDC' : Merpool,
    'MIX/USDC' : Mix,
    'MNGO/USDC' : Mngo,
    'MOLA/USDC' : Mola,
    'mSOL/USDC' : Msol,
    'NFD/USDC' : Nfd,
    'NOS/USDC' : Nos,
    'OOGI/USDC' : Oogi,
    'ORCA/USDC' : Orca,
    'OXS/USDC' : Oxs,
    'OXY/USDC' : Oxy,
    'OXYPOOL/USDC' : Oxypool,
    'PAXG/USDC' : Paxg,
    'PERP/USDC' : Perp,
    'PEOPLE/USDC' : People,
    'POLIS/USDC' : Polis,
    'PORT/USDC' : Port,
    'PRISM/USDC' : Prism,
    'PRMS/USDC' : Prms,
    'PRT/USDC' : Prt,
    'PSK/USDC' : Psk,
    'PSY/USDC' : Psy,
    'RAY/USDC' : Ray,
    'RAYPOOL/USDC' : Raypool,
    'REAL/USDC' : Real,
    'RIN/USDC' : Rin,
    'ROLL/USDC' : Roll,
    'ROPE/USDC' : Rope,
    'RSR/USDC' : Rsr,
    'RUN/USDC' : Runicon,
    'SAIL/USDC' : Sail,
    'SAMO/USDC' : Samo,
    'SAND/USDC' : Sand,
    'SBR/USDC' : Sbr,
    'SCY/USDC' : Scy,
    'SECO/USDC' : Seco,
    'SHDW/USDC' : Shdw,
    'SHIB/USDC' : Shib,
    'SHILL/USDC' : Shill,
    'SLC/USDC' : Slc,
    'SLIM/SOL' : Slim,
    'SLND/USDC' : Slnd,
    'SLRS/USDC' : Slrs,
    'SLX/USDC' : Slx,
    'SMBD/USDC' : Smbd,
    'SNY/USDC' : Sny,
    'SNYPOOL/USDC' : Snypool,
    'SOL/USDC' : Sol,
    'SOLC/USDC' : Solc,
    'SOL/UST' : Sol,
    'SOLAPE/USDC' : Solape,
    'SOLAR/USDC' : Solar,
    'SOLDOGE/USDC' : Soldoge,
    'SOLPAD/USDC' : Solpad,
    'SOLX/USDC' : Solx,
    'SONAR/USDC' : Sonar,
    'SRM/USDC' : Srm,
    'SSU/SOL' : Ssu,
    'STARS/USDC' : Stars,
    'STEP/USDC' : Step,
    'STR/USDC' : Str,
    'stSOL/USDC' : Stsol,
    'SUNNY/USDC' : Sunny,
    'SUSHI/USDC' : Sushi,
    'SVT/USDC' : Svt,
    'SWOLEDOGE/USDC' : Swoledoge,
    'SXP/USDC' : Sxp,
    'SYP/USDC' : Syp,
    'TINY/USDC' : Tiny,
    'TOMO/USDC' : Tomo,
    'TOX/USDC' : Tox,
    'TTT/USDC' : Ttt,
    'TULIP/USDC' : Tulip,
    'UBXT/USDC' : Ubxt,
    'UNI/USDC' : Uni,
    'UPS/USDC' : Ups,
    'USDT/USDC' : Usdt,
    'UST/USDC' : Ust,
    'UXP/USDC' : Uxp,
    'VI/USDC' : Vi,
    'WAG/USDC' : Wag,
    'WOO/USDC' : Woo,
    'WOOF/USDC' : Woof,
    'XTAG/USDC' : Xtag,
    'XVC/USDC' : Xvc,
    'YFI/USDC' : Yfi,
    'renBCH/USDC' : Renbch,
    'renBTC/USDC' : Renbtc,
    'renDOGE/USDC' : Rendoge,
    'renFIL/USDC' : Renfil,
    'renLUNA/USDC' : Renluna,
    'renZEC/USDC' : Renzec,
  }


  const onSetMarketAddress = (marketAddress) => {
    setHandleDeprecated(false);
    setMarketAddress(marketAddress);
  };

  const extractBase = (a) => a.split('/')[0];
  const extractQuote = (a) => a.split('/')[1];

  const selectedMarket = getMarketInfos(customMarkets)
    .find(
      (proposedMarket) =>
        market?.address && proposedMarket.address.equals(market.address),
    )
    ?.address?.toBase58();

  return (
    <Select
      showSearch
      size={'large'}
      style={{ width: 200}}
      placeholder={placeholder || 'Select a market'}
      optionFilterProp="name"
      onSelect={onSetMarketAddress}
      listHeight={500}
      value={selectedMarket}
      filterOption={(input, option) =>
        option?.name?.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      {customMarkets && customMarkets.length > 0 && (
        <OptGroup label="Custom">
          {customMarkets.map(({ address, name }, i) => (
            <Option
              value={address}
              key={nanoid()}
              name={name}
              style={{
                padding: '10px',
                // @ts-ignore
                backgroundColor: i % 2 === 0 ? 'rgb(39, 44, 61)' : null,
              }}
            >
              <Row>
                <Col flex="auto">{name}</Col>
                {selectedMarket !== address && (
                  <Col>
                    <DeleteOutlined
                      onClick={(e) => {
                        e.stopPropagation();
                        e.nativeEvent.stopImmediatePropagation();
                        onDeleteCustomMarket && onDeleteCustomMarket(address);
                      }}
                    />
                  </Col>
                )}
              </Row>
            </Option>
          ))}
        </OptGroup>
      )}
      <OptGroup label="Markets">
        {markets
          .sort((a, b) =>
            extractQuote(a.name) === 'USDT' && extractQuote(b.name) !== 'USDT'
              ? -1
              : extractQuote(a.name) !== 'USDT' &&
                extractQuote(b.name) === 'USDT'
              ? 1
              : 0,
          )
          .sort((a, b) =>
            extractBase(a.name) < extractBase(b.name)
              ? -1
              : extractBase(a.name) > extractBase(b.name)
              ? 1
              : 0,
          )
          .map(({ address, name, deprecated }, i) => (
            <Option
              value={address.toBase58()}
              key={nanoid()}
              name={name}
              style={{
                padding: '10px',
                // @ts-ignore
                backgroundColor: i % 2 === 0 ? 'rgb(39, 44, 61)' : null,
              }}
            >
              <img src={Logos[name]} width="30px"/> {name} {deprecated ? ' (Deprecated)' : null}
            </Option>
          ))}
      </OptGroup>
    </Select>
  );
}

const DeprecatedMarketsPage = ({ switchToLiveMarkets }) => {
  return (
    <>
      <Row>
        <Col flex="auto">
          <DeprecatedMarketsInstructions
            switchToLiveMarkets={switchToLiveMarkets}
          />
        </Col>
      </Row>
    </>
  );
};

const RenderNormal = ({ onChangeOrderRef, onPrice, onSize }) => {
  return (
    <Row
      style={{
        minHeight: '900px',
        flexWrap: 'nowrap',
      }}
    >
      <Col flex="auto" style={{ height: '50vh' }}>
        <Row style={{ height: '100%' }}>
          <TVChartContainer />
        </Row>
        <Row style={{ height: '70%' }}>
          <UserInfoTable />
        </Row>
      </Col>
      <Col flex={'360px'} style={{ height: '100%' }}>
        <Orderbook smallScreen={false} onPrice={onPrice} onSize={onSize} />
        <TradesTable smallScreen={false} />
      </Col>
      <Col
        flex="400px"
        style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <TradeForm setChangeOrderRef={onChangeOrderRef} />
        <StandaloneBalancesDisplay />
      </Col>
    </Row>
  );
};

const RenderSmall = ({ onChangeOrderRef, onPrice, onSize }) => {
  return (
    <>
      <Row style={{ height: '30vh' }}>
        <TVChartContainer />
      </Row>
      <Row
        style={{
          height: '900px',
        }}
      >
        <Col flex="auto" style={{ height: '100%', display: 'flex' }}>
          <Orderbook
            smallScreen={true}
            depth={13}
            onPrice={onPrice}
            onSize={onSize}
          />
        </Col>
        <Col flex="auto" style={{ height: '100%', display: 'flex' }}>
          <TradesTable smallScreen={true} />
        </Col>
        <Col
          flex="400px"
          style={{ height: '100%', display: 'flex', flexDirection: 'column' }}
        >
          <TradeForm setChangeOrderRef={onChangeOrderRef} />
          <StandaloneBalancesDisplay />
        </Col>
      </Row>
      <Row>
        <Col flex="auto">
          <UserInfoTable />
        </Col>
      </Row>
    </>
  );
};

const RenderSmaller = ({ onChangeOrderRef, onPrice, onSize }) => {
  return (
    <>
      <Row style={{ height: '50vh' }}>
        <TVChartContainer />
      </Row>
      <Row>
        <Col xs={24} sm={12} style={{ height: '100%', display: 'flex' }}>
          <TradeForm style={{ flex: 1 }} setChangeOrderRef={onChangeOrderRef} />
        </Col>
        <Col xs={24} sm={12}>
          <StandaloneBalancesDisplay />
        </Col>
      </Row>
      <Row
        style={{
          height: '500px',
        }}
      >
        <Col xs={24} sm={12} style={{ height: '100%', display: 'flex' }}>
          <Orderbook smallScreen={true} onPrice={onPrice} onSize={onSize} />
        </Col>
        <Col xs={24} sm={12} style={{ height: '100%', display: 'flex' }}>
          <TradesTable smallScreen={true} />
        </Col>
      </Row>
      <Row>
        <Col flex="auto">
          <UserInfoTable />
        </Col>
      </Row>
    </>
  );
};
