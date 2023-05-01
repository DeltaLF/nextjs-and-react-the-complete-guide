import AddressIcon from "../icons/address-icon";
import DateIcon from "../icons/date-icon";
import LogisticsItem from "./logistics-item";
import Image from "next/image";
import styled from "styled-components";

function EventLogistics(props) {
  const { date, address, image, imageAlt } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const addressText = address.replace(", ", "\n");

  return (
    <Logistics>
      <ImageStyle>
        <Image src={`/${image}`} alt={imageAlt} width={300} height={300} />
        {/* <img src={`/${image}`} alt={imageAlt} /> */}
      </ImageStyle>
      <List>
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadableDate}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <address>{addressText}</address>
        </LogisticsItem>
      </List>
    </Logistics>
  );
}

export default EventLogistics;

const Logistics = styled.section`
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  background-color: #2b2b2b;
  padding: 2rem;
  max-width: 50rem;
  width: 80%;
  margin: -3rem auto;
  color: #d5eeeb;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  flex-direction: column;
  align-items: center;

  address {
    white-space: pre;
  }

  @media (min-width: 768px) {
    padding: 2rem;
    margin: -5rem auto;
    gap: 3rem;
    flex-direction: row;
    align-items: stretch;
  }
`;

const ImageStyle = styled.div`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  overflow: hidden;
  border: 5px solid white;

  img {
    width: 10rem;
    height: 10rem;
    object-fit: cover;
  }
  @media (min-width: 768px) {
    width: 20rem;
    height: 20rem;
    img {
      width: 20rem;
      height: 20rem;
    }
  }
`;

const List = styled.ul`
  flex: 3;
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: 768px) {
    align-items: flex-start;
  }
`;
