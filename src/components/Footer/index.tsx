import Column from 'components/shared/Column';
import Instagram from 'components/shared/Icons/Instagram';
import Twitter from 'components/shared/Icons/Twitter';
import Facebook from 'components/shared/Icons/Facebook';
import Linkedin from 'components/shared/Icons/Linkedin';
import Logo from 'components/shared/Icons/Logo';
import InputField, { InputVariants } from 'components/shared/InputFields';
import Button, { ButtonVariants } from 'components/shared/Buttons';

const Footer = () => {
  return (
    <footer className='bg-black py-16 text-white'>
      <div className='container mx-auto flex flex-wrap justify-between'>
        <div className='flex w-full flex-wrap justify-between md:w-3/4'>
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
          <Logo className='mt-8 h-8 w-48' />
          <div className='mt-8 flex'>
            <Instagram className={'mr-4 text-white'} />
            <Facebook className={'mr-4 text-white'} />
            <Twitter className={'mr-4 text-white'} />
            <Linkedin className={'mr-20 text-white'} />
          </div>
        </div>
        <div className='flex flex-col md:w-1/4'>
          <div>
            <p className=' text-2xl font-bold'>Subscribe to our weekly newsletter!</p>
            <InputField
              type='text'
              placeholder='Email'
              variant={InputVariants.Simple}
              text={'Email'}
            />
            <div className='mt-3'>
              <Button variant={ButtonVariants.Primary} isLarge>
                Subscribe
              </Button>
            </div>
            <p className='mt-2 text-sm'>
              By subscribing you agree to receive weekly emails with our latest news and updates.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
