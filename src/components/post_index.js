import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetch_posts} from '../actions/index';
import _ from 'lodash';
import {Link} from 'react-router-dom';

import {bindActionCreator} from 'redux';



class PostIndex extends Component{

    componentDidMount(){
        this.props.fetch_posts()
    }
    renderPosts(){
        return _.map(this.props.posts,post=>{
            return <li className="list-group-item" key={post.id}>
            <Link to={`/posts/${post.id}`}>
            {post.title}

            </Link>
               
            </li>
        })
    }
    render(){
        return(
            <div>
                <div className="text-xs-right">
                        <Link className="btn btn-primary" to="/posts/new">Add a Post</Link>
                </div>
            <h1>POSTS</h1>
            <ul className="list-group">
            
            {this.renderPosts()}

            </ul>
            </div>
        )
    }
}


function mapStateToProps(state){
    return {posts:state.posts}
}



export default connect(mapStateToProps,{fetch_posts})(PostIndex);//Wiring up Action creator to this component instead of using 
//mapDispatchtoProps function Here we are using ES6 syntax shorthand property for action.

