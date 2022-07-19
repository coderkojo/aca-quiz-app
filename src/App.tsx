import React, { useState } from 'react';
import { createFalse } from 'typescript';
import './App.css';
import Results from './Results';

function App() {
	const [showFinalResults, setFinalResults] = useState(false);
	const [score, setScore] = useState(0);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showAnswers, setAnswers] = useState(true);

	const questions = [
		{
		  text: "Who is attributed with inventing Git?",
		  options: [
			{ id: 0, text: "Linus Torvalds", isCorrect: true },
			{ id: 1, text: "Bill Gates", isCorrect: false },
			{ id: 2, text: "James Gosling", isCorrect: false },
			{ id: 3, text: "Junio Hamano", isCorrect: false },
		  ],
		},
		{
		  text: "What is the default text editor for the Bash shell with a Windows-based Git install?",
		  options: [
			{ id: 0, text: "Emacs", isCorrect: false },
			{ id: 1, text: "Notepad++", isCorrect: false },
			{ id: 2, text: "Vim", isCorrect: true },
			{ id: 3, text: "Bash", isCorrect: false },
		  ],
		},
		{
		  text: "After you initialize a new Git repository and create a file named git-quiz.html, which of the following commands will not work if issued?",
		  options: [
			{ id: 0, text: "git add git-quiz.html", isCorrect: false },
			{ id: 1, text: "git add", isCorrect: false },
			{ id: 2, text: "git status", isCorrect: false },
			{ id: 3, text: "git commit -m git quiz web file added", isCorrect: true },
		  ],
		},
		{
		  text: "Which vendor acquired GitHub for $7.5 billion in June 2018?",
		  options: [
			{ id: 0, text: "IBM", isCorrect: false },
			{ id: 1, text: "Mircosoft", isCorrect: true },
			{ id: 2, text: "Oracle", isCorrect: false },
			{ id: 3, text: "Apple", isCorrect: false },
		  ],
		},
		{
		  text: "Before you install Git, which of the following prerequisite products must be present and configured on your local OS?",
		  options: [
			{ id: 0, text: "Apache Maven", isCorrect: false },
			{ id: 1, text: "Jakarta", isCorrect: false },
			{ id: 2, text: "Java Development Kit 1.8", isCorrect: true },
			{ id: 3, text: "Nothing", isCorrect: true },
		  ],
		},
		{
			text: "After you install Git and prior to issuing the first commit, which two configuration properties does the tool expect to be configured?",
			options: [
			  { id: 0, text: "Ip Address and Browser", isCorrect: false },
			  { id: 1, text: "Email & Password", isCorrect: false },
			  { id: 2, text: "Username & Email Address", isCorrect: true },
			  { id: 3, text: "Nothing", isCorrect: false },
			],
		  },
		  {
			text: "Which command should you use to initialize a new Git repository?",
			options: [
			  { id: 0, text: "git init", isCorrect: true },
			  { id: 1, text: "git bash", isCorrect: false },
			  { id: 2, text: "git install", isCorrect: false },
			  { id: 3, text: "git start", isCorrect: false },
			],
		  },
		  {
			text: "Which file can you configure to ensure that certain file types are never committed to the local Git repository?",
			options: [
			  { id: 0, text: ".gitignore", isCorrect: true },
			  { id: 1, text: "ignore.git", isCorrect: false },
			  { id: 2, text: "git.ignore", isCorrect: false },
			  { id: 3, text: "gitignore.txt", isCorrect: false },
			],
		  },
		  {
			text: "How do you supply a commit message to a commit?",
			options: [
			  { id: 0, text: "Git message 'I'm coding!'", isCorrect: false },
			  { id: 1, text: "Git commit -m 'I'm coding!'", isCorrect: true },
			  { id: 2, text: "Git add 'I'm coding!'", isCorrect: true },
			  { id: 3, text: "Git commit 'I'm coding!'", isCorrect: false },
			],
		  },
		  {
			text: "Which of the following commands join two or more development histories together?",
			options: [
			  { id: 0, text: "Git join", isCorrect: false },
			  { id: 1, text: "Git concat", isCorrect: false },
			  { id: 2, text: "Git branch", isCorrect: false },
			  { id: 3, text: "Git merge", isCorrect: true },
			],
		  },
		  {
			text: "Which of the following commands is used to reset current HEAD to the specified state?",
			options: [
			  { id: 0, text: "Git diff", isCorrect: false },
			  { id: 1, text: "Git reset", isCorrect: true },
			  { id: 2, text: "Git checkout", isCorrect: true },
			  { id: 3, text: "Git restore", isCorrect: false },
			],
		  },
		  {
			text: "To get the lastest changes from your remote repository, the git command is?",
			options: [
			  { id: 0, text: "Git pull origin master", isCorrect: true },
			  { id: 1, text: "Git reset", isCorrect: true },
			  { id: 2, text: "Git refresh", isCorrect: true },
			  { id: 3, text: "Git pull down", isCorrect: false },
			],
		  },
		  {
			text: "What is an IDE?",
			options: [
			  { id: 0, text: "Interior Design Environment", isCorrect: false },
			  { id: 1, text: "Interior Development Environment", isCorrect: false },
			  { id: 2, text: "Integrated Design Environment", isCorrect: false },
			  { id: 3, text: "Integrated Development Environment", isCorrect: true },
			],
		  },
		  {
			text: "What is the best IDE for Developing REACT/Typescipt Apps?",
			options: [
			  { id: 0, text: "Java", isCorrect: false },
			  { id: 1, text: "Code Blocks", isCorrect: false },
			  { id: 2, text: "Visual Studio Code", isCorrect: true },
			  { id: 3, text: "Notepad++", isCorrect: false },
			],
		  },
		  {
			text: "What is a Plug-in?",
			options: [
			  { id: 0, text: "Is a portable, extensible, open source platform for managing containerized workloads and services", isCorrect: false },
			  { id: 1, text: "A model that stores data on the Internet through a cloud computing provider who manages and operates data storage", isCorrect: true },
			  { id: 2, text: "A plugin is a software add-on that is installed on a program, enhancing its capabilities. ", isCorrect: true },
			  { id: 3, text: "physical objects with sensors, processing ability, software, and other technologies that connect and exchange data with other devices and systems over the Internet ", isCorrect: false },
			],
		  },
		  {
			text: "Which Website do Frontend Desiners use for inspiration",
			options: [
			  { id: 0, text: "Dribbble", isCorrect: false },
			  { id: 1, text: "Hulu", isCorrect: true },
			  { id: 2, text: "Spotify", isCorrect: true },
			  { id: 3, text: "Netflix", isCorrect: false },
			],
		  },
		  {
			text: "The # symbol specifies that the selector is?",
			options: [
			  { id: 0, text: "Tag", isCorrect: false },
			  { id: 1, text: "Tag", isCorrect: false },
			  { id: 2, text: "Id", isCorrect: true },
			  { id: 3, text: "Class", isCorrect: false },
			 
			],
		  },
		  {
			text: "In the Following case:what value is given for the left margin margin 5px 10px 3px 8px;",
			options: [
			  { id: 0, text: "5px", isCorrect: false },
			  { id: 1, text: "8px", isCorrect: true },
			  { id: 2, text: "3px", isCorrect: false },
			  { id: 3, text: "10px", isCorrect: false },
			   //8px: The CSS shorthand property follows the top, right, bottom, left syntax.
			],
		  },
		  {
			text: "Which HTML5 element defines navigation links?",
			options: [
			  { id: 0, text: "navigate", isCorrect: false },
			  { id: 1, text: "links", isCorrect: false },
			  { id: 2, text: "</a>", isCorrect: false },
			  { id: 3, text: "nav", isCorrect: true },
			  //nav: Introduced with HTML5, this element is intended to be used with major blocks of navigation links.
			],
		  },
		  {
			text: "How can you print information to the console?",
			options: [
			  { id: 0, text: "console(info)", isCorrect: false },
			  { id: 1, text: "print(info)", isCorrect: false },
			  { id: 2, text: "console.log(info)", isCorrect: true },
			  { id: 3, text: "console.print(info)", isCorrect: false },
			],
			//Other console methods are console.dir(), console.time() and others.
		  },
		  {
			text: "How do you call the function 'myFunction'?",
			options: [
			  { id: 0, text: "myFunction", isCorrect: false },
			  { id: 1, text: "myFunction()", isCorrect: true },
			  { id: 2, text: "func myFunction()", isCorrect: false },
			  { id: 3, text: "None of those", isCorrect: false },
			],
			//using parenthesis executes the function. Without them you would hold a reference to the function itself.
		  },
		  {
			text: "What property is used to change the text color of an element?",
			options: [
			  { id: 0, text: "color", isCorrect: true },
			  { id: 1, text: "element.color", isCorrect: false },
			  { id: 2, text: "fontcolor", isCorrect: false },
			  { id: 3, text: "textcolor", isCorrect: false },
			],
			//And colors can be defined with keywords such as red, in hex (#000) or rgb (rgb(0,0,0)).
		  },
		  {
			text: "What keyword is used to create a JavaScript variable",
			options: [
			  { id: 0, text: "string", isCorrect: false },
			  { id: 1, text: "int", isCorrect: false },
			  { id: 2, text: "var", isCorrect: true },
			  { id: 3, text: "char", isCorrect: false },
			],
			//var: It is used to hold any JavaScript data type. In other languages different keywords are used for different data types.
		  },
		  {
			text: "In this case, var a = []; What does 'typeof a' return?",
			options: [
			  { id: 0, text: "object", isCorrect: true },
			  { id: 1, text: "array", isCorrect: false },
			  { id: 2, text: "string", isCorrect: false },
			  { id: 3, text: "undefined", isCorrect: false },
			],
			//object: Arrays are considered a special type of object in JavaScript


		  },		  
		  {
			text: "Which doctype is correct for HTML5?",
			options: [
			  { id: 0, text: "doc.html", isCorrect: false },
			  { id: 1, text: "!DOCTYPE html", isCorrect: true },
			  { id: 2, text: "!DOCTYPE", isCorrect: false },
			  { id: 3, text: "!DOCTYPE HTML5", isCorrect: false },
			],
			//!DOCTYPE html: Was released with the fifth edition of HTML. Made simpler and shorter than before.
		  },
		  {
			text: "Which of the following function of Array object removes the last element from an array and returns that element?",
			options: [
			  { id: 0, text: "push()", isCorrect: false },
			  { id: 1, text: "join()", isCorrect: false },
			  { id: 2, text: "map()", isCorrect: false },
			  { id: 3, text: "pop()", isCorrect: true },
			],
			//Pop removes the last element while push adds an element to the end!
		  },
		  {
			text: "In CSS, choose the correct option to select this image by its id?",
			options: [
			  { id: 0, text: "mainpic { }", isCorrect: false },
			  { id: 1, text: "img { }", isCorrect: false },
			  { id: 2, text: ".mainpic", isCorrect: false },
			  { id: 3, text: "#mainpic", isCorrect: true },
			],
		  },
		  {
			text: "In CSS,select the property used to set the background color of an image?",
			options: [
			  { id: 0, text: "color:background", isCorrect: false },
			  { id: 1, text: "background-color", isCorrect: true },
			  { id: 2, text: "background:color", isCorrect: false },
			  { id: 3, text: "None", isCorrect: false },
			],
		  },
		  {
			text: "Select the option to make a list that lists the items with bullets?",
			options: [
			  { id: 0, text: "<ul>", isCorrect: true },
			  { id: 1, text: "<do>", isCorrect: false },
			  { id: 2, text: "<p>", isCorrect: false },
			  { id: 3, text: "<a>", isCorrect: false },
			],
		  },
		  {
			text: "Select the appropriate HTML tag for inserting a line break?",
			options: [
			  { id: 0, text: "<bbr>", isCorrect: false },
			  { id: 1, text: "<break>", isCorrect: false },
			  { id: 2, text: "<br>", isCorrect: true },
			  { id: 3, text: "<lineb>", isCorrect: false },
			],
		  },		  
		  {
			text: "What are the three main 'simple types' in TypeScript?",
			options: [
			  { id: 0, text: "Cool", isCorrect: false },
			  { id: 1, text: "Lame", isCorrect: true },
			  { id: 2, text: "Awesome", isCorrect: true },
			  { id: 3, text: "Life", isCorrect: false },
			],
		  },
		  {
			text: "You can disable implicit variable type assignment by enabling the compiler option:",
			options: [
			  { id: 0, text: "Cool", isCorrect: false },
			  { id: 1, text: "Lame", isCorrect: true },
			  { id: 2, text: "Awesome", isCorrect: true },
			  { id: 3, text: "Life", isCorrect: false },
			],
		  },
		  {
			text: "Which of the following companies has developed and designed TypeScript?",
			options: [
			  { id: 0, text: "Amazon", isCorrect: false },
			  { id: 1, text: "TypeScript", isCorrect: false },
			  { id: 2, text: "Microsoft", isCorrect: true },
			  { id: 3, text: "Oracle", isCorrect: false },
			],
		  },
		  {
			text: "What is the typing principle of typescript?",
			options: [
			  { id: 0, text: "Gradual", isCorrect: false },
			  { id: 1, text: "Duck", isCorrect: true },
			  { id: 2, text: "Dynamic", isCorrect: true },
			  { id: 3, text: "All of the above", isCorrect: false },
			],
		  },
		  {
			text: "Which of the following filenames is the extension for typescript?",
			options: [
			  { id: 0, text: ".tt", isCorrect: false },
			  { id: 1, text: ".nod", isCorrect: false },
			  { id: 2, text: ".ts", isCorrect: true },
			  { id: 3, text: ".txt", isCorrect: false },
			],
		  },
		  {
			text: "Which of the computer programming languages below has influenced the creation of typescript?",
			options: [
			  { id: 0, text: "Javascript", isCorrect: true },
			  { id: 1, text: "C++", isCorrect: false },
			  { id: 2, text: "Java", isCorrect: false },
			  { id: 3, text: "Python", isCorrect: false },
			],
		  },
		  {
			text: "All are backported features of TypeScript, except….",
			options: [
			  { id: 0, text: "Arrow", isCorrect: true },
			  { id: 1, text: "Classes", isCorrect: false },
			  { id: 2, text: "Modules", isCorrect: false },
			  { id: 3, text: "Methods", isCorrect: false },
			],
		  },
		  {
			text: "The advantages of Typescript are...",
			options: [
			  { id: 0, text: "It assists in code structuring.", isCorrect: false },
			  { id: 1, text: "It applies class -based object oriented programming.", isCorrect: true },
			  { id: 2, text: "It introduces coding guidelines.", isCorrect: true },
			  { id: 3, text: "All of the above", isCorrect: false },
			],
		  },
		  {
			text: "What variable scopes are available in TypeScript?",
			options: [
			  { id: 0, text: "Global Scope", isCorrect: false },
			  { id: 1, text: "Local Scope", isCorrect: false },
			  { id: 2, text: "Class Scope", isCorrect: false },
			  { id: 3, text: "All of the above", isCorrect: true },
			],
		  },
		  {
			text: "A typescript may be installed or managed through…",
			options: [
			  { id: 0, text: "Tag", isCorrect: false },
			  { id: 1, text: "Npm", isCorrect: true },
			  { id: 2, text: "Space", isCorrect: false },
			  { id: 3, text: "Javascript", isCorrect: false },
			],
		  },
		  {
			text: "Which of the following is a Typescript feature?",
			options: [
			  { id: 0, text: "Typescript can be compiled to all major versions of Javascript(ES3,ES5,ES6,ES7).", isCorrect: false },
			  { id: 1, text: "Once can use Typescript for cross -browser development. It is an open source project.", isCorrect: false },
			  { id: 2, text: "Typescript is considered a superset of JavaScript, providing typed nature to the code.", isCorrect: false },
			  { id: 3, text: "All of the above.", isCorrect: true },
			],
		  },
		  {
			text: "..... are the way of organizing a code in TypeScript.",
			options: [
			  { id: 0, text: "Scripts", isCorrect: false },
			  { id: 1, text: "Modules", isCorrect: false },
			  { id: 2, text: "Methods", isCorrect: true },
			  { id: 3, text: "Classes", isCorrect: false },
			],
		  },
		  {
			text: "What are considered the types of access modifiers supported by TypeScript?",
			options: [
			  { id: 0, text: "Private", isCorrect: false },
			  { id: 1, text: "Public", isCorrect: false },
			  { id: 2, text: "A & B", isCorrect: true },
			  { id: 3, text: "Void", isCorrect: false },
			],
		  },
		  {
			text: "Which object-oriented terms are supported by TypeScript?",
			options: [
			  { id: 0, text: "Interfaces", isCorrect: false },
			  { id: 1, text: "Data Types", isCorrect: false },
			  { id: 2, text: "Member Functions", isCorrect: false },
			  { id: 3, text: "All the above", isCorrect: true },
			],
		  },
		  {
			text: "Which is not true about typescript?",
			options: [
			  { id: 0, text: "It is interpreted like javascript", isCorrect: false },
			  { id: 1, text: "It is a superset of javascript", isCorrect: false },
			  { id: 2, text: "It does support static data type", isCorrect: true },
			  { id: 3, text: "Typescript is case sensitive", isCorrect: false },
			],
		  },
		  {
			text: "In bash which command is used to change a directory?",
			options: [
			  { id: 0, text: "change", isCorrect: false },
			  { id: 1, text: "cd", isCorrect: true },
			  { id: 2, text: "dir", isCorrect: false },
			  { id: 3, text: "ls", isCorrect: false },
			],
		  },
		  {
			text: "In bash which command is used to create a directory?",
			options: [
			  { id: 0, text: "ls", isCorrect: false },
			  { id: 1, text: "dircreate", isCorrect: false },
			  { id: 2, text: "create", isCorrect: false },
			  { id: 3, text: "mkdir", isCorrect: true },
			],
		  },
		  {
			text: "Print the current directory the shell is in.",
			options: [
			  { id: 0, text: "print", isCorrect: false },
			  { id: 1, text: "pwd", isCorrect: true },
			  { id: 2, text: "show", isCorrect: false },
			  { id: 3, text: "list", isCorrect: false },
			],
		  },
		  {
			text: "Make a file music.txt",
			options: [
			  { id: 0, text: "mk music.tx", isCorrect: false },
			  { id: 1, text: "mkfile music.txt", isCorrect: false },
			  { id: 2, text: "touch music.txt", isCorrect: true },
			  { id: 3, text: "create music.txt", isCorrect: false },
			],
		  },
		  {
			text: "Who wrote Bash",
			options: [
			  { id: 0, text: "Elon Mus", isCorrect: false },
			  { id: 1, text: "Brian Fox", isCorrect: true },
			  { id: 2, text: "Bill Gate", isCorrect: false },
			  { id: 3, text: "Micheal Jordan", isCorrect: false },
			],
			//Bash is a Unix shell and command language written by Brian Fox for the GNU Project as a free software replacement for the Bourne shell. First released in 1989, it has been used as the default login shell for most Linux distributions.
		  },
		  {
			text: "How can you append the output of a command to a file?",
			options: [
			  { id: 0, text: "Command > file", isCorrect: false },
			  { id: 1, text: "Command <> file", isCorrect: false },
			  { id: 2, text: "Command >> file", isCorrect: true },
			  { id: 3, text: "Command < file", isCorrect: false },
			],
		  },
		  {
			text: "With what command you can see your user name?",
			options: [
			  { id: 0, text: "whoami", isCorrect: true },
			  { id: 1, text: "I", isCorrect: false },
			  { id: 2, text: "me", isCorrect: false },
			  { id: 3, text: "pwd", isCorrect: false },
			],
		  },
		  {
			text: "All UNIX files have its description stored in a structure called 'inode'. which of the below fields are not part of the inode.",
			options: [
			  { id: 0, text: "File owner identifier", isCorrect: false },
			  { id: 1, text: "File type", isCorrect: false },
			  { id: 2, text: "File access permissions", isCorrect: false },
			  { id: 3, text: "File access count", isCorrect: true },
			],
		  },
		  {
			text: "How do you delete a file?",
			options: [
			  { id: 0, text: "delete filename", isCorrect: false },
			  { id: 1, text: "rm filename", isCorrect: true },
			  { id: 2, text: "di filename", isCorrect: false },
			  { id: 3, text: "less filename", isCorrect: false },
			],
		  },
		  {
			text: "What is a useState in React",
			options: [
			  { id: 0, text: "A primitive datatype", isCorrect: false },
			  { id: 1, text: "An array that stores numbers", isCorrect: false },
			  { id: 2, text: "a Hook (function) that allows you to have state variables in functional components.", isCorrect: true },
			  { id: 3, text: "A fucntion for npm", isCorrect: false },
			],
		  },
		  {
			text: "What is the correct command to create a new React project?",
			options: [
			  { id: 0, text: "npm create", isCorrect: false },
			  { id: 1, text: "npx create-react-app", isCorrect: false },
			  { id: 2, text: "npx create-react-app appName", isCorrect: false },
			  { id: 3, text: "npm create-react", isCorrect: false },
			],
		  },
		  {
			text: "How do we install node modules?",
			options: [
			  { id: 0, text: "npm install", isCorrect: true },
			  { id: 1, text: "npx module-install", isCorrect: false },
			  { id: 2, text: "npx install-modules", isCorrect: false },
			  { id: 3, text: "npm get-modules", isCorrect: false },
			],
		  },
		  {
			text: "What command is used to start the React local development server?",
			options: [
			  { id: 0, text: "npm run", isCorrect: false },
			  { id: 1, text: "npm start", isCorrect: true },
			  { id: 2, text: "npm run local", isCorrect: false },
			  { id: 3, text: "npm build", isCorrect: false },
			],
		  },
		  {
			text: "What is the default local host port that a React development server uses?",
			options: [
			  { id: 0, text: "3500", isCorrect: false },
			  { id: 1, text: "5000", isCorrect: false },
			  { id: 2, text: "8080", isCorrect: false },
			  { id: 3, text: "3000", isCorrect: true },
			],
		  },
		  {
			text: "To develop and run React code, Node.js is required",
			options: [
			  { id: 0, text: "No just React", isCorrect: false },
			  { id: 1, text: "True", isCorrect: true },
			  { id: 2, text: "Only HTML", isCorrect: false },
			  { id: 3, text: "False", isCorrect: false },
			],
		  },
		  {
			text: "Which keyword creates a constant in JavaScript?",
			options: [
			  { id: 0, text: "char", isCorrect: false },
			  { id: 1, text: "var", isCorrect: false },
			  { id: 2, text: "const", isCorrect: true },
			  { id: 3, text: "boolean", isCorrect: false },
			],
		  },
		  {
			text: "A copy of the 'real' DOM that is kept in memory is called what?",
			options: [
			  { id: 0, text: "Fake DOM", isCorrect: false },
			  { id: 1, text: "DOM", isCorrect: false },
			  { id: 2, text: "Shadow DOM", isCorrect: false },
			  { id: 3, text: "Virtual DOM", isCorrect: true },
			],
		  },		  		  


	  ];

