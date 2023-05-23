import React, { useState, useEffect } from 'react';

const ROWS = 20;
const COLS = 20;
const INITIAL_SPEED = 200;

type Position = {
  x: number;
  y: number;
};

const SnakeGame: React.FC = () => {
    const getRandomFoodPosition = (): Position => {
        return {
          x: Math.floor(Math.random() * COLS),
          y: Math.floor(Math.random() * ROWS),
        };
      };

  const [snake, setSnake] = useState<Position[]>([{ x: 10, y: 10 }]);
  const [food, setFood] = useState<Position>(getRandomFoodPosition());
  const [direction, setDirection] = useState<string>('right');
  const [speed, setSpeed] = useState<number>(INITIAL_SPEED);
  const [gameOver, setGameOver] = useState<boolean>(false);

  useEffect(() => {
    const gameLoop = setInterval(() => {
      moveSnake();
    }, speed);

    return () => {
      clearInterval(gameLoop);
    };
  }, [snake, direction, speed]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const { keyCode } = event;
    if (keyCode === 38 && direction !== 'down') {
      setDirection('up');
    } else if (keyCode === 40 && direction !== 'up') {
      setDirection('down');
    } else if (keyCode === 37 && direction !== 'right') {
      setDirection('left');
    } else if (keyCode === 39 && direction !== 'left') {
      setDirection('right');
    }
  };

  const checkCollision = (head: Position) => {
    if (
      head.x < 0 ||
      head.x >= COLS ||
      head.y < 0 ||
      head.y >= ROWS ||
      snake.some((segment) => segment.x === head.x && segment.y === head.y)
    ) {
      setGameOver(true);
    }
  };

  const moveSnake = () => {
    const snakeCopy = [...snake];
    const head = { x: snakeCopy[0].x, y: snakeCopy[0].y };

    switch (direction) {
      case 'up':
        head.y--;
        break;
      case 'down':
        head.y++;
        break;
      case 'left':
        head.x--;
        break;
      case 'right':
        head.x++;
        break;
      default:
        break;
    }

    snakeCopy.unshift(head);

    if (head.x === food.x && head.y === food.y) {
      setFood(getRandomFoodPosition());
      setSpeed(speed - 10);
    } else {
      snakeCopy.pop();
    }

    checkCollision(head);
    setSnake(snakeCopy);
  };



  return (
    <div
      className="game-container"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <h1>Snake Game</h1>
      <div >
        {gameOver && <div className="game-over">Game Over</div>}
        {snake.map((segment, index) => (
          <div
            className="snake-segment"
            key={index}
            style={{ top: `${segment.y * 5}%`, left: `${segment.x * 5}%` }}
          />
        ))}
        <div
          className="food"
          style={{ top: `${food.y * 5}%`, left: `${food.x * 5}%`, background: "red" }}
        />
      </div>
    </div>
  );
};

export default SnakeGame;
