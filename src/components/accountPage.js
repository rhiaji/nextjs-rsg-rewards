'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import style from '../../public/styles/accountPage.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faShop, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const SSC = require('sscjs')
const ssc = new SSC('https://api2.hive-engine.com/rpc')

const AccountPage = () => {
    const [show, setShow] = useState(true)
    const [data, setData] = useState([])
    const [balance, setBalance] = useState([])
    const [packs, setPacks] = useState()
    const [user, setUser] = useState('')

    const fetchCards = async () => {
        let limit = 1000
        let offset = 0
        let targetLimit = 3000
        let allHistory = []
        let packs = []
        let hasMoreData = true

        while (hasMoreData) {
            try {
                const url = `https://history.hive-engine.com/accountHistory?account=${user}&limit=${limit}&offset=${offset}&symbol=STAR`

                const response = await fetch(url)
                const data = await response.json()

                data.forEach((element) => {
                    if (element.operation === 'nft_issueMultiple') {
                        const card = {
                            type: element.properties.type,
                            class: element.properties.class,
                            stats: element.properties.stats,
                            timestamp: element.timestamp,
                            nft: element.nft,
                            tx: element.transactionId,
                        }
                        allHistory.push(card)
                    }
                })

                // Update offset for the next request
                offset += limit

                // Check if the total cards exceed the target limit
                if (allHistory.length >= targetLimit) {
                    // Trim excess data beyond the target limit
                    allHistory = allHistory.slice(0, targetLimit)
                    console.log(`Reached the target limit of ${targetLimit} cards. Stopping.`)
                    hasMoreData = false
                }
            } catch (error) {
                console.error('Error:', error)
                // Handle errors here if needed
                hasMoreData = false // Stop the loop on error
            }
        }

        // Define the batch size
        const batchSize = 3

        // Loop through the data array in batches
        for (let i = 0; i < allHistory.length; i += batchSize) {
            const batch = allHistory.slice(i, i + batchSize)
            packs.push(batch)
        }

        console.log(packs)
        setPacks(packs)
    }

    const fetchData = async (player) => {
        const url = `https://risingstargame.com/playerstats.asp?player=${player}`

        try {
            const response = await fetch(url)

            if (!response.ok) {
                throw new Error('Failed to fetch data')
            }

            const playerData = await response.json()
            setData(playerData)
        } catch (error) {
            console.error('Error:', error)
            // Handle errors more gracefully if needed
        }
    }

    const getBalances = async (account) => {
        return new Promise((resolve, reject) => {
            ssc.find('tokens', 'balances', { account }, 1000, 0, [], (err, result) => {
                if (err) {
                    reject(err)
                    return
                }

                let bal = []

                result.forEach((element) => {
                    const SYMBOL = element.symbol
                    if (element.symbol != null) {
                        if (SYMBOL === 'STARBITS' || SYMBOL === 'STARPRO') {
                            const jsonData = {
                                symbol: SYMBOL,
                                balance: element.balance,
                            }
                            bal.push(jsonData)
                        }
                    }
                })

                resolve(bal)
            })
        })
    }

    useEffect(() => {
        const userPlayer = localStorage.getItem('username')
        setUser(userPlayer)

        const fetchDataAndBalances = async () => {
            try {
                if (userPlayer) {
                    await fetchData(userPlayer)

                    const balances = await getBalances(userPlayer)
                    setBalance(balances)
                }
            } catch (error) {
                console.error('Error:', error)
            }
        }

        fetchDataAndBalances()
    }, [])

    const handleSearch = async () => {
        let player = document.getElementById('playerName').value
        setUser(player)
        await fetchData(player)
        const balances = await getBalances(player)
        setBalance(balances)
    }

    function starbits() {
        window.open('https://tribaldex.com/trade/STARBITS', '_blank')
    }

    function starpro() {
        window.open('https://tribaldex.com/trade/STARPRO', '_blank')
    }

    return (
        <div className={style.container}>
            <div className={style.cardContent} style={{ display: show ? 'none' : 'block' }}>
                <section className={style.header}>
                    <div>
                        <p>Your last 3000 pack Openings </p>
                    </div>
                    <div>
                        <button onClick={() => setShow(true)}> Back to account </button>
                    </div>
                </section>
                <section className={style.header}>
                    <div>Date</div>
                    <div>Cards</div>
                </section>
                <div className={style.transactions}>
                    {packs &&
                        packs.map((result) => (
                            <section className={style.section}>
                                <div className={style.timestamp}>
                                    <span>
                                        <h4>{new Date(result[0].timestamp * 1000).toLocaleString()}</h4>
                                    </span>
                                    <span>
                                        <a href={`https://hivehub.dev/tx/${result[0].tx}`}>Tx: {result[0].tx}</a>
                                    </span>
                                    <span>
                                        <a href={`https://hivehub.dev/tx/${result[1].tx}`}>Tx: {result[1].tx}</a>
                                    </span>
                                    <span>
                                        <a href={`https://hivehub.dev/tx/${result[2].tx}`}>Tx: {result[2].tx}</a>
                                    </span>
                                </div>
                                <div className={style.cards}>
                                    <div className={style.cardsContent}>
                                        <span>Type: {result[0].type}</span>
                                        <span>Class: {result[0].class}</span>
                                        <span>Stats: {result[0].stats}</span>
                                        <span>NFT ID: {result[0].nft}</span>
                                    </div>
                                    <div className={style.cardsContent}>
                                        <span>Type: {result[1].type}</span>
                                        <span>Class: {result[1].class}</span>
                                        <span>Stats: {result[1].stats}</span>
                                        <span>NFT ID: {result[1].nft}</span>
                                    </div>
                                    <div className={style.cardsContent}>
                                        <span>Type: {result[2].type}</span>
                                        <span>Class: {result[2].class}</span>
                                        <span>Stats: {result[2].stats}</span>
                                        <span>NFT ID: {result[2].nft}</span>
                                    </div>
                                </div>
                            </section>
                        ))}
                </div>
            </div>
            <div className={style.content} style={{ display: show ? 'block' : 'none' }}>
                <section className={style.search}>
                    <div>
                        <p>@{user} risingstar's account</p>
                    </div>
                    <div className={style.searchDiv}>
                        <input type="text" id="playerName" placeholder="Search player by username..." />
                        <button onClick={handleSearch}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </section>
                <section className={style.head}>
                    <div className={style.headBal}>
                        <p>Hive Engine Balance</p>
                        <div className={style.balances}>
                            <div>
                                {balance && balance.length > 1 && balance[1]?.balance !== undefined && (
                                    <>
                                        <Image src="/images/starpro.png" width={20} height={20} alt="Starpro" />
                                        <p>{Number(balance[1]?.balance).toFixed(4)}</p>
                                        <button>
                                            <FontAwesomeIcon icon={faPaperPlane} />
                                        </button>
                                        <button onClick={starpro}>
                                            <FontAwesomeIcon icon={faShop} />
                                        </button>
                                    </>
                                )}
                            </div>
                            <div>
                                {balance && balance.length > 0 && balance[0]?.balance !== undefined && (
                                    <>
                                        <a>
                                            <Image src="/images/starbits.png" width={20} height={20} alt="Starbits" />
                                        </a>
                                        <p>{Number(balance[0]?.balance).toFixed(0)}</p>
                                        <button>
                                            <FontAwesomeIcon icon={faPaperPlane} />
                                        </button>
                                        <button onClick={starbits}>
                                            <FontAwesomeIcon icon={faShop} />
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className={style.stats}>
                        <div>
                            <Image src="/images/total_fans.png" width={60} height={60} alt="fans" />
                            <p>{data[0]?.cardsfans}</p>
                        </div>
                        <div>
                            <Image src="/images/total_luck.png" width={60} height={60} alt="luck" />
                            <p>{data[0]?.cardsluck}</p>
                        </div>
                        <div>
                            <Image src="/images/total_skill.png" width={60} height={60} alt="skill" />
                            <p>{data[0]?.lessonskill}</p>
                        </div>
                        <div>
                            <Image src="/images/total_im.png" width={60} height={60} alt="im" />
                            <p>{data[0]?.cardsim}</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className={style.stats2}>
                        <div>
                            <h3>Total Missions</h3>
                            <p>{data[0]?.missions}</p>
                        </div>
                        <div>
                            <h3>Mission Ego</h3>
                            <p>{data[0]?.missionego}</p>
                        </div>
                        <div>
                            <h3>Card Skills</h3>
                            <p>{data[0]?.cardskill}</p>
                        </div>
                        <div>
                            <h3>Total Nft Cards</h3>
                            <p>{data[0]?.totalnfts}</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className={style.stats3}>
                        <div>
                            <h3>Website</h3>
                            <a href="https://www.risingstargame.com/game.asp" target="_blank">
                                <p>risingstargame</p>
                            </a>
                        </div>
                        <div>
                            <h3>3rd Party Marketplaces</h3>
                            <span>
                                <a href="https://rsgfam.com/" target="_blank">
                                    <p>rsgfam</p>
                                </a>
                                <a href="https://nftm.art/" target="_blank">
                                    <p>NFTMart</p>
                                </a>
                            </span>
                        </div>
                        <div>
                            <h3>Opened Packs</h3>
                            <button
                                onClick={async () => {
                                    fetchCards()
                                    setShow(false)
                                }}
                            >
                                Check Cards
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default AccountPage
