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
        <title>exported project</title>
      </Helmet>
      <div className="portfolio-portfolio">
        <Navbar rootClassName="navbar-root-class-name"></Navbar>
        <div className="portfolio-portfolio1">
          <div className="portfolio-header Epilogue-17 content-divide">
            <div className="portfolio-header1">
              <div className="portfolio-headline-subhead">
                <div className="portfolio-headline-subhead1">
                  <span className="portfolio-text Subtitle">
                    Nice to meet you :)
                  </span>
                  <span className="portfolio-text01">
                    <span className="Epilogue-64Bold">I am Kylo Xue</span>
                    <br></br>
                    <br></br>
                    <span className="Epilogue-24Light">
                      I&apos;m a product and interactive designer passionate
                      about crafting user-centric digital experiences.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br className="Epilogue-24Light"></br>
                    <br className="Epilogue-24Light"></br>
                    <span className="Epilogue-24Light">
                      With over 9 years of experience, I&apos;ve been enhancing
                      User experience in the Gaming, VFX, e-commerce, and
                      e-Retail sectors, from startups to corporations.
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
              </div>
              <img
                alt="stickerfinallayer1I176"
                src="/external/stickerfinallayer1i176-2l5o-200h.png"
                className="portfolio-stickerfinallayer1"
              />
            </div>
          </div>
          <div className="portfolio-latestwork-section">
            <span className="portfolio-text10 Epilogue-36Light">
              <span>Projects &amp; Work</span>
            </span>
            <div className="portfolio-workcards">
              <div className="portfolio-workcard">
                <div className="portfolio-workcard-locked-aspect-ratio">
                  <div className="portfolio-workcard01">
                    <div className="portfolio-workcard-locked-aspect-ratio1">
                      <div className="portfolio-workcard02">
                        <div className="portfolio-headline-subhead2">
                          <div className="portfolio-frame2">
                            <Link
                              to="/portfolioproject1"
                              className="portfolio-text12 Epilogue-24Bold"
                            >
                              Unity Live Capture Packages
                            </Link>
                            <span className="portfolio-text13 Epilogue-24Light">
                              <span>2022 - 2023</span>
                            </span>
                          </div>
                          <span className="portfolio-text15">
                            <span>
                              The Live Capture package in Unity brings
                              characters and cameras to life easily, using Apple
                              devices for intuitive motion capture. This
                              streamlines the animation process, removing the
                              hassle of manual keyframing.
                            </span>
                          </span>
                        </div>
                        <div className="portfolio-homecontentimage-locked-aspect-ratio">
                          <Link
                            to="/portfolioproject1"
                            className="portfolio-navlink"
                          >
                            <div className="portfolio-homecontentimage">
                              <div className="portfolio-mactemplate">
                                <div className="portfolio-shadow">
                                  <img
                                    alt="ShadowI176"
                                    src="/external/shadowi176-wc9g.svg"
                                    className="portfolio-shadow1"
                                  />
                                  <img
                                    alt="ShadowI176"
                                    src="/external/shadowi176-h959.svg"
                                    className="portfolio-shadow2"
                                  />
                                  <img
                                    alt="ShadowI176"
                                    src="/external/shadowi176-pi4z.svg"
                                    className="portfolio-shadow3"
                                  />
                                </div>
                                <div className="portfolio-device">
                                  <div className="portfolio-lid">
                                    <img
                                      alt="CasingI176"
                                      src="/external/casingi176-um3.svg"
                                      className="portfolio-casing"
                                    />
                                    <img
                                      alt="SealI176"
                                      src="/external/seali176-hamf.svg"
                                      className="portfolio-seal"
                                    />
                                    <img
                                      alt="GlassI176"
                                      src="/external/glassi176-7s2.svg"
                                      className="portfolio-glass"
                                    />
                                    <div className="portfolio-camera">
                                      <img
                                        alt="OuterLensI176"
                                        src="/external/outerlensi176-jwe8.svg"
                                        className="portfolio-outer-lens"
                                      />
                                      <div className="portfolio-inner-lens">
                                        <img
                                          alt="MaskCopyI176"
                                          src="/external/maskcopyi176-xxlg.svg"
                                          className="portfolio-mask-copy"
                                        />
                                        <div className="portfolio-object"></div>
                                        <img
                                          alt="MaskI176"
                                          src="/external/maski176-d9vj.svg"
                                          className="portfolio-mask"
                                        />
                                        <img
                                          alt="ReflectionBottomLeftI176"
                                          src="/external/reflectionbottomlefti176-7cy.svg"
                                          className="portfolio-reflection-bottom-left"
                                        />
                                        <img
                                          alt="ReflectionBottomLeftCopy2I176"
                                          src="/external/reflectionbottomleftcopy2i176-sy7n.svg"
                                          className="portfolio-reflection-bottom-left-copy2"
                                        />
                                        <img
                                          alt="ReflectionBottomLeftCopyI176"
                                          src="/external/reflectionbottomleftcopyi176-aql7.svg"
                                          className="portfolio-reflection-bottom-left-copy"
                                        />
                                      </div>
                                    </div>
                                    <img
                                      alt="BottonI176"
                                      src="/external/bottoni176-u57.svg"
                                      className="portfolio-botton"
                                    />
                                  </div>
                                  <div className="portfolio-base">
                                    <img
                                      alt="UndersideI176"
                                      src="/external/undersidei176-s89e.svg"
                                      className="portfolio-underside"
                                    />
                                    <img
                                      alt="StripeI176"
                                      src="/external/stripei176-s33g.svg"
                                      className="portfolio-stripe"
                                    />
                                    <img
                                      alt="EdgeI176"
                                      src="/external/edgei176-zfee-200h.png"
                                      className="portfolio-edge"
                                    />
                                    <img
                                      alt="GripI176"
                                      src="/external/gripi176-v7f.svg"
                                      className="portfolio-grip"
                                    />
                                    <div className="portfolio-left-screw">
                                      <img
                                        alt="LeftScrewI176"
                                        src="/external/leftscrewi176-9me9.svg"
                                        className="portfolio-left-screw1"
                                      />
                                      <img
                                        alt="LeftScrewCopyI176"
                                        src="/external/leftscrewcopyi176-86g.svg"
                                        className="portfolio-left-screw-copy"
                                      />
                                      <img
                                        alt="OvalI176"
                                        src="/external/ovali176-cgcn.svg"
                                        className="portfolio-oval"
                                      />
                                    </div>
                                    <div className="portfolio-left-screw2 portfolio-left-screw2">
                                      <img
                                        alt="LeftScrewI176"
                                        src="/external/leftscrewi176-61ia.svg"
                                      />
                                      <img
                                        alt="LeftScrewCopyI176"
                                        src="/external/leftscrewcopyi176-3u7.svg"
                                        className="portfolio-left-screw-copy1"
                                      />
                                      <img
                                        alt="OvalI176"
                                        src="/external/ovali176-w2s.svg"
                                        className="portfolio-oval1"
                                      />
                                    </div>
                                    <div className="portfolio-right-screw">
                                      <img
                                        alt="LeftScrewI176"
                                        src="/external/leftscrewi176-laxp.svg"
                                        className="portfolio-left-screw3"
                                      />
                                      <img
                                        alt="LeftScrewCopyI176"
                                        src="/external/leftscrewcopyi176-avks.svg"
                                        className="portfolio-left-screw-copy2"
                                      />
                                      <img
                                        alt="OvalI176"
                                        src="/external/ovali176-y0bm.svg"
                                        className="portfolio-oval2"
                                      />
                                    </div>
                                    <div className="portfolio-right-screw2">
                                      <img
                                        alt="LeftScrewI176"
                                        src="/external/leftscrewi176-zk9.svg"
                                        className="portfolio-left-screw4"
                                      />
                                      <img
                                        alt="LeftScrewCopyI176"
                                        src="/external/leftscrewcopyi176-w9j.svg"
                                        className="portfolio-left-screw-copy3"
                                      />
                                      <img
                                        alt="OvalI176"
                                        src="/external/ovali176-zdc.svg"
                                        className="portfolio-oval3"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="portfolio-screen">
                                  <div className="portfolio-apple-mac-book-air2020-expandthis-frame-replace-image">
                                    <img
                                      alt="PLACEIMAGEHEREI176"
                                      src="/external/placeimageherei176-jzzo-700h.png"
                                      className="portfolio-placeimagehere"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="portfolio-maskgroup">
                                <img
                                  alt="facecap21I176"
                                  src="/external/facecap21i176-chy-700h.png"
                                  className="portfolio-facecap21"
                                />
                              </div>
                              <div className="portfolio-applei-phone-xr-locked-aspect-ratio">
                                <div className="portfolio-applei-phone-xr">
                                  <div className="portfolio-shadow4">
                                    <img
                                      alt="OuterShadowI176"
                                      src="/external/outershadowi176-a6qs.svg"
                                      className="portfolio-outer-shadow"
                                    />
                                    <img
                                      alt="MiddleShadowI176"
                                      src="/external/middleshadowi176-yah9.svg"
                                      className="portfolio-middle-shadow"
                                    />
                                    <img
                                      alt="InnerShadowI176"
                                      src="/external/innershadowi176-drw.svg"
                                      className="portfolio-inner-shadow"
                                    />
                                  </div>
                                  <div className="portfolio-device1">
                                    <div className="portfolio-body">
                                      <div className="portfolio-phone-shape">
                                        <img
                                          alt="PhoneShapeI176"
                                          src="/external/phoneshapei176-hsvl.svg"
                                          className="portfolio-phone-shape1"
                                        />
                                        <img
                                          alt="MetalBandI176"
                                          src="/external/metalbandi176-8m2z.svg"
                                          className="portfolio-metal-band"
                                        />
                                        <img
                                          alt="ReflectionI176"
                                          src="/external/reflectioni176-xb58.svg"
                                          className="portfolio-reflection"
                                        />
                                        <img
                                          alt="ReflectionI176"
                                          src="/external/reflectioni176-pcq7.svg"
                                          className="portfolio-reflection1"
                                        />
                                        <img
                                          alt="GlassI176"
                                          src="/external/glassi176-b9eb.svg"
                                          className="portfolio-glass1"
                                        />
                                      </div>
                                      <img
                                        alt="PlugI176"
                                        src="/external/plugi176-yxo.svg"
                                        className="portfolio-plug"
                                      />
                                      <div className="portfolio-glass-glare">
                                        <img
                                          alt="GlareI176"
                                          src="/external/glarei176-wucf.svg"
                                          className="portfolio-glare"
                                        />
                                        <img
                                          alt="GlareI176"
                                          src="/external/glarei176-l82l.svg"
                                          className="portfolio-glare1"
                                        />
                                      </div>
                                      <div className="portfolio-antenna-bands">
                                        <img
                                          alt="AntennaBandI176"
                                          src="/external/antennabandi176-mryg-200w.png"
                                          className="portfolio-antenna-band"
                                        />
                                        <img
                                          alt="AntennaBandI176"
                                          src="/external/antennabandi176-q2hn-200h.png"
                                          className="portfolio-antenna-band1"
                                        />
                                        <img
                                          alt="AntennaBandI176"
                                          src="/external/antennabandi176-wn7r-200w.png"
                                          className="portfolio-antenna-band2"
                                        />
                                        <img
                                          alt="AntennaBandI176"
                                          src="/external/antennabandi176-9i5-200h.png"
                                          className="portfolio-antenna-band3"
                                        />
                                      </div>
                                      <img
                                        alt="ButtonsI176"
                                        src="/external/buttonsi176-lvm.svg"
                                        className="portfolio-buttons"
                                      />
                                    </div>
                                    <div className="portfolio-front">
                                      <div className="portfolio-speaker">
                                        <img
                                          alt="MaskI176"
                                          src="/external/maski176-odq9-200h.png"
                                          className="portfolio-mask1"
                                        />
                                        <div className="portfolio-object1">
                                          <img
                                            alt="GridI176"
                                            src="/external/gridi176-mq7.svg"
                                            className="portfolio-grid"
                                          />
                                          <img
                                            alt="GridI176"
                                            src="/external/gridi176-caxa.svg"
                                            className="portfolio-grid1"
                                          />
                                          <img
                                            alt="GridI176"
                                            src="/external/gridi176-zlz.svg"
                                            className="portfolio-grid2"
                                          />
                                          <img
                                            alt="GridI176"
                                            src="/external/gridi176-1gh9.svg"
                                            className="portfolio-grid3"
                                          />
                                        </div>
                                        <img
                                          alt="ShadowI176"
                                          src="/external/shadowi176-6f8q-200h.png"
                                          className="portfolio-shadow5"
                                        />
                                        <img
                                          alt="ShadowI176"
                                          src="/external/shadowi176-yz67-200h.png"
                                          className="portfolio-shadow6"
                                        />
                                      </div>
                                      <img
                                        alt="CameraI176"
                                        src="/external/camerai176-jc8e.svg"
                                        className="portfolio-camera1"
                                      />
                                    </div>
                                  </div>
                                  <div className="portfolio-screen1">
                                    <img
                                      alt="MaskI176"
                                      src="/external/maski176-dplb.svg"
                                      className="portfolio-mask2"
                                    />
                                    <div className="portfolio-applei-phone-xr-expandthis-frame-replace-image">
                                      <img
                                        alt="PLACEIMAGEHEREI176"
                                        src="/external/placeimageherei176-5iqb-400w.png"
                                        className="portfolio-placeimagehere1"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="portfolio-frame">
                                  <div className="portfolio-frame01">
                                    <div className="portfolio-frame02">
                                      <div className="portfolio-frame03">
                                        <div className="portfolio-frame04"></div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="portfolio-maskgroup1">
                                <img
                                  alt="facecap22I176"
                                  src="/external/facecap22i176-0gy-400w.png"
                                  className="portfolio-facecap22"
                                />
                              </div>
                            </div>
                          </Link>
                          <div className="portfolio-frame05"></div>
                        </div>
                      </div>
                      <div className="portfolio-frame06"></div>
                    </div>
                  </div>
                  <div className="portfolio-frame07"></div>
                </div>
              </div>
              <div className="portfolio-workcard03">
                <div className="portfolio-workcard-locked-aspect-ratio2">
                  <div className="portfolio-workcard04">
                    <div className="portfolio-workcard-locked-aspect-ratio3">
                      <div className="portfolio-workcard05">
                        <div className="portfolio-headline-subhead3">
                          <div className="portfolio-frame21">
                            <Link
                              to="/portfolioproject2"
                              className="portfolio-text17"
                            >
                              <span className="portfolio-text18">
                                Wētā Realtime
                                <span
                                  dangerouslySetInnerHTML={{
                                    __html: ' ',
                                  }}
                                />
                              </span>
                              <span>Tools Integration</span>
                            </Link>
                            <span className="portfolio-text20 Bodytext">
                              <span>July 2023 - Present</span>
                            </span>
                          </div>
                          <span className="portfolio-text22 Epilogue-17">
                            <span>
                              The Weta Realtime Tools for Unity editor enhance
                              workflow efficiency and enable the creation of
                              visually impressive content for both game and film
                              production. This suite of features streamlines the
                              development process, facilitating the rapid
                              creation of high-quality visuals.
                            </span>
                          </span>
                        </div>
                        <div className="portfolio-homecontentimage-locked-aspect-ratio1">
                          <div className="portfolio-homecontentimage01 background-contain image-contain">
                            <Link
                              to="/portfolioproject3"
                              className="portfolio-navlink1"
                            >
                              <div className="portfolio-homecontentimage-locked-aspect-ratio2 image-contain">
                                <div className="portfolio-homecontentimage02"></div>
                                <div className="portfolio-frame08"></div>
                              </div>
                            </Link>
                          </div>
                          <div className="portfolio-frame09"></div>
                        </div>
                      </div>
                      <div className="portfolio-frame10"></div>
                    </div>
                  </div>
                  <div className="portfolio-frame11"></div>
                </div>
              </div>
              <div className="portfolio-workcard06">
                <div className="portfolio-workcard-locked-aspect-ratio4">
                  <div className="portfolio-workcard07">
                    <div className="portfolio-workcard-locked-aspect-ratio5">
                      <div className="portfolio-workcard08">
                        <div className="portfolio-headline-subhead4">
                          <div className="portfolio-frame22">
                            <Link
                              to="/portfolioproject3"
                              className="portfolio-text24"
                            >
                              <span className="portfolio-text25">Unity</span>
                              <span> Virtual Production</span>
                            </Link>
                            <span className="portfolio-text27 Bodytext">
                              <span>2021 - 2023</span>
                            </span>
                          </div>
                          <span className="portfolio-text29 Epilogue-17">
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
                        <div className="portfolio-homecontentimage-locked-aspect-ratio3">
                          <div className="portfolio-homecontentimage03">
                            <Link
                              to="/portfolioproject3"
                              className="portfolio-navlink2"
                            >
                              <div className="portfolio-homecontentimage04 image-contain">
                                <img
                                  alt="vsethomegif1I176"
                                  src="/external/vsethomegif1i176-jhca-700w.png"
                                  className="portfolio-vsethomegif1"
                                />
                              </div>
                            </Link>
                          </div>
                          <div className="portfolio-frame12"></div>
                        </div>
                      </div>
                      <div className="portfolio-frame13"></div>
                    </div>
                  </div>
                  <div className="portfolio-frame14"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="portfolio-latestwork-section-property3">
            <span className="portfolio-text31 Epilogue-36Light">
              <span>Case Studies</span>
            </span>
            <div className="portfolio-workcards1">
              <div className="portfolio-workcard09">
                <div className="portfolio-homecontentimage05">
                  <div className="portfolio-homecontentimage-locked-aspect-ratio4">
                    <div className="portfolio-homecontentimage06"></div>
                    <div className="portfolio-frame15"></div>
                  </div>
                </div>
                <div className="portfolio-headline-subhead5">
                  <span className="portfolio-text33">
                    <span>Strand-based Hair Rendering</span>
                  </span>
                  <span className="portfolio-text35 Epilogue-17">
                    <span>Tom Petty</span>
                  </span>
                </div>
              </div>
              <div className="portfolio-workcard10">
                <div className="portfolio-homecontentimage07">
                  <div className="portfolio-homecontentimage-locked-aspect-ratio5">
                    <div className="portfolio-homecontentimage08"></div>
                    <div className="portfolio-frame16"></div>
                  </div>
                </div>
                <div className="portfolio-headline-subhead6">
                  <span className="portfolio-text37">
                    <span>Waypoint System Design</span>
                  </span>
                  <span className="portfolio-text39 Epilogue-17">
                    <span>Lynyrd Skynyrd</span>
                  </span>
                </div>
              </div>
              <div className="portfolio-workcard11">
                <div className="portfolio-homecontentimage09">
                  <div className="portfolio-homecontentimage-locked-aspect-ratio6">
                    <div className="portfolio-homecontentimage10"></div>
                    <div className="portfolio-frame17"></div>
                  </div>
                </div>
                <div className="portfolio-headline-subhead7">
                  <span className="portfolio-text41">
                    <span>Invoicing App Pricing Plan</span>
                  </span>
                  <span className="portfolio-text43 Epilogue-17">
                    <span>Tom Petty</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer rootClassName="footer-root-class-name"></Footer>
      </div>
    </div>
  )
}

export default Portfolio
