import styled from "styled-components";

export const MainWrapper = styled.div`
  height: 100vh;
  background: linear-gradient(to right, #7ad7e8, #b5e7a0); /* Updated gradient */
  
  .container {
    background-color: #f0f0f0; /* Light grey background */
    border-radius: 12px;
    padding: 1rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2); /* Soft shadow */
    box-sizing: border-box;
    color: #333; /* Dark text color */
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 80%; /* Adjusted width */
    max-width: 800px; /* Max width for larger screens */
    height: auto; /* Auto height to fit content */
  }

  .searchArea {
    margin-top: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
  }

  .searchArea > input {
    outline: none;
    border: none;
    border: 1px solid #ccc; /* Light grey border */
    padding: 8px;
    border-radius: 20px;
    text-align: center;
    width: 80%;
    background: #f9f9f9; /* Light background */
  }

  .searchCircle {
    border: 1px solid #ccc; /* Light grey border */
    width: 30px;
    height: 30px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .searchCircle > .searchIcon {
    font-size: 20px;
    color: #666; /* Dark grey icon color */
  }

  .weatherArea {
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 30px 0;
  }

  .weatherArea > .icon {
    font-size: 9rem;
    /* Placeholder for weather icon styling */
  }

  .weatherArea > h1 {
    font-size: 3rem;
    font-family: "Bebas Neue", sans-serif; /* Custom font */
    color: #333; /* Dark text color */
  }

  .weatherArea > span {
    margin-bottom: 10px;
    font-family: "Inter", sans-serif; /* Default sans-serif font */
    color: #555; /* Medium grey text color */
  }

  .weatherArea > h2 {
    font-size: 2rem;
    font-family: "Inter", sans-serif; /* Default sans-serif font */
    font-weight: 400;
    color: #555; /* Medium grey text color */
  }

  .bottomInfoArea {
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-family: "Josefin Sans", sans-serif; /* Custom font */
    margin: 10px;
    background: linear-gradient(
      90deg,
      rgba(226, 241, 255, 1) 0%, /* Gradient start color */
      rgba(191, 235, 238, 1) 100% /* Gradient end color */
    );
    border-radius: 12px;
    padding: 10px;
  }

  .humidityLevel,
  .wind {
    display: flex;
    align-items: center;
    margin: 0 20px;
  }

  .humidityLevel > .humidIcon {
    font-size: 3rem;
    /* Placeholder for humidity icon styling */
  }

  .wind > .windIcon {
    font-size: 2rem;
    margin-right: 10px;
    /* Placeholder for wind icon styling */
  }

  .loading {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }

  .loading > .loadingIcon {
    font-size: 3rem;
    /* Placeholder for loading icon styling */
    animation: spin 2s linear infinite;
  }

  .loading > p {
    font-size: 22px;
    margin-top: 10px;
    font-family: "Josefin Sans", sans-serif; /* Custom font */
    color: #555; /* Medium grey text color */
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export default MainWrapper;
