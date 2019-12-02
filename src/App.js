import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginForm from './components/loginForm.js'

function App() {
  return (
    <div className="App">
      <LoginForm />
        {/* <TwitterTimelineEmbed
          sourceType="profile"
          screenName="SteveAl16866045"
          options={{height: 700}}
        />
        <TwitterTweetEmbed
          tweetId={'1201483796115329025'}
        />
         <TwitterShareButton
          url={'https://facebook.com/saurabhnemade'}
          options={{ text: '#reactjs is awesome', via: 'saurabhnemade' }}
        />
        <TwitterVideoEmbed
          id={'560070183650213889'}
        /> */}

    </div>
  );
}

export default App;
