import styled from 'styled-components'

export const NavItem = styled.li`
display:inline-block;
list-style:none;
height:100%;
text-align:center;
line-height:45px;
padding: 0 20px;
cursor: pointer;
a{
    text-decoration:none;
    color:#999;
}

&.hover{
    background: #000;
color: #fff; 
}
`

export const NavUl = styled.ul`
float:left;
height:100%;
`

export const NavWrapper = styled.div`
    max-width:1680px;
    height:100%;
    margin:0 auto;
    overflow:hidden;
`

export const HeaderWrapper = styled.div`
width:100%;
img{
    display:block;
    margin:0 auto;
}
`
export const Nav = styled.nav`
width:100%;
background-color:rgb(230,230,230);
height:45px;
`