const player1 = document.getElementById('player1');
const player2 = document.getElementById('player2');
const show_items1 = document.querySelector('.show-items1');
const show_items2 = document.querySelector('.show-items2');
const player = document.querySelector('.player');
const container_player_1 = document.querySelector('.player-1');
const container_player_2 = document.querySelector('.player-2');
const items_1 = document.querySelector('.item-1');
const items_2 = document.querySelector('.item-2');
const Player_name = document.querySelector('#Player_name');
const What_playe1 = document.getElementById("What_player1");
const What_player2 = document.getElementById("What_player2");
const player1_picture = document.getElementById("player1_picture");
const player2_picture = document.getElementById("player2_picture");
const timer = document.getElementById("timer");
let computerInterval1 = null;
let computerInterval2 = null;

function computerPick1() {
    const choices = [
        { name: "bato", img: "4.png" },
        { name: "gunting", img: "5.png" },
        { name: "papel", img: "6.png" }
    ];

    if (computerInterval1) {
        clearInterval(computerInterval1);
    }

    computerInterval1 = setInterval(() => {

        setTimeout(3, () => {
            const tempIndex = Math.floor(Math.random() * choices.length);
            player2_picture.src = choices[tempIndex].img;
            player2_picture.style.display = "flex";
        });

    }, 150);

    setTimeout(() => {

        clearInterval(computerInterval1);

        const randomIndex = Math.floor(Math.random() * choices.length);
        const pick = choices[randomIndex];

        player2_picture.src = pick.img;
        player2_picture.style.display = "flex";

        return pick.name;
    }, 3000);


}

function computerPick2() {
    const choices = [
        { name: "bato", img: "4.png" },
        { name: "gunting", img: "5.png" },
        { name: "papel", img: "6.png" }
    ];

    if (computerInterval2) {
        clearInterval(computerInterval2);
    }

    computerInterval2 = setInterval(() => {
        setTimeout(4, () => {
            const tempIndex = Math.floor(Math.random() * choices.length);
            player1_picture.src = choices[tempIndex].img;
            player1_picture.style.display = "flex";
        });
    }, 150);

    setTimeout(() => {
        clearInterval(computerInterval2);

        const randomIndex = Math.floor(Math.random() * choices.length);
        const pick = choices[randomIndex];

        player1_picture.src = pick.img;
        player1_picture.style.display = "flex";

        return pick.name;
    }, 3000);
}


function startTimer(duration, onFinish) {
    let count = duration;

    timer.textContent = count;
    timer.classList.remove("hidden");

    const interval = setInterval(() => {
        count--;
        timer.textContent = count;

        if (count === 0) {
            clearInterval(interval);
            timer.classList.add("hidden");


            // Player 1

            document.getElementById("bato").addEventListener("click", () => {
                player2_picture.style.display = "none";

            });

            document.getElementById("gunting").addEventListener("click", () => {
                player2_picture.style.display = "none";

            });

            document.getElementById("papel").addEventListener("click", () => {
                player2_picture.style.display = "none";

            });

            // Player 2

            document.getElementById("bato2").addEventListener("click", () => {
                player1_picture.style.display = "none";
            });

            document.getElementById("gunting2").addEventListener("click", () => {
                player1_picture.style.display = "none";
            });

            document.getElementById("papel2").addEventListener("click", () => {
                player1_picture.style.display = "none";
            });

            if (typeof onFinish === "function") {
                onFinish();
            }
        }
    }, 800);
}

