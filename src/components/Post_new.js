import React,{Component} from 'react';
import {Field,reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createPost} from '../actions/index';


 class PostNew extends Component{

        renderField(field){
            const {meta:{touched,error}}=field;//Destructuring of nested object properties
            const className=`form-group ${touched&&error? 'has-danger' :''}`
            return(
                <div className={className}>
                <label>{field.label}</label>
                    <input 
                    className="form-control"
                    type="text"
                    {...field.input} />
                    <div className="text-help">
                    {touched ? error:''}
                    </div>
                    
                    
                </div>
                //Whenever the user touch/focus or user field is in Touched state the show the error message.
                //Three states of form field noInput(pristine)==>Touched(foucs/input)===>Invalid(error)
            )
        }
        
//field in abouve syntax is an Object that contains bunch of different Event handlers and Bunch of
//Different props like onChange,onBlur and someother properties
//This is a short hand for onChange={this.input.Onchange} onBlur={this.input.onBlur} We don't have to
//pass these manually we have to pass this {...field.input} fancy object directly
//Pass arbitary properties like label
onSubmit=(values)=>{
//Values are the input fields the user enters here we can take in do posting to the backend API
//this===component

this.props.createPost(values,()=>{this.props.history.push('/')})


}

    render(){
        const {handleSubmit}=this.props;
        return (
            <div>
                <form onSubmit={handleSubmit(this.onSubmit)} >
                    <div>
                        <Field 
                        label="Title"
                        name="title"
                                component={this.renderField}    
                                type="text"/>
                    </div>
                   <div>
                       <Field
                       label="Categories" name="categories" component={this.renderField} />
                   </div> 
                   <div>
                       <Field 
                       label="Content"
                       name="content" type="text" component={this.renderField}/>

                   </div>
                   <button className="btn btn-primary" type="submit">Save</button>
                    <Link to='/' className='btn btn-danger'>Cancel</Link>
                </form> 
            </div>
        )
    }
}

//<Field name="What piece of state is user editing"

function validate(values){
    const errors={};
//If field component has the title property then if it has a error then assign errors property
    if(!values.title){
        errors.title="Please Enter title field!"
    }
    if(!values.categories){
        errors.categories="Enter Categories field"
    }
    if(!values.content){
        errors.content="Enter Content"
    }

    return errors;

}

export default reduxForm({validate,form:"NewPost"})(connect(null,{createPost})(PostNew));