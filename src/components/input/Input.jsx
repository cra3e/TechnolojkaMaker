import React from "react";
import style from "./input.module.css"
import { useFormik } from 'formik';

export const Input = () => {
    const formik = useFormik({
      initialValues: {
        //А нужно ли здесь что либо? - Надо подумать.
      },
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
      },
    });
    return (
    <form onSubmit={formik.handleSubmit} className={style.input}>
       <div className={style.element}>
            <label htmlFor="one">One</label>
            <input id="one" name="one" type="one" onChange={formik.handleChange} value={formik.values.one}/>
       </div>
       <div>
            <label htmlFor="two">Two</label>
            <input id="two" name="two" type="two" onChange={formik.handleChange} value={formik.values.two}/>
       </div>
       <div>
            <label htmlFor="three">Three</label>
            <input id="three" name="three" type="three" onChange={formik.handleChange} value={formik.values.three}/>
       </div>
       <div>
            <label htmlFor="check">Да или нет?</label>
            <input id="check" name="check" type="checkbox" onChange={formik.handleChange} value={formik.values.check}/>
            {formik.values.check ? 'Да' : 'Нет'}
       </div>
       <div>
            <label htmlFor="radio">Да или нет?</label>
            <input id="radio" name="radio" type="radio" onChange={formik.handleChange} value={formik.values.radio}/>
       </div>
       <div>
            <button type="submit">Сгенерировать</button>
       </div>
     </form>
    )
}