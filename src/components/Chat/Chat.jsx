import React from 'react';
import s from './Chat.module.css';
import ChatItemPreview from "./PreviewChatItem/PrivewChatItem";
import MessageOnMe from "./Messages/MessageOnMe/MessageOnMe";
import AddMessageFormRedux from "./ChatMessageForm";


const Chat = (props) => {
    let state = props.chatPage;
    let chatPreviews = state.chatData.map(c => <ChatItemPreview ChatName={c.ChatName} id={c.id}
                                                                PreviewText={c.PreviewText}
                                                                MessageTime={c.MessageTime}
                                                                key={c.id}/>)
    let messageElements = state.messageDataMe.map(m => <MessageOnMe ChatName={m.ChatName} id={m.id}
                                                                    Text={m.Text} MessageTime={m.MessageTime}
                                                                    key={m.id}/>)


let addNewMessage = (values) => {
    props.sendMessage(values.newMessageText);
}
    return (
        <div className={s.row}>
            <div className={s.columnS}>
                <ul className={s.items}>
                    {chatPreviews}
                </ul>
            </div>
            <div className={s.columnB}>
                <div className={s.body}>
                    <div className={s.chatMessage}>
                        {messageElements}
                    </div>
                    <div className={s.sendMessage}>
                        <AddMessageFormRedux onSubmit = {addNewMessage}/>
                    </div>
                </div>
            </div>
        </div>
    )
}





export default Chat;