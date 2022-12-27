import { Routes, Route } from 'react-router-dom';

import { lazy, Suspense } from 'react';
// import { HomePage } from "pages/HomePage/HomePage";
// import { Layout } from "./Layout/Layout";
// import { MoviePage } from "pages/MoviePage/MoviePage";
// import { SearchMoviesPage } from "pages/SearchMoviesPage/SearchMoviesPage";
// import { MovieCast } from "./MovieCast/MovieCast";
// import { MovieReviews } from "./MovieReviews/MovieReviews";

const Layout = lazy(() => import('./Layout/Layout'));
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const SearchMoviesPage = lazy(() =>
  import('pages/SearchMoviesPage/SearchMoviesPage.jsx')
);
const MoviePage = lazy(() => import('pages/MoviePage/MoviePage.jsx'));
const MovieCast = lazy(() => import('./MovieCast/MovieCast.jsx'));
const MovieReviews = lazy(() => import('./MovieReviews/MovieReviews.jsx'));

export const App = () => {
  return (
    <>
    <Suspense fallback={<h1>LOADING...</h1>}>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<SearchMoviesPage />} />
        <Route path="movies/:movieId" element={<MoviePage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
    </Suspense>
      </>
  );
};

