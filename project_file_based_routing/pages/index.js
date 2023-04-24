import Head from "next/head";

import EventList from "@/components/events/event-list";
import { fetchEvents } from "@/api/event";
import { getFeaturedEvents } from "@/utils/data_transform";

function HomePage(props) {
  const { featuredevents } = props;
  // const featuredevents = getFeaturedEvents();
  return (
    <div>
      <Head>
        <title>NextJS Events</title>
        <meta
          name="description"
          content="list some great events with best features"
        />
      </Head>
      <EventList items={featuredevents} />
    </div>
  );
}

export default HomePage;

export async function getStaticProps() {
  const events = await fetchEvents();
  const featuredevents = getFeaturedEvents(events);
  return {
    props: {
      featuredevents: featuredevents,
    },
    revalidate: 3600,
  };
}
