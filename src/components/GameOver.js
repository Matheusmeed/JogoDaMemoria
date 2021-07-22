import React, { Fragment } from 'react';

function GameOver(props) {
    if (props.show) {
        return (
            <div id='gameOver'>
                <div>Parabéns, você conseguiu completar o jogo!</div>
                <button id='restart' onClick={props.handleRestart}>
                    Jogar novamente
                </button>
            </div>
        );
    } else {
        return <Fragment />;
    }
}

export default GameOver;
