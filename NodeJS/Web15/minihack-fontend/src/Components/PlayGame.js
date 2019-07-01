import React, { Component } from 'react';
import { Table, Input, Button } from 'reactstrap';
import axios from 'axios';

class PlayGame extends Component {
	renderPlayers = (players) => {
		return players.map((player, index) => {
			return <th key={index}>{player}</th>;
		});
		// return players.map((player, index) => <th key={index}>{player}</th>);
	}

	renderSumScores = (scores) => {
		return (<tr>
			<th>Sum of Score (0)</th>
			<th>0</th>
			<th>0</th>
			<th>0</th>
			<th>0</th>
		</tr>);
	}

	renderScoreRow = (scores) => {
		return scores[0].map((score, index) => {
			return (
				<tr key={index}>
					<td>{index + 1}</td>
					<td>{scores[0][index]}</td>
					<td>{scores[1][index]}</td>
					<td>{scores[2][index]}</td>
					<td>{scores[3][index]}</td>
				</tr>
			)
		})
	}

	render() {
		const { game, addNewRow } = this.props;
		const { players, scores } = game;

		return (
			<div>
                <Table striped bordered>
                    <thead>
                        <tr>
                            <th></th>
                            {this.renderPlayers(players)}
                        </tr>
                        {this.renderSumScores(scores)}
                    </thead>
                    <tbody>
                        {this.renderScoreRow(scores)}
                    </tbody>
                </Table>
                <div className="text-center mb-3">
                    <Button onClick={addNewRow} color="danger" type="submit">
                        Add row
                    </Button>
                </div>
            </div>
		);
	}
}

export default PlayGame;