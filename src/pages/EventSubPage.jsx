import { useFetchEvent } from "hooks/useFetchEvent"
// import { Link } from "react-router-dom";
// import { Outlet } from "react-router-dom";


export const EventSubPage = () => {
    const movie = useFetchEvent()
    console.log(movie);

    

    return <div>EVENT</div>

    // return (
        
    //     movie && (
    //         <>
    //             <h2>{movie.title}</h2>
    //             <Link to='details'>More details</Link>
    //         </>
    //     )
    // )
}