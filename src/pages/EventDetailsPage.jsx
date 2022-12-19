import { useFetchEvent } from "hooks/useFetchEvent"

export const EventDetailsPage = () => {
    const movie = useFetchEvent()

    const genres = movie.genres
    ? movie.genres.map(genre => genre.name).join(', ')
    : 'unknown';
    

    return (
        <>
            {movie && (
                <>
                <h2>{movie.title}</h2>
                <p>Main genre:{genres}</p>
                    <p>Main subgenre:{movie.release_date}</p>
                    </>
            )}
        
        </>
    )
    
}