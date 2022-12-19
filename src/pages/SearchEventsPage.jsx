import { fetchEventsByName } from "services/eventsApi"
import { useEffect, useState } from "react"
import { useSearchParams, Link, Outlet } from "react-router-dom"


export const SearchEventsPage = () => {
    const [movies, setMovies] = useState([])
    const [searchParams, setSearchParams] = useSearchParams()
    const query = searchParams.get('moviename')

    useEffect(() => {
        if(query===null|| query === '')return
        async function fetchEvents() {
            const data = await fetchEventsByName(query)
            setMovies(data)
        }
        fetchEvents()
    }, [query]);

    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        setSearchParams({ moviename: form.elements.query.value })
        form.reset()
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type='text' name="query" />
                <button>Search</button>
            </form>
            {movies && (
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
            )}
        </>
    )
}