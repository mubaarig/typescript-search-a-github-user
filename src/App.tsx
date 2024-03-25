import React from "react";
import Form from "./components/Form";

export default function App() {
  return (
    <div className="container mx-auto justify-center items-center h-screen">
        <h1 className='pt-10 text-center mt-6 text-3xl leading-9 font-extrabold text-gray-900'>
            Search a GitHub User
        </h1>
        <Form onSubmit={function (userData: any): void {
        throw new Error("Function not implemented.");
      } } />
        {/* <CardList cards={cards} /> */}
    </div>
)
}
