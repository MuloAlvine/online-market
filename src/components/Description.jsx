import styled from "styled-components";
//import Button from 'react-scroll/modules/components/Button'
import Video from '../videos/video.mp4'


const HeroContainer = styled.div`
    backgroung: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
            180deg, 
            rgba(0,0,0,2) 0%,
            rgba(0,0,0,0,6) 100%
        ),
        linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
        z-index: 2;
    }
`

const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`
const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`

const HeroContent = styled.div`
    z-index: 3:
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const HeroH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 760px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 760px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }

`

const HeroSection = () => {

    return (
        <HeroContainer>

            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>

            <HeroContent>
                <HeroH1>ONLINE MARKET</HeroH1>
                <HeroP>
                    TAKE A LOOK AT OUR AFFORDABLE ONLINE MARKET.<br/>
                    WE HAVE NICE COLLECTION OF CLOTHES AND SHOES.
                    
                </HeroP>
                
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
