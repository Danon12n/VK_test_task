import "./app.css";
import { useFormik } from "formik";

const App = () => {
    const formik = useFormik({
        initialValues: {
            tower: "",
            floor: "",
            room: "",
            date: "",
            commentary: "",
        },
        onSubmit: (values) => {
            console.log(values);
        },
    });

    return (
        <form className='formWrapper' onSubmit={formik.handleSubmit}>
            <label htmlFor='tower'>Башня</label>
            <select onChange={formik.handleChange} id='tower'>
                <option value='А'>А</option>
                <option value='Б'>Б</option>
            </select>
            <label htmlFor='floor'>Этаж</label>
            <select onChange={formik.handleChange} id='floor'>
                {new Array(28).fill(1).map((el, i) => {
                    if (i > 2) {
                        return (
                            <option
                                key={i.toString() + "key1"}
                                value={i.toString()}
                            >
                                {i.toString()}
                            </option>
                        );
                    }
                    return undefined;
                })}
            </select>
            <label>Номер Переговорки</label>
            <select onChange={formik.handleChange} id='room'>
                {new Array(11).fill(1).map((el, i) => {
                    if (i > 0) {
                        return (
                            <option
                                key={i.toString() + "key2"}
                                value={i.toString()}
                            >
                                {i.toString()}
                            </option>
                        );
                    }
                    return undefined;
                })}
            </select>
            <label>Дата</label>
            <input
                id='date'
                onChange={formik.handleChange}
                value={formik.values.date}
                type='datetime-local'
            />
            <label>Комментарий</label>

            <input
                id='commentary'
                name='commentary'
                type='text'
                value={formik.values.commentary}
                onChange={formik.handleChange}
                placeholder='Оставьте тут комментарий'
            />
            <button type='submit'>Отправить</button>
            <button
                onClick={() => {
                    formik.setValues({
                        tower: "",
                        floor: "",
                        room: "",
                        date: "",
                        commentary: "",
                    });
                }}
            >
                Очистить
            </button>
        </form>
    );
};
export { App };
