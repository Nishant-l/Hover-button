import React from 'react';
import Style from './Popular.css'

export default class Popular extends React.Component {
    constructor(props){ //constrecture
        super(props);
        this.state={
            visibility:false, // to show or hide visibility on hover
            name:'Select' // name to be displayed on hover button
        }
        this.toHide = this.toHide.bind(this); // this binding of toHide method
        this.onClickhandel = this.onClickhandel.bind(this); // this binding of otClickhandel method
    }
    onClickhandel(name){ // to toggle name and visibility state on click
        this.setState({visibility:false,name:name})
    }
    toHide(){  // to toggle visibility on hover
        if(this.state.visibility){
            this.setState({visibility:false})
        }else{
            this.setState({visibility:true})
        }
    }
    render(){
        let {list} = this.props;
        return (
            <>
            <div id='DropdownComponent' onMouseEnter={this.toHide} onMouseLeave={this.toHide}>
                HoverFor DropDown 🔽
                <div id='nameOfButton'>
                    {this.state.name}
                </div>
                {this.state.visibility==true ?(
                <ul>
                    {
                        list.map((item)=>(
                            <li>
                                <button onClick={()=>this.onClickhandel(item)}>
                                    {item}
                                </button>    
                            </li>
                        ))
                    }
                </ul>
                ):null}
            </div>
            </>
        )
    }
}