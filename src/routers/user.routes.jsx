import { Route, Switch  } from "react-router-dom";
import {SignUp} from '../pages/index'

const Login = () => <h1>THIS LOGIN</h1>



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
            component: SignUp
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
