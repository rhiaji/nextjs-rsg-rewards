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
            const username = localStorage.getItem('username')

            while (hasMoreData) {
                const url = `https://history.hive-engine.com/accountHistory?account=${username}&limit=${limit}&offset=${offset}&symbol=SWAP.HIVE`

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
                    const daily = memo.split(' ')
                    const reward = daily[1] + ' ' + daily[2] + ' ' + daily[3]

                    if (reward === 'daily ranking reward') {
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

    return (
        <div className={style.container}>
            <div className={style.content}>
                <section className={style.head}>
                    <div>
                        <p>
                            Total Rank Rewards: <span className={style.total}>{total.toFixed(4)}</span> SWAP.HIVE
                        </p>
                    </div>
                </section>
                <section className={style.headtx}>
                    <div>Date</div>
                    <div>From</div>
                    <div>To</div>
                    <div>Amount</div>
                </section>
                <div className={style.transactions}>
                    {data &&
                        data.map((rewards) => (
                            <section className={style.section} key={rewards._id}>
                                <div>
                                    <div className={style.tx}>
                                        <p> {new Date(rewards.timestamp * 1000).toLocaleString()}</p>
                                    </div>
                                    <div className={style.tx}>
                                        <a href={`https://peakd.com/@${rewards.from}`} target="_blank">
                                            @{rewards.from}
                                        </a>
                                    </div>
                                    <div className={style.tx}>
                                        <a href={`https://peakd.com/@${rewards.to}`} target="_blank">
                                            @{rewards.to}
                                        </a>
                                    </div>
                                    <div className={style.tx}>
                                        <span className={style.quantity}>
                                            {rewards.quantity} <span className={style.hive}>SWAP.HIVE</span>
                                        </span>
                                    </div>
                                </div>
                                <div className={style.memo}>
                                    <div>
                                        <span>Tx:</span>
                                        <span>
                                            <a href={`https://hivehub.dev/tx/${rewards.transactionId}`} target="_blank">
                                                {rewards.transactionId}
                                            </a>
                                        </span>
                                    </div>
                                    <div>
                                        <span>Memo:</span>
                                        <span>{rewards.memo}</span>
                                    </div>
                                </div>
                            </section>
                        ))}
                </div>
            </div>
        </div>
    )
}

export default HomePage
