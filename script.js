document.addEventListener("DOMContentLoaded", () => {
    const gameContainer = document.querySelector(".game-container");
    const snakeElement = document.getElementById("snake");
    const foodElement = document.getElementById("food");

    let snake = [{x: 200, y: 200}];
    let food = {x: 0, y: 0};
    let direction = {x: 0, y: 0};

    function updateSnake() {
        snakeElement.style.left = snake[0].x + "px";
        snakeElement.style.top = snake[0].y + "px";
    }

    function generateFood() {
        food.x = Math.floor(Math.random() * 20) * 20;
        food.y = Math.floor(Math.random() * 20) * 20;
        foodElement.style.left = food.x + "px";
        foodElement.style.top = food.y + "px";
    }

    function moveSnake() {
        const newHead = {x: snake[0].x + direction.x, y: snake[0].y + direction.y};
        snake.unshift(newHead);
        if (newHead.x === food.x && newHead.y === food.y) {
            generateFood();
        } else {
            snake.pop();
        }
        updateSnake();
    }

    generateFood();
    updateSnake();

    document.addEventListener("keydown", (e) => {
        switch (e.key) {
            case "ArrowUp":
                direction = {x: 0, y: -20};
                break;
            case "ArrowDown":
                direction = {x: 0, y: 20};
                break;
            case "ArrowLeft":
                direction = {x: -20, y: 0};
                break;
            case "ArrowRight":
                direction = {x: 20, y: 0};
                break;
        }
    });

    setInterval(moveSnake, 200);
});
