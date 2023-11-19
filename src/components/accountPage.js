'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import style from '../../public/styles/accountPage.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faShop, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const SSC = require('sscjs')
const ssc = new SSC('https://api2.hive-engine.com/rpc')

const AccountPage = () => {
    const [data, setData] = useState([])
    const [balance, setBalance] = useState([])
    const [user, setUser] = useState('')

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
            <div className={style.content}>
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
                                        <Image src="/starpro.png" width={20} height={20} alt="Starpro" />
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
                                            <Image src="/starbits.png" width={20} height={20} alt="Starbits" />
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
                            <Image src="/total_fans.png" width={60} height={60} alt="fans" />
                            <p>{data[0]?.cardsfans}</p>
                        </div>
                        <div>
                            <Image src="/total_luck.png" width={60} height={60} alt="luck" />
                            <p>{data[0]?.cardsluck}</p>
                        </div>
                        <div>
                            <Image src="/total_skill.png" width={60} height={60} alt="skill" />
                            <p>{data[0]?.lessonskill}</p>
                        </div>
                        <div>
                            <Image src="/total_im.png" width={60} height={60} alt="im" />
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
            </div>
        </div>
    )
}

export default AccountPage
