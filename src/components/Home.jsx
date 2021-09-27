import React, { Fragment } from 'react'
import DataProvider from '../context/DataContext';
import Text from './Text'

function Home() {
  return (
    <Fragment>
      <DataProvider>
        <Text />
      </DataProvider>
    </Fragment>
  );
};

export default Home;
