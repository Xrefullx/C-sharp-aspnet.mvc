import React from 'react'
import Select from 'react-select';
import '../../App.css';
import {variables} from '../../api/api.js';
import axios from 'axios';
import Tools from '../../pages/Tools';
export default class PopUp extends React.Component{

    constructor(props){
        super(props);
        this.state={
            users:this.props.users,
            id_tools:0,
            tools:this.props.tools,
            id_users:0,
            options:[],
            countTols:0,
            summary:[]
        }

        } 

    setOptionUsers(data) {
        const s = data.map(user => (
            {value:user.id,label:user.FIO}
            
        ))
        
        return s;
    }

    setOptionTools(data) {
        const s = data.map(tool => (
            {value:tool.id,label:tool.name}
        ))
        return s;
    }
    setOptionCount(data) {
        const s = data.map(tool => (
            {value:tool.id,label:tool.countTols}
        ))
        return s;
    }
    pushData(){
        fetch('https://localhost:44385/api/Summary',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                id_tools:this.state.id_tools,
                id_users:this.state.id_users,
                countTols:this.state.countTols
            })
            
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
            this.props.refreshList();
        },(error)=>{
            alert('Проверьте корректность введённых данных');
        })
}
    render(){
        return(     
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
   <div className="modal-header">
       <h5 className="modal-title">Заголовок</h5>
       <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"
       ></button>
   </div>

   <div className="modal-body">
       <div className='container'>
        <div className='firstInput'>Выберете Фамилию Пользователя</div> 
       <Select className="firstInput" onChange={(e)=>{this.setState({id_users:e.value});console.log(e.value);this.setOptionUsers(this.props.users) }} options={this.setOptionUsers(this.props.users) } />
       
       <div className='firstInput'>Выберете Инструмент</div>

       <Select className="ttt" onChange={(e)=>{this.setState({id_tools:e.value});this.setOptionTools(this.props.tools)}} options={this.setOptionTools(this.props.tools)} />
              <label className='textInput' >Количество выдаваемого инструмента</label>
       <div className="text-field text-field_floating">
       <input className='text' onChange={(e)=>{this.setState({countTols:e.target.value}); console.log(this.state.countTols)}} value={this.state.countTols}/>
       <button className='buttonCreate' onClick={()=>this.pushData()} >Создать</button>   
       </div>            
            </div>
       </div>
   </div>
</div>
</div> 
        )
    }
}
