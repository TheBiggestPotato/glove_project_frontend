import React from "react";

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

import boxProduct from "../../../assets/images/boxProduct.png"; 

import { Canvas } from "@react-three/fiber";
import logo from "../../../assets/images/logo.png";

export default function Product () {

    const { height, width } = useWindowDimensions();

    return (
        <div className="product">
          {width <= 992 ? <MobileHeader /> : <Nav />}
            <div className={'product__body'}>
            <div className={'product__headline'}>
            <SmallHeading color='blue' content='PPS Medical - Manusi de nitril'/>
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
            <Paragraph type='headline' content='Caracteristici' />
            <div className={'product__characteristics__paragraph'}>
            <ol>
            <li>
            <Paragraph content={'Se imbraca usor si nu aluneca.'} />
            </li>
            <li>
            <Paragraph content={'Compozitia din nitril si absenta pudrei de amidon reduc riscul de hipersensibilitate si reactii alergice, ce se manifesta uneori la amidon sau latex datorita materialului confera un confort sporit.'}/>
            </li>
            <li>
            <Paragraph content={'Manseta cu bordura face ca manusa sa nu alunece sau sa se ruleze.'} />
            </li>
            <li>
            <Paragraph content={'Protejeaza de substante nedorite sau periculoase.'} />
            </li>
            <li>
            <Paragraph content={'Suprafata texturata de la degete imbunatateste aderenta la corpurile uscate sau umede.'} />
            </li>
            </ol>
            </div>
            </div>
            </div>
            <div className="product__thematicBrake">
            <Line width={width <= 992 ? '150px': '640px'} height={width < 992 ? '2px' : '3px'}/>
            </div>
            <div className={'product__secondLine'}>
                <div className={'product__description'}>
                    <ColoredWordText
                    firstWord={'Tip: '}
                    content={'mănuși de examinare din nitril de 3.5 gr, fără accelerator, fără pulbere, clorinat simplu, nesteril'}
                    />
                    <ColoredWordText
                        firstWord={'Material: '}
                        content={'100% Latex Nitril Sintetic'}
                    />
                    <ColoredWordText
                        firstWord={'Culoare: '}
                        content={'Albastru'}
                    />
                    <ColoredWordText
                        firstWord={'Grosimea palmei: '}
                        content={'0,07 mm'}
                    />
                    <ColoredWordText
                        firstWord={'Termen de valabilitate: '}
                        content={'5 ani (în ambalajul original dacă este depozitat conform ISO 2230)'}
                    />
                    <ColoredWordText
                        firstWord={'Stilul de ambalare: '}
                        content={'100 buc mănuși x 10 cutii x 1 cutie'}
                    />
                    <ColoredWordText
                        firstWord={'Marimi disponibile: '}
                        content={'XS, S, M, L, XL'}
                    />
                </div>
                <div className={"product_boxImage"}>
                    <img src={boxProduct} alt={"logo"}></img>
                </div>
            </div>
                <div className={'product__thirdLine'}>
                    <ColoredWordText
                        firstWord={'Etichetare și conformitate cu standardele: '}
                        content={'EN ISO 374-1, EN 374-2, EN, EN 374-3, EN 455-1, EN 455-2, EN 455-3, EN 455-4, EN 1186, EN 1149: 2, ASTM D6319, ASTM D7319'}
                    />
                    <ColoredWordText
                        firstWord={'Scopul vizat: '}
                        content={'clasa de dispozitiv medical I, conform prevederilor Regulamentului MD (UE) 2017/745, Mănuși de protecție de unică folosință - EIP categoria III (protecție împotriva substanțelor chimice pe timp limitat)'}
                    />
                </div>
                <div className={'product__fourthLine'}>
                    <div className="advantages">
                    <Line width={width < 992 ? '266px': '640px'} height={width < 992 ? '2px' : '3px'} />
                    <BigHeading color='blue' fontWeight='bold' content={'Avantaje'} />
                    <Paragraph content='Produs fabricat in UE' />
                    <Paragraph content='Stocuri disponibile imediat' />
                    <Paragraph content='Livrare rapida si sigura' />
                    <Paragraph content='Calitate înaltă și prețuri competitive' />
                    <br/>
                    <Line width={width <= 992 ? '266px': '640px'} height={width < 992 ? '2px' : '3px'} />
                    </div>
                    <br/>
                    <RoundButton buttonType={'first'} label={'Contact'} padding={width < 1200 ? '10px 50px' : '15px 60px'} fontSize={width < 1200 ? '20px' : '22px'}/>
                </div>
            </div>
        </div>
    )
};