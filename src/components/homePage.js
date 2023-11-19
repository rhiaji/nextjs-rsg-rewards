'use client'
import React, { useState, useEffect } from 'react'
import style from '../../public/styles/homePage.module.css'

const HomePage = () => {
    const [data, setData] = useState([])
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const fetchData = async (limit, offset) => {
            let allHistory = []
            let history = []
            let rewards = 0
            let hasMoreData = true

            while (hasMoreData) {
                const url = `https://history.hive-engine.com/accountHistory?account=kaokaokao&limit=${limit}&offset=${offset}&symbol=SWAP.HIVE`

                try {
                    const response = await fetch(url)
                    const data = await response.json()

                    if (data.length > 0) {
                        // Add the current batch of data to the history array
                        allHistory = allHistory.concat(data)

                        // Update offset for the next request
                        offset += limit
                    } else {
                        // If no more data, set hasMoreData to false
                        hasMoreData = false
                    }
                } catch (error) {
                    console.error('Error:', error)
                    // Handle errors here if needed
                    hasMoreData = false // Stop the loop on error
                }
            }

            allHistory.forEach((result) => {
                const memo = result.memo

                // Check if memo is not null and is defined before splitting
                if (memo !== null && memo !== undefined) {
                    const rave = memo.split(' ')
                    const reward = rave[1] + ' ' + rave[2]

                    if (reward === 'Raves reward') {
                        history.push(result)

                        if (rewards === 0) {
                            rewards = Number(result.quantity)
                        } else {
                            rewards += Number(result.quantity)
                        }
                    }
                }
            })
            setTotal(rewards)
            setData(history)
        }

        // Usage
        fetchData(1000, 0)
            .then((history) => {
                if (history.length === 0) {
                    console.log('No Raves Participated')
                }

                console.log(history)
            })
            .catch((error) => {
                console.error('Error:', error)
            })
    }, [])

    return <div className={style.container}>WELCOME TO HOME PAGE</div>
}

export default HomePage
