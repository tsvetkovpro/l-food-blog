import React from 'react'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import { config } from 'config'
import './style.css'
import '../../static/fonts/fontawesome/style.css'

class SiteLinks extends React.Component {
    render() {

        return (
            <div className='blog-social'>
              <ul>
                <li>
                  <a href={ config.siteInstaUrl } target='_blank'><i className='fa fa-instagram'></i></a>
                </li>
                <li>
                  <a href={ config.siteVkUrl }><i className='fa fa-vk'></i></a>
                </li>
                <li>
                  <a href={ config.siteFbUrl }><i className='fa fa-facebook'></i></a>
                </li>
                <li>
                  <a href={ config.siteEmailUrl }><i className='fa fa-envelope'></i></a>
                </li>
              </ul>
            </div>
            );
    }
}

export default SiteLinks