export const testInput = `.container {
  width: 100%;
  height: auto;
  max-width: 1200px;
  min-width: 300px;
  max-height: 800px;
  min-height: 200px;
  margin: 20px;
  padding: 15px;
  border: 1px solid #ccc;
  border-width: 2px;
  border-style: solid;
  border-color: black;
  border-radius: 8px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  position: relative;
  top: 10px;
  left: 20px;
  right: 30px;
  bottom: 40px;
  z-index: 10;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: space-between;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-gap: 10px;
  place-items: center;
  font-size: 16px;
  font-family: Arial, sans-serif;
  font-weight: bold;
  font-style: italic;
  letter-spacing: 1px;
  line-height: 1.5;
  text-align: center;
  text-decoration: underline;
  text-transform: uppercase;
  word-spacing: 2px;
}
  
.container-2 {
  background-color: #f4f4f4;
  background-image: url('example.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  list-style-type: square;
  list-style-position: inside;
  list-style-image: url('bullet.png');
  visibility: visible;
  opacity: 0.9;
  overflow: hidden;
  overflow-x: scroll;
  overflow-y: auto;
  clip-path: circle(50%);
  transition: all 0.3s ease-in-out;
  animation: fadeIn 1s ease-in;
  transform: rotate(15deg);
  transform-origin: center;
  perspective: 1000px;
  column-count: 3;
  column-gap: 20px;
  column-rule: 1px solid black;
  cursor: pointer;
  user-select: none;
  pointer-events: none;
  content: 'Hello';
}`;

export const expectedOutput = `.container {
  /* position and layout */
  grid-template-rows: auto;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  z-index: 10;
  bottom: 40px;
  right: 30px;
  left: 20px;
  top: 10px;
  position: relative;

  /* display and visibility */
  display: flex;

  /* box model */
  box-sizing: border-box;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  border: 1px solid #ccc;
  padding: 15px;
  margin: 20px;
  min-height: 200px;
  max-height: 800px;
  min-width: 300px;
  max-width: 1200px;
  height: auto;
  width: 100%;

  /* typography */
  word-spacing: 2px;
  text-transform: uppercase;
  text-decoration: underline;
  text-align: center;
  line-height: 1.5;
  letter-spacing: 1px;
  font-style: italic;
  font-weight: bold;
  font-family: Arial, sans-serif;
  font-size: 16px;

  /* Ungrouped */
  border-width: 2px;
  border-style: solid;
  border-color: black;
  flex-wrap: wrap;
  align-content: space-between;
  grid-gap: 10px;
  place-items: center;
}
  
.container-2 {
  /* display and visibility */
  opacity: 0.9;

  /* clipping */
  transform: rotate(15deg);
  overflow: hidden;

  /* animation */
  animation: fadeIn 1s ease-in;
  transition: all 0.3s ease-in-out;

  /* background */
  cursor: pointer;
  background-position: center;
  background-size: cover;
  background-color: #f4f4f4;

  /* Ungrouped */
  background-image: url('example.jpg');
  background-repeat: no-repeat;
  background-attachment: fixed;
  list-style-type: square;
  list-style-position: inside;
  list-style-image: url('bullet.png');
  visibility: visible;
  overflow-x: scroll;
  overflow-y: auto;
  clip-path: circle(50%);
  transform-origin: center;
  perspective: 1000px;
  column-count: 3;
  column-gap: 20px;
  column-rule: 1px solid black;
  user-select: none;
  pointer-events: none;
  content: 'Hello';
}`;
