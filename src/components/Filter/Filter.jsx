import {useState} from "react";

import FilterListIcon from '@mui/icons-material/FilterList';
import Slider from '@mui/material/Slider';

import "./style.scss"

export const Filter = ({currentFilter, setCurrentFilter}) => {
    const [filterWrapped, setFilterWrapped] = useState(true);

    let filterWrapperObject = document?.querySelector(".filter__wrapper");
    let filterObject = document?.querySelector(".filter");

    if(filterObject){
        if(filterWrapped){
            filterWrapperObject.style.height = '0px';
            filterObject.style.display = "none";

        }
        else {
            filterWrapperObject.style.height = 'fit-content';
            filterObject.style.display = "block";
        }
    }

    return (
        <div className="filter__wrapper">
            <div
                onClick={() => setFilterWrapped(!filterWrapped)}
                className="wrapper__switcher"
            >
                <FilterListIcon fontSize={"large"}/>
            </div>
            <div className="filter">
                {
                    Object.entries(currentFilter).map(
                        filter => {
                            return(
                                <div key={filter[1]?.name} className="filter__item">
                                    <input
                                        id={`filter__${filter[1]?.name}`}
                                        type="checkbox"
                                        defaultChecked={filter[1]?.status}
                                        onChange={
                                                    () => {
                                                        let newFilter = {};
                                                        Object.assign(newFilter, currentFilter);
                                                        console.log(newFilter)
                                                        if(newFilter[filter[0]]){
                                                            newFilter[filter[0]].status = !filter[1]?.status;
                                                            setCurrentFilter(newFilter)
                                                        }
                                                    }
                                                }
                                    />
                                        <label htmlFor={`filter__${filter[1]?.name}`}>
                                            {filter[1]?.name}
                                        </label>

                                    {
                                        filter[1]?.status &&
                                        <div className={"filter__extra"}>
                                            Price:
                                            {
                                                <div className="price__slider">
                                                    <input
                                                        type={"text"}
                                                        value={filter[1]?.price?.from}
                                                        onChange={
                                                            (event) => {
                                                                let newFilter = {};
                                                                Object.assign(newFilter, currentFilter);
                                                                if(newFilter[filter[0]]){
                                                                    newFilter[filter[0]].price.from  = event?.target?.value;
                                                                    setCurrentFilter(newFilter)
                                                                }
                                                            }
                                                        }
                                                    />
                                                    <Slider
                                                        className="slider"
                                                        getAriaLabel={() => 'Price range'}
                                                        value={[filter[1]?.price?.from,filter[1]?.price?.to]}
                                                        onChange={
                                                            (event) => {
                                                                let newFilter = {};
                                                                Object.assign(newFilter, currentFilter);
                                                                if(newFilter[filter[0]]){
                                                                    [newFilter[filter[0]].price.from, newFilter[filter[0]].price.to]  = event?.target?.value;
                                                                    setCurrentFilter(newFilter)
                                                                }
                                                            }
                                                        }
                                                        valueLabelDisplay="auto"
                                                        getAriaValueText={(value) => `${value} UAH`}
                                                        min={filter[1]?.price?.min}
                                                        max={filter[1]?.price?.max}
                                                    />
                                                    <input
                                                        type={"text"}
                                                        value={filter[1]?.price?.to}
                                                        onChange={
                                                            (event) => {
                                                                let newFilter = {};
                                                                Object.assign(newFilter, currentFilter);
                                                                if(newFilter[filter[0]]){
                                                                    newFilter[filter[0]].price.to  = event?.target?.value;
                                                                    setCurrentFilter(newFilter)
                                                                }
                                                            }
                                                        }
                                                    />
                                                </div>
                                            }
                                            <div className="filter__stats">
                                            {
                                                filter[1]?.stats &&
                                                filter[1]?.stats?.map(
                                                    (statFilter, statIndex) => {
                                                       return (
                                                           <div key={statFilter?.name} className="filter__stat">
                                                                   {
                                                                       statFilter?.name
                                                                   }
                                                               <div className="stat-checkbox">
                                                               {
                                                                   statFilter?.values?.map(
                                                                       (statValue, statValueIndex) => {
                                                                           return(
                                                                                   <div key={`statVal__${statValueIndex}`} className="filter__item">
                                                                                       <input
                                                                                           id={`${statFilter?.name}__${statValue}`}
                                                                                           type={"checkbox"}
                                                                                           defaultChecked={statValue?.status}
                                                                                           onChange={
                                                                                               () => {
                                                                                                   let newFilter = {};
                                                                                                   Object.assign(newFilter, currentFilter);
                                                                                                   if(newFilter[filter[0]]){
                                                                                                       newFilter[filter[0]].stats[statIndex].values[statValueIndex].status  = !statValue?.status;
                                                                                                       setCurrentFilter(newFilter)
                                                                                                   }
                                                                                               }
                                                                                           }
                                                                                       />
                                                                                       <label
                                                                                        htmlFor={`${statFilter?.name}__${statValue}`}
                                                                                       >
                                                                                           {statValue.value}
                                                                                       </label>
                                                                                   </div>
                                                                               )
                                                                       }
                                                                   )
                                                               }
                                                               </div>
                                                           </div>
                                                       )
                                                    }
                                                )
                                            }
                                            </div>
                                        </div>
                                    }
                                </div>
                            );
                        }
                    )
                }
            </div>
        </div>
    )
}