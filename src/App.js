import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import './App.css';


const App = () => {

    if(!localStorage.getItem('username')) return <LoginForm/>


    return(
        <ChatEngine
            height="100vh"
            projectID="c51be2df-a54e-4927-baf9-e893df105f99"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps) => <ChatFeed { ...chatAppProps } />}
        />
    )
}

export default App;