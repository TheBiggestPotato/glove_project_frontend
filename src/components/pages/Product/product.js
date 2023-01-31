import React from "react";
import { useTranslation } from "react-i18next";

import './product.scss'
import useWindowDimensions from "../../../functions/getWindowDimensions";

import Nav from '../../organisms/Nav/desktopNav/nav'
import MobileHeader from "../../organisms/Nav/mobileHeader/mobileHeader";
import Glove3D from '../../atoms/glove3D/glove3D';
import ColoredWordText from "../../atoms/coloredWordText/coloredWordText";
import BigHeading from "../../atoms/BigHeading/bigHeading";
import SmallHeading from '../../atoms/SmallHeading/smallHeading';
import Line from '../../atoms/Line/line';
import RoundButton from "../../atoms/RoundButton/roundButton";
import Paragraph from "../../atoms/Paragraph/paragraph";
import MobileFooter from "../../organisms/Nav/footer/mobileFooter/mobileFooter";
import Footer from "../../organisms/Nav/footer/desktopFooter/footer";

import boxProduct from "../../../assets/images/boxProduct.png"; 

import { Canvas } from "@react-three/fiber";
import { useInView } from 'react-intersection-observer';
import logo from "../../../assets/images/logo.png";

export default function Product () {

    const { height, width } = useWindowDimensions();

    const { t } = useTranslation()

    const [refSecondRow, inViewSecondRow] = useInView({
        threshold: 0,
        triggerOnce: true,
    });

    const [refFourthRow, inViewFourthRow] = useInView({
        threshold: 0,
        triggerOnce: true,
    });

    return (
        <div className="product">
          {width <= 992 ? <MobileHeader /> : <Nav />}
            <div className={'product__body'}>
            <div className={'product__headline'}>
            <SmallHeading color='blue' content={t('ppsMedicalNitrileGloves')}/>
            </div>
            <div className={'product__firstLine'}>
            <div className={'canvas'}>
            <Canvas >
                <Glove3D />
                <ambientLight intensity={0.5} />
                <directionalLight  position={[-10,15,10]} intensity={1} />
                <directionalLight  position={[10,15,10]} intensity={1} />
                <directionalLight  position={[10,15,-10]} intensity={1} />
                <directionalLight  position={[-10,15,-10]} intensity={1} />
            </Canvas>
            </div>
            <div className={'product__characteristics'}>
            <Paragraph type='headline' content={t('characteristics')} />
            <div className={'product__characteristics__paragraph'}>
            <ol>
            <li>
            <Paragraph content={t('firstCharacteristic')} />
            </li>
            <li>
            <Paragraph content={t('secondCharacteristic')}/>
            </li>
            <li>
            <Paragraph content={t('thirdCharacteristic')} />
            </li>
            <li>
            <Paragraph content={t('fourthCharacteristic')} />
            </li>
            <li>
            <Paragraph content={t('fifthCharacteristic')} />
            </li>
            <li>
            <Paragraph content={t('sixthCharacteristic')} />
            </li>
            </ol>
            </div>
            </div>
            </div>
            <div className="product__thematicBrake">
            <Line width={width <= 992 ? '150px': '640px'} height={width < 992 ? '2px' : '3px'} color='blue'/>
            </div>
            <div className={'product__secondLine'}   ref={refSecondRow}>
                <div className={`product__description ${inViewSecondRow ? 'animate' : ''}`}>
                    <ColoredWordText
                    firstWord={t('gloveType')}
                    content={t('gloveTypeContent')}
                    />
                    <ColoredWordText
                        firstWord={t('gloveMaterial')}
                        content={t('gloveMaterialContent')}
                    />
                    <ColoredWordText
                        firstWord={t('gloveColor')}
                        content={t('gloveColorContent')}
                    />
                    <ColoredWordText
                        firstWord={t('palmThickness')}
                        content={t('palmThicknessContent')}
                    />
                    <ColoredWordText
                        firstWord={t('gloveValidity')}
                        content={t('gloveValidityContent')}
                    />
                    <ColoredWordText
                        firstWord={t('glovePackaging')}
                        content={t('glovePackagingContent')}
                    />
                    <ColoredWordText
                        firstWord={t('gloveAvailableSizes')}
                        content={t('gloveAvailableSizesContent')}
                    />
                </div>
                <div className={`product__boxImage ${inViewSecondRow ? 'animate' : ''}`}>
                    <img src={boxProduct} alt={"logo"}></img>
                </div>
            </div>
                <div className={`product__thirdLine ${inViewSecondRow ? 'animate' : ''}`}>
                    <ColoredWordText
                        firstWord={t('gloveLabelingCompliance')}
                        content={t('gloveLabelingComplianceContent')}
                    />
                    <ColoredWordText
                        firstWord={t('glovePurpose')}
                        content={t('glovePurposeContent')}
                    />
                </div>
                <div className={`product__fourthLine ${inViewFourthRow ? 'animate' : ''}`} ref={refFourthRow}>
                    <div className="advantages">
                    <Line width={width < 992 ? '266px': '640px'} height={width < 992 ? '2px' : '3px'} color='blue'/>
                    <BigHeading color='blue' fontWeight='bold' content={t('gloveAdvantages')} />
                    <Paragraph content={t('gloveManufacturedEU')} />
                    <Paragraph content={t('gloveStockAvailable')} />
                    <Paragraph content={t('gloveFastDelivery')} />
                    <Paragraph content={t('gloveHighQuality')} />
                    <br/>
                    <Line width={width <= 992 ? '266px': '640px'} height={width < 992 ? '2px' : '3px'} color='blue'/>
                    </div>
                    <br/>
                    <div className="product__fourthLine__buttons">
                    <RoundButton buttonType={'first'} label={t('contact')}  padding={width < 1200 ? '10px 50px' : '15px 60px'} fontSize={width < 1200 ? '20px' : '22px'} route='/contact'/>
                    <RoundButton buttonType={'first'} label={t('order')} padding={width < 1200 ? '10px 50px' : '15px 60px'} fontSize={width < 1200 ? '20px' : '22px'} route='/order'/>
                    </div>
                </div>
            </div>
            {width < 830 ? <MobileFooter /> : <Footer />}
        </div>
    )
};