import Home from '../../components/Home';
import Login from '../../components/UserManagement/Login';
import SignUp from '../../components/UserManagement/SignUp';

export default [
	{
		component: Home,
		path: '',
		title: '',
		exact: true
	},
	{
		component: Login,
		path: 'login',
		title: ''
	},
	{
		component: SignUp,
		path: 'signup',
		title: ''
	}
]