import styled, { css } from 'styled-components';

type StylesProps = {
  filter: string;
}

const selected = css`
  padding: 3px 7px;
  border: 1px solid transparent;
  border-radius: 3px;
  border-color: rgba(175, 47, 47, 0.2);
`

export const FiltresContainer = styled.div<StylesProps>`

  display: flex;

  .button {
    border: none;
    color: ${props => props.theme.colors.gray};
    background-color: ${props => props.theme.colors.whiteBg};
    font-size: 15px;
    cursor: pointer;
  }

  .all{
    ${props => props.filter === 'all' && css`
      ${selected}
    `}
  }

  .active{
    ${props => props.filter === 'active' && css`
      ${selected}
    `}
  }

  .complited{
    ${props => props.filter === 'complited' && css`
      ${selected}
    `}
  }

  .button:not(:last-child){
    margin-right: 15px;
  }

  @media only screen and (${props => props.theme.media.small}) {
    display: block;
    margin: 5px auto;
  }
`