document.getElementById("player1").addEventListener("click", function () {

    document.querySelector(".back-to-home").style.display = "none";

    document.getElementById("modal").style.display = "block"
    document.getElementById("overlay").style.display = "block";

    document.getElementById("exit_notification").addEventListener("click", () => {
        document.getElementById("modal").style.display = "none";
        document.getElementById("overlay").style.display = "none";
    })

    document.querySelector(".vs_player").style.display = "none";


    document.getElementById("start").addEventListener("click", () => {

        Player_name.style.display = "none";

        document.querySelector(".vs_item").style.display = "none";

        show_items1.style.display = "none";
        show_items2.style.display = "none";

        items_1.style.display = "none";
        items_2.style.display = "none";

        document.querySelector(".start-game").style.display = "none";

        document.getElementById("bato").addEventListener("click", () => {
            // document.getElementById("player1_picture").src = "4.png";

            document.querySelector(".vs_item").style.display = "none";

            player1_picture.style.display = "none";

            timer.style.marginTop = "10px";

            startTimer(3, () => {

                document.querySelector(".container").style.marginTop = "3rem";

                items_1.style.display = "none";
                items_2.style.display = "none";

                document.querySelector(".vs_item").style.display = "flex";

                document.querySelector(".vs_item").style.top = "15.5%";

                document.querySelector(".end-game").style.display = "none";

                player1_picture.style.display = "block";

                const process1 = document.getElementById("player1_picture");

                process1.src = "4.png";

                const Jackanim1 = process1.animate(

                    [
                        { transform: "scaleX(-1) rotate(-5deg)" },
                        { transform: "scaleX(-1) rotate(5deg)" }
                    ],
                    {
                        duration: 1000,
                        iterations: Infinity,
                        easing: "ease-in-out"
                    }
                );

                player2_picture.style.display = "block";

                const process2 = document.getElementById("player2_picture");

                process2.src = "4.png";

                const Jackanim2 = process2.animate(
                    [
                        { transform: "rotate(-5deg)" },
                        { transform: "rotate(5deg)" }
                    ],
                    {
                        duration: 1000,
                        iterations: Infinity,
                        easing: "ease-in-out"
                    }
                );

                setTimeout(() => {

                    document.getElementById("player1_picture").src = "4.png";

                    document.getElementById("player1_picture").style.display = "none";
                    process2.style.display = "none";

                    Jackanim1.cancel();
                    Jackanim2.cancel();


                    setTimeout(() => {

                        player1_picture.src = "4.png";
                        player1_picture.style.display = "flex";

                        items_1.style.display = "flex";
                        items_2.style.display = "flex";

                        document.querySelector(".end-game").style.display = "flex";

                        document.querySelector(".vs_item").style.top = "0";

                        document.querySelector(".container").style.marginTop = "0";

                    }, 1000);

                }, 3000);

                setTimeout(() => {

                    computerPick1();

                }, 1000);

            });

        });

        document.getElementById("gunting").addEventListener("click", () => {
            // document.getElementById("player1_picture").src = "5.png";

            document.querySelector(".vs_item").style.display = "none";

            player1_picture.style.display = "none";

            timer.style.marginTop = "10px";

            startTimer(3, () => {

                document.querySelector(".container").style.marginTop = "3rem";

                items_1.style.display = "none";
                items_2.style.display = "none";

                document.querySelector(".vs_item").style.display = "flex";

                document.querySelector(".vs_item").style.top = "15.5%";

                document.querySelector(".end-game").style.display = "none";

                player1_picture.style.display = "block";

                document.getElementById("player1_picture").src = "4.png";

                const process3 = document.getElementById("player1_picture");

                process3.src = "4.png";

                const Jackanim3 = process3.animate(
                    [
                        { transform: "scaleX(-1) rotate(-5deg)" },
                        { transform: "scaleX(-1) rotate(5deg)" }
                    ],
                    {
                        duration: 1000,
                        iterations: Infinity,
                        easing: "ease-in-out"
                    }
                );

                player2_picture.style.display = "block";

                const process4 = document.getElementById("player2_picture");

                process4.src = "4.png";

                const Jackanim4 = process4.animate(
                    [
                        { transform: "rotate(-5deg)" },
                        { transform: "rotate(5deg)" }
                    ],
                    {
                        duration: 1000,
                        iterations: Infinity,
                        easing: "ease-in-out"
                    }
                );

                setTimeout(() => {
                    document.getElementById("player1_picture").src = "5.png";

                    document.getElementById("player1_picture").style.display = "none";
                    process4.style.display = "none";

                    Jackanim3.cancel();
                    Jackanim4.cancel();


                    setTimeout(() => {

                        player1_picture.src = "5.png";
                        player1_picture.style.display = "flex";

                        items_1.style.display = "flex";
                        items_2.style.display = "flex";

                        document.querySelector(".end-game").style.display = "flex";

                        document.querySelector(".vs_item").style.top = "0";

                        document.querySelector(".container").style.marginTop = "0";

                    }, 1000);


                }, 3000);

                setTimeout(() => {
                    computerPick1();
                }, 1000);

            });
        });

        document.getElementById("papel").addEventListener("click", () => {
            // document.getElementById("player1_picture").src = "6.png";

            document.querySelector(".vs_item").style.display = "none";

            player1_picture.style.display = "none";

            timer.style.marginTop = "10px";


            startTimer(3, () => {

                document.querySelector(".container").style.marginTop = "3rem";

                items_1.style.display = "none";
                items_2.style.display = "none";

                document.querySelector(".vs_item").style.display = "flex";

                document.querySelector(".vs_item").style.top = "15.5%";

                document.querySelector(".end-game").style.display = "none";

                player1_picture.style.display = "block";

                document.getElementById("player1_picture").src = "4.png";

                const process5 = document.getElementById("player1_picture");

                process5.src = "4.png";

                const Jackanim5 = process5.animate(
                    [
                        { transform: "scaleX(-1) rotate(-5deg)" },
                        { transform: "scaleX(-1) rotate(5deg)" }
                    ],
                    {
                        duration: 1000,
                        iterations: Infinity,
                        easing: "ease-in-out"
                    }
                );

                player2_picture.style.display = "block";

                const process6 = document.getElementById("player2_picture");

                process6.src = "4.png";

                const Jackanim6 = process6.animate(
                    [
                        { transform: "rotate(-5deg)" },
                        { transform: "rotate(5deg)" }
                    ],
                    {
                        duration: 1000,
                        iterations: Infinity,
                        easing: "ease-in-out"
                    }
                );

                setTimeout(() => {
                    document.getElementById("player1_picture").src = "6.png";

                    document.getElementById("player1_picture").style.display = "none";
                    process6.style.display = "none";

                    Jackanim5.cancel();
                    Jackanim6.cancel();


                    setTimeout(() => {

                        player1_picture.src = "6.png";
                        player1_picture.style.display = "flex";

                        items_1.style.display = "flex";
                        items_2.style.display = "flex";

                        document.querySelector(".end-game").style.display = "flex";

                        document.querySelector(".vs_item").style.top = "0";

                        document.querySelector(".container").style.marginTop = "0";

                    }, 1000);

                }, 3000);

                setTimeout(() => {
                    computerPick1();
                }, 1000);

            });
        });

        startTimer(3, () => {

            document.querySelector(".end-game").style.display = "flex";

            document.querySelector(".vs_player").style.display = "none";

            document.querySelector(".vs_item").style.display = "flex";

            Player_name.textContent = "Player 1";

            Player_name.style.width = "235px";

            What_player1.textContent = "You";

            document.getElementById("Player_name").style.display = "flex";

            show_items1.style.display = "flex";
            show_items2.style.display = "flex";

            // show_items2.style.marginTop = "5rem";

            items_1.style.display = "flex";
            items_2.style.display = "flex";

            document.querySelector('.end-game').addEventListener("click", () => {
                location.reload();
            });

        });
    });

    container_player_1.style.display = "none";
    container_player_2.style.display = "none";

    show_items1.style.display = "flex";
    show_items2.style.display = "flex";

    // show_items2.style.marginTop = "5rem";

    items_1.style.display = "flex";
    items_2.style.display = "flex";

    timer.style.marginTop = "16rem";

    document.querySelector(".vs_player").style.display = "none";

    document.querySelector(".vs_item").style.display = "flex";

    Player_name.textContent = "Player 1";

    Player_name.style.width = "235px";

    What_player1.textContent = "You";

    What_player2.textContent = "Computer";

    document.querySelector(".start-game").style.display = "flex";


});

