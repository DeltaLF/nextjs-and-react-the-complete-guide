export function getFeaturedEvents(events) {
  return events.filter((event) => event.isFeatured);
}

export function getFilteredEvents(dateFilter, events) {
  const { year, month } = dateFilter;

  let filteredEvents = events.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export function fromObjectToArray(obj) {
  if (Array.isArray(obj)) return obj;
  if (typeof obj !== "object" || obj === null) return;
  const newArr = [];
  for (let [_, value] of Object.entries(obj)) {
    newArr.push(value);
  }
  return newArr;
}
