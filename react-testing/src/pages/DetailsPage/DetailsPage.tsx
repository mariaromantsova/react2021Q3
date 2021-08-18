import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { DetailsModel } from '../../models/details-model';
import { getMovie } from '../../shared/api';

const DetailsPage: React.FunctionComponent = () => {
  const { id } = useParams<{ id: string }>();
  const [details, setDetails] = useState<DetailsModel | null>(null);
  const history = useHistory();

  useEffect(() => {
    const fetchDetails = async () => {
      const data = await getMovie(id);
      setDetails(data);
    };

    fetchDetails();
  }, [id]);

  return details ? (
    <>
      <button
        type="button"
        className="btn btn-primary mb-3 mr-auto"
        onClick={() => {
          history.goBack();
        }}
      >
        Back
      </button>

      {Object.entries(details).map(([key, val]) => (
        <p key={key}>
          <b>{key}:</b> {JSON.stringify(val)}
        </p>
      ))}
    </>
  ) : (
    <div className="spinner-border" role="status" />
  );
};

export default DetailsPage;
