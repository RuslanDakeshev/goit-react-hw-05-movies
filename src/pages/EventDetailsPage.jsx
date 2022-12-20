import { useFetchEvent } from "hooks/useFetchEvent";
import { useNavigate, useLocation } from "react-router-dom";
// import { fetchEventsByCredits } from "services/eventsApi";
// import { useState, useEffect } from 'react';

// import { useParams } from 'react-router-dom';

export const EventDetailsPage = () => {
    const movie = useFetchEvent()
    const navigate = useNavigate()
     const location = useLocation()
    // console.log(location);

//      const [credits, setCredits] = useState(null);
//   const { movieId } = useParams();

//   useEffect(() => {
//     fetchEventsByCredits(movieId).then(setCredits);
//   }, [movieId]);

    

    // const genres = movie.genres
    // ? movie.genres.map(genre => genre.name).join(', ')
    // : 'unknown';
    

    return (

    //     <>
    //         <button onClick={()=>{navigate(location?.state?.from ?? '/')}}>Go back</button>
    //   {credits && (
    //     <>
    //       {credits.map(credit => {
    //         return (
    //           <li
    //             key={credit.credit_id}
    //             name={credit.name}
    //             role={credit.character}
    //             photo_path={credit.profile_path}
    //           />
    //         );
    //       })}
    //     </>
    //   )}
    //   <p>Here will be additional info "Movie Cast"</p>
    // </>
        <>
            <button onClick={()=>{navigate(location?.state?.from ?? '/')}}>Go back</button>
            {movie && (
                <>
                <h2>{movie.title}</h2>
                {/* <p>Main genre:{genres}</p> */}
                    <p>Main subgenre:{movie.release_date}</p>
                    </>
            )}
        
        </>
    )
    
}