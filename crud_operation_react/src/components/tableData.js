import React, { Component } from 'react';

class TableData extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    getselecteddetails(d) {
        this.setState({firstName: d.firstName});
        this.setState({lastName: d.lastName});
        this.setState({mobile: d.mobile});
        this.setState({address: d.address});
    }
    deleteData(row) {
        let prds = 
        this.serv.deteteData(row.firstName)
        .then((data) => data.json())
        .then((value) => {
           console.log(JSON.stringify(value.data)); 
           
            // let tempArray = this.state.Products.slice();
            // tempArray.pop(resp.data);
            // this.setState({Products:tempArray});  
                                     
        })
        .catch(error => {
            console.log(`Error Occured  ${error.status}`);           
        });
    }
    render() {
        return (
            <div className="col-md-8 border-table">   
                   <table className="table table-bordered table-striped">
                       <thead>
                           <tr>
                           <th>FirstName</th>
                           <th>LastName</th>
                           <th>Mobile</th>
                           <th>Address</th>
                           </tr>
                       </thead>
                       <tbody>
                       { this.state.TableData.map((prd, idx) => (
                                <TableRow 
                                key={idx} 
                                row={prd} 
                                selected={this.getselecteddetails.bind(this)}
                                deleterow = {this.deleteData.bind(this)}
                                />
                            ))}
                       </tbody>
                   </table>    
               </div>
        );
    }
}

class TableRow extends Component{
    constructor(props){
        super(props);
    }

    onRowClick(){
        //alert(`Row Clicked ${JSON.stringify(this.props.row)}`);
        this.props.selected(this.props.row)
        
    }
    onClickDelete(){
        //alert("Record deleted")
         this.props.deleterow(this.props.row);
    }

    render(){
        return(
            <tr onClick={this.onRowClick.bind(this)}>
                <td>{this.props.row.firstName}</td>
                <td>{this.props.row.lastName}</td>
                <td>{this.props.row.mobile}</td>
                <td>{this.props.row.address}</td>
                <td><input type="button" className="btn btn-danger" value="Delete" 
                onClick={this.onClickDelete.bind(this)} /></td>
            </tr>
        );
    }
}

export default TableData;