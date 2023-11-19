'use client'
import React, { useState, useEffect } from 'react'
import style from '../../public/styles/navigation.module.css'

const Navigation = () => {
    const [show, setShow] = useState(true)
    const [user, setUser] = useState()

    useEffect(() => {
        const player = localStorage.getItem('username')
        if (player) {
            setShow(false)
            setUser(player)
        }
    }, []) // Empty dependency array ensures the effect runs only once after the initial render

    function login() {
        const username = window.prompt('Enter Hive Username')
        const lowercasedUsername = username.toLowerCase()

        hive_keychain.requestSignBuffer(lowercasedUsername, 'AutoCore Login', 'Posting', function (response) {
            if (response.success) {
                setUser(lowercasedUsername)
                localStorage.setItem('username', lowercasedUsername)
            } else {
                alert('Login failed') // You might want to handle failures appropriately
            }
        })
    }

    function logout() {
        localStorage.clear()
        alert('Loging out......')
        location.href = '/'
    }

    return (
        <div className={style.container}>
            <nav>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/account">Account</a>
                    </li>
                    <li>
                        <a href="/rave">Rave</a>
                    </li>
                    <li>
                        <a href="/daily">Rank</a>
                    </li>
                </ul>
                <button
                    className={style.login}
                    onClick={() => {
                        login()
                        setShow(false)
                    }}
                    style={{ display: show ? 'block' : 'none' }}
                >
                    Login
                </button>
                {user ? (
                    <div style={{ display: show ? 'none' : 'block' }}>
                        Welcome {user} ! ,{' '}
                        <button
                            className={style.logout}
                            onClick={() => {
                                logout()
                                setShow(false)
                            }}
                        >
                            Logout
                        </button>
                    </div>
                ) : null}
            </nav>
        </div>
    )
}

export default Navigation
