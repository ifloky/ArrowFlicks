import './App.css';
import { AppShell, Burger, Image, Flex, Text, Container } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { MainPageView } from './pages/main-page/mainPageView';
import { MoviesView } from './pages/movies/MoviesView'
import { MovieDetailView } from './pages/movie-detail/MovieDetailView';
import { NotFoundPage } from './pages/404/NotFoundPage';
import { RatedView } from './pages/rated/RatedView';

export default function App() {
  const [opened, { toggle }] = useDisclosure();

  return (
    <AppShell withBorder={false}>
      <Flex mih={0} direction="row" align="flex-start" wrap="wrap">
        <AppShell.Header className='header'>
          <Flex mih={0} gap="xs" justify="flex-start" align="center" direction="row" wrap="wrap">
            <Image radius="md" w="auto" h="40px" fit="cover" src="./src/assets/logo.svg" />
            <Text c="#9854F6" size="lg" fw={700}>ArrowFlicks</Text>
          </Flex>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="lg" />
        </AppShell.Header>

        <AppShell.Main className="main">
          <Container>
            <Router>
              <Routes>
                <Route path="/" element={<MainPageView />} />
                <Route path="movie/*" element={<MoviesRoutes />} />
                <Route path="rated-movies" element={<RatedView />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Router>
          </Container>
        </AppShell.Main>
      </Flex>
    </AppShell>
  );
}

const MoviesRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MoviesView />} />
      <Route path=":id" element={<MovieDetailView />} />
    </Routes>
  );
};
