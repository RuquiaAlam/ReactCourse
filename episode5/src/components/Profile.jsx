import React from 'react'

import useGetCat from './useGetCat';




const Profile = () => {
const {data,isCatLoading,refetchData}=useGetCat();

  return (
    <div>
      <h1>This is Profile page</h1>
      <h1> user is:</h1>
      {/* <ChangeProfile  /> */}
      <button onClick={refetchData}>RefetchData</button>

      <h1>{data?.fact}</h1>

    </div>
  );
}

export default Profile