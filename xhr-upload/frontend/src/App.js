import React from 'react';
import Uppy from '@uppy/core';
import { Dashboard } from '@uppy/react';
import XHRUpload from '@uppy/xhr-upload';
import './App.css';

const uppy = Uppy({
  debug: true,
  allowMultipleUploads: true,
})

uppy.use(XHRUpload, {
  endpoint: '/api/upload',
  fieldName: 'file'
})

uppy.on('complete', (result) => {
  console.log(result);
})

const App = ({ currentAvatar }) => {
  return (
    <div className="App">
      <Dashboard
        uppy={uppy}
      />
    </div>
  )
}

export default App;

