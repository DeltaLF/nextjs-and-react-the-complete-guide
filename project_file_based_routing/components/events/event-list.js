import styled from "styled-components";
import EventItem from "./event-item";

function EventList(props) {
  const { items } = props;
  return (
    <List>
      {items.map((event) => {
        return (
          <EventItem
            key={event.id}
            id={event.id}
            title={event.title}
            location={event.location}
            date={event.date}
            image={event.image}
          />
        );
      })}
    </List>
  );
}

export default EventList;

const List = styled.ul`
  width: 90%;
  max-width: 40rem;
  margin: 5rem auto;
`;
