import smarter_logo from '@/assets/images/smarter_logo.png';
import opencogent_logo from '@/assets/images/opencogent_logo.png';

const AuthHeader = () => (
  <>
    <div className="mt-16 flex justify-center">
      <a href="/"><img src={smarter_logo} alt="dark logo" className="h-20" /></a>
    </div>
    <div className="mt-16 flex justify-center">
      <a href="/"><img src={opencogent_logo} alt="dark logo" className="h-20" /></a>
    </div>
  </>
);

export default AuthHeader;
