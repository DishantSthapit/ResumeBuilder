import React from 'react';
import './TemplatePreview.scss';
import { useHistory } from "react-router-dom";
import Button from '../../Button/Button';
import { useDispatch } from 'react-redux';


const TemplatePreview = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { heading, info, thumbnail, id } = props;

    const handleClick = (id) => {
        dispatch({ type: "ADDTEMPLATE", payload: id })
        history.push('/form')
    }

    return (
        <div className="preview-wrapper">
            <div className="data-wrapper">
                <div className="info-wrapper">
                    <h3>{heading}</h3>
                    <div>{info}</div>
                    <Button onClick={() => handleClick(id)} title="Select" />
                </div>
                <img src={thumbnail}></img>
            </div>
        </div>
    );
}

export default TemplatePreview;