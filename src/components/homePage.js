import style from '../../public/styles/homePage.module.css'
import Image from 'next/image'

const HomePage = () => {
    return (
        <div className={style.container}>
            <div className={style.content}>
                <header>
                    <h2>
                        Welcome to <span className={style.blue}>RisingStar Dashboard</span> - Your Ultimate Hub for Rising Star Insights!
                    </h2>
                </header>

                <section>
                    <p>
                        Unlock the full potential of your RisingStar journey with <span className={style.blue}>RisingStar Dashboard</span>. Whether
                        you're a seasoned player looking to enhance your strategy or a newcomer exploring the blockchain gaming universe, this
                        platform is your gateway to a wealth of information.
                    </p>
                </section>

                <section>
                    <h2>
                        Why <span className={style.blue}>RisingStar Dashboard</span>?
                    </h2>
                    <ul>
                        <li>
                            <strong>Explore Player Accounts</strong>: Dive deep into the stats and rewards of RisingStar players. Log in securely with
                            Hive Keychain to access your own account or browse through the profiles of other players.
                        </li>
                        <li>
                            <strong>Marketplace Integration</strong>: Seamlessly connect with the Rising Star community through our integrated
                            3rd-party marketplace. Explore, trade, and send tokens with ease.
                        </li>
                        <li>
                            <strong>User-Friendly Interface</strong>: Our intuitive interface is designed with you in mind. Navigate effortlessly,
                            customize views, and filter information to tailor your experience.
                        </li>
                    </ul>
                </section>

                <section>
                    <p>
                        Discover a new dimension of Rising Star gameplay. <span className={style.blue}>RisingStar Dashboard</span> is not just a
                        platform; it's your personalized companion in the RisingStar universe.
                    </p>
                </section>

                <section>
                    <p>
                        Ready to embark on a journey? Log in now and unlock the secrets of Rising Star! created by{' '}
                        <a href="https://peakd.com/@rhiaji" target="_blank">
                            @rhiaji
                        </a>
                    </p>
                    <p>
                        <a href="https://www.risingstargame.com?referrer=dvpm">Don't have an account? Join us now!</a>
                    </p>
                </section>

                <section>
                    <h2>RisingStar News and Updates</h2>
                </section>
                <section className={style.news}>
                    <div>
                        <Image src="/images/pmt.png" width={300} height={200} alt="pmt" />
                        <span>
                            <a href="https://peakd.com/hive-195370/@risingstargame/purchase-multiple-cards-in-one-transaction" target="_blank">
                                Purchase Multiple Cards in One Transaction
                            </a>

                            <h5>November 15, 2023</h5>

                            <p>
                                You can now purchase multiple cards of the same currency type in one transaction greatly speeding up the process of
                                buying cards in bulk!
                            </p>
                            <ul>
                                <li>On the market tab for a card click the green trolley icon to add a card to your basket</li>
                                <li>
                                    When you have added all the cards click the trolley icon next to the word "Market" to view your trolley and buy
                                    the cards
                                </li>
                                <li>Make sure you have popups enabled in your browser to view your basket</li>
                            </ul>
                        </span>
                    </div>
                    <div>
                        <Image src="/images/inc.png" width={300} height={200} alt="inc" />
                        <span>
                            <a href="https://peakd.com/hive-195370/@risingstargame/raves-rewards-increase" target="_blank">
                                Raves Rewards Increase!
                            </a>
                            <h5>October 20, 2023</h5>
                            <p>
                                During this prolonged bear market we have been working hard to build up our various Hive accounts to enable us to
                                provide sustainable rewards for both the rankings and Raves. Following on from the recent increase in the rankings
                                rewards we are pleased to tell you that we have now increased the Raves rewards pool by 1 SWAP.HIVE a day from Rave
                                event 87 onwards....
                            </p>
                            <a href="https://peakd.com/hive-195370/@risingstargame/raves-rewards-increase" target="_blank">
                                Read more....
                            </a>
                        </span>
                    </div>
                    <div>
                        <Image src="/images/lbrewards.png" width={300} height={200} alt="lbrewards" />
                        <span>
                            <a
                                href="https://peakd.com/hive-195370/@risingstargame/increased-leaderboard-rewards-and-changes-to-reward-more-players"
                                target="_blank"
                            >
                                Increased Leaderboard Rewards & Changes To REWARD MORE PLAYERS!
                            </a>
                            <h5>October 11, 2023</h5>
                            <p>
                                As you probably know by now we have been building our HIVE accounts to provide ever increasing rewards for Rising Star
                                players in a sustainable way. We are now in a position to increase the Leaderboard rewards again and we have also
                                decided to modify the way the rewards are calculated so that more players can benefit....
                            </p>
                            <a
                                href="https://peakd.com/hive-195370/@risingstargame/increased-leaderboard-rewards-and-changes-to-reward-more-players"
                                target="_blank"
                            >
                                Read more....
                            </a>
                        </span>
                    </div>
                    <div>
                        <Image src="/images/changesml.png" width={740} height={200} alt="changesml" />
                        <span>
                            <a href="https://peakd.com/hive-195370/@risingstargame/changes-to-music-lessons-increase-in-rewards" target="_blank">
                                Changes to Music Lessons / Increase in Rewards
                            </a>
                            <h5>October 7, 2023</h5>
                            <p>
                                The biggest challenge facing Play To Earn games is token inflation. People expect to earn more as they progress in a
                                game and so inflation is a necessary evil that has to be managed somehow.
                            </p>
                            <p>
                                In a games early days there are usually enough new players coming in to soak up this inflation as we saw during our
                                first year or so. We also happened to be in the middle of a bull market so there was plenty of new crypto being
                                spent!....
                            </p>
                            <a href="https://peakd.com/hive-195370/@risingstargame/changes-to-music-lessons-increase-in-rewards" target="_blank">
                                Read more....
                            </a>
                        </span>
                    </div>
                    <div>
                        <Image src="/images/drop.png" width={300} height={200} alt="drop" />
                        <span>
                            <a href="https://peakd.com/hive-195370/@risingstargame/new-dj-drip-drop-drip" target="_blank">
                                New "DJ Drip Drop" + DRIP Rewards for the TOP 100!
                            </a>
                            <h5>October 2, 2023</h5>
                            <p>
                                <a href="https://peakd.com/@thorlock">@thorlock</a> has generously given us a years worth of DRIP tokens to give out
                                to Rising Star players. So from today 0.03 DRIP will be sent to the top 100 in the rankings.
                            </p>
                            <br></br>
                            <h3>DRIP - Worth Holding On To</h3>
                            <p>
                                If you keep at least 1 DRIP in your wallet you will get a share of a daily SWAP.HIVE payout and if you stake at least
                                1 DRIP you will also get additional DRIP!....
                            </p>
                            <a href="https://peakd.com/hive-195370/@risingstargame/new-dj-drip-drop-drip" target="_blank">
                                Read more....
                            </a>
                        </span>
                    </div>
                    <div>
                        <Image src="/images/tip.png" width={390} height={200} alt="tip" />
                        <span>
                            <a
                                href="https://peakd.com/hive-195370/@risingstargame/you-can-now-tip-radio-tracks-and-support-hive-musicians"
                                target="_blank"
                            >
                                You can now TIP radio tracks and support HIVE Musicians!
                            </a>
                            <h5>September 27, 2023</h5>
                            <p>
                                It's been a long time coming but finally you can support the independent musicians that you hear on RISING STAR RADIO!
                            </p>
                            <p>If a track has a HIVE account associated with it you will see a green thumbs up icon in the radio player....</p>
                            <a
                                href="https://peakd.com/hive-195370/@risingstargame/you-can-now-tip-radio-tracks-and-support-hive-musicians"
                                target="_blank"
                            >
                                Read more....
                            </a>
                        </span>
                    </div>
                    <div>
                        <Image src="/images/ravesbutton.png" width={830} height={200} alt="ravesbutton" />
                        <span>
                            <a
                                href="https://peakd.com/hive-195370/@risingstargame/some-tweaking-of-the-new-raves-holiday-sickness-formula"
                                target="_blank"
                            >
                                Some tweaking of the new Raves "Holiday / Sickness" Formula
                            </a>
                            <h5>September 4, 2023</h5>
                            <p>
                                Raves should be about teamwork. We want it to be the case that people form teams and pool their NFTs together to
                                compete against other rave colours. What we don't want is individuals to be able to use 100s of RV cards to win and
                                this is still happening....
                            </p>
                            <a
                                href="https://peakd.com/hive-195370/@risingstargame/some-tweaking-of-the-new-raves-holiday-sickness-formula"
                                target="_blank"
                            >
                                Read more....
                            </a>
                        </span>
                    </div>
                    <div>
                        <Image src="/images/titbits.jpg" width={300} height={200} alt="titbits" />
                        <span>
                            <a href="https://peakd.com/hive-195370/@risingstargame/rising-star-pro-map-a-few-titbits" target="_blank">
                                Rising Star "PRO" Map - a few "titbits"
                            </a>
                            <h5>July 22, 2023</h5>
                            <p>
                                Sorry about the lack of announcements but as many of you know we have some things we have to deal with irl that are
                                stopping us working on new features at the moment. We should be back to normal in the next few weeks if all goes well.
                            </p>
                            <p>
                                Anyway just to keep you going I thought I would give you a small bit of info on a feature of the PRO map so you have
                                something to think about...
                            </p>
                            <a href="https://peakd.com/hive-195370/@risingstargame/rising-star-pro-map-a-few-titbits" target="_blank">
                                Read more....
                            </a>
                        </span>
                    </div>
                    <div>
                        <Image src="/images/ravetut.png" width={300} height={200} alt="ravetut" />
                        <span>
                            <a href="https://peakd.com/hive-195370/@risingstargame/raves-tutorial" target="_blank">
                                Raves Tutorial
                            </a>
                            <h5>May 26, 2023</h5>
                            <h3>What are Raves in Rising Star?</h3>
                            <p>Raves is a game mode that allows you to compete against three other teams to make your chosen rave colour win.</p>
                            <p>
                                The winning rave colour gets 75% of the reward pool shared amongst the players in that rave. The remaining 25% is
                                shared equally between the other three raves....
                            </p>
                            <a href="https://peakd.com/hive-195370/@risingstargame/raves-tutorial" target="_blank">
                                Read more....
                            </a>
                        </span>
                    </div>
                    <div>
                        <Image src="/images/ravelive.png" width={1000} height={200} alt="ravelive" />
                        <span>
                            <a href="https://peakd.com/hive-195370/@risingstargame/raves-goes-live-on-friday" target="_blank">
                                Raves Goes Live on FRIDAY!
                            </a>
                            <h5>May 23, 2023</h5>
                            <h3>It's finally here!</h3>
                            <p>First of all a big THANK YOU to everyone who has helped us test Raves.</p>
                            <p>
                                It has taken a lot longer than expected but that is often the case with development isn't it! But this Friday we will
                                switch Raves over to paying rewards in SWAP.HIVE and also subtract the stats of any FA cards you send to raves from
                                missions as was always intended (but was switched off during testing).
                            </p>
                            <a href="https://peakd.com/hive-195370/@risingstargame/raves-goes-live-on-friday" target="_blank">
                                Read more....
                            </a>
                        </span>
                    </div>
                    <div>
                        <Image src="/images/upvote.jpg" width={400} height={200} alt="upvote" />
                        <span>
                            <a href="https://peakd.com/hive-195370/@risingstargame/upvotes-for-giveaway-posts-new-requirement" target="_blank">
                                Upvotes for Giveaway Posts - New Requirement
                            </a>
                            <h5>May 22, 2023</h5>
                            <p>
                                Just a quick post to say that we will only upvote giveaway posts that are giving away at least 10,000 STARBITS from
                                now on.
                            </p>
                            <a href="https://peakd.com/hive-195370/@risingstargame/upvotes-for-giveaway-posts-new-requirement" target="_blank">
                                Read more....
                            </a>
                        </span>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default HomePage
