import React from 'react';
import {Cards, Chart, Combobox} from './components';
import styles from './App.module.css';
import {fetchData} from './FetchData';
import Header from './components/Header';
class App extends React.Component{  
    state = {
           data:{},
           country:'',
    }
   
   
   
    async componentDidMount(){
        const getdata = await fetchData();
        console.log(getdata);
        this.setState({data:getdata})
    }

    handleCountryChange = async (country) => {
        const data = await fetchData(country);
    
        this.setState({ data, country: country });
      }

    render(){
        const {data,country} = this.state;
        return(
        
        <div>
            <Header/>
        <div className={styles.container}>
            
            <Cards data={data}/>
            <Combobox handleCountryChange={this.handleCountryChange}/>
            <Chart  data={data} country={country} />
            <div><br/><br/><a href="https://github.com/TariqSays">Meet Developer</a></div>
        </div>
        </div>
        )
    }
}
export default App; 