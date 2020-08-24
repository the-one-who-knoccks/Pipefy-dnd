import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './useDarkMode';
import { lightTheme, darkTheme } from  './styles/theme';
import Toggle from './components/Toggle/Toggle';

import GlobalStyle from './styles/global';
import Header from './components/Header';
import Board from './components/Board';


function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>

    {/* // Api do backend drag and drop */}
    <DndProvider backend={HTML5Backend}>
      <GlobalStyle />
      <Header />
      <Toggle theme={theme} toggleTheme={toggleTheme} />
      <Board />
    </DndProvider>
    </ThemeProvider>
  );
}

export default App;
