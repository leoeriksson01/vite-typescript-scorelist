import React from "react";

export interface Score {
    name: string;
    score: number;
}

export interface ScoreListProps {
    data: Score[];
}

export function ScoreList(props: ScoreListProps) {
    const { data: scores } = props;

  

    const calculateHighestScores = (scores: Score[]): Score[] => {
        return Object.values(
            scores.reduce((acc: { [key: string]: Score }, score) => {
                if (!acc[score.name] || acc[score.name].score < score.score) {
                    acc[score.name] = { name: score.name, score: score.score };
                }
                return acc;
            }, {})
        );
    };
    const highestScores: Score[] = calculateHighestScores(scores);

    const sortedScores = highestScores.slice().sort((a, b) => b.score - a.score);

    console.log(sortedScores);

    console.log(highestScores);

    return (
        <ul>
            {sortedScores.length > 0 &&
                sortedScores.map((score, i) => (
                    <li key={i}>
                        {" "}
                        {score.name} {score.score}{" "}
                    </li>
                ))}
        </ul>
    );
}