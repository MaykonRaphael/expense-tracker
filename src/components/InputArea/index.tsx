import { useState } from 'react';
import { categories } from '../../data/category';
import { Item } from '../../types/Item';
import * as C from './styles';

type Props = {
    onAdd: (item:Item)=> void;
}

export const InputArea = ( {onAdd}:Props) => {

    const [ dateField, setDateField ] = useState('');
    const [ categoryField, setCategoryField ] = useState('');
    const [ titleField, setTitleField ] = useState('');
    const [ valueField, setValueField ] = useState(0);

    let categoryKeys: string[] = Object.keys(categories);

    const handleAddEvent = () => {
        let errors: string[] = [];

        if( isNaN(new Date(dateField).getTime()) ) {
            errors.push('Data inválida!');
        }
        if( !categoryKeys.includes(categoryField) ) {
            errors.push('Categoria Inválida')
        }
        if( titleField === '' ){
            errors.push('Titulo Inválido!');
        }
        if( valueField <= 0 ) {
            errors.push('Valor Inválido!');
        }

        if( errors.length > 0 ) {
            alert(errors.join("\n"));

        } else {

            let newItem:Item = {
                date: new Date(dateField),
                category: categoryField,
                title: titleField,
                value: valueField,
            }
            onAdd(newItem);
        }

        clearFields();
    }

    const clearFields = () => {
        setDateField('');
        setCategoryField('');
        setTitleField('');
        setValueField(0);
    }

    return(
        <C.Container>
            <C.InputLabel>
                <C.InputText>Data</C.InputText>
                <C.Input type="date" value={dateField} onChange={e=> setDateField(e.target.value)} />
            </C.InputLabel>
            <C.InputLabel>
                <C.InputText>Categoria</C.InputText>
                <C.Select value={categoryField} onChange={e=>setCategoryField(e.target.value)} >
                    <>
                        <option></option>
                        {
                            categoryKeys.map((item, index)=>(
                                <option key={index} value={item} >{categories[item].title}</option>
                            ))
                        }
                    </>
                </C.Select>
            </C.InputLabel>
            <C.InputLabel>
                <C.InputText>Título</C.InputText>
                <C.Input type="text" value={titleField} onChange={e=>setTitleField(e.target.value)} />
            </C.InputLabel>
            <C.InputLabel>
                <C.InputText>Valor</C.InputText>
                <C.Input type="number" value={valueField} onChange={e=>setValueField(parseFloat(e.target.value))} />
            </C.InputLabel>
            <C.InputLabel>
                <C.InputText>&nbsp;</C.InputText>
                <C.Button onClick={handleAddEvent} >Adicionar</C.Button>
            </C.InputLabel>
        </C.Container>
    );
}