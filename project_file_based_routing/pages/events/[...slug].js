import { getFilteredEvents } from "@/data/EVENTS";
import { useRouter } from "next/router";
import EventList from "@/components/events/event-list";
import ResultsTitle from "@/components/events/results-title";
import ErrorAlert from "@/components/ui/error-alert";
import Button from "@/components/ui/button";
function Slug() {
  const router = useRouter();
  const filteredData = router.query.slug;
  if (!filteredData) {
    return <p className="center">Loading...</p>;
  }
  const [filteredYear, filteredMon] = filteredData;
  const numYear = +filteredYear;
  const numMon = +filteredMon;
  if (
    isNaN(numYear) ||
    isNaN(numMon) ||
    numYear > 2030 ||
    numYear < 2020 ||
    numMon < 1 ||
    numMon > 12
  ) {
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
  const events = getFilteredEvents({ year: numYear, month: numMon });
  if (!events || events.length === 0) {
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
      <EventList items={events} />
    </>
  );
}

export default Slug;
