import {atom, selector} from "recoil";
import {Travels, Types} from "../typings/db.ts";

export const travelsState = atom<Travels[]>({
  key: 'travels',
  default: [],
  effects: [(params) => { // # TODO: 나중에 중복되는 부분 함수로 빼기
    console.log(123, params)
    const {setSelf, onSet} = params;

    const savedData = localStorage.getItem('travels');
    if (savedData) {
      setSelf(JSON.parse(savedData));
    }

    onSet((newValue, _, isReset) => {
      isReset
        ? localStorage.removeItem('travels')
        : localStorage.setItem('travels', JSON.stringify(newValue))
    })
  }]
})

// TODO: selector나 그 안의 get 함수에 인자를 넘길수 있나 알아보기
export const travelsWantedSelector = selector({
  key: 'travelsWanted',
  get: ({get}) => {
    const travels = get(travelsState)
    return travels.filter(item => item.type === Types.WANTED)
  },
})

export const travelsVisitedSelector = selector({
  key: 'travelsVisited',
  get: ({get}) => {
    const travels = get(travelsState)
    return travels.filter(item => item.type === Types.VISITED)
  }
})

export const travelsLikeSelector = selector({
  key: 'travelsLike',
  get: ({get}) => {
    const travels = get(travelsState)
    return travels.filter(item => item.type === Types.LIKE)
  }
})

const localStorageEffect = (key: string) => ({ setSelf, onSet }: any) => {
  const savedValue = localStorage.getItem(key);
  // setSelf -> Callbacks to set or reset the value of the atom.
  if (savedValue != null) {
    setSelf(JSON.parse(savedValue));
  }

  // onSet -> Subscribe to changes in the atom value.
  onSet((newValue: any, _: any, isReset: boolean) => {
    isReset
      ? localStorage.removeItem(key)
      : localStorage.setItem(key, JSON.stringify(newValue));
  });
};