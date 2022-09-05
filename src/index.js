import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

// const darkTheme = createTheme({
//   palette: {
//     mode: 'dark',
//   },
// });

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  // <ThemeProvider theme={darkTheme}>
  // <CssBaseline>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // </CssBaseline>
  // </ThemeProvider>
);
