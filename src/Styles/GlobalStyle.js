import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;1,200&family=Oswald:wght@200;300;400&display=swap');
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        user-select: none;
    }
    html {
        font-size: calc(60% + 0.8vmin);
        font-family: 'Nunito', sans-serif;
    }

    a {
        text-decoration: none;
    }

    .activeSlide {
          opacity: 1;
          transform: translateX(0);
    }
    .lastSlide {
        transform: translateX(-100%);
    }
    .nextSlide {
        transform: translateX(100%);
    }

    .todo-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 4px auto;
        padding: 1rem;
        border-radius: 5px;
        width: 90%;
        color: #fff;
        background: linear-gradient(
                90deg,
                rgba(255, 118, 20, 1) 0%,
                rgba(255, 84, 17, 1) 100%
        );


        :nth-child(4n + 1) {
            background: linear-gradient(
                90deg,
                rgba(93, 12, 255, 1) 0%,
                rgba(155, 0, 250, 1) 100%
            );
        }

        :nth-child(4n + 2) {
            background: linear-gradient(
                90deg,
                rgba(255, 12, 241, 1) 0%,
                rgba(255, 0, 135, 1) 100%
            );
        }
        :nth-child(4n + 3) {
            background: linear-gradient(
                90deg,
                rgba(20, 159, 255, 1) 0%,
                rgba(17, 122, 255, 1) 100%
            );
        }
    }

    .complete {
        text-decoration: line-through;
        opacity: 0.4;
    }
`;