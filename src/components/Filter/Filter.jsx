import { FilterInput, Text, FilterLabel } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { changeFilter } from 'redux/itemsSlice';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <FilterLabel>
      <Text>Filter</Text>
      <FilterInput
        type="text"
        name="filter"
        onChange={e => dispatch(changeFilter(e.target.value))}
      />
    </FilterLabel>
  );
};
