import React,{ useState } from 'react'
// import Avatar from "@material-ui/core/Avatar";
// import IconButton from "@material-ui/core/IconButton";
// import ClearIcon from "@material-ui/icons/Clear";
import {storiesOf} from '@storybook/react'
import {ReqDialog} from "../components/ReqDialog/"
// import Grid from "@material-ui/core/Grid";
// import TextField from "@material-ui/core/TextField";

const stories = storiesOf('APP TEST', module);

stories.add('App', () => {
  const [valid, setValid] = useState(false);
  const [text, setText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
    };
 
  const TweetRequirement = [
      {
          text:'At least 4 characters',
          validator: val => val.length >=4,
      },
    
  ];

  
    return (
     

          <div item xs>
            <ReqDialog
          value={text}
          Requirements={TweetRequirement}
          onValidChange={isValid => setValid(isValid)}
          />
            <TextField
              id="write-new-twit"
              autoFocus
              multiline
              rows={9}
              value={text}
              onChange={handleChange}
              placeholder="무슨일이 일어나고 있나요?"
              fullWidth
            />
            <button disabled={!valid || !text}>Sign Up</button>

          </div>
       
  
    );
  });
  