import React, { ChangeEvent } from 'react';

type Props = {
  setSortBy: React.Dispatch<React.SetStateAction<string>>;
  resultsCount: number;
  setResultsCount: React.Dispatch<React.SetStateAction<number>>;
};

const Settings: React.FunctionComponent<Props> = ({
  setSortBy,
  resultsCount,
  setResultsCount,
}) => {
  return (
    <div className="options col-3 d-flex justify-content-between">
      <div className="sortBy">
        <label htmlFor="sortBy" className="form-label">
          Sort by:
        </label>
        <select
          className="form-select"
          id="sortBy"
          name="sortBy"
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            setSortBy(e.target.value)
          }
        >
          <option value="popularity.desc">popularity</option>
          <option value="original_title.asc">title</option>
          <option value="release_date.asc">year</option>
        </select>
      </div>

      <div className="resultsCount">
        <label htmlFor="resultsCount" className="form-label">
          Show on page:
        </label>
        <select
          className="form-select"
          id="resultsCount"
          name="resultsCount"
          value={resultsCount}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            setResultsCount(+e.target.value)
          }
        >
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
      </div>
    </div>
  );
};

export default Settings;
