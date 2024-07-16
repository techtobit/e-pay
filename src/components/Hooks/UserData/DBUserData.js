import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import toast from 'react-hot-toast';
import Loading from '../../SharedCompo/Loading';
import { useQuery } from 'react-query'


const DBUserData = () => {

  const [user] = useAuthState(auth)
  const userEmail = user?.email;
  const [userData, setUserData] = useState([])



  // const { data: userDataQuery } = useQuery('userData',
  //   axios.get(`https://poyshapay-server-mongoose-ashraf.vercel.app/user/${userEmail}`)
  //     .then(response => {
  //       if (response?.error) {
  //         toast.error(`${response?.error}`)
  //       }
  //       if (response?.data) {
  //         setUserData(response?.data);
  //       }
  //     })

  // )



  useEffect(() => {
    if (userEmail) {
      axios.get(`https://poyshapay-server-mongoose-ashraf.vercel.app/user/${userEmail}`)
        .then(response => {
          if (response?.error) {
            toast.error(`${response?.error}`)
          }
          if (response?.data) {
            console.log(response?.data.AddMoney);
            setUserData(response?.data);
          }
        })
    }
  }, [userEmail])

  return [userData, setUserData]
};

export default DBUserData;