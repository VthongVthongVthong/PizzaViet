

body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
    background-color: #00628F;
    font-family: 'Arial', sans-serif;
}

.signup {
    width: 350px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 15px;
    background-color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    position: relative;
    top: 200px;
}

h1 {
    color: #333;
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    margin-bottom: 20px;
}

input {
    width: 100%;
    height: 40px;
    margin-bottom: 15px;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding-left: 15px;
    font-size: 16px;
    box-sizing: border-box;
    transition: border 0.3s ease;
}

input:focus {
    border-color: #00628F;
    outline: none;
}

button {
    width: 100%;
    height: 45px;
    margin-top: 10px;
    margin-bottom: 20px;
    border: none;
    border-radius: 5px;
    background-color: #00628F;
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.3s ease;
    transform-style: preserve-3d; /* Bảo toàn kiểu 3D */
    transform: rotateX(-15deg) translateZ(5px);
    perspective: 1000px;
}

button:hover {
    background-color: #009CE3;
    transform: scale(1.05);
}


a {
    color: #00628F;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease;
}

a:hover {
    color: #009CE3;
}

.eye{
    width: 350px;
    padding: 10px;
    margin-bottom: 0px;
    position: absolute;
    transform: translateX(-100%);
    cursor: pointer;
    max-width: 40px;
}


.confirm{
    position: absolute;
    top: 58%;
}

.hidden {
    display: none;
}

.test{
    
}
