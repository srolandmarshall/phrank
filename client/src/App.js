import React from 'react';
import { useAuth0 } from "./react-auth0-wrapper";

const App = (props) => {
    const { loading } = useAuth0();
    if (loading) {
      return (
        <div>Loading...</div>
      );
    }
    return(
      <div className="App">
        <h1>Phrank!</h1>
        <h2>The application for tracking, ranking, and listening to your phavorite Phish shows.</h2>
    </div>)
}
//

export default App;
