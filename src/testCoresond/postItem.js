import React,{Component} from 'react';
// import React-dom from "react";
class PostItem extends Component{
    render() {
        const {id,name,age,gender} = this.props;
        return (
            <div>
               <div>
					{ id }
               </div>
               <div>
					创建人：<span>{ name }</span>
               </div>
               <div>
					性别：<span>{ gender }</span>
               </div>
               <div>
					年龄：<span>{ age }</span>
               </div>
            </div>
        );
    }
}
export default PostItem;
