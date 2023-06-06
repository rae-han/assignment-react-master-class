import React from 'react';
import {ListContainer} from "./styles.tsx";
import Title from "../Title";
import {Types} from "../../typings/db.ts";
import Input from "../Input";
import {useRecoilValue} from "recoil";
import {travelsLikeSelector, travelsVisitedSelector, travelsWantedSelector} from "../../store";
import Item from "../Item";

interface Props {
  type: Types,
  title: string
}

const List = ({ type, title }: Props) => {
  const getTravelType = (type: Types) => ({
    true: travelsWantedSelector,
    [type === Types.VISITED]: travelsVisitedSelector,
    [type === Types.LIKE]: travelsLikeSelector,
  }).true;
  const countries = useRecoilValue(getTravelType(type))

  return (
    <ListContainer>
      <Title title={`내가 ${title} 나라들`} />
      { type === Types.WANTED ? <Input /> : null}
      <ul>
        {countries.map(item => <Item key={item.id} type={type} item={item} />)}
      </ul>
    </ListContainer>
  );
};

export default List;