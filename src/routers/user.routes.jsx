import { Route, Switch  } from "react-router-dom";
import { Login} from '../pages'


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
                ROUTES.map((item , index) => <Route key={`${index}`} exact  {...item} />)
            }
    
        </Switch>
    )
}
