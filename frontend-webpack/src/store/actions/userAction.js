import { toast } from 'react-toastify'
import API from "@utils/api";
import { FETCH_LIST_USER_SUCCESS, FETCH_LIST_USER_FAIL} from './constants';

const fetchUsers = () => (dispatch) => {
    try {
         API.get('/auth/list-user', {}, (response) => {
            if(response.code === 0) {
                dispatch({
                    type: FETCH_LIST_USER_SUCCESS,
                    data: response.data,
                    page: response.page,
                    size: response.size,
                    totalElements: response.totalElements,
                })
            } else {
                dispatch({
                    type: FETCH_LIST_USER_FAIL,
                    data: []
                })
                toast.error(response.message)
            }
        });
    } catch (error ){
        console.log(error)
        toast.error(error)
    }
}
export default {
    fetchUsers
}