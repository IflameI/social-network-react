import profileReducer from "./profile-reducer";
import chatReducer from "./chat-reducer";

let store = {
    _state: {
        postsPage: {
            posts: [
                {
                    id: 1,
                    name: 'Sarah Cruiz',
                    comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ',
                    likesCount: '2',
                    dislikesCount: '1'
                },
                {
                    id: 2,
                    name: 'Jhoan',
                    comment: '123Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ',
                    likesCount: '15',
                    dislikesCount: '5'
                },
                {
                    id: 3,
                    name: 'Jhoan',
                    comment: '123Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ',
                    likesCount: '15',
                    dislikesCount: '5'
                }

            ],
            newPostText: '123123'
        },
        chatPage: {
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
            newMessageText: ""
        }
    },
    getState() {
        return this._state;
    },
    _callSubcriber() {
        console.log(123)
    },
    subscribe(observer) {
        this._callSubcriber = observer;
    },

    dispatch(action) {
        this._state.postsPage = profileReducer(this._state.postsPage, action);
        this._state.chatPage = chatReducer(this._state.chatPage, action);

        this._callSubcriber(this._state);
    }
}

export default store;