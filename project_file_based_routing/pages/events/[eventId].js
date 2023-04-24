import EventSummary from "@/components/event-detail/event-summary";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventContent from "@/components/event-detail/event-content";
import ErrorAlert from "@/components/ui/error-alert";
import { fetchOneEvent, fetchEvents } from "@/api/event";
import Head from "next/head";

function EventPage({ event }) {
  // const route = useRouter();
  // const { id } = route.query;
  // const event = getEventById(id);
  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found!</p>
      </ErrorAlert>
    );
  }

  return (
    <>
      <Head>
        <title>{event.title}</title>
        <meta
          name="description"
          content={`details about list: ${event.title}`}
        />
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </>
  );
}

export default EventPage;

export async function getStaticPaths() {
  const events = await fetchEvents(); // get id list
  const paths = events.map((event) => {
    return {
      params: {
        eventId: event.id,
      },
    };
  });
  return {
    paths: paths,
    fallback: "blocking",
  };
}

// not an user specfic page, so staic page will be good
export async function getStaticProps(context) {
  const { params } = context;
  const { eventId } = params;
  const event = await fetchOneEvent(eventId);
  return { props: { event: event }, revalidate: 60 };
}
