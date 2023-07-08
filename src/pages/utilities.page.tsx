import { useRouter } from 'next/router';
import { DESIGN_SYSTEM } from 'src/common/designSystem';


const utilities : Array<any> = [
    {
        imgSrc: 'https://w7.pngwing.com/pngs/530/471/png-transparent-computer-icons-icon-design-conversion-optimisation-logo-black-and-white-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80.png',
        imgAlt: 'conversion logo',
        name: 'CSV to xls converter',
        description: 'This tool converts your dropped csv files into xls files and verifies if the file given is truly a csv'
    }
]

const Utilities = () => {

    const router = useRouter();
    return (
        <div>
            {utilities.map(util => (
                <div style={{ width: 150, height: 200, border: DESIGN_SYSTEM.border, borderRadius: 8, overflow: 'hidden', textOverflow: 'ellipsis' }} onClick={() => null}>
                    <img src={util.imgSrc} alt={util.imgAlt}/>
                    <h6 style={{ textAlign: 'center', border: DESIGN_SYSTEM.border}}>{util.name}</h6> 
                    <p style={{ height: 100, width: 150, padding: DESIGN_SYSTEM.smallSpacing, overflow: 'hidden', textOverflow: 'ellipsis' }}>{util.description}</p>
                </div>
            ))}
        </div>
    )
}

export default Utilities;