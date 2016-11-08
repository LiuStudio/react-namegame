[App.js Line #69](https://github.com/LiuStudio/react-namegame/blob/master/src/components/app.js#L69)
  In ES6, 'let' is a means of variable declaration, and redeclaration of a variable is somewhat dangerous.
  For example, imagine making a typo on accident. let myData = [] and then let myDaat = $.parseJson...
  by using let again, you've instead instantiated a new variable 'myDaat' rather than allowing the transpiler
  to catch the typo. Getting into the habit of using declative statements once will probably save some headaches
  down the road.
  
[App.js Line #71](https://github.com/LiuStudio/react-namegame/blob/master/src/components/app.js#L71)
  It would be preferable to use this.setState() here to preserve the immutability of this.state.pdata
  
[App.js Line #77](https://github.com/LiuStudio/react-namegame/blob/master/src/components/app.js#L77)
  Javascript functions conventionally use a camelCase naming convention (with the first letter lowercase)
  
[App.js Line #84](https://github.com/LiuStudio/react-namegame/blob/master/src/components/app.js#L84)
  Javascript operators are generally separated with a space on either side by convention (e.g. '4 + 3' rather than '4+3')
  Note: These suggestions are coming from the [W3 Javascript Styleguide](http://www.w3schools.com/js/js_conventions.asp)
  
[App.js Line #92](https://github.com/LiuStudio/react-namegame/blob/master/src/components/app.js#L92)
  Since the variable is not being mutated or reassigned, it would make sense to use 'const peopleName = selectedpeople.map(...)' here
  
[App.js Line #93](https://github.com/LiuStudio/react-namegame/blob/master/src/components/app.js#L93)
  With small anonymous arrow functions like this, you can eschew the 'return' statement, and slightly improve
  code readability (e.g. (x) => x.name)
  
[App.js Line #102](https://github.com/LiuStudio/react-namegame/blob/master/src/components/app.js#L102)
  When you increment this.state.correctCnt, you are no longer treating the state as immutable, and in turn the next line
  this.setState(correctCnt: this.state.correctCnt) is just setting the state equal to itself. A better approach might be
  more along the lines of 'const correctCnt = this.state.correctCnt + 1; this.setState({ correctCnt }) which avoids direct
  mutation of component state. (Note that this is the case anywhere that there is a line like "this.state.* = something.new")
  
[App.js Line #173](https://github.com/LiuStudio/react-namegame/blob/master/src/components/app.js#L173)
  Generally props being passed into react components are named using camelCase
  
[Candidate.js Line #13](https://github.com/LiuStudio/react-namegame/blob/master/src/components/candidate.js#L13)
  For components with a lot of props, it is generally good convention to move each prop declaration to it's own line
  rather than have one really long line with all of the props in it. A decent styleguide for React components
  and JSX can be found [Here](https://github.com/airbnb/javascript/tree/master/react#basic-rules)
  
[Candidates.js Line #11](https://github.com/LiuStudio/react-namegame/blob/master/src/components/candidates.js#L11)
  Same comments as in Candidate.js with regard to passing props to components all in one long line. Additionally, I would
  advise being careful about using index as a key. In this case it doesn't seem like it will cause problems, but imagine
  a scenario where you had components that could be added to an array or removed from array at the discretion of the user,
  in that case, there could be several components sharing a key value. (I am working with something where this is the case
  right now if you'd like an example.) If possible, try to find something about the data that is guaranteed to be unique, and
  use that as a key instead. Your approach to injecting the <Candidate /> components into your render function is good :thumbsup:
  
General:
  It is generally a good idea to take advantage of the [PropTypes](https://facebook.github.io/react/docs/typechecking-with-proptypes.html)
  object that is made available through react. This buys you some degree of type safety within a component through prop validation.
  This is pretty handy for applications written in a JS dialect with dynamic typing.
  of type safety within your component
  
  Overall, I think that save for some stylistic errors this project is pretty good, and it adheres well to the react one-way data binding 
  paradigm. Great work :)
