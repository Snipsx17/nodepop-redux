import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import AdvertDetail from './AdvertDetail';
import { getAdvert, getUi } from '../../../store/selectors';
import { deleteAdvert, loadAdvert } from '../../../store/actions';

function AdvertPage() {
  const { advertId } = useParams();
  const dispatch = useDispatch();
  const advert = useSelector(getAdvert(advertId));
  const { isLoading } = useSelector(getUi);

  useEffect(() => {
    dispatch(loadAdvert(advertId));
  }, [dispatch, advertId]);

  const handleDelete = () => {
    dispatch(deleteAdvert(advertId));
  };

  if (isLoading) {
    return 'Loading...';
  }

  return (
    advert && (
      <AdvertDetail onDelete={handleDelete} isLoading={isLoading} {...advert} />
    )
  );
}

export default AdvertPage;
