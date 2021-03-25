import React from 'react';
import { TagInput } from 'reactjs-tag-input'
import { useDispatch } from 'react-redux'

const SkillsTags = () => {
    const [data, setData] = React.useState({ skills: [] });
    const dispatch = useDispatch();

    const onTagsChanged = (tags) => {
        setData({ skills: tags })
        dispatch({ type: 'SETSKILLS', payload: data })
    }

    return (
        <TagInput removeOnBackspace tags={data.skills} onTagsChanged={onTagsChanged} />
    );
}

export default SkillsTags;
