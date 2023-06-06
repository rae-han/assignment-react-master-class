import React from 'react';
import {Travels, Types} from "../../typings/db.ts";
import {useSetRecoilState} from "recoil";
import {travelsState} from "../../store";

interface Props {
  type: Types,
  item: Travels
}

const Item = ({ type, item }: Props) => {
  const setTravels = useSetRecoilState(travelsState);

  const onDownItem = () => {
    const nextType = item.type === Types.WANTED ? Types.VISITED : Types.LIKE
    setTravels(prev => prev.map(value => value.id === item.id ? { ...value, type: nextType } : value))
  }

  const onUpItem = () => {
    const nextType = item.type === Types.LIKE ? Types.VISITED : Types.WANTED
    setTravels(prev => prev.map(value => value.id === item.id ? { ...value, type: nextType } : value))
  }

  const onRemoveItem = () => {
    if (type === Types.WANTED) {
      setTravels(prev => prev.filter(value => value.id !== item.id))
    }
  }

  return (
    <li>
      <span>{item.county} : </span>
      { type !== Types.LIKE ? <button onClick={onDownItem}>내리기</button> : null }
      { type !== Types.WANTED ? <button onClick={onUpItem}>올리기</button> : null }
      { type === Types.WANTED ? <button onClick={onRemoveItem}>지우기</button> : null }
    </li>
  );
};

export default Item;