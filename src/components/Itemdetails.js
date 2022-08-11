import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { getshopdata } from '../features/shop/ShopSlice'
import "./Itemsdetails.css"
import Tilt from 'react-parallax-tilt';
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from 'react-router-dom';

const Itemdetails = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams()
  const {shopdata} = useSelector((state) => state.shop)

  const selected = shopdata?.filter((item) => item.id == id );
  console.log(selected);

  useEffect(() => {
    dispatch(getshopdata());
  }, [dispatch]);

  const backhandler = () => {
    history("/")
}

  return (
    <div className="itemdetail" style={{display:"flex", alignItems: "center", justifyContent: "space-between", width: "80vw", margin: "0 auto"}}>
     <Tilt>
      <div className="item-image" style={{ width: "auto", height: "450px", marginRight: "10px"}}> 
      
      {<img src={selected[0].image} alt="coin" />}
      
      </div>
      </Tilt>
      <div className='item-desc'style={{ width: "500px"}}>
      <h1 style={{ fontStyle: 'Noto Serif', color: "orange"}}>{selected[0].title}</h1>
      <h5>Category: &nbsp;{selected[0].category}</h5>
      <h6>Rating:&nbsp;{selected[0].rating.rate}</h6>
      <h6 style={{ fontStyle: 'Nunito Sans', color: "blue" }} >{selected[0].description}</h6>
      <h6>Price:&nbsp;$&nbsp;{selected[0].price}</h6>
      <button className='back-btn' onClick={backhandler}><BiArrowBack size={40}/>Continue shopping</button>
      </div>
    </div>
  )
}

export default Itemdetails