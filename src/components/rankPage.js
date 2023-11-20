'use client'
import React, { useState, useEffect } from 'react'
import style from '../../public/styles/rewardsPage.module.css'

const RankPage = () => {
    const [show, setShow] = useState(true)
    const [symbol, setSymbol] = useState('')
    const [data, setData] = useState([])
    const [total, setTotal] = useState(0)
    const [loading, setLoading] = useState(false)
    const [username, setUsername] = useState('')
    const drip = 'DRIP'
    const hive = 'SWAP.HIVE'

    const fetchData = async (limit, offset, player, symbol) => {
        setLoading(true)
        let allHistory = []
        let history = []
        let sbl
        let rewards = 0
        let hasMoreData = true

        // If a search term is provided, set the username to the search term
        const searchUsername = player.trim().toLowerCase() // Normalize the search term
        const fetchUsername = searchUsername || username // Use the search term if available, otherwise use the stored username
        setUsername(fetchUsername) // Update the state with the final value

        while (hasMoreData) {
            const url = `https://history.hive-engine.com/accountHistory?account=${fetchUsername}&limit=${limit}&offset=${offset}&symbol=${symbol}`

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

            sbl = result.symbol

            // Check if memo is not null and is defined before splitting
            if (memo !== null && memo !== undefined) {
                const daily = memo.split(' ')
                const rewardHive = daily[1] + ' ' + daily[2] + ' ' + daily[3]
                const rewardDrip = daily[3] + ' ' + daily[4]

                if (rewardHive === 'daily ranking reward') {
                    history.push(result)

                    if (rewards === 0) {
                        rewards = Number(result.quantity)
                    } else {
                        rewards += Number(result.quantity)
                    }
                } else if (rewardDrip === 'DRIP reward') {
                    history.push(result)

                    if (rewards === 0) {
                        rewards = Number(result.quantity)
                    } else {
                        rewards += Number(result.quantity)
                    }
                }
            }
        })

        setSymbol(sbl)
        setTotal(rewards)
        setData(history)
        setLoading(false)
    }

    useEffect(() => {
        const userPlayer = localStorage.getItem('username')
        setUsername(userPlayer)

        fetchData(1000, 0, userPlayer, hive)
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

    const handleSearch = () => {
        // Trigger data fetching when the search button is clicked
        let player = document.getElementById('playerName').value
        fetchData(1000, 0, player, hive)
    }

    const dripReward = () => {
        fetchData(1000, 0, username, drip)
    }

    const hiveReward = () => {
        fetchData(1000, 0, username, hive)
    }

    return (
        <div className={style.container}>
            <div className={style.content}>
                <section className={style.head}>
                    <div>
                        <p>
                            Total Rewards: <span className={style.total}>{total.toFixed(4)}</span> {total.toFixed(0) != 0 ? symbol : 'No Reward'}
                        </p>
                    </div>
                    <div className={style.rewardsbtn}>
                        <button
                            onClick={() => {
                                dripReward()
                                setShow(false)
                            }}
                            style={{ display: show ? 'block' : 'none' }}
                        >
                            Get DRIP Rewards
                        </button>
                        <button
                            onClick={() => {
                                hiveReward()
                                setShow(true)
                            }}
                            style={{ display: show ? 'none' : 'block' }}
                        >
                            Get SWAP.HIVE Rewards
                        </button>
                    </div>
                    <div className={style.search}>
                        <input type="text" id="playerName" placeholder="Search by username..." />
                        <button onClick={handleSearch}>Search</button>
                    </div>
                </section>
                <section className={style.headtx}>
                    <div>Date</div>
                    <div>From</div>
                    <div>To</div>
                    <div>Amount</div>
                </section>
                {loading ? (
                    <span className={style.loader}></span>
                ) : (
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
                                                {rewards.quantity} <span className={style.hive}>{symbol}</span>
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
                )}
            </div>
        </div>
    )
}

export default RankPage
