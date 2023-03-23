import React from 'react';

const CategoryEdit = () => {
    return (
        <div className='mt-5 col-9'>
            <h1 className='mb-5'>Edit Category</h1>
            <div className='form-group'>
                <label htmlFor='id'>Category ID:</label>
                <input
                    type='text'
                    className='form-control'
                    id='id'
                    value='1'
                    readOnly
                />
            </div>
            <div className='form-group'>
                <label htmlFor='name'>Category Name:</label>
                <input
                    type='text'
                    className='form-control'
                    id='name'
                    placeholder='Enter category name'
                />
            </div>
            <button type='button' className='btn btn-primary'></button>
        </div>
    );
};

export default CategoryEdit;