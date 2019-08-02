import React from 'react';
import EditorController from './Components/EditorController'
import InputHook from './Components/InputHook'
import logo from './logo.svg';
import './App.css';
import { Editor, EditorState, RichUtils } from 'draft-js'
import { stateToHTML } from 'draft-js-export-html'
import { stateFromHTML } from 'draft-js-import-html'
 let initialState = ""
class App extends React.Component {
  
  state = {
    editorState: EditorState.createWithContent(stateFromHTML(initialState))
  }
  // initialState = this.state.editorState.getCurrentContent()
  editText = (editorState) => {
    this.setState({ editorState })
  }
  toggleInlineStyle = (inlineStyle) => {
    this.setState({
      editorState: RichUtils.toggleInlineStyle(
        this.state.editorState,
        inlineStyle
      )
    })
  }
  submitContent = ()=>{
     initialState = stateToHTML(this.state.editorState.getCurrentContent())
  }
  render() {
    return (
      <div className='container'>
        <h4>Rich Text Editor</h4>
        <InputHook />
        <div className='row text-center' style={{ border: "1px solid black", height: "500px" }}>
          <div className='col-lg-12 text-center'>
            <Editor
              editorState={this.state.editorState}
              onChange={this.editText}
            ></Editor>
            <EditorController
              toggleInlineStyle={this.toggleInlineStyle}
              editorState={this.state.editorState}
            />
            <button onClick={this.submitContent}>Submit</button>
          </div>

        </div>
      </div>


    );
  }
}

const styles = {
  inputMargin: {
    margin: "10px",
    height: "400px",
    width: "800px",
    margin: "10px",
    fontSize: "20px"

  }
}

export default App;
