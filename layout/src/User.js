import React from 'react';

class User extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }
  
  
  componentDidMount() {
    fetch('https://api.mydomain.com')
      .then(result => result.json())
      .then((output) => {
          this.setState({
              data: output.results[0]
          })
      })
  }
  
 render() {
     const {data} = this.state;
     if(data === null) {
         return(
             <div>
             Loading
             </div>
             )
     } else {
         console.log(data);
         return (
             <div class="card m-5">
                <img class="card-img-top" src={data.picture.large} alt="Card image cap" />
                <div class="card-body">
                    <h5 class="card-title">{data.name.title} {data.name.first} {data.name.last}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the cards content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
             )
     }
 }
}

export default User;