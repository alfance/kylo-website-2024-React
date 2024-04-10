import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './portfolio.css'

const Portfolio = (props) => {
  return (
    <div className="portfolio-container">
      <Helmet>
        <title>Kylo Xue Portfolio Website</title>
      </Helmet>
      <div className="portfolio-portfolio">
        <Navbar rootClassName="navbar-root-class-name"></Navbar>
        <div className="portfolio-portfolio1 port-container-responsive">
          <div className="portfolio-header">
            <div className="portfolio-header1 content-divide">
              <section className="portfolio-headline-subhead content-divide-child">
                <div className="portfolio-headline-subhead01">
                  <span className="portfolio-text">Nice to meet you :)</span>
                  <span className="portfolio-text01">
                    <span className="Epilogue-64Bold">
                      I am
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="Epilogue-64Bold">Kylo Xue</span>
                    <br></br>
                    <br className="Epilogue-17"></br>
                    <span className="Epilogue-17">
                      I&apos;m a
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="Epilogue-17Bold">
                      product and interactive designer
                    </span>
                    <span className="Epilogue-17">
                      {' '}
                      passionate about crafting user-centric digital
                      experiences.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br className="Epilogue-17"></br>
                    <br className="Epilogue-17"></br>
                    <span className="Epilogue-17">
                      Working in the design field for over 10 years, I&apos;ve
                      been enhancing User experience in the
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span className="Epilogue-17">
                      Gaming, VFX, e-commerce, and e-Retail sectors, from
                      startups to corporations.
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </div>
              </section>
              <img
                alt="stickerfinallayer1I176"
                src="/external/stickerfinallayer1i176-2l5o.png"
                className="portfolio-stickerfinallayer1 content-divide-child"
              />
            </div>
          </div>
          <div className="portfolio-latestwork-section">
            <animate-on-reveal animation="fadeInUp">
              <span
                data-thq-animate-on-reveal="true"
                className="portfolio-text14 Epilogue-36Light"
              >
                <span>Projects &amp; Work</span>
              </span>
            </animate-on-reveal>
            <div className="portfolio-workcards">
              <div className="portfolio-workcard">
                <div className="portfolio-workcard-locked-aspect-ratio">
                  <div className="portfolio-workcard01">
                    <div className="portfolio-workcard-locked-aspect-ratio1">
                      <div className="portfolio-workcard02">
                        <animate-on-reveal
                          animation="fadeInUp"
                          duration="300ms"
                          delay="0s"
                          direction="normal"
                          easing="ease"
                          iteration="1"
                        >
                          <div
                            data-thq-animate-on-reveal="true"
                            className="portfolio-headline-subhead02"
                          >
                            <div className="home-headline-align">
                              <Link
                                to="/portfolioproject1"
                                className="portfolio-text16"
                              >
                                <span className="Epilogue-36Light">Unity</span>
                                <span className="Epilogue-36Bold">
                                  {' '}
                                  Live Capture Packages
                                </span>
                              </Link>
                              <span className="portfolio-text19 Epilogue-24Light">
                                2021 - 2023
                              </span>
                            </div>
                            <span className="portfolio-text20 Epilogue-17">
                              The Live Capture package in Unity brings
                              characters and cameras to life easily, using Apple
                              devices for intuitive motion capture. This
                              streamlines the animation process, removing the
                              hassle of manual keyframing.
                            </span>
                          </div>
                        </animate-on-reveal>
                        <Link
                          to="/portfolioproject1"
                          className="portfolio-navlink"
                        >
                          <div className="portfolio-homecontentimage-locked-aspect-ratio">
                            <div className="portfolio-homecontentimage">
                              <img
                                alt="image"
                                src="/external/face-cap2-mac-case.gif"
                                className="portfolio-image"
                              />
                              <img
                                alt="image"
                                src="/external/face-cap2-iphone-case.gif"
                                className="portfolio-image1"
                              />
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div className="portfolio-frame"></div>
                    </div>
                  </div>
                  <div className="portfolio-frame01"></div>
                </div>
              </div>
              <div className="portfolio-workcard03">
                <div className="portfolio-workcard-locked-aspect-ratio2">
                  <div className="portfolio-workcard04">
                    <div className="portfolio-workcard-locked-aspect-ratio3">
                      <div className="portfolio-workcard05">
                        <animate-on-reveal
                          animation="fadeInUp"
                          duration="300ms"
                          delay="0s"
                          direction="normal"
                          easing="ease"
                          iteration="1"
                        >
                          <div
                            data-thq-animate-on-reveal="true"
                            className="portfolio-headline-subhead03"
                          >
                            <div className="portfolio-frame21 home-headline-align">
                              <Link
                                to="/portfolioproject2"
                                className="portfolio-text21"
                              >
                                <span className="Epilogue-36Bold">
                                  Wētā Realtime
                                  <span
                                    dangerouslySetInnerHTML={{
                                      __html: ' ',
                                    }}
                                  />
                                </span>
                                <span className="Epilogue-36Light">
                                  Tools Integration
                                </span>
                              </Link>
                              <span className="portfolio-text24 Epilogue-24Light">
                                <span>July 2023 - Present</span>
                              </span>
                            </div>
                            <span className="portfolio-text26 Epilogue-17">
                              <span>
                                The Weta Realtime Tools for Unity editor enhance
                                workflow efficiency and enable the creation of
                                visually impressive content for both game and
                                film production. This suite of features
                                streamlines the development process,
                                facilitating the rapid creation of high-quality
                                visuals.
                              </span>
                            </span>
                          </div>
                        </animate-on-reveal>
                        <div className="portfolio-homecontentimage-locked-aspect-ratio1">
                          <div className="portfolio-homecontentimage01 background-contain image-contain">
                            <Link
                              to="/portfolioproject2"
                              className="portfolio-navlink1"
                            >
                              <div className="portfolio-homecontentimage-locked-aspect-ratio2 image-contain">
                                <div className="portfolio-homecontentimage02"></div>
                                <div className="portfolio-frame02"></div>
                              </div>
                            </Link>
                          </div>
                          <div className="portfolio-frame03"></div>
                        </div>
                      </div>
                      <div className="portfolio-frame04"></div>
                    </div>
                  </div>
                  <div className="portfolio-frame05"></div>
                </div>
              </div>
              <div className="portfolio-workcard06">
                <div className="portfolio-workcard-locked-aspect-ratio4">
                  <div className="portfolio-workcard07">
                    <div className="portfolio-workcard-locked-aspect-ratio5">
                      <div className="portfolio-workcard08">
                        <animate-on-reveal animation="fadeInUp">
                          <div
                            data-thq-animate-on-reveal="true"
                            className="portfolio-headline-subhead04"
                          >
                            <div className="home-headline-align">
                              <Link
                                to="/portfolioproject3"
                                className="portfolio-text28 Epilogue-36Bold"
                              >
                                <span className="portfolio-text29">Unity</span>
                                <span> Virtual Production</span>
                              </Link>
                              <span className="portfolio-text31 Epilogue-24Light">
                                <span>2021 - 2023</span>
                              </span>
                            </div>
                            <span className="portfolio-text33 Epilogue-17">
                              <span>
                                Unity&apos;s toolkit for TV, broadcast, and
                                animations equips artists and filmmakers with
                                advanced capabilities for creating real-time
                                cinematics and pre-visualizations. This empowers
                                creative professionals to seamlessly bring their
                                visions to life.
                              </span>
                            </span>
                          </div>
                        </animate-on-reveal>
                        <div className="portfolio-homecontentimage-locked-aspect-ratio3">
                          <div className="portfolio-homecontentimage03">
                            <Link
                              to="/portfolioproject3"
                              className="portfolio-navlink2"
                            >
                              <div className="portfolio-homecontentimage04 image-contain">
                                <img
                                  alt="vsethomegif1I176"
                                  src="/external/vset-home-gif.gif"
                                  className="portfolio-vsethomegif1"
                                />
                              </div>
                            </Link>
                          </div>
                          <div className="portfolio-frame06"></div>
                        </div>
                      </div>
                      <div className="portfolio-frame07"></div>
                    </div>
                  </div>
                  <div className="portfolio-frame08"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="portfolio-latestwork-section-property3">
            <span className="portfolio-text35 Epilogue-36Light">
              <span>Case Studies</span>
            </span>
            <div className="portfolio-workcards1">
              <a
                href="https://www.figma.com/proto/lcnMBhcQTDwYR9ndPfYrOS/Presentation-hair?page-id=635%3A885&amp;type=design&amp;node-id=635-2037&amp;viewport=181%2C232%2C0.03&amp;t=Cq1ANUWaZeh9LHS5-1&amp;scaling=scale-down&amp;starting-point-node-id=635%3A2037&amp;mode=design"
                target="_blank"
                rel="noreferrer noopener"
                className="portfolio-link"
              >
                <div className="portfolio-workcard09">
                  <div className="portfolio-homecontentimage05">
                    <div className="portfolio-homecontentimage-locked-aspect-ratio4">
                      <div className="portfolio-homecontentimage06"></div>
                      <div className="portfolio-frame09"></div>
                    </div>
                  </div>
                  <div className="portfolio-headline-subhead05">
                    <span className="portfolio-text37 Epilogue-24Bold">
                      <span>Strand-based Hair Rendering</span>
                    </span>
                    <span className="portfolio-text39 Epilogue-17Regular">
                      <span>2023</span>
                    </span>
                  </div>
                </div>
              </a>
              <a
                href="https://www.figma.com/proto/4DXQb1JFrCXHADVfyL6Z0B/Live-capture-presentations?page-id=1%3A2&amp;type=design&amp;node-id=1-5112&amp;viewport=6074%2C1221%2C0.5&amp;t=bmz5kWvzGjd9ajbt-1&amp;scaling=scale-down&amp;starting-point-node-id=1%3A5112&amp;mode=design"
                target="_blank"
                rel="noreferrer noopener"
                className="portfolio-link1"
              >
                <div className="portfolio-workcard10">
                  <div className="portfolio-homecontentimage07">
                    <div className="portfolio-homecontentimage-locked-aspect-ratio5">
                      <div className="portfolio-homecontentimage08"></div>
                      <div className="portfolio-frame10"></div>
                    </div>
                  </div>
                  <div className="portfolio-headline-subhead06">
                    <span className="portfolio-text41 Epilogue-24Bold">
                      <span>
                        Improving Live-Streaming Workflow
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                    <span className="portfolio-text43 Epilogue-17Regular">
                      <span>2022 - 2023</span>
                    </span>
                  </div>
                </div>
              </a>
              <a
                href="https://www.figma.com/proto/aKWOHcDnwx4CRrdNEq34f4/Waypoints-Presentation?page-id=1%3A1684&amp;type=design&amp;node-id=1-1881&amp;viewport=2098%2C1296%2C0.13&amp;t=sQIUnMH35P0cdNNE-1&amp;scaling=scale-down&amp;mode=design"
                target="_blank"
                rel="noreferrer noopener"
                className="portfolio-link2"
              >
                <div className="portfolio-workcard11">
                  <div className="portfolio-homecontentimage09">
                    <div className="portfolio-homecontentimage-locked-aspect-ratio6">
                      <div className="portfolio-homecontentimage10"></div>
                      <div className="portfolio-frame11"></div>
                    </div>
                  </div>
                  <div className="portfolio-headline-subhead07">
                    <span className="portfolio-text45 Epilogue-24Bold">
                      <span>Designing Waypoint System</span>
                    </span>
                    <span className="portfolio-text47 Epilogue-17Regular">
                      <span>2019</span>
                    </span>
                  </div>
                </div>
              </a>
              <a
                href="https://alfance.github.io//kyloport/#/joist"
                target="_blank"
                rel="noreferrer noopener"
                className="portfolio-link3"
              >
                <div className="portfolio-workcard12">
                  <div className="portfolio-homecontentimage11">
                    <div className="portfolio-homecontentimage-locked-aspect-ratio7">
                      <div className="portfolio-homecontentimage12"></div>
                      <div className="portfolio-frame12"></div>
                    </div>
                  </div>
                  <div className="portfolio-headline-subhead08">
                    <span className="portfolio-text49 Epilogue-24Bold">
                      <span>Driving Sales for Invoicing app</span>
                    </span>
                    <span className="portfolio-text51 Epilogue-17Regular">
                      <span>2021</span>
                    </span>
                  </div>
                </div>
              </a>
              <a
                href="https://alfance.github.io//kyloport/#/briovr"
                target="_blank"
                rel="noreferrer noopener"
                className="portfolio-link4"
              >
                <div className="portfolio-workcard13">
                  <div className="portfolio-homecontentimage13">
                    <div className="portfolio-homecontentimage-locked-aspect-ratio8">
                      <div className="portfolio-homecontentimage14"></div>
                      <div className="portfolio-frame13"></div>
                    </div>
                  </div>
                  <div className="portfolio-headline-subhead09">
                    <span className="portfolio-text53 Epilogue-24Bold">
                      <span>
                        Creating Interactive Behaviour system
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                    <span className="portfolio-text55 Epilogue-17Regular">
                      <span>2019</span>
                    </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name"></Footer>
      </div>
    </div>
  )
}

export default Portfolio
