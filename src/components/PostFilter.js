import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.searchValue}
                onChange={e => setFilter({...filter, searchValue: e.target.value})}
                placeholder={'Search...'}
            />
            <MySelect
                value={filter.selectedSort}
                onChange={selectedSort => setFilter({...filter, selectedSort: selectedSort })}
                defaultValue='Sort by'
                options={[
                    {value: 'title', name: 'Name'},
                    {value: 'body', name: 'Description'}
                ]}
            />
        </div>
    );
};

export default PostFilter;