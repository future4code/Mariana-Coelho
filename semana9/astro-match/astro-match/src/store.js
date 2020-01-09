import {applyMiddleware, createStore, compose} from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	)
)

export default store;


const getPosts = () => async (dispatch, getState) => {
	const response = await axios.get("https://api");

	dispatch(setPosts(response.data.posts)) 
}