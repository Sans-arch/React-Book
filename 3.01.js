const headers = ['Book', 'Author', 'Language', 'Published', 'Sales'];

const data = [
  ['A Tale of Two Cities', 'Charles Dickens', 'English', '1859', '200 million'],
  ['Le Petit Prince (The Little Prince)', 'Antoine de Saint-Exupéry', 'French', '1943', '150 million'],
  ["Harry Potter and the Philosopher's Stone", 'J.K. Rowling', 'English', '1997', '120 million'],
  ['And Then There Were None', 'Agatha Christie', 'English', '1939', '100 million'],
  ['Dream of the Red Chamber', 'Cao Xueqin', 'Chinese', '1791', '100 million'],
  ['The Hobbit', 'J. R. R. Tolkien', 'English', '1937', '100 million'],
];

class Excel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.initialData
    };
  }
  render() {
    return (
      <table>
        <thead>
          <tr>
            {this.props.headers.map((title, index) => (
              <th key={index}>{title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {this.state.data.map((row, idx) => (
            <tr key={idx}>
              {row.map((cell, idx) => (
                <td key={idx}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

ReactDOM.render(
  <Excel headers={headers} initialData={data} />,
  document.getElementById('app')
);