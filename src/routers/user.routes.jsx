import { Route, Switch  } from "react-router-dom";
import {SignUp , Login} from '../pages'

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
                ROUTES.map((item , index) => <Route key={`${index}`} exact  {...item} />)
            }
    
        </Switch>
    )
}
