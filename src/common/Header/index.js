import React,{Component} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from './store'
import{HeaderWrapper,
       Nav,
       NavWrapper,
       NavUl,
       NavItem} from './style';
import {Link} from 'react-router-dom';

import logopic from '../../statics/logo.jpg'

class Header extends Component{

    render(){
        return(
            <HeaderWrapper>
                <Link to="/">
                   <img alt="" src={logopic}/>
                </Link>
                <Nav>
                    <NavWrapper>
                        <NavUl>
                                {
                                    this.props.navlist.map((item,index)=>{
                                        return (
                                            <NavItem onMouseLeave={()=>this.props.navHoveLeaver(this.props.navlist,index)}
                                                     onMouseEnter={()=>this.props.navHoverEnter(this.props.navlist,index)}
                                                     className={item.get('status') ? 'hover'  : null } 
                                                     key={item.get('id')}
                                                     >
                                                <Link to={item.get('link')}>
                                                    {item.get('title')}
                                                </Link>
                                            </NavItem>
                                        )
                                    })
                                } 
                        </NavUl>                            
                    </NavWrapper>
                </Nav>
            </HeaderWrapper>
        )
    }
    componentDidMount(){
        this.props.GetNavData()
    }
}

const mapState = (state) =>({
    navlist:state.getIn(['header','NavList'])
})
const mapDispatch=(dispatch) =>({
        GetNavData(){
            dispatch(actionCreators.GetNavdataAction())
        },
        navHoverEnter(list,index){
            let jslist= list.toJS();
            jslist[index].status=true;
            console.log(index,jslist[index].status)
            dispatch(actionCreators.noMouseNavAction(jslist,index))
        },
        navHoveLeaver(list,index){
            let jslist=list.toJS();
            jslist[index].status=false;
            console.log(index,jslist[index].status);
            dispatch(actionCreators.onMouseNavLeaver(jslist,index))
        }
})

export default connect(mapState,mapDispatch)(Header)