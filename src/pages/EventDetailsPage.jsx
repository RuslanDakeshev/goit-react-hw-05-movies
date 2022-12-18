import { useFetchEvent } from "hooks/useFetchEvent"

export const EventDetailsPage = () => {
    const event = useFetchEvent()

    return (
        <>
            {event && (
                <>
                <h2>{event.title}</h2>
                <p>Main genre:{event.classifications[0].genre.name}</p>
                    <p>Main subgenre:{event.classifications[0].subGenre.name}</p>
                    </>
            )}
        
        </>
    )
    
}