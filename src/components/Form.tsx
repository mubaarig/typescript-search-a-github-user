import React, { useState, FormEvent } from "react";
import { FaGithub } from "react-icons/fa6";
import axios from "axios";

interface Props {
  onSubmit: (userData: any) => void; // Adjust 'any' to a more specific type if possible
}

const Form: React.FC<Props> = (props) => {
  const [username, setUsername] = useState<string>('');

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios.get(`https://api.github.com/users/${username}`).then((resp) =>{
      props.onSubmit(resp.data);
    });
    setUsername('');
  };

  return (
    <form onSubmit={submitHandler} className="w-full max-w-sm mx-auto">
      <div className='mt-10 flex'>
        <FaGithub size={50} className="mr-5"/>
        <input
          type='text'
          placeholder='Search a GitHub username'
          className='form-input block w-full py-2 px-5 border border-blue-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150'
          required
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <button
          type='submit'
          className='ml-2 py-2 px-3 border border-blue-300 rounded-md text-sm leading-3 font-large text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out'
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default Form;
