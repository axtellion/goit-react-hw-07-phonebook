import { FilterInput, Text, FilterLabel } from './Filter.styled';
import { useSelector, useDispatch } from 'react-redux';
import { chengeFilter } from 'redux/itemsSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.items.filter);

  return (
    <FilterLabel>
      <Text>Filter</Text>
      <FilterInput
        type="text"
        value={filter}
        onChange={e => dispatch(chengeFilter(e.target.value))}
      />
    </FilterLabel>
  );
};
