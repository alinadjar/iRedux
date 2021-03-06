import { RestDataHandler } from './RestDataHandler';
import { FETCH_POSTS, DEL_POST, STORE_POST } from '../iRedux/types';
import { SpinnerHide, SpinnerShow } from '../iRedux/Actions/common_actions';

export const RestMiddleware4Post = (apiURL) => {
    const _restDataHandler = new RestDataHandler(apiURL, (err) => { console.log(err); });

    return ({ dispatch, getState }) => next => action => {

        switch (action.type) {

            case FETCH_POSTS:
                //debugger;
                if (getState().postR.posts.length <= 4) {

                    next(SpinnerShow());

                    _restDataHandler.GetData(data => {
                        data.forEach(element => {
                            
                            next({
                                type: STORE_POST,
                                payload: element
                            })
                        });

                        next(SpinnerHide());
                    });
                }
                break;


            case DEL_POST:                            
                _restDataHandler.Delete(action.payload,
                    () => {
                        //action.callbk();
                        next(action);
                    });
                break;


            default:
                next(action); 
        }
    }

}

