import React from 'react';
// Components
import Header from './Header';
import Cards from './Cards';
import Map from './Map';
import Footer from './Footer';

class App extends React.Component {
  render() {
    return (
      <div>
            <Header />
            <div className="content flex">
                <Cards />
                <Map />
            </div>
            <Footer />
      </div>
    );
  }
}

export default App;
