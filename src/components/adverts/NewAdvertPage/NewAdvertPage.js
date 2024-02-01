import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import NewAdvertForm from './NewAdvertForm';
import { getUi } from '../../../store/selectors';
import { createAdvert } from '../../../store/actions';

function NewAdvertPage() {
  const dispatch = useDispatch();
  const { isLoading } = useSelector(getUi);

  const handleSubmit = newAdvert => {
    dispatch(createAdvert(newAdvert));
  };

  return <NewAdvertForm onSubmit={handleSubmit} isLoading={isLoading} />;
}

export default NewAdvertPage;
