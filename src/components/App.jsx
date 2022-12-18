import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { HomePage } from "pages/HomePage";
import { EventsPage } from "pages/EventsPage";
import { EventSubPage } from "pages/EventSubPage";
import { EventDetailsPage } from "pages/EventDetailsPage";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element = {<Layout/>}>
        <Route index element={<HomePage />} />
        <Route path="events" element={<EventsPage />} >
        <Route path=":movieId" element={<EventSubPage/>}/>
        </Route>

        {/* <Route path="search" element={<SearchEventsPage />} >
        <Route path=":movieId" element={<EventSubPage/>}/>
        </Route> */}

        <Route path='events/:movieId/details' element={<EventDetailsPage />} />
        {/* <Route path='search/:movieId/details'element={<EventDetailPage />} /> */}

        </Route>
      </Routes>
  )
}
