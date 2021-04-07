import React from 'react';
import style from './Form.module.scss';

const Form = ({submitFn}) => 
(
    <form className={style.wrapper} onSubmit={submitFn}>
        <input required placeholder="name" name="name" />
        <input required placeholder="link" name="link" />
        <input required placeholder="image" name="image" />
        <textarea placeholder="description"
         name="desription" />
         <button className={style.submit} type="submit">
             add new item
         </button>
    </form>
)


export default Form;