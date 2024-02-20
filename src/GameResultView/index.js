import {
    showResultContainer,
    ResultImagesContainer,
    ResultTextImgContainer,
    ResultText,
    ResultImageItem,
    ResultButtonContainer,
    PlayAgainButton,
} from './styledComponents'

const GameResultView = props => {
    const {myChoice, apponentChoice, resultMessge, playAgain} = props
    const {id, image} = apponentChoice

    const onClickPlayAgainButton = () => {
        playAgain()
    }

    return (
        <showResultContainer>
            <ResultImagesContainer>
                <ResultTextImgContainer>
                    <ResultText>YOU</ResultText>
                    <ResultImageItem src={myChoice[1]} alt="your choice" />
                </ResultTextImgContainer>
                <ResultTextImgContainer>
                    <ResultText>OPPONENT</ResultText>
                    <ResultImageItem src={image} alt="opponent choice" />
                </ResultTextImgContainer>
            </ResultImagesContainer>
            <ResultText>{resultMessge}</ResultText>
            <ResultButtonContainer>
                <PlayAgainButton type="button" onClick={onClickPlayAgainButton}>
                    Play Again 
                </PlayAgainButton>
            </ResultButtonContainer>
        </showResultContainer>
    )
}

expo default GameResultView