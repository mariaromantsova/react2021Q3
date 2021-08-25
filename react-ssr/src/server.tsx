import express from 'express';

import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import store from './redux/store';
import renderApp from './renderApp';
import renderTemplate from './renderTemplate';

const app = express();

app.use(express.static('dist'));
app.get('*', async (req, res) => {
  const context = {};

  const content = renderToString(
    <React.StrictMode>
      <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          {renderApp()}
        </StaticRouter>
      </Provider>
    </React.StrictMode>,
  );

  res.send(
    renderTemplate({
      cssPath: 'main.css',
      jsPath: 'main.js',
      content,
    }),
  );
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is listening on port: 3000`);
});
