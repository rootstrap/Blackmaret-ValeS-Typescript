import React from 'react';

import InputField from '../shared/InputFields';

const SignUpForm = () => {
  return (
    <div className='box-content h-[34.75rem] w-[22.5rem] bg-indigo border-4m flex bg-white rounded-lg mt-[4.188rem] ml-[7.438rem]'>
      <div> Black Market </div>
      <InputField type='default' label='' required enabled error='false' />
    </div>
  );
};

export default SignUpForm;
