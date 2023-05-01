import styled from "styled-components";

function LogisticsItem(props) {
  const { icon: Icon } = props;

  return (
    <Item>
      <IconSpan>
        <Icon />
      </IconSpan>
      <span>{props.children}</span>
    </Item>
  );
}

export default LogisticsItem;

const Item = styled.li`
  display: flex;
  font-size: 1.5rem;
  align-items: center;
  flex-direction: column;
  text-align: center;
  color: #aefff8;
  span {
    display: block;
  }

  @media (min-width: 768px) {
    align-items: flex-start;
    text-align: left;
  }
`;

const IconSpan = styled.span`
  margin-right: 1rem;
  color: #18e0d0;
  svg {
    width: 2rem;
    height: 2rem;
  }
`;
