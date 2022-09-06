import React,{Component} from 'react';
import {variables} from '../api/api.js';
import Popup from '../components/controls/PopUp.js';
import axios from 'axios';

export class Tools extends Component{
    constructor(props){
        super(props);
        this.state={
            tools:[],
            users:[],
            modalTitle:"",
            name:"",
            id:0,
            count:0,
            sid:0,
            summary:[]
        }
    }
    //коннект API
    
    refreshList(){
        fetch('https://localhost:44385/api/Table')
        .then(response=>response.json())
        .then(data=>{
            this.setState({summary:data});
            console.log(data)
        });
    }

    componentDidMount(){
        this.refreshList();
        this.GetUsers();
        this.GetTools();
    }
    addClick(){
        this.setState({
            modalTitle:"Добавление записи",

        });
    }
    GetUsers(){
        fetch('https://localhost:44385/api/Users')
        .then(response=>response.json())
        .then(data=>{
            this.setState({users:data});
            console.log(data)
        });
    }

    GetTools(){
        fetch('https://localhost:44385/api/Tools')
        .then(response=>response.json())
        .then(data=>{
            this.setState({tools:data});
            console.log(data)
        });
    }

    deleteClick(id){
        if(window.confirm('Are you sure?')){
        fetch('https://localhost:44385/api/Summary/'+ id,{
            method:'DELETE',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            }
        })
        .then(res=>res.json())
        .then((result)=>{
            this.refreshList();
        },(error)=>{
            alert('100');
        })
        console.log(id)
        }
    }

    render(){
        const {
            tools,
            modalTitle,
            Toolsid,
            name,
            count,
            summary
        }=this.state;

        return(

<div>
    <button type="button"
    className="btn btn-primary m-2 float-end"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
    onClick={()=>this.addClick()}>
        Добавить запись
    </button>
    <table className="table table-striped">
    <thead>
    <tr>
        <th>
            ФИО Сотрудника     
        </th>
        <th>
            Наименование инструмента
        </th>
        <th>
            Количество
        </th>
        <th>
            Действие
        </th>
    </tr>
    </thead>
    <tbody>
        {summary.map(summary =>
            <tr key={summary.sid}>
                <td>{summary.FIO}</td>
                <td>{summary.name}</td>
                <td>{summary.countTols}</td>
                <td>
                <button type="button"
                className="btn btn-light mr-1"
                onClick={()=>this.deleteClick(summary.sid)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                    <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                    </svg>
                </button>
                </td>
            </tr>
            )}
    </tbody> 
    </table>
<Popup
 users={this.state.users}
 tools={this.state.tools}
/>
</div>
        )
    }
}
