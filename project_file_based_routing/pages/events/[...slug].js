import { useRouter } from "next/router";
import EventList from "@/components/events/event-list";
import ResultsTitle from "@/components/events/results-title";
import ErrorAlert from "@/components/ui/error-alert";
import Button from "@/components/ui/button";
import { useEffect, useState } from "react";
import { fetchEvents } from "@/api/event";
import { getFilteredEvents } from "@/utils/data_transform";
import useSWR from "swr";
import _ from "lodash";
import { fromObjectToArray } from "@/utils/data_transform";

/*
client side fetching or server side fetching are both fine
*/
function Slug({ filteredEvents, hasEror, numYear, numMon }) {
  // const router = useRouter();
  // const [loadedEvents, setLoadedEvents] = useState();
  // // const filteredData = router.query.slug;
  // const { data, erorr } = useSWR(
  //   `${process.env.NEXT_PUBLIC_FIREBASE_URL}/events.json`
  // );
  // useEffect(() => {
  //   if (data) {
  //     const events = fromObjectToArray(data);
  //     setLoadedEvents(events);
  //   }
  // }, [data]);

  // if (!loadedEvents) {
  //   return <p className="center">Loading...</p>;
  // }

  // const filteredLoadedEvents = getFilteredEvents(
  //   { year: numYear, month: numMon },
  //   events
  // );

  if (hasEror) {
    return (
      <>
        <ErrorAlert>
          <p>Invalid filter. Please adjust your values!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }

  if (filteredEvents.length === 0) {
    return (
      <>
        <ErrorAlert>
          <p>No events found for the choosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </>
    );
  }
  const date = new Date(numYear, numMon - 1);
  return (
    <>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </>
  );
}

export default Slug;

export async function getServerSideProps(context) {
  const filteredInput = context.params.slug;
  const [filteredYear, filteredMon] = filteredInput || [];
  const numYear = +filteredYear;
  const numMon = +filteredMon;
  const isInValidInput =
    isNaN(numYear) ||
    isNaN(numMon) ||
    numYear > 2030 ||
    numYear < 2020 ||
    numMon < 1 ||
    numMon > 12;

  const events = await fetchEvents();
  const filteredEvents = getFilteredEvents(
    { year: numYear, month: numMon },
    events
  );
  console.log(isInValidInput, numYear, numMon);
  if (isInValidInput) {
    return {
      props: { hasEror: true },
      // notFound: true,
      // redirect:{
      //   destination: '/error'
      // }
    };
  }

  return {
    props: { filteredEvents, numYear, numMon },
  };
}
