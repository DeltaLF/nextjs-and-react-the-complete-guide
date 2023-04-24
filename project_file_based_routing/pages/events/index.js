import Link from "next/link";
import EventList from "@/components/events/event-list";
import EventsSearch from "@/components/events/events-search";
import { useRouter } from "next/router";
import { fetchEvents } from "@/api/event";
import Head from "next/head";

function EventsPage(props) {
  const { events } = props;
  // const events = getAllEvents();
  const router = useRouter();
  function findEventsHandler(year, month) {
    // navigate to filteredEvent
    router.push(`/events/${year}/${month}`);
  }

  return (
    <>
      <Head>
        <title>All Events</title>
        <meta name="description" content="list all events we have" />
      </Head>
      <EventsSearch onSearch={findEventsHandler} />
      <EventList items={events} />
    </>
  );
}

export default EventsPage;

export async function getStaticProps(context) {
  const events = await fetchEvents();
  return {
    props: {
      events: events,
    },
    revalidate: 60,
  };
}