const optionClicked = (isCorrect: boolean)  => {
	if(isCorrect)
	{
		setScore (score + 1);
	}

	if(currentQuestion + 1 < questions.length)
	{
		setCurrentQuestion(currentQuestion + 1);
	}
		else {
			setFinalResults(true);
		}
	
}


	const startQuiz = () => {
		setCurrentQuestion(0);
		setScore(0);
		setFinalResults(false);
	}
	const showResults = () =>{
		setAnswers(true);
		<Results/>;

	}




  return (
    <div className="App">
		
	  <h1>ACA Quiz Application</h1>
	  <h2>Your Score: {score}</h2>
	  { showFinalResults ? (
	  
	  <div className = "final-results">
	  
	  <h2>You got {score} out of {questions.length} </h2>
	  <button className = "btn" onClick={() => startQuiz()}>Restart Quiz</button>
	  <button onClick={() => showResults()}>View Results</button>
	  </div>
	  ) : (
	  <><div className="flash-questions">
					  <h2>Question {currentQuestion + 1 } out of {questions.length}</h2>
					  <h3> {questions[currentQuestion].text} </h3>
					  <ul>
						{questions[currentQuestion].options.map((option) => {
							return(

						<li onClick = {() => optionClicked(option.isCorrect)} key = {option.id}>{option.text}</li>
						
							);
						})}
					  </ul>
				  </div></>
  
	  )}
    </div>
	);


}

export default App;