document.getElementById("player2").addEventListener("click", () => {

    document.querySelector(".back-to-home").style.display = "none";

    document.getElementById("modal").style.display = "block"

    document.getElementById("overlay").style.display = "block";

    document.getElementById("exit_notification").addEventListener("click", () => {
        document.getElementById("modal").style.display = "none";
        document.getElementById("overlay").style.display = "none";
    })

    document.querySelector(".vs_player").style.display = "none";

    document.getElementById("start").addEventListener("click", () => {

        Player_name.style.display = "none";

        document.querySelector(".vs_item").style.display = "none";

        show_items1.style.display = "none";
        show_items2.style.display = "none";

        items_1.style.display = "none";
        items_2.style.display = "none";

        document.querySelector(".start-game").style.display = "none";

        document.getElementById("bato2").addEventListener("click", () => {
            // document.getElementById("player2_picture").src = "4.png";

            document.querySelector(".vs_item").style.display = "none";

            player2_picture.style.display = "none";

            timer.style.marginTop = "10px";

            startTimer(3, () => {

                document.querySelector(".container").style.marginTop = "3rem";

                items_1.style.display = "none";
                items_2.style.display = "none";

                document.querySelector(".vs_item").style.display = "flex";

                document.querySelector(".vs_item").style.top = "15.5%";

                document.querySelector(".end-game").style.display = "none";

                player1_picture.style.display = "block";

                const process7 = document.getElementById("player1_picture");

                process7.src = "4.png";

                const Jackanim7 = process7.animate(

                    [
                        { transform: "scaleX(-1) rotate(-5deg)" },
                        { transform: "scaleX(-1) rotate(5deg)" }
                    ],
                    {
                        duration: 1000,
                        iterations: Infinity,
                        easing: "ease-in-out"
                    }
                );

                player2_picture.style.display = "block";

                const process8 = document.getElementById("player2_picture");

                process8.src = "4.png";

                const Jackanim8 = process8.animate(
                    [
                        { transform: "rotate(-5deg)" },
                        { transform: "rotate(5deg)" }
                    ],
                    {
                        duration: 1000,
                        iterations: Infinity,
                        easing: "ease-in-out"
                    }
                );

                setTimeout(() => {

                    document.getElementById("player1_picture").src = "4.png";

                    document.getElementById("player1_picture").style.display = "none";
                    process8.style.display = "none";

                    Jackanim7.cancel();
                    Jackanim8.cancel();

                    setTimeout(() => {
                        player2_picture.src = "4.png";
                        player2_picture.style.display = "flex";

                        items_1.style.display = "flex";
                        items_2.style.display = "flex";

                        document.querySelector(".end-game").style.display = "flex";

                        document.querySelector(".vs_item").style.top = "0";

                        document.querySelector(".container").style.marginTop = "0";
                    }, 1000);
                }, 3000);

                setTimeout(() => {
                    computerPick2();
                }, 1000);

            });
        });

        document.getElementById("gunting2").addEventListener("click", () => {
            document.getElementById("player2_picture").src = "5.png";

            document.querySelector(".vs_item").style.display = "none";

            player2_picture.style.display = "none";

            timer.style.marginTop = "10px";

            startTimer(3, () => {

                document.querySelector(".container").style.marginTop = "3rem";

                items_1.style.display = "none";
                items_2.style.display = "none";

                document.querySelector(".vs_item").style.display = "flex";

                document.querySelector(".vs_item").style.top = "15.5%";

                document.querySelector(".end-game").style.display = "none";

                player1_picture.style.display = "block";

                const process9 = document.getElementById("player1_picture");

                process9.src = "4.png";

                const Jackanim9 = process9.animate(

                    [
                        { transform: "scaleX(-1) rotate(-5deg)" },
                        { transform: "scaleX(-1) rotate(5deg)" }
                    ],
                    {
                        duration: 1000,
                        iterations: Infinity,
                        easing: "ease-in-out"
                    }
                );

                player2_picture.style.display = "block";

                const process10 = document.getElementById("player2_picture");

                process10.src = "4.png";

                const Jackanim10 = process10.animate(
                    [
                        { transform: "rotate(-5deg)" },
                        { transform: "rotate(5deg)" }
                    ],
                    {
                        duration: 1000,
                        iterations: Infinity,
                        easing: "ease-in-out"
                    }
                );

                setTimeout(() => {

                    document.getElementById("player1_picture").src = "4.png";

                    document.getElementById("player1_picture").style.display = "none";
                    process10.style.display = "none";

                    Jackanim9.cancel();
                    Jackanim10.cancel();

                    setTimeout(() => {
                        player2_picture.src = "5.png";
                        player2_picture.style.display = "flex";

                        items_1.style.display = "flex";
                        items_2.style.display = "flex";

                        document.querySelector(".end-game").style.display = "flex";

                        document.querySelector(".vs_item").style.top = "0";

                        document.querySelector(".container").style.marginTop = "0";
                    }, 1000);
                }, 3000);

                setTimeout(() => {
                    computerPick2();
                }, 1000);

            });
        });

        document.getElementById("papel2").addEventListener("click", () => {
            document.getElementById("player2_picture").src = "6.png";

            document.querySelector(".vs_item").style.display = "none";

            player2_picture.style.display = "none";

            timer.style.marginTop = "10px";

            startTimer(3, () => {

                document.querySelector(".container").style.marginTop = "3rem";

                items_1.style.display = "none";
                items_2.style.display = "none";

                document.querySelector(".vs_item").style.display = "flex";

                document.querySelector(".vs_item").style.top = "15.5%";

                document.querySelector(".end-game").style.display = "none";

                player1_picture.style.display = "block";

                const process11 = document.getElementById("player1_picture");

                process11.src = "4.png";

                const Jackanim11 = process11.animate(

                    [
                        { transform: "scaleX(-1) rotate(-5deg)" },
                        { transform: "scaleX(-1) rotate(5deg)" }
                    ],
                    {
                        duration: 1000,
                        iterations: Infinity,
                        easing: "ease-in-out"
                    }
                );

                player2_picture.style.display = "block";

                const process12 = document.getElementById("player2_picture");

                process12.src = "4.png";

                const Jackanim12 = process12.animate(
                    [
                        { transform: "rotate(-5deg)" },
                        { transform: "rotate(5deg)" }
                    ],
                    {
                        duration: 1000,
                        iterations: Infinity,
                        easing: "ease-in-out"
                    }
                );

                setTimeout(() => {

                    document.getElementById("player1_picture").src = "4.png";

                    document.getElementById("player1_picture").style.display = "none";
                    process12.style.display = "none";

                    Jackanim11.cancel();
                    Jackanim12.cancel();

                    setTimeout(() => {
                        player2_picture.src = "6.png";
                        player2_picture.style.display = "flex";

                        items_1.style.display = "flex";
                        items_2.style.display = "flex";

                        document.querySelector(".end-game").style.display = "flex";

                        document.querySelector(".vs_item").style.top = "0";

                        document.querySelector(".container").style.marginTop = "0";
                    }, 1000);
                }, 3000);

                setTimeout(() => {
                    computerPick2();
                }, 1000);

            });
        });

        startTimer(3, () => {

            document.querySelector(".end-game").style.display = "flex";

            document.querySelector(".vs_player").style.display = "none";

            document.querySelector(".vs_item").style.display = "flex";

            Player_name.textContent = "Player 2";

            Player_name.style.width = "235px";

            What_player2.textContent = "You";

            document.getElementById("Player_name").style.display = "flex";

            show_items1.style.display = "flex";
            show_items2.style.display = "flex";

            items_1.style.display = "flex";
            items_2.style.display = "flex";

            document.querySelector(".start-game").style.display = "none";

            document.querySelector(".end-game").addEventListener("click", () => {
                location.reload();
            });

        });
    });


    container_player_1.style.display = "none";
    container_player_2.style.display = "none";

    show_items1.style.display = "flex";
    show_items2.style.display = "flex";

    items_1.style.display = "flex";
    items_2.style.display = "flex";

    timer.style.marginTop = "16rem";

    document.querySelector(".vs_player").style.display = "none";

    document.querySelector(".vs_item").style.display = "flex";

    Player_name.textContent = "Player 2";

    Player_name.style.width = "235px";

    What_player2.textContent = "You";

    What_player1.textContent = "Computer";

    document.querySelector(".start-game").style.display = "flex";
});