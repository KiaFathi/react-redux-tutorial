import React, { Component } from 'react'
import * as _ from 'lodash'
// Step 7: Distinguish between client and server side specific code
if (process.env.BROWSER) {
  var styles = require('./PostList.css')
}
import Post from '../Post'

export default class PostList extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div className="postsContainer" id="postsContainer">
        {
          _.map(this.props.posts, function(postData, key) {
            return (
              <Post postId = { key }
                    votes = { postData.votes }
                    text = { postData.title }
                    commentCount = { postData.comments.length }
                    time = { postData.time }
                    author = { postData.author }
                    upVote = { this.props.upVote }
                    downVote = { this.props.downVote }
                    key = { key }>
                {false}
              </Post> )
          }.bind(this))
        }
      </div>
    )
  }
}
