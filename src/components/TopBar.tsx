import {
  InfoCircleOutlined,
  PlusCircleOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Button, Col, Menu, Popover, Row, Select } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import logo from '../assets/logo.svg';
import spain from '../assets/spain.svg.png';
import england from '../assets/england.svg.png';
import styled from 'styled-components';
import { useWallet } from '../utils/wallet';
import { ENDPOINTS, useConnectionConfig } from '../utils/connection';
import Settings from './Settings';
import CustomClusterEndpointDialog from './CustomClusterEndpointDialog';
import { EndpointInfo } from '../utils/types';
import { notify } from '../utils/notifications';
import { Connection } from '@solana/web3.js';
import WalletConnect from './WalletConnect';
import AppSearch from './AppSearch';
import { getTradePageUrl } from '../utils/markets';

const Wrapper = styled.div`
  background-color: #0d1017;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 0px 40px;
  flex-wrap: wrap;
`;
const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  color: #1B98E0;
  font-weight: bold;
  font-size: 30px;
  cursor: pointer;
  img {
    height: 100px;
    margin-right: 8px;
  }
`;

const EXTERNAL_LINKS = {
  '/add-market': 'https://serum-academy.com/en/add-market/',
  '/wallet-support': 'https://serum-academy.com/en/wallet-support',
  '/explorer': 'https://explorer.solana.com',
  '/srm-faq': 'https://docs.cedros.io',
  '/cedros.io': 'https://cedros.io',
  '/perps': 'https://perps.cedros.io',
  '/options': 'https://options.cedros.io',
  '/nfts': 'https://nfts.cedros.io',
  '/learn': 'https://docs.cedros.io',


};

export default function TopBar() {
  const language = (localStorage.getItem('language')? localStorage.getItem('language'): 'es');

  const changeLanguage = (lang) => {
    localStorage.setItem('language',lang)
    window.location.reload()
  }

  const { connected, wallet } = useWallet();
  const {
    endpoint,
    endpointInfo,
    setEndpoint,
    availableEndpoints,
    setCustomEndpoints,
  } = useConnectionConfig();
  const [addEndpointVisible, setAddEndpointVisible] = useState(false);
  const [testingConnection, setTestingConnection] = useState(false);
  const location = useLocation();
  const history = useHistory();
  const [searchFocussed, setSearchFocussed] = useState(false);

  const handleClick = useCallback(
    (e) => {
      if (!(e.key in EXTERNAL_LINKS)) {
        history.push(e.key);
      }
    },
    [history],
  );

  const onAddCustomEndpoint = (info: EndpointInfo) => {
    const existingEndpoint = availableEndpoints.some(
      (e) => e.endpoint === info.endpoint,
    );
    if (existingEndpoint) {
      notify({
        message: `An endpoint with the given url already exists`,
        type: 'error',
      });
      return;
    }

    const handleError = (e) => {
      console.log(`Connection to ${info.endpoint} failed: ${e}`);
      notify({
        message: `Failed to connect to ${info.endpoint}`,
        type: 'error',
      });
    };

    try {
      const connection = new Connection(info.endpoint, 'recent');
      connection
        .getBlockTime(0)
        .then(() => {
          setTestingConnection(true);
          console.log(`testing connection to ${info.endpoint}`);
          const newCustomEndpoints = [
            ...availableEndpoints.filter((e) => e.custom),
            info,
          ];
          setEndpoint(info.endpoint);
          setCustomEndpoints(newCustomEndpoints);
        })
        .catch(handleError);
    } catch (e) {
      handleError(e);
    } finally {
      setTestingConnection(false);
    }
  };

  const endpointInfoCustom = endpointInfo && endpointInfo.custom;
  useEffect(() => {
    const handler = () => {
      if (endpointInfoCustom) {
        setEndpoint(ENDPOINTS[0].endpoint);
      }
    };
    window.addEventListener('beforeunload', handler);
    return () => window.removeEventListener('beforeunload', handler);
  }, [endpointInfoCustom, setEndpoint]);

  const tradePageUrl = location.pathname.startsWith('/market/')
    ? location.pathname
    : getTradePageUrl();

  return (
    <>
      <CustomClusterEndpointDialog
        visible={addEndpointVisible}
        testingConnection={testingConnection}
        onAddCustomEndpoint={onAddCustomEndpoint}
        onClose={() => setAddEndpointVisible(false)}
      />
      <Wrapper>
        <LogoWrapper onClick={() => history.push(tradePageUrl)}>
          <img src={logo} alt="" />
          {'CEDROS'}
        </LogoWrapper>
        <Menu
          mode="horizontal"
          onClick={handleClick}
          selectedKeys={[location.pathname]}
          style={{
            borderBottom: 'none',
            backgroundColor: 'transparent',
            display: 'flex',
            alignItems: 'flex-end',
            flex: 1,
          }}
        >
          <Menu.Item key={tradePageUrl} style={{ margin: '0 10px 0 20px' }}>
            {language === 'en' ? 'TRADE' : 'OPERAR'}
          </Menu.Item>
          {connected && (!searchFocussed || location.pathname === '/balances') && (
            <Menu.Item key="/balances" style={{ margin: '0 10px' }}>
              {language === 'en' ? 'BALANCES' : 'SALDOS'}
            </Menu.Item>
          )}
          <Menu.Item key='/perps' style={{ margin: '0 10px 0 20px' }}>
                <a
                  href={EXTERNAL_LINKS['/perps']}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PERPS
                </a>
          </Menu.Item>
          {!searchFocussed && (
            <Menu.SubMenu
            title={language === 'en' ? 'LEARN' : 'APRENDIZAJE'}
            onTitleClick={() =>
                window.open(EXTERNAL_LINKS['/learn'], '_blank')
              }
              style={{ margin: '0 0px 0 10px' }}
            >
              <Menu.Item key="/explorer">
                <a
                  href={EXTERNAL_LINKS['/explorer']}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {language === 'en' ? 'Solana block explorer' : 'Explorador de Solana'}
                </a>
              </Menu.Item>
              <Menu.Item key="/srm-faq">
                <a
                  href={EXTERNAL_LINKS['/srm-faq']}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {language === 'en' ? 'SRM FAQ' : 'Preguntas frecuentes'}
                </a>
              </Menu.Item>
            </Menu.SubMenu>
          )}
        </Menu>
        <div>
          <Row
            align="middle"
            style={{ paddingLeft: 5, paddingRight: 5 }}
            gutter={16}
          >
            <Col>
              <PlusCircleOutlined
                style={{ color: '#2abdd2' }}
                onClick={() => setAddEndpointVisible(true)}
              />
            </Col>
            <Col>
              <Popover
                content={endpoint}
                placement="bottomRight"
                title="URL"
                trigger="hover"
              >
                <InfoCircleOutlined style={{ color: '#2abdd2' }} />
              </Popover>
            </Col>
            <Col>
              <Select
                onSelect={setEndpoint}
                value={endpoint}
                style={{ marginRight: 8, width: '150px' }}
              >
                {availableEndpoints.map(({ name, endpoint }) => (
                  <Select.Option value={endpoint} key={endpoint}>
                    {name}
                  </Select.Option>
                ))}
              </Select>
            </Col>
            <Col>
              <Select
                onChange={changeLanguage}
                style={{ marginRight: 8, width: '150px' }}
                placeholder={language === 'en' ? 'Select language' : 'Seleccione el idioma de la interfaz'}
                defaultValue={language?.toString()}
              >
                <Select.Option value="es">
                  <img
                      src={spain}
                      style={{height: 10,
                        marginRight: 20,}}
                      alt=""
                    />
                  Español
                </Select.Option>
                <Select.Option value="en">
                  <img
                      src={england}
                      style={{height: 10,
                        marginRight: 20,}}
                      alt=""
                    />
                  English
                </Select.Option>
              </Select>
            </Col>
          </Row>
        </div>
        <div>
          <WalletConnect />
        </div>
      </Wrapper>
    </>
  );
}
