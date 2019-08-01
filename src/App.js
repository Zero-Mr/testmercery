import React from 'react';
import {GlobalStyled} from './style.js';
import store from './store';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Header from './common/Header'


function App() {

  return (
    <Provider store={store}>
      <div>
        {/* 全局样式 */}
        <GlobalStyled/> 
        {/* 使用路由 */}
          <BrowserRouter>
              <Header/>
          </BrowserRouter>   
      </div>
    </Provider>
  );
}

export default App;
