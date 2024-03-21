import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './portfolio-aboutpage.css'

const PortfolioAboutpage = (props) => {
  return (
    <div className="portfolio-aboutpage-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="portfolio-aboutpage-portfolio-aboutpage">
        <Navbar rootClassName="navbar-root-class-name1"></Navbar>
        <div className="portfolio-aboutpage-aboutheader">
          <div className="portfolio-aboutpage-aboutheader1">
            <div className="portfolio-aboutpage-persona">
              <div className="portfolio-aboutpage-image">
                <img
                  alt="ImageI176"
                  src="/external/imagei176-xyx-400w.png"
                  className="portfolio-aboutpage-image1"
                />
              </div>
            </div>
            <span className="portfolio-aboutpage-text">
              <span className="portfolio-aboutpage-text1">
                Thanks for visiting. I&apos;m always happy to connect,
                especially if you&apos;re into
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="portfolio-aboutpage-text2">
                design, digital painting, the latest in AI trends, or gaming!
              </span>
              <span>
                {' '}
                I&apos;m also trying to read more books—a challenge amid
                distractions, but I&apos;m getting there! If you have a good
                read to share, I&apos;d love to hear about it. And even if you
                just want to connect, I&apos;m all for a coffee chat 😄
              </span>
              <span>
                I&apos;m a UX/UI designer with a passion for user-centered
                design and human-computer interaction. After years of empowering
                others to excel, I continue to enjoy resolving both significant
                and minor issues that users encounter every day.
              </span>
              <br></br>
              <br></br>
            </span>
          </div>
        </div>
      </div>
      <Footer rootClassName="footer-root-class-name2"></Footer>
    </div>
  )
}

export default PortfolioAboutpage
