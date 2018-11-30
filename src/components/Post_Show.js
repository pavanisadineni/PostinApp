import React,{Component} from 'react';
import {connect} from 'react-redux';
import {fetch_post,deletePost} from '../actions/index';
import {Link} from 'react-router-dom';

 class PostShow extends Component{

    componentDidMount(){
        if(!this.props.post){
            const {id}=this.props.match.params;
        this.props.fetch_post(id);
        }
        

    }
    onClick=()=>{
        const {id}=this.props.match.params;
        this.props.deletePost(id,()=>{
            this.props.history.push('/')
        });
    }

    render(){
        const {post}=this.props;
        if(!post){
            return <div>Loading....</div>
        }
        return(
            <div>
                <Link to="/">Back</Link>
                <button className="btn btn-danger pull-xs-right"
                onClick={this.onClick}>Delete Post</button>
                <h3>{post.title}</h3>
                <h6>Categories:{post.categories} </h6>
                <p>Contendt:{post.content}</p>
            </div>
        )
    }
}

function mapStateToProps({posts},ownProps){
    return {post:posts[ownProps.match.params.id]}
}
export default connect(mapStateToProps,{fetch_post,deletePost})(PostShow);