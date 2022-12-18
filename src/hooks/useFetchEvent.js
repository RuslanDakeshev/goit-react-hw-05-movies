import { useEffect, useState } from "react";
import { fetchEventById } from "services/eventsApi";
import { useParams } from "react-router-dom";

export const useFetchEvent = () => {
    const [event, setEvent] = useState(null);
    const params = useParams()
    console.log(params)

    useEffect(() => {
        fetchEventById()
    })
}