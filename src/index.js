import React from 'react';
import ReactDOM from 'react-dom';

const App = function(){
	return <div>Hola</div>;
}

ReactDOM.render(new App(), document.querySelector(".container"));
//ReactDOM.render(<App/>, document.querySelector(".container"));
