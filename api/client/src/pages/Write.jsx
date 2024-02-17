import React, { useState } from 'react'

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';



const Write = () => {
  const [value, setValue] = useState('');

  return (
    <div className='add'>
      <div className="content">
        <input type="text" placeholder='Title' />
        <div className="editorContainer">
          < ReactQuill theme="snow" className='editor' value={value} onChange={setValue} />
        </div>

      </div>

      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b>Draft 
          </span>
          <span>
            <b>Visibility: </b>Public
          </span>

          <input style={{display:"none"}} type="file" id="file" name="file" />
          <label className='file' htmlFor="file">Upload image</label>

          <div className="buttons">
            <button>Save as draft</button>
            <button>Upload</button>

          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
          <input type="radio" name="cat" value="art" id="art" />
          <label htmlFor="art">Art</label>
          </div>
          <div className="cat">
          <input type="radio" name="cat" value="science" id="science" />
          <label htmlFor="science">Science</label>
          </div>
          <div className="cat">
          <input type="radio" name="cat"  value="tech" id="tech" />
          <label htmlFor="tech">Technology</label>
          </div>
          <div className="cat">
          <input type="radio" name="cat" value="math" id="math" />
          <label htmlFor="math">Mathematics</label>
          </div>
          <div className="cat">
          <input type="radio" name="cat" value="creative" id="creative" />
          <label htmlFor="creative">Creativity</label>
          </div>
        </div>
      </div>
    </div>


  )
}

export default Write