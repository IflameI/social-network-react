const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
        messageDataMe: [
            {
                id: 1,
                ChatName: 'Sarah Cruiz',
                Text: 'I have been on vacation',
                MessageTime: '3 days ago'
            },
            {
                id: 2,
                ChatName: 'Sarah Cruiz',
                Text: 'it was a great time for me. we had a lot of fun',
                MessageTime: '3 days ago'
            },
            {
                id: 3,
                ChatName: 'Sarah Cruiz',
                Text: 'it was a great time for me. we had a lot of fun',
                MessageTime: '3 days ago'
            },
            {
                id: 4,
                ChatName: 'Sarah Cruiz',
                Text: 'it was a great time for me. we had a lot of fun',
                MessageTime: '3 days ago'
            },

        ],
        chatData: [
            {id: 1, ChatName: 'Linda Lohan', PreviewText: 'Hi there, how are you', MessageTime: 'a min ago'},
            {id: 2, ChatName: 'Julia Cox', PreviewText: 'see you soon', MessageTime: 'an hour ago'},
            {id: 3, ChatName: 'Sophia Lee', PreviewText: 'Okay fine. thank you', MessageTime: '13 hour ago'}
        ],
}

const chatReducer = (state = initialState, action) => {

    switch (action.type) {
        case SEND_MESSAGE:
            let textBody = action.newMessageText;
             return {
                ...state,
                 messageDataMe: [...state.messageDataMe, {id: 6, ChatName: 'Sarah Cruiz', Text: textBody, MessageTime: '3 days ago'}]
            };
        default:
            return state;
    }


}
export const sendMessageCreator = (newMessageText) => ({type: SEND_MESSAGE, newMessageText})

export default chatReducer;