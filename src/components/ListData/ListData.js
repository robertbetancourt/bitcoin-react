import React from 'react'
import deleteIcon from "../../assets/img/cancelar.png";
import './ListData.css';
import ChartApp from "../Chart/ChartApp";

export default function ListData(props) {
    console.log(props, 'aqui');
    if (props.data !== undefined && props.data.datos !== 'change' && props.data !== 'change') {
        const  data  = props.data
        const { cryto, coin } = props.search
        function handleDelete(event, e) {
            event.preventDefault();
            props.deleteRow(e);
        }
        return (
            <div className="container card mt-4">
                    <div className="d-flex justify-content-between card-header" >   
                    <b><i>{coin} Price:</i></b> <b>{data.bid} </b>
                    <b><i>{cryto} Price:</i></b><b>{data.ask}</b> 
                    <b><i>Average Daily:</i></b> <b>{data.averages.day}</b>
                    <span> </span>
                    <a href="/" onClick={(event) => {handleDelete(event)}}  className="btn btn-sm"  >
                    <img src={deleteIcon} alt="" />
                    </a>
                    </div>
                    <div className="d-flex justify-content-center mt-2"><ChartApp data={data}/></div>
            </div>
        )
    }  else {
        return <div></div>
    }
}
