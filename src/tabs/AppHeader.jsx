import { use } from 'react';
import LangSwitcher from '../components/LangSwitcher/LangSwitcher';
import { LangContext } from '../App';
export default function AppHeader() {
  const contextValue = use(LangContext);
  return (
    <>
      <header>
        <h1> export const LangContext = createContext();</h1>
        <p> import .....use\{LangContext};</p>
        <LangSwitcher />
      </header>
    </>
  );
}
