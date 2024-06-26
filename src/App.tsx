import './App.css';
import { AppShell, Burger, Image, Flex, Text } from '@mantine/core';
import { Route, Routes, Link } from 'react-router-dom';
import { MainPageView } from './pages/main-page/mainPageView';
import { MoviesView } from './pages/movies/MoviesView'
import MovieDetailView from './pages/movie-detail/MovieDetailView';
import { NotFoundPage } from './pages/404/NotFoundPage';
import { RatedView } from './pages/rated/RatedView';
import { useEffect, useState } from 'react';

export default function App() {
  const [opened, setOpened] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const toggleMenu = () => {
    setOpened(!opened);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 968);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <AppShell withBorder={false}>
      <Flex mih={0} direction="row" align="center" wrap="wrap">
        <AppShell.Header className="header">
          <Flex mih={0} gap="xs" justify="flex-start" align="center" direction="row" wrap="wrap">
            <Image radius="md" w="auto" h="40px" fit="cover" src="./src/assets/logo.svg" />
            <Text c="#9854F6" size="lg" fw={700}>ArrowFlicks</Text>
          </Flex>
          {isSmallScreen && (
            <Burger opened={opened} onClick={toggleMenu} aria-label="Toggle navigation" />
          )}

          {!opened && (
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/rated-movies">Rated Movie</Link></li>
              </ul>
            </nav>
          )}

        </AppShell.Header>

        <AppShell.Main className="main" style={{ padding: "20px 40px", width: "100%" }}>
          <Routes>
            <Route path="/" element={<MainPageView />} />
            <Route path="movie/*" element={<MoviesRoutes />} />
            <Route path="rated-movies" element={<RatedView />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
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
