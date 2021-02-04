import profileReducer, {
  addPostActionCreator,
  deletePost,
} from './profile-reducer'

let state = {
  posts: [
    {
      id: 1,
      name: 'Sarah Cruiz',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ',
      likesCount: '2',
      dislikesCount: '1',
    },
    {
      id: 2,
      name: 'Jhoan',
      comment:
        '123Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ',
      likesCount: '15',
      dislikesCount: '5',
    },
    {
      id: 3,
      name: 'Jhoan',
      comment:
        '123Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ',
      likesCount: '15',
      dislikesCount: '5',
    },
  ],
}

test('length of posts should be incremented', () => {
  let action = addPostActionCreator('it-kamasutra')
  let newState = profileReducer(state, action)

  expect(newState.posts.length).toBe(4)
})

test('comment of new post should be correct', () => {
  let action = addPostActionCreator('test123')
  let newState = profileReducer(state, action)

  expect(newState.posts[3].comment).toBe('test123')
})

test('after deleting length of messages should be decrement', () => {
  let action = deletePost(1)
  let newState = profileReducer(state, action)

  expect(newState.posts.length).toBe(2)
})

test(`after deleting length of messages shouldn't be decrement if id is incorrect`, () => {
  let action = deletePost(1000)
  let newState = profileReducer(state, action)

  expect(newState.posts.length).toBe(3)
})
