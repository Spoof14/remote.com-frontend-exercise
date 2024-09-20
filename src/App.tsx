import {
  Route,
  Navigate,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { theme, GlobalStyles } from './theme';

import Header from './components/Header';

import Playground from './pages/Playground';
import People from './pages/People';
import AddEditPeople from './pages/AddEditPeople';
import { QueryClientProvider } from '@tanstack/react-query';
import queryClient from 'utils/client';
import { peopleLoader } from 'pages/People/peopleQueries';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index path="/people" element={<People />} loader={() => peopleLoader()} />
      <Route path="/people/new" element={<AddEditPeople />} />
      <Route path="/people/edit/:id" element={<AddEditPeople />} />
      <Route path="/playground" element={<Playground />} />
      <Route path="*" element={<Navigate to="/people" replace />} />
    </>,
  ),
);

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
