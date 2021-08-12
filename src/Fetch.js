import React, { useEffect, useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Fetch=()=>{
    const [currData,setData]=useState([]);

    const getCovidData=async()=>{
     const res= await fetch("https://api.covid19india.org/data.json");
const data= await res.json();
console.log(data.statewise);

setData(data.statewise);

    }

    useEffect(()=>{

        getCovidData();

    },[]);

    return(
        <>
        <h1>Covid-19 Tracker State Wise</h1>
      
<table class="table table-success table-striped">
<thead>
                                    <tr>
                                        <th>State</th>
                                        <th>Active Cases</th>
                                        <th>Confirmed Cases</th>
                                        <th>Confirmed Deaths</th>
                                    </tr>
                                </thead>
                                <tbody>
                                   { currData.map((data,indx)=>{
                                       return(

                                      
                                    <tr>
                                        <td>{data.state}</td>
                                        <td>{data.active}</td>
                                        <td class=""> {data.confirmed} <i class="fa fa-arrow-down"></i></td>
                                        <td><label class="text-danger">{data.deaths}</label></td>
                                    </tr>
                                     )
                                    })}
                                  
                                </tbody>
</table>
        </>
    )

}
export default Fetch;