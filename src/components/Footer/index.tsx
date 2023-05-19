import Column from 'components/shared/Column';
import Instagram from 'components/shared/Icons/Instagram';
import Twitter from 'components/shared/Icons/Twitter';
import Facebook from 'components/shared/Icons/Facebook';
import Linkedin from 'components/shared/Icons/Linkedin';
import Logo from 'components/shared/Icons/Logo';
import InputField, { InputVariants } from 'components/shared/InputFields';
import Button, { ButtonSize, ButtonVariants } from 'components/shared/Buttons';

const Footer = () => {
  return (
    <footer className='bg-black py-16 text-white'>
      <div className=' mx-auto ml-6 flex flex-wrap justify-between lg:mx-8'>
        <div className='flex w-full flex-col-reverse lg:w-3/4 lg:flex-col'>
          <div className='flex w-full flex-wrap justify-between'>
            <Column
              title='Restored furniture'
              items={[
                { name: 'Entries', url: '/entries' },
                { name: 'Rates', url: '/rates' },
                { name: 'Categories', url: '/categories' },
                { name: 'Sale', url: '/sale' },
              ]}
            />
            <Column
              title='Stay connected'
              items={[
                { name: 'Instagram', url: '/instagram' },
                { name: 'Twitter', url: '/twitter' },
                { name: 'Facebook', url: '/facebook' },
                { name: 'LinkedIn', url: '/linkedin' },
              ]}
            />

            <Column
              title='Black Market'
              items={[
                { name: 'Our history', url: '/history' },
                { name: 'Staff', url: '/staff' },
                { name: 'Work with us', url: '/work' },
              ]}
            />
            <Column
              title='Support'
              items={[
                { name: 'Chat', url: '/chat' },
                { name: 'Address', url: '/address' },
              ]}
            />
          </div>
          <div className='mb-8 flex justify-between'>
            <Logo className='mt-8 h-6 w-32 shrink-0 lg:h-8 lg:w-48' />
            <div className='mt-8 flex'>
              <Instagram className={'mr-4 text-white'} />
              <Facebook className={'mr-4 text-white'} />
              <Twitter className={'mr-4 text-white'} />
              <Linkedin className={'mr-8 text-white lg:mr-24'} />
            </div>
          </div>
        </div>
        <div className='flex flex-col lg:w-1/4'>
          <p className='font-bold lg:text-2xl'>Subscribe to our weekly newsletter!</p>
          <InputField
            type='text'
            placeholder='Email'
            variant={InputVariants.Simple}
            text={'Email'}
          />
          <div className='mt-3'>
            <Button variant={ButtonVariants.Primary} size={ButtonSize.Large}>
              Subscribe
            </Button>
          </div>
          <p className='mt-2 hidden lg:block lg:text-sm'>
            By subscribing you agree to receive weekly emails with our latest news and updates.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
