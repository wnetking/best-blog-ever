import postReducer from '../../reducers/posts';
import * as t from '../../constants';

describe('Posts reducer', () => {
  it('should return the initial state', () => {
    expect(postReducer(undefined, {})).toEqual({
      posts: [],
      loading: false,
      error: null
    });
  });

  it('should handle GET_ALL_POSTS_SUCCEEDED', () => {
    let data = [
      {
        userId: 1,
        id: 1,
        title:
          'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body:
          'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'
      }
    ];
    expect(
      postReducer(
        {},
        {
          type: t.GET_ALL_POSTS_SUCCEEDED,
          payload: {
            posts: data,
            loading: false
          }
        }
      )
    ).toEqual({
      posts: data,
      loading: false
    });
  });
});
