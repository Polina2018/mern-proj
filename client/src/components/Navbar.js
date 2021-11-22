import React, {useContext} from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

export const Navbar = () => {
    const auth = useContext(AuthContext)
    const history = useNavigate()
    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history('/')
    }
    return (
        <nav className=" blue darken-1">
            <div className="nav-wrapper blue darken-1" style={{padding:'0 2rem'}}>
            <span className="brand-logo">Сокращение ссылок</span>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><NavLink to="/create">Создать</NavLink></li>
                <li><NavLink to="/links">Ссылки</NavLink></li>
                <li><a href="/" onClick={logoutHandler}>Выйти</a></li>
            </ul>
            </div>
        </nav>
    )
}