import SmallBento from './SmallBento.tsx';
import './BentoBox.css';
import LargeBento from './LargeBento.tsx';

function BentoBox() {
    return(
        <div className="bento-box">
            <SmallBento />
            <LargeBento />
            <SmallBento />
            <SmallBento />
            <LargeBento />
            <SmallBento />
        </div>
    );
}

export default BentoBox;