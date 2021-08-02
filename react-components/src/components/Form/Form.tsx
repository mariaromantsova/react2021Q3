import React, {
  ChangeEvent,
  FormEvent,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { CardModel } from '../../models/card-model';
import './Form.scss';

type Props = {
  setFormValues: React.Dispatch<React.SetStateAction<[] | CardModel[]>>;
};

const Form: React.FunctionComponent<Props> = ({ setFormValues }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [country, setCountry] = useState('Belarus');
  const [agree, setAgree] = useState(false);
  const [getNotifications, setGetNotifications] = useState(false);
  const [errors, setErrors] = useState<CardModel>({});

  const validate = useCallback(() => {
    setErrors({});

    if (!agree) setErrors(state => ({ ...state, agree }));
    if (birthDate === '') setErrors(state => ({ ...state, birthDate }));
    if (firstName === '') setErrors(state => ({ ...state, firstName }));
  }, [agree, firstName, birthDate]);

  const reset = () => {
    setFirstName('');
    setLastName('');
    setBirthDate('');
    setCountry('Belarus');
    setAgree(false);
    setGetNotifications(false);
    setErrors({});
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (Object.keys(errors).length === 0) {
      setFormValues(state => [
        ...state,
        { firstName, lastName, birthDate, country, agree, getNotifications },
      ]);
      reset();
    }
  };

  useEffect(() => {
    validate();
  }, [agree, firstName, birthDate, validate]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="firstName" className="form-label">
          {errors?.firstName !== undefined && <span className="error">*</span>}{' '}
          First name:
        </label>
        <input
          type="text"
          className="form-control"
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setFirstName(e.target.value)
          }
        />
      </div>

      <div className="mb-3">
        <label htmlFor="lastName" className="form-label">
          Last name:
        </label>
        <input
          type="text"
          className="form-control"
          id="lastName"
          name="lastName"
          value={lastName}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setLastName(e.target.value)
          }
        />
      </div>

      <div className="mb-3">
        <label htmlFor="birthDate" className="form-label">
          {errors?.birthDate !== undefined && <span className="error">*</span>}{' '}
          Birth date:
        </label>
        <input
          type="date"
          className="form-control"
          id="birthDate"
          name="birthDate"
          value={birthDate}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setBirthDate(e.target.value)
          }
        />
      </div>

      <div className="mb-3">
        <label htmlFor="country" className="form-label">
          Country:
        </label>
        <select
          className="form-select"
          id="country"
          name="country"
          value={country}
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            setCountry(e.target.value)
          }
        >
          <option value="Belarus">Belarus</option>
          <option value="Ukraine">Ukraine</option>
          <option value="Russia">Russia</option>
        </select>
      </div>

      <div className="form-check form-switch">
        <label htmlFor="getNotifications" className="form-label">
          Get notifications
        </label>
        <input
          className="form-check-input"
          type="checkbox"
          id="getNotifications"
          name="getNotifications"
          checked={getNotifications}
          onChange={() => setGetNotifications(prev => !prev)}
        />
      </div>

      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="agree"
          name="agree"
          checked={agree}
          onChange={() => setAgree(prev => !prev)}
        />
        <label className="form-check-label" htmlFor="agree">
          {errors?.agree !== undefined && <span className="error">*</span>}{' '}
          Agree
        </label>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Form;
