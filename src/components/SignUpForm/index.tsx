import InputField from '../shared/InputFields';

const SignUpForm = () => {
  return (
    <div className='flex-col box-content items-center h-[34.75rem] w-[22.5rem] bg-indigo border-4m flex bg-white rounded-lg mt-16 ml-[7.438rem]'>
      <div> Black Market </div>
      <InputField text='Email' placeholder='Type your email' variant='simple' required={false} />
      <InputField
        text='Full Name'
        placeholder='Type your full name'
        variant='simple'
        required={false}
      />
      <InputField
        text='Password'
        placeholder='Type your password'
        variant='password'
        required={false}
      />
    </div>
  );
};

export default SignUpForm;
