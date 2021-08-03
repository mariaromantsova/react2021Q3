import React, { useState } from 'react';
import Card from './components/Card/Card';
import Form from './components/Form/Form';
import { CardModel } from './models/card-model';

const App: React.FunctionComponent = () => {
  const [formValues, setFormValues] = useState<CardModel[] | []>([]);

  return (
    <div className="container mt-5 d-flex flex-column justify-content-center align-items-center">
      <div className="col-4">
        <Form setFormValues={setFormValues} />
      </div>

      <main className="cards-container mt-3">
        {formValues.map(formValue => {
          const {
            firstName,
            lastName,
            birthDate,
            country,
            agree,
            getNotifications,
          } = formValue;

          return (
            <Card
              firstName={firstName}
              lastName={lastName}
              birthDate={birthDate}
              country={country}
              agree={agree}
              getNotifications={getNotifications}
              key={birthDate}
            />
          );
        })}
      </main>
    </div>
  );
};

export default App;
