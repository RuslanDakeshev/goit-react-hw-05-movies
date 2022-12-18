import { fetchEvents } from 'services/eventsApi';
import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

export const EventsPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchEvents().then(setMovies);
  }, []);
  return (
    movies && (
      <>
        <ul>
          {movies.map(({ title, id }) => (
            <li key={id}>
              <Link to={`${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
        <Outlet />
      </>
    )
  );
};
