import React from "react";
import "./card.css"
import { useEffect, useState } from "react";



export function SpaceX() {

    const [space, setSpace] = useState([])


    useEffect(() => {
        async function getSpace() {
            const get = await fetch('https://api.spacexdata.com/v3/rockets')
                .then((res) => res.json())
            console.log(get)
            setSpace(get)
        }
        getSpace()
    }, [])


    return (
        <div className="container">
         {
             space.map((element)=>{
                 console.log(element)
                 return(
                    <div className="card">
                    <h3>{element.rocket_name}</h3>
                    <table>
                        <table>
                            <tr>
                                <td>First Flight :</td>
                                <td className="space">{element.first_flight}</td>
    
                            </tr>
                            <tr>
                                <td>Country :</td>
                                <td className="space">{element.country}</td>
    
                            </tr>
                            <tr>
                                <td>Company :</td>
                                <td className="space">{element.company}</td>
                            </tr>
                            <tr>
                                <td>Cost per launch :</td>
                                <td className="space">{element.cost_per_launch}</td>
                            </tr>
                            <tr>
                                <td>Description :</td>
                                <td className="space">{element.description}</td>
                            </tr>
                        </table>
                    </table>
                </div>
                 )
             })
         }
  
        </div>
    )
}