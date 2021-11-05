import React, { useRef, useEffect } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import Input from "../UI/Input";
import classes from "./SearchGif.module.css";

const SearchGif = (props) => {
  const userInputRef = useRef();
    const api_key = "ZdWmPlYeZh70gftCjiSDHAMRyCS7JGiJ";
    
    const onSearchHandler = async (event) => {
        const userInputValue = userInputRef.current.value;
        if (event !== undefined) {
            event.preventDefault();
        }
        console.log(userInputValue);
        const response = await fetch(
          `https://api.giphy.com/v1/gifs/search?q=${userInputValue ? userInputValue : 'trending'}&api_key=${api_key}&limit=20`
        );
        const gifData = await response.json();
        props.onGifSearch(gifData.data);
        // console.log(gifData);
      };

    useEffect(() =>{
        onSearchHandler();
    }, []);
  

  return (
    <form onSubmit={onSearchHandler}>
      <Card className={classes.search}>
        <h1> Search Gif </h1>

        <Input inputRef={userInputRef} />
        <Button>Search</Button>
      </Card>
    </form>
  );
};

export default SearchGif;
