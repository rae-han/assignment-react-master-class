import React from 'react';
import {InputContainer} from "./styles.tsx";
import {useForm} from "react-hook-form";
import {Travels, Types} from "../../typings/db.ts";
import {useRecoilState} from "recoil";
import {travelsState} from "../../store";

interface TravelsFormData {
  country: string
}

const Input = () => {
  const [travels, setTravels] = useRecoilState(travelsState)
  const { register, handleSubmit, setValue, formState } = useForm<TravelsFormData>()

  const onValid = (data: TravelsFormData) => {
    const exists = travels.find(item => item.county === data.country);

    if (!exists) {
      const newData: Travels = {
        id: Date.now(),
        type: Types.WANTED,
        county: data.country
      }
      setTravels(prev => [newData, ...prev])
    } else {
      return '존재 한다는 에러 보여줘야 함'
    }
    setValue('country', '')

  }

  return (
    <InputContainer onSubmit={handleSubmit(onValid)}>
      <input {...register('country', {
        required: 'required!!!!'
      })} />
      <span>{formState.errors?.country?.message}</span>
      <button>here we go!</button>
    </InputContainer>
  );
};

export default Input;