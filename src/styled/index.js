import styled from 'styled-components'

export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`

export const AppInner = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  h1 {
    line-height: 1.2;
    color: #e8e8e8;
    margin-bottom: 24px;
  }
  button {
    margin-top: 36px;
  }
  ul {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    li {
      display: block;
      border: 1px solid darkgray;
      border-radius: 4px;
      padding: 8px;
      margin: 8px;
      cursor: pointer;
      transition: 0.4s ease;
      strong {
        transition: 0.8s ease;
      }
    }
    li.isSelected {
      strong {
        color: white;
      }
      color: white;
      background-color: darkgray;
    }
    li.isCorrect {
      strong {
        color: black;
      }
      color: black;
      background-color: white;
    }
  }
  span {
    display: flex;
    margin-bottom: 24px;
    flex-direction: column;
    justify-content: space-around;
  }
`

export const ScoreCardContainer = styled.div`
  display: flex;
  flex-direction: column;
`