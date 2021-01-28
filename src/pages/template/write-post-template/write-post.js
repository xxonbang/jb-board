import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';

class WritePost extends React.Component  {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      contents: ''
    }
  }

  HEROKU_SERVER_URL = `https://jb-board-server.herokuapp.com`;

  setTitle = e => {
    const { value } = e.target;
    this.setState({
      ...this.state,
      title: value
    })
  }

  setContents = (data) => {
    this.setState({
      ...this.state,
      contents: data
    })
  }

  createPost = async () => {
    try {
      const result = await axios.post(`${this.HEROKU_SERVER_URL}/board/humor/upload`, this.state);
      console.log(result);
      this.props.history.push(`/board/humor`)
    } catch (error) {
      console.log(error);
    }
  }

  test = () => {
    console.log(this.state)
  }

  render() {
    return (
      <>
        <div>제목</div>
        <input
          type="text"
          className="post-title"
          name="title"
          placeholder="제목을 입력하세요."
          onChange={this.setTitle}
        />
        <CKEditor
          editor={ ClassicEditor }
          data="<p>Hello from CKEditor 5!</p>"
          onReady={ editor => {
            // You can store the "editor" and use when it is needed.
            console.log( 'Editor is ready to use!', editor );
          } }
          onChange={ ( event, editor ) => {
            const data = editor.getData();
            this.setContents(data);
          } }
          // onChange={ ( event, editor ) => {
          //   const data = editor.getData();
          //   console.log( { event, editor, data } );
          // } }
          onBlur={ ( event, editor ) => {
            console.log( 'Blur.', editor );
          } }
          onFocus={ ( event, editor ) => {
            console.log( 'Focus.', editor );
          } }
        />
        <button onClick={this.test}>test</button>
        <button onClick={this.createPost}>createPost</button>
      </>
    )
  }
}

export default WritePost;
