class ReactContainer extends React.Component{
    // JSX tags
    // JSX there should be one parent element
    render() {
        return React.createElement('div', null,
          'Hello! Welcome to Kalvium',
          React.createElement('div', null, 'This is babel')
        );
      }      
  }

const container = document.getElementById('react-container');
// Direclty pass the component to render
ReactDOM.render(<ReactContainer/>,container);   