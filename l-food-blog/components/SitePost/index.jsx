import React from 'react'
import moment from 'moment'
import { RouteHandler, Link } from 'react-router'
import DocumentTitle from 'react-document-title'
import { prefixLink } from 'gatsby-helpers'
import access from 'safe-access'
import { config } from 'config'
import ReadNext from '../ReadNext'
import './style.css'
import '../../static/css/highlight.css'


class SitePost extends React.Component {
    render() {
			moment.updateLocale('ru')
        const {route} = this.props
        const post = route.page.data
        const home = (
        <div>
          <Link className='gohome' to={ prefixLink('/') }> Все статьи
          </Link>
        </div>
        )

        return (
            <div>
              { home }
              <div className='blog-single'>
                <div className='text'>
                  <h1>{ post.title }</h1>
                  <div dangerouslySetInnerHTML={ {    __html: post.body} } />
                  <div className='date-published'>
                    <em>Опубликовано { moment(post.date).format('llll') }</em>
                  </div>
                </div>
                <div className='footer'>
                  <ReadNext post={ post } {...this.props}/>
                  <hr></hr>
                  <p>
                    { config.siteDescr }
                    <a href={ config.siteInstaUrl }>
                      <br></br> <strong>{ config.siteAuthor }</strong> в Инстаграмм</a>
                  </p>
                </div>
              </div>
            </div>
            );
    }
}

SitePost.propTypes = {
    post: React.PropTypes.object.isRequired,
    pages: React.PropTypes.array,
}

export default SitePost
