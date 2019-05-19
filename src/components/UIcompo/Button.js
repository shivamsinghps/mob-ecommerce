import styled from 'styled-components'

export const ButtonContainer = styled.button`
text-transform : capitalize
font-size: 1.4rem
background:tarnsparent
border:0.05rem solid lightblue
color:blue
border-radius:0.2rem 0.6rem
margin:0.2rem 0.5rem 0.2rem 0
transition:all 0.5s ease-in-out
&:hover{
  background : blue
  color : lightblue

}
&:focus{
  outline : none
}

`
