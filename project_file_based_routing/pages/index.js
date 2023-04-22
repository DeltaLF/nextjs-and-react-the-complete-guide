import EventList from "@/components/events/event-list";
import { getFeaturedEvents } from "@/data/EVENTS";

function HomePage() {
  const featuredevents = getFeaturedEvents();

  return (
    <div>
      <EventList items={featuredevents} />
    </div>
  );
}

export default HomePage;
