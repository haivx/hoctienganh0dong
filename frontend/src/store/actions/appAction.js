import Api from '@utils/api'

export const beginFetching = () => (dispatch) => {
  dispatch({
    type: 'BEGIN_FETCHING'
  })
}

export const finishFetching = () => (dispatch) => {
  dispatch({
    type: 'FINISH_FETCHING'
  })
}
