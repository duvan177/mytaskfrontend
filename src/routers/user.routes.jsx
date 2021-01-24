import { Route, Switch ,useHistory } from "react-router-dom";


const Login = () => <h1>THIS LOGIN</h1>
const Register = () => <h1>THIS Register</h1>


export default function userRoutes() {

    const ROUTES = [
        {
            private:false,
            path:'/login',
            component: Login
        },
        {
            private:false,
            path:'/register',
            component: Register
        }
]

    return (
        <Switch>
            {
                ROUTES.map(item => <Route exact  {...item} />)
            }
    
        </Switch>
    )
}
