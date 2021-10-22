import { createSelector } from "reselect";
import { RootState } from "./store";
import { useAppSelector } from "./hooks";


const selectData = ((state: RootState) => state.content.data);

export const selectContent = createSelector(
  [selectData, (_: RootState, label: string | undefined) => label],
  (data, label) => {
    return data.find(item => item.label === label)?.content;
  });

export const useGetContentByLabel = (label: string | undefined) : string | undefined => {
  return useAppSelector(state => selectContent(state, label));
};

