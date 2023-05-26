import { Button, TextField, Typography } from "@mui/material";
import React, { useEffect } from "react";
import {
  increase,
  decrease,
  increaseByAmount,
} from "../../store/feature/counter";
import {
  increase as inc,
  decrease as de,
  setState,
} from "../../store/feature/user";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Couter = () => {
  const dispatch = useDispatch();
  return (
    <>
      <Typography variant='h1' component='h5' gutterBottom>
        {useSelector((state) => state.counter.value)}
      </Typography>
      <Button variant='contained' onClick={() => dispatch(increase())}>
        +
      </Button>
      <Button variant='contained' onClick={() => dispatch(decrease())}>
        -
      </Button>
      <Button
        variant='contained'
        onClick={() => dispatch(increaseByAmount(10))}
      >
        +10
      </Button>
    </>
  );
};

const User = () => {
    const dispatch = useDispatch();
    return (
        <>
            <Typography variant='p' component='p' gutterBottom>
                {JSON.stringify(useSelector((state) => state.user))}
            </Typography>
            <Button variant='contained' onClick={() => dispatch(inc(
                {
                    name: 'test',
                    age: 20
                }
            ))}>
                +
            </Button>
        </>
    )
}

const Home_pages = () => {
  const navigate = useNavigate();
  return (
    <>
      <Couter />
      <User />
      <div className='mt-5'>
        <Button
          variant='contained'
          color='primary'
          onClick={() => navigate("/std")}
        >
          Back to Home
        </Button>
      </div>
    </>
  );
};

export default Home_pages;