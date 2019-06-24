import React, { Component } from 'react';

class CreateComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            id: 0,
            firstName: '',
            lastName: '',
            mobile: '',
            address: '',
            tableData: [{
                id: 1,
                firstName: 'Ankita',
                lastName: 'Patle',
                mobile: '7559208792',
                address: 'Pune',
            }]
         };
    }

    OnPropertyChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    componentDidMount(){
         this.refs.id.focus();
    }

    OnSubmit(e){
        e.preventDefault();
      //  console.log(`The values are ${this.state.firstName}, ${this.state.lastNameame}, ${this.state.mobile}, and ${this.state.address}`)
        let tableData = this.state.tableData;
        let datas = {
            id: this.state.id,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            mobile: this.state.mobile,
            address: this.state.address
        }

        tableData.push(datas);

        this.setState({
            tableData: tableData
        });
    }

    OnClickclear(){
        this.setState({id: 0});
        this.setState({firstName: ''});
        this.setState({lastName: ''});
        this.setState({mobile: ''});
        this.setState({address: ''});
    }    

    selectRowData(i){
        this.setState({id: i.id});
        this.setState({firstName: i.firstName});
        this.setState({lastName: i.lastName});
        this.setState({mobile: i.mobile});
        this.setState({address: i.address});        
    }

    updateRowData(e){        
        e.preventDefault();
          let obj = this.state.tableData.filter((ele) => {
              return ele.id === this.state.id
          })
          obj.id = this.state.id;
          obj.firstName = this.state.firstName;
          obj.lastName = this.state.lastName;
          obj.mobile = this.state.mobile;
          obj.address = this.state.address;

          let tempArray = this.state.tableData.filter((ele)=>{
              return ele.id !== this.state.id
          })
            tempArray.push(obj);
           
            tempArray.sort((a, b) => parseInt(a.id) - parseInt(b.id));
            this.setState({tableData:tempArray});
    }

    deleteRowData(i){
        let tableData = this.state.tableData;
        tableData.splice(i,1);
        this.setState({
            tableData: tableData
        });
    }
   
    render() {
        return (
            <div className='container'>
                <form ref="myform">
                <div className='form-group col-sm-4' >
                    <label >Id:</label>
                     <input type='text' name='id' ref='id' className='form-control'
                     value={this.state.id}
                     onChange={this.OnPropertyChange.bind(this)}/> 
               </div>
                <div className='form-group col-sm-4' >
                    <label >FirstName:</label>
                     <input type='text' name='firstName' ref='firstName' className='form-control'
                     value={this.state.firstName}
                     onChange={this.OnPropertyChange.bind(this)}/> 
               </div>
               <div className='form-group col-sm-4' >
                    <label >LastName:</label>
                     <input type='text' name='lastName' className='form-control' 
                     value={this.state.lastName}
                     onChange={this.OnPropertyChange.bind(this)}/> 
               </div>
               <div className='form-group col-sm-4' >
                    <label >Mobile:</label>
                     <input type='text' name='mobile' className='form-control' 
                     value={this.state.mobile}
                     onChange={this.OnPropertyChange.bind(this)}/> 
               </div>
               <div className='form-group col-sm-4' >
                    <label >Address:</label>
                     <input type='text' name='address' className='form-control' 
                     value={this.state.address}
                     onChange={this.OnPropertyChange.bind(this)}/> 
               </div>
               <div className ='form-group col-sm-4'>
                    <input type="reset" value="Clear" className="btn btn-success" onClick={this.OnClickclear.bind(this)}/> &nbsp;
                    <input type="submit" value="Add" className="btn btn-primary" onClick={this.OnSubmit.bind(this)}/> &nbsp;
                    <input type="submit" value="Update" className="btn btn-primary" onClick={this.updateRowData.bind(this)}/>
               </div>
               </form>
               <div className="col-md-8 border-table">   
                   <table className="table table-bordered table-striped">
                       <thead>
                           <tr>
                                <th>Id</th>
                                <th>FirstName</th>
                                <th>LastName</th>
                                <th>Mobile</th>
                                <th>Address</th>
                                <th>Edit</th>
                                <th>Delete</th>
                           </tr>
                       </thead>
                       <tbody>                        
                       { this.state.tableData.map((prd, idx) => (
                                <TableRow 
                                key={idx} 
                                row={prd} 
                                deleterow={this.deleteRowData.bind(this)}
                                selected={this.selectRowData.bind(this)}
                                />
                            ))}
                       </tbody>
                   </table>    
               </div>
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
            <tr>
                <td>{this.props.row.id}</td>
                <td>{this.props.row.firstName}</td>
                <td>{this.props.row.lastName}</td>
                <td>{this.props.row.mobile}</td>
                <td>{this.props.row.address}</td>
                <td><input type="button" className="btn btn-primary" value="Edit" 
                onClick={this.onRowClick.bind(this)} /></td>
                <td><input type="button" className="btn btn-danger" value="Delete" 
                onClick={this.onClickDelete.bind(this)} /></td>
            </tr>
        );
    }
}

export default CreateComponent;