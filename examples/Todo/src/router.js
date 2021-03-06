import React from 'react';
import { BrowserRouter as Router, Route } from 'jeem/router';

import Todo from './pages/Todo';

export default function () {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Todo} />
      </div>
    </Router>
  );
}
