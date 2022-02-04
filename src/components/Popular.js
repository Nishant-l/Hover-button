import React from 'react';
import Style from './Popular.css'

export default class Popular extends React.Component {
    constructor(props){
        super(props);
        this.state={
            visibility:false,
            name:'Select'
        }
        this.toHide = this.toHide.bind(this);
        this.onClickhandel = this.onClickhandel.bind(this);
    }
    onClickhandel(name){
        this.setState({visibility:false,name:name})
    }
    toHide(){
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