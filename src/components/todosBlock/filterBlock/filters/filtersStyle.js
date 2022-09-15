import styled from 'styled-components'

export const FiltresContainer = styled.div`

  display: flex;

.button {
  border: none;
  color: #777;
  background-color: #fff;
  font-size: 15px;
  cursor: pointer;
}


.button:not(:last-child){
  margin-right: 15px;
}

.buttonSelected {
  color: #777;
  background-color: #fff;
  font-size: 15px;
  cursor: pointer;
  padding: 3px 7px;
  border: 1px solid transparent;
  border-radius: 3px;
  border-color: rgba(175, 47, 47, 0.2);
}

.buttonSelected:not(:last-child){
  margin-right: 15px;
}

@media only screen and (max-width: 450px) {
  display: block;
  margin: 5px auto;
}
`