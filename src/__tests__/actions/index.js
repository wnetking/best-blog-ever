import * as actions from '../../actions';
import * as t from '../../constants';

describe('actions', () => {
  it('should get reguest to get posts', () => {
    const expectedAction = {
      type: t.GET_ALL_POSTS_REQUEST,
      payload: {
        loading: true
      }
    };
    expect(actions.getPostsRequest()).toEqual(expectedAction);
  });

  it('SUCCEEDED reguest posts', () => {
    const data = [
      {
        userId: 1,
        id: 1,
        title:
          'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body:
          'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'
      },
      {
        userId: 1,
        id: 2,
        title: 'qui est esse',
        body:
          'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla'
      }
    ];
    const expectedAction = {
      type: t.GET_ALL_POSTS_SUCCEEDED,
      payload: {
        posts: data,
        loading: false
      }
    };
    expect(actions.getPostsSucceeded(data)).toEqual(expectedAction);
  });

  it('FAILED reguest to get posts', () => {
    const expectedAction = {
      type: t.GET_ALL_POSTS_FAILED,
      payload: {
        error: new Error()
      }
    };
    expect(actions.getPostsFailed(new Error())).toEqual(expectedAction);
  });

  it('SEARCH REQUEST', () => {
    const str = 'qui est ';
    const expectedAction = {
      type: t.SEARCH_REQUEST,
      payload: {
        str
      }
    };
    expect(actions.searchRequest(str)).toEqual(expectedAction);
  });

  it('SEARCH RESULT', () => {
    const data = [
      {
        userId: 1,
        id: 1,
        title:
          'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body:
          'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto'
      },
      {
        userId: 1,
        id: 2,
        title: 'qui est esse',
        body:
          'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla'
      }
    ];
    const expectedAction = {
      type: t.SEARCH_RESULT,
      payload: {
        data
      }
    };
    expect(actions.searchResult(data)).toEqual(expectedAction);
  });
});
