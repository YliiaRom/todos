import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Section from './components/Section/Section';
import Container from './components/Container/Container';
import Todos from './tabs/Todos';
import Photos from './tabs/Photos';
import RafBasics from './tabs/RafBasics';
import Player from './components/Player/Player';
import Timer from './tabs/Timer';
import LangMassage from './tabs/LangMassage';
import AppHeader from './tabs/AppHeader';
import SearchParam from './tabs/SearchParam';
import { createContext } from 'react';
import Redux from './tabs/Redux';
import StyleBox from './components/StyleBox/StyleBox';
import Filter from './tabs/Filter';
import SideBar from './tabs/SideBar';
import Edit from './tabs/Edit';

export const LangContext = createContext();

export const App = () => {
  return (
    <LangContext.Provider value={{ a: 5 }}>
      <Section>
        <Container>
          <Tabs>
            <TabList>
              <Tab>Todos</Tab>
              <Tab>Photos</Tab>
              <Tab>RafBasics</Tab>
              <Tab>Player</Tab>
              <Tab>Timer</Tab>
              <Tab>Filter</Tab>
              <Tab>Edit</Tab>
              <Tab>SideBar</Tab>
              <Tab>AppHeader</Tab>
              <Tab>LangMassage</Tab>
              <Tab>SearchParam</Tab>
              <Tab>Redux</Tab>
              <Tab>StyleBox</Tab>
            </TabList>

            <TabPanel>
              <Todos />
            </TabPanel>
            <TabPanel>
              <Photos />
            </TabPanel>
            <TabPanel>
              <RafBasics />
            </TabPanel>
            <TabPanel>
              <Player />
            </TabPanel>
            <TabPanel>
              <Timer />
            </TabPanel>
            <TabPanel>
              <Filter />
            </TabPanel>
            <TabPanel>
              <Edit />
            </TabPanel>
            <TabPanel>
              <SideBar />
            </TabPanel>
            <TabPanel>
              <AppHeader />
            </TabPanel>
            <TabPanel>
              <LangMassage />
            </TabPanel>

            <TabPanel>
              <SearchParam />
            </TabPanel>
            <TabPanel>
              <Redux />
            </TabPanel>
            <TabPanel>
              <StyleBox />
            </TabPanel>
          </Tabs>
        </Container>
      </Section>
    </LangContext.Provider>
  );
};
