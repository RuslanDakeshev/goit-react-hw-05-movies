import { fetchEvents } from "services/eventsApi"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export const EventsPage = () => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        fetchEvents().then(setEvents)
    }, [])
    return (
        events && (
            <ul>
                {events.map(({ name, id }) => {
                    <li key={id}>
                        <Link>{name}</Link>
                    </li>
                })}
            </ul>
        )
    )
}