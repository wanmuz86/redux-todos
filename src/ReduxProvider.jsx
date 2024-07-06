import { Provider } from "react-redux";
import {store} from './app/store'

// We create a ReduxProvider component, where all component that has acess to the store is defined within children
// And this Component will be called , for eg at main.jsx
export default function ReduxProvider({children}){
    return <Provider store={store}>{children}</Provider>
